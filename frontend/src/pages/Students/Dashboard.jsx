// StudentDashboard.js
import Sidebar from "./Sidebar";
import {
  StudentDashboardContainer,
  Content,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from "../../styles/DashboardStyles";
import { SidebarProvider } from "./SidebarContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Event, Events } from "../../styles/EventCalendarStyles";
import {
  AnnouncementContent,
  AnnouncementDate,
  AnnouncementItem,
  AnnouncementList,
} from "../../styles/AnnouncementStyles";

const StudentDashboard = () => {
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
        <StudentDashboardContainer>
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
              <SectionTitle>Recent Activity</SectionTitle>
              <AnnouncementList>
                {announcements.map((announcement) => (
                  <AnnouncementItem key={announcement._id}>
                    <AnnouncementContent>
                      {announcement.announcement}
                    </AnnouncementContent>
                    <AnnouncementDate>
                      {new Date(announcement.date).toLocaleDateString()}
                    </AnnouncementDate>
                  </AnnouncementItem>
                ))}
              </AnnouncementList>
            </Section>

            <Section>
              <SectionTitle>Upcoming Events</SectionTitle>
              <Events isDashboard>
                {events.map((event, index) => (
                  <Event key={index}>
                    <div>{event.event}</div>
                    <div>{new Date(event.date).toLocaleDateString()}</div>
                  </Event>
                ))}
              </Events>
            </Section>
          </Content>
        </StudentDashboardContainer>
      </Sidebar>
    </SidebarProvider>
  );
};

export default StudentDashboard;
