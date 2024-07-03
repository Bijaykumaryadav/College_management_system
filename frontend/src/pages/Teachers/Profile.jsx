import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
  LogoutButton,
} from "../../styles/SettingsProfileStyles";
import { SidebarProvider } from "./SidebarContext";

const TeacherProfileSection = () => {
  const navigate = useNavigate();

  const [teacherInfo, setTeacherInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
    qualification: "Master of Education",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/teacher-signIn");
  };

  return (
    <SidebarProvider>
      <ProfileContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <ProfileHeader>Profile Details</ProfileHeader>
          <ProfileDetails>
            <ProfileLabel>Name:</ProfileLabel>
            <ProfileInfo>{teacherInfo.name}</ProfileInfo>
            <ProfileLabel>Email:</ProfileLabel>
            <ProfileInfo>{teacherInfo.email}</ProfileInfo>
            <ProfileLabel>Phone:</ProfileLabel>
            <ProfileInfo>{teacherInfo.phone}</ProfileInfo>
            <ProfileLabel>Address:</ProfileLabel>
            <ProfileInfo>{teacherInfo.address}</ProfileInfo>
            <ProfileLabel>Qualification:</ProfileLabel>
            <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
          </ProfileDetails>
          <EditButton>Edit Profile</EditButton>
          <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
        </Content>
      </ProfileContainer>
    </SidebarProvider>
  );
};

export default TeacherProfileSection;
