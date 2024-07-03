// AttendanceSection.js
import Sidebar from "./Sidebar";
import {
  AttendanceContainer,
  SidebarContainer,
  Content,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  AttendanceDate,
  AttendanceStatus,
} from "../../styles/AttendanceStyles";
import { SidebarProvider } from "./SidebarContext";

const AttendanceSection = () => {
  // Sample attendance data
  const attendance = [
    { id: 1, date: "2024-05-01", present: true },
    { id: 2, date: "2024-05-02", present: false },
    { id: 3, date: "2024-05-03", present: true },
    { id: 4, date: "2024-05-04", present: true },
    { id: 5, date: "2024-05-05", present: true },
  ];

  return (
    <SidebarProvider>
      <AttendanceContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
            {attendance.map(({ id, date, present }) => (
              <AttendanceItem key={id}>
                <AttendanceDate>{date}</AttendanceDate>
                <AttendanceStatus present={present}>
                  {present ? "Present" : "Absent"}
                </AttendanceStatus>
              </AttendanceItem>
            ))}
          </AttendanceList>
        </Content>
      </AttendanceContainer>
    </SidebarProvider>
  );
};

export default AttendanceSection;
