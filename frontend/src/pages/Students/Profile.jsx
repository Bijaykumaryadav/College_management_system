import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileInfo,
  ProfileDetail,
  Label,
  Value,
  LogoutButton,
} from "../../styles/SettingsProfileStyles";
import { SidebarProvider } from "./SidebarContext";

const ProfileSection = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    semester: "",
    usn: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:4000/api/v1/users/students",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStudentInfo({
          name: response.data.name,
          email: response.data.email,
          phone: "7829574362", 
          semester: "6",
          usn: "1BH21CS018", 
        });
      } catch (error) {
        console.error("Error fetching student info:", error);
      }
    };

    fetchStudentInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/student-signIn"); 
  };

  return (
    <SidebarProvider>
      <ProfileContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <ProfileHeader>Profile</ProfileHeader>
          <ProfileInfo>
            <ProfileDetail>
              <Label>Name:</Label>
              <Value>{studentInfo.name}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Phone:</Label>
              <Value>{studentInfo.phone}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Semester:</Label>
              <Value>{studentInfo.semester}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>USN:</Label>
              <Value>{studentInfo.usn}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Email:</Label>
              <Value>{studentInfo.email}</Value>
            </ProfileDetail>
            <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
          </ProfileInfo>
        </Content>
      </ProfileContainer>
    </SidebarProvider>
  );
};

export default ProfileSection;
