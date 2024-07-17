import { useState, useEffect } from "react";
import Calendar from "react-calendar"; // Import the Calendar component
import "react-calendar/dist/Calendar.css"; // Import the Calendar CSS
import axios from "axios";
import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  EventDateInput,
  AddEventButton,
  ErrorText,
} from "../../styles/EventCalendarStyles";
import { SidebarProvider } from "./SidebarContext";
import Sidebar from "./Sidebar";

const EventCalendar = ({ isDashboard }) => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [error, setError] = useState(null);

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/events/getall"
      );
      setEvents(response.data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Error fetching events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to add a new event
  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/events", {
        event: newEvent,
        date: newEventDate,
      });
      setEvents([...events, response.data.event]);
      setNewEvent("");
      setNewEventDate("");
    } catch (error) {
      console.error("Error adding event:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("Error adding event");
      }
    }
  };

  return (
    <SidebarProvider>
      <EventCalendarContainer isDashboard={isDashboard}>
        <Sidebar />
        <Content>
          <h1>Events & Calendar</h1>
          <div>Current Time: {new Date().toLocaleString()}</div>
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
          <AddEventForm onSubmit={addEvent}>
            <h2>Add New Event</h2>
            <EventInput
              type="text"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Enter Event"
            />
            <EventDateInput
              type="date"
              value={newEventDate}
              onChange={(e) => setNewEventDate(e.target.value)}
              placeholder="Enter Date"
            />
            <AddEventButton type="submit">Add Event</AddEventButton>
          </AddEventForm>
          {error && <ErrorText>{error}</ErrorText>}
          <Events>
            <h2>Events</h2>
            {events.map((event, index) => (
              <Event key={index}>
                <div>{event.event}</div>
                <div>{new Date(event.date).toLocaleDateString()}</div>
              </Event>
            ))}
          </Events>
        </Content>
      </EventCalendarContainer>
    </SidebarProvider>
  );
};

export default EventCalendar;
