// TeacherDashboard.js
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  TeacherDashboardContainer,
  Content,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from "../../styles/DashboardStyles";
import { SidebarProvider } from "./SidebarContext";
import Announcement from "./Announcement";
import { Event, Events } from "../../styles/EventCalendarStyles";

const TeacherDashboard = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchTotalStudents();
    fetchTotalTeachers();
    fetchTotalClasses();
    fetchAnnouncements();
    fetchEvents();
  }, []);

  const fetchTotalStudents = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/students/getall"
      );
      setTotalStudents(response.data.students.length);
    } catch (error) {
      console.error("Error fetching total students:", error);
    }
  };

  const fetchTotalTeachers = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/teachers/getall"
      );
      setTotalTeachers(response.data.teachers.length);
    } catch (error) {
      console.error("Error fetching total teachers:", error);
    }
  };

  const fetchTotalClasses = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/class/getall"
      );
      setTotalClasses(response.data.classes.length);
    } catch (error) {
      console.error("Error fetching total classes:", error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/announcements/getall"
      );
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/events/getall"
      );
      setEvents(response.data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <TeacherDashboardContainer>
          <Content>
            <Section>
              <SectionTitle>Overview</SectionTitle>
              <CardContainer>
                <Card>
                  <CardTitle>Total Students</CardTitle>
                  <CardContent>{totalStudents}</CardContent>
                </Card>
                <Card>
                  <CardTitle>Total Teachers</CardTitle>
                  <CardContent>{totalTeachers}</CardContent>
                </Card>
                <Card>
                  <CardTitle>Total Classes</CardTitle>
                  <CardContent>{totalClasses}</CardContent>
                </Card>
              </CardContainer>
            </Section>

            <Section>
              <Announcement announcements={announcements} isDashboard />
            </Section>

            <Section>
              <SectionTitle>Upcoming Events</SectionTitle>
              <Events>
                {events.map((event, index) => (
                  <Event key={index}>
                    <div>{event.event}</div>
                    <div>{new Date(event.date).toLocaleDateString()}</div>
                  </Event>
                ))}
              </Events>
            </Section>
          </Content>
        </TeacherDashboardContainer>
      </Sidebar>
    </SidebarProvider>
  );
};

export default TeacherDashboard;
