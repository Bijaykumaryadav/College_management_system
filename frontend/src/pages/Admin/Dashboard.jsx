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
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    fetchStudentPerformance();
    fetchTotalStudents();
    fetchTotalTeachers();
    fetchTotalClasses();
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

  const fetchTotalStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
      setTotalStudents(response.data.students.length);
    } catch (error) {
      console.error("Error fetching total students:", error);
    }
  };

  const fetchTotalTeachers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/getall"
      );
      setTotalTeachers(response.data.teachers.length);
    } catch (error) {
      console.error("Error fetching total teachers:", error);
    }
  };

  const fetchTotalClasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/getall"
      );
      setTotalClasses(response.data.classes.length);
    } catch (error) {
      console.error("Error fetching total classes:", error);
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
                <EventCalendar events={events} isDashboard />
              </Section>
            </TopContent>
            <BottomContent>
              <Section>
                <Announcement announcements={announcements} isDashboard />
              </Section>
              <Section>
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
