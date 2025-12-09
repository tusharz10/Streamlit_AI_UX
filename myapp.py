import streamlit as st
import pandas as pd
from datetime import datetime, timedelta
import uuid
import os # Added for file handling

# --- New Global Variables and Persistence Functions ---
# Define file paths for persistent storage
FLIGHT_DATA_PATH = "flight_data.csv"
BOOKINGS_DATA_PATH = "bookings_data.csv"

def save_flights(df):
    """Saves the flight DataFrame to CSV for persistence."""
    try:
        df.to_csv(FLIGHT_DATA_PATH, index=False)
    except Exception as e:
        st.error(f"Error saving flight data: {e}")

def save_bookings(bookings_dict):
    """Saves the bookings dictionary to CSV for persistence."""
    try:
        # Convert dictionary to DataFrame, using ticket_id as index
        if bookings_dict:
            df = pd.DataFrame.from_dict(bookings_dict, orient='index')
        else:
            # Create an empty DataFrame with the expected columns
            df = pd.DataFrame(columns=[
                "flight_id", "passenger_name", "seat_class", "price", "booking_date", "user_id"
            ])
        df.index.name = "ticket_id"
        df.to_csv(BOOKINGS_DATA_PATH)
    except Exception as e:
        st.error(f"Error saving bookings data: {e}")

def get_initial_flight_data():
    """Loads flight data from CSV if exists, otherwise creates and saves initial data."""
    if os.path.exists(FLIGHT_DATA_PATH):
        st.info("Loading flights from persistent file...")
        return pd.read_csv(FLIGHT_DATA_PATH)
    else:
        st.warning("Creating initial flight data and saving to CSV...")
        now = datetime.now()
        flights = [
            {
                "id": "GA101",
                "departure": "SFO",
                "arrival": "JFK",
                "date": (now + timedelta(days=7)).strftime("%Y-%m-%d"),
                "time": "08:00",
                "price": 450.00,
                "seats_available": 150,
                "aircraft": "Airbus A320"
            },
            {
                "id": "GA202",
                "departure": "LAX",
                "arrival": "MIA",
                "date": (now + timedelta(days=10)).strftime("%Y-%m-%d"),
                "time": "14:30",
                "price": 320.50,
                "seats_available": 95,
                "aircraft": "Boeing 737 MAX"
            },
            {
                "id": "GA303",
                "departure": "JFK",
                "arrival": "SFO",
                "date": (now + timedelta(days=8)).strftime("%Y-%m-%d"),
                "time": "20:00",
                "price": 510.00,
                "seats_available": 200,
                "aircraft": "Boeing 777"
            },
            {
                "id": "GA404",
                "departure": "BOS",
                "arrival": "LAX",
                "date": (now + timedelta(days=15)).strftime("%Y-%m-%d"),
                "time": "11:00",
                "price": 380.75,
                "seats_available": 70,
                "aircraft": "Embraer 190"
            },
        ]
        df = pd.DataFrame(flights)
        save_flights(df)
        return df

def load_bookings():
    """Loads bookings from CSV if exists, otherwise returns empty dictionary."""
    if os.path.exists(BOOKINGS_DATA_PATH):
        st.info("Loading bookings from persistent file...")
        try:
            df = pd.read_csv(BOOKINGS_DATA_PATH, index_col='ticket_id')
            return df.to_dict('index')
        except pd.errors.EmptyDataError:
            st.warning("Bookings file is empty. Starting fresh...")
            return {}
        except Exception as e:
            st.error(f"Error loading bookings: {e}")
            return {}
    else:
        st.warning("No existing bookings file found. Starting fresh...")
        save_bookings({}) # Create empty file structure
        return {}

