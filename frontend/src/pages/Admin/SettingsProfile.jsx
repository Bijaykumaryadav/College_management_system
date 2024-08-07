import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./SidebarContext";
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  // EditButton,
  LogoutButton,
} from "../../styles/SettingsProfileStyles";
import { useNavigate } from "react-router-dom";

const SettingsProfile = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    name: "",
    email: "",
    // phone: "",
    // address: "",
    // qualification: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacherInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://bticlz.onrender.com/api/v1/users/admins",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTeacherInfo({
          name: response.data.name,
          email: response.data.email,
        });
      } catch (error) {
        console.error("Error fetching teacher info:", error);
      }
    };

    fetchTeacherInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-signIn");
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
          </ProfileDetails>
          <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
        </Content>
      </ProfileContainer>
    </SidebarProvider>
  );
};

export default SettingsProfile;
