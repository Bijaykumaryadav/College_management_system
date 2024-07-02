// AdminDashboard.js
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import EventCalendar from "./EventCalender";
import Announcement from "./Announcement";
import Performance from "./Performance";
import axios from "axios";
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from "../../styles/DashboardStyles";
import { SidebarProvider } from "./SidebarContext";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    fetchStudentPerformance();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/events/getall"
      );
      setEvents(response.data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/announcements/getall"
      );
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const fetchStudentPerformance = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/performance/getall"
      );
      setStudentPerformance(response.data.performance || []);
    } catch (error) {
      console.error("Error fetching student performance:", error);
    }
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <AdminDashboardContainer>
          <Content>
            <TopContent>
              <Section>
                <SectionTitle>Overview</SectionTitle>
                <CardContainer>
                  <Card>
                    <CardTitle>Total Students</CardTitle>
                    <CardContent>500</CardContent>
                  </Card>
                  <Card>
                    <CardTitle>Total Teachers</CardTitle>
                    <CardContent>50</CardContent>
                  </Card>
                  <Card>
                    <CardTitle>Total Classes</CardTitle>
                    <CardContent>20</CardContent>
                  </Card>
                  <Card>
                    <CardTitle>Total Subjects</CardTitle>
                    <CardContent>10</CardContent>
                  </Card>
                </CardContainer>
              </Section>
              <Section>
                <SectionTitle>Events Calendar</SectionTitle>
                <EventCalendar events={events} isDashboard />
              </Section>
            </TopContent>
            <BottomContent>
              <Section>
                <SectionTitle>Announcements</SectionTitle>
                <Announcement announcements={announcements} isDashboard />
              </Section>
              <Section>
                <SectionTitle>Student Performance</SectionTitle>
                <Performance performance={studentPerformance} isDashboard />
              </Section>
            </BottomContent>
          </Content>
        </AdminDashboardContainer>
      </Sidebar>
    </SidebarProvider>
  );
};


export default AdminDashboard;