# --- Configuration and Initial Data Setup ---
# Set the page configuration for a dark theme and wide layout
st.set_page_config(
    page_title="Gemini Airlines Booking",
    page_icon="✈️",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Initialize Streamlit session state variables
if 'flights_df' not in st.session_state:
    # Load from persistent data on initial run
    st.session_state.flights_df = get_initial_flight_data()
if 'bookings' not in st.session_state:
    # Load from persistent data on initial run
    st.session_state.bookings = load_bookings()
if 'user_id' not in st.session_state:
    # A simple way to simulate a session/user
    st.session_state.user_id = "user_" + str(uuid.uuid4())[:8]

# --- Core Functions ---

def book_flight(flight_id, name, seat_class):
    """Books a flight and updates state and persistence."""
    flight = st.session_state.flights_df[st.session_state.flights_df['id'] == flight_id].iloc[0].to_dict()
    
    if flight['seats_available'] <= 0:
        st.error("Booking failed: No seats available on this flight.")
        return False

    ticket_id = str(uuid.uuid4())[:8].upper()
    
    # Simple price modification based on class
    price_modifier = 1.0
    if seat_class == 'Business':
        price_modifier = 1.5
    elif seat_class == 'First':
        price_modifier = 2.5
        
    final_price = round(flight['price'] * price_modifier, 2)

    st.session_state.bookings[ticket_id] = {
        "flight_id": flight_id,
        "passenger_name": name,
        "seat_class": seat_class,
        "price": final_price,
        "booking_date": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "user_id": st.session_state.user_id
    }
    
    # Decrement available seats
    st.session_state.flights_df.loc[
        st.session_state.flights_df['id'] == flight_id, 
        'seats_available'
    ] -= 1
    
    # Save changes to CSV files
    save_flights(st.session_state.flights_df)
    save_bookings(st.session_state.bookings)
    
    st.success(f"Ticket booked successfully! Your Ticket ID is **{ticket_id}** (Total Price: ${final_price})")
    st.balloons()
    return True

def cancel_flight(ticket_id):
    """Cancels a booking and updates flight seat count and persistence."""
    booking = st.session_state.bookings.pop(ticket_id, None)
    
    if booking:
        flight_id = booking['flight_id']
        # Increment available seats
        st.session_state.flights_df.loc[
            st.session_state.flights_df['id'] == flight_id, 
            'seats_available'
        ] += 1
        
        # Save changes to CSV files
        save_flights(st.session_state.flights_df)
        save_bookings(st.session_state.bookings)
        
        st.success(f"Booking **{ticket_id}** for flight {flight_id} has been cancelled.")
    else:
        st.error(f"Ticket ID {ticket_id} not found.")

# --- UI Layout Functions ---

def render_flight_details():
    """Displays all available flight data."""
    st.subheader("Available Flights (Gemini Airlines)")
    
    # Display the DataFrame with enhanced formatting
    st.dataframe(
        st.session_state.flights_df.rename(
            columns={
                'id': 'Flight ID',
                'departure': 'Depart',
                'arrival': 'Arrive',
                'date': 'Date',
                'time': 'Time',
                'price': 'Base Price',
                'seats_available': 'Seats Left',
                'aircraft': 'Aircraft Model'
            }
        ).style.format({
            'Base Price': 'US${:.2f}',
            'Seats Left': '{:d}'
        }),
        use_container_width=True,
        hide_index=True
    )

def render_book_flight():
    """Handles the flight search and booking form."""
    st.subheader("Book a New Flight")

    col1, col2, col3 = st.columns(3)
    
    with col1:
        departures = sorted(st.session_state.flights_df['departure'].unique().tolist())
        departure_city = st.selectbox("Departure City", ['All'] + departures)
    
    with col2:
        arrivals = sorted(st.session_state.flights_df['arrival'].unique().tolist())
        arrival_city = st.selectbox("Arrival City", ['All'] + arrivals)
        
    with col3:
        today = datetime.now().date()
        min_date = today + timedelta(days=1)
        max_date = today + timedelta(days=365)
        # Use a text input for date since Streamlit date picker doesn't always handle DataFrames easily
        search_date_str = st.text_input("Travel Date (YYYY-MM-DD)", value=min_date.strftime("%Y-%m-%d"))

    # Filter Logic
    filtered_df = st.session_state.flights_df.copy()
    if departure_city != 'All':
        filtered_df = filtered_df[filtered_df['departure'] == departure_city]
    if arrival_city != 'All':
        filtered_df = filtered_df[filtered_df['arrival'] == arrival_city]
    if search_date_str:
        try:
            # Ensure the input date is valid
            search_date = datetime.strptime(search_date_str, "%Y-%m-%d").strftime("%Y-%m-%d")
            filtered_df = filtered_df[filtered_df['date'] == search_date]
        except ValueError:
            st.warning("Please enter a valid date in YYYY-MM-DD format.")
            filtered_df = pd.DataFrame() # Clear results if date is invalid
            
    st.markdown("---")
    
    if filtered_df.empty:
        st.info("No flights match your search criteria. Try a different date or route.")
        return

    st.subheader(f"Search Results ({len(filtered_df)} Flights Found)")
    
    selected_flight_id = st.selectbox(
        "Select Flight ID to Book",
        options=filtered_df['id'].tolist(),
        format_func=lambda x: f"{x} - {filtered_df[filtered_df['id']==x]['departure'].iloc[0]} to {filtered_df[filtered_df['id']==x]['arrival'].iloc[0]} @ {filtered_df[filtered_df['id']==x]['time'].iloc[0]} (Base Price: ${filtered_df[filtered_df['id']==x]['price'].iloc[0]:.2f})"
    )
    
    if selected_flight_id:
        selected_flight = filtered_df[filtered_df['id'] == selected_flight_id].iloc[0].to_dict()
        st.markdown(f"**Selected Flight:** {selected_flight['departure']} ➡️ {selected_flight['arrival']} on {selected_flight['date']} at {selected_flight['time']}")
        
        with st.form("booking_form"):
            st.markdown("##### Passenger Details")
            passenger_name = st.text_input("Passenger Full Name", placeholder="Jane Doe", key="name_input")
            seat_class = st.selectbox("Seat Class", options=['Economy', 'Business', 'First'])
            
            # Display estimated price
            price_modifier = 1.0
            if seat_class == 'Business': price_modifier = 1.5
            elif seat_class == 'First': price_modifier = 2.5
            
            final_price = round(selected_flight['price'] * price_modifier, 2)
            st.info(f"Estimated Total Price: **${final_price:.2f}**")
            
            submit_button = st.form_submit_button("Confirm Booking", type="primary", disabled=(selected_flight['seats_available'] <= 0))
            
            if submit_button:
                if not passenger_name:
                    st.error("Please enter the passenger's full name.")
                else:
                    book_flight(selected_flight_id, passenger_name, seat_class)
                    # Removed redundant st.session_state.flights_df = get_initial_flight_data() line


def render_my_bookings():
    """Displays user's bookings and allows cancellation/modification."""
    st.subheader("My Bookings & Management")
    
    user_bookings = {
        k: v for k, v in st.session_state.bookings.items() 
        if v['user_id'] == st.session_state.user_id
    }
    
    if not user_bookings:
        st.info("You currently have no active bookings.")
        return

    # Prepare data for display
    booking_list = []
    for ticket_id, booking in user_bookings.items():
        # Ensure flight info exists, handling cases where the original flight might have been removed (though unlikely in this design)
        flight_data = st.session_state.flights_df[st.session_state.flights_df['id'] == booking['flight_id']]
        if flight_data.empty:
            flight_info = {"departure": "N/A", "arrival": "N/A", "date": "N/A", "time": "N/A"}
        else:
            flight_info = flight_data.iloc[0].to_dict()
        
        booking_list.append({
            "Ticket ID": ticket_id,
            "Passenger": booking['passenger_name'],
            "Flight ID": booking['flight_id'],
            "Route": f"{flight_info['departure']} ➡️ {flight_info['arrival']}",
            "Date/Time": f"{flight_info['date']} {flight_info['time']}",
            "Class": booking['seat_class'],
            "Price": f"US${booking['price']:.2f}",
            "Booking Date": booking['booking_date']
        })

    bookings_df = pd.DataFrame(booking_list)

    st.dataframe(
        bookings_df,
        use_container_width=True,
        hide_index=True
    )
    
    st.markdown("---")
    
    st.markdown("##### Cancel or Modify Booking")
    
    # Selection for modification/cancellation
    selected_ticket_id = st.selectbox(
        "Select Ticket ID for action",
        options=list(user_bookings.keys()),
        key="selected_ticket"
    )

    if selected_ticket_id:
        current_booking = user_bookings[selected_ticket_id]
        
        col_mod_1, col_mod_2 = st.columns(2)
        
        with col_mod_1:
            st.markdown(f"**Ticket ID:** `{selected_ticket_id}`")
            st.markdown(f"**Current Class:** `{current_booking['seat_class']}`")
            
            # Modification Form (Change Class)
            new_class = st.selectbox(
                "Change Seat Class",
                options=['Economy', 'Business', 'First'],
                index=['Economy', 'Business', 'First'].index(current_booking['seat_class'])
            )
            
            if st.button("Modify Seat Class", type="primary"):
                if new_class != current_booking['seat_class']:
                    # Re-calculate price
                    flight_info = st.session_state.flights_df[st.session_state.flights_df['id'] == current_booking['flight_id']].iloc[0].to_dict()
                    base_price = flight_info['price']
                    
                    price_modifier = 1.0
                    if new_class == 'Business': price_modifier = 1.5
                    elif new_class == 'First': price_modifier = 2.5
                    
                    new_price = round(base_price * price_modifier, 2)

                    # Update booking state
                    st.session_state.bookings[selected_ticket_id]['seat_class'] = new_class
                    st.session_state.bookings[selected_ticket_id]['price'] = new_price
                    
                    # Save modification to CSV
                    save_bookings(st.session_state.bookings)
                    
                    st.success(f"Ticket {selected_ticket_id} modified to **{new_class}**. New price: ${new_price:.2f}")
                    st.experimental_rerun()
                else:
                    st.info("No change detected.")

        with col_mod_2:
            st.markdown("##### Cancellation")
            # FIX: Changed type="danger" to type="primary" to resolve StreamlitAPIException
            if st.button("Cancel This Ticket", type="primary"):
                cancel_flight(selected_ticket_id)
                st.experimental_rerun()


# --- Main App Execution ---

st.title("✈️ Gemini Airlines: Flight Booking System")
st.caption(f"Welcome, User Session ID: `{st.session_state.user_id}`")

# Use CSS to enforce the dark theme for specific Streamlit elements if needed,
# though the st.set_page_config handles most of it.
st.markdown(
    """
    <style>
    .stApp {
        background-color: #1e1e1e;
        color: white;
    }
    h1, h2, h3, h4, h5, h6 {
        color: #63d471; /* A friendly green for headers */
    }
    .stTextInput>div>div>input {
        background-color: #2c2c2c;
        color: white;
    }
    .stSelectbox>div>div>select {
        background-color: #2c2c2c;
        color: white;
    }
    .stButton>button {
        border-color: #63d471;
        color: #63d471;
    }
    .stButton>button:hover {
        background-color: #63d471;
        color: white;
    }
    /* Style for the dataframe table */
    .stDataFrame {
        border: 1px solid #444;
        border-radius: 8px;
    }
    </style>
    """,
    unsafe_allow_html=True
)

# Tab structure for navigation
tab1, tab2, tab3 = st.tabs(["Book Flight", "My Bookings", "Flight Details"])

with tab1:
    render_book_flight()

with tab2:
    render_my_bookings()

with tab3:
    render_flight_details()

# Sidebar for general info
with st.sidebar:
    st.header("System Overview")
    st.info(f"Total flights loaded: **{len(st.session_state.flights_df)}**")
    st.info(f"Total active bookings: **{len(st.session_state.bookings)}**")
    st.markdown("---")
    st.caption("Data is now saved persistently to `flight_data.csv` and `bookings_data.csv`.")