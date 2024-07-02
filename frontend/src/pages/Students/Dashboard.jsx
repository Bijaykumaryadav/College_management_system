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

const StudentDashboard = () => {
  return (
    <SidebarProvider>
      <Sidebar>
        <StudentDashboardContainer>
          <Content>
            <Section>
              <SectionTitle>Overview</SectionTitle>
              <CardContainer>
                <Card>
                  <CardTitle>Assignments</CardTitle>
                  <CardContent>5</CardContent>
                </Card>
                <Card>
                  <CardTitle>Performance</CardTitle>
                  <CardContent>500</CardContent>
                </Card>
                <Card>
                  <CardTitle>Term</CardTitle>
                  <CardContent>1</CardContent>
                </Card>
              </CardContainer>
            </Section>

            <Section>
              <SectionTitle>Recent Activity</SectionTitle>
              {/* Add a list of recent activity items */}
            </Section>

            <Section>
              <SectionTitle>Upcoming Events</SectionTitle>
              {/* Add a calendar or list of upcoming events */}
            </Section>

            {/* Add more sections for other parts of the admin dashboard */}
          </Content>
        </StudentDashboardContainer>
      </Sidebar>
    </SidebarProvider>
  );
};

export default StudentDashboard;
