import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  ErrorText,
} from "../../styles/EventCalendarStyles";
import { SidebarProvider } from "./SidebarContext";
import Calendar from "react-calendar"; // Import the Calendar component
import "react-calendar/dist/Calendar.css"; // Import the Calendar CSS

const EventSection = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/events/getall"
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

  return (
    <SidebarProvider>
      <EventCalendarContainer>
        <Sidebar />
        <Content>
          <h1>Events & Calendar</h1>
          <div>Current Time: {new Date().toLocaleString()}</div>
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
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

export default EventSection;
