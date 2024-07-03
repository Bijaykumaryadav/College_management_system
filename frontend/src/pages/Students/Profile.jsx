// ProfileSection.js
import { useNavigate } from "react-router-dom";
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
  // Sample student profile data
  const navigate = useNavigate(); // Hook to access the navigate function

  const studentProfile = {
    name: "John Doe",
    age: 18,
    grade: "12th",
    school: "Example High School",
    email: "john.doe@example.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    navigate("/student-signIn"); // Redirect to the sign-in page
  }; // Moved the closing brace here

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
              <Value>{studentProfile.name}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Age:</Label>
              <Value>{studentProfile.age}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Grade:</Label>
              <Value>{studentProfile.grade}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>School:</Label>
              <Value>{studentProfile.school}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Email:</Label>
              <Value>{studentProfile.email}</Value>
            </ProfileDetail>
            <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
          </ProfileInfo>
        </Content>
      </ProfileContainer>
    </SidebarProvider>
  );
};

export default ProfileSection;
