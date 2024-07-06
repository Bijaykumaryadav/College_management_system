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
  Input,
  Dropdown,
  CompleteButton,
  EditButton,
} from "../../styles/SettingsProfileStyles";
import { SidebarProvider } from "./SidebarContext";

const ProfileSection = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    registrationNumber: "",
    _id: "", // Adding _id to the state
  });

  const [editMode, setEditMode] = useState(false); // Initially false to show profile info first

  const navigate = useNavigate();

useEffect(() => {
  const fetchStudentInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:4000/api/v1/students",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (
        response.data.data.phone &&
        response.data.data.grade &&
        response.data.data.registrationNumber
      ) {
        setStudentInfo({
          name: response.data.data.name,
          email: response.data.data.email,
          phone: response.data.data.phone,
          grade: response.data.data.grade,
          registrationNumber: response.data.data.registrationNumber,
        });
      } else {
        const response2 = await axios.get(
          "http://localhost:4000/api/v1/users/students",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStudentInfo({
          name: response2.data.name,
          email: response2.data.email,
          phone: response2.data.phone || "",
          grade: response2.data.grade || "",
          registrationNumber: response2.data.registrationNumber || "",
        });
      }
    } catch (error) {
      console.error("Error fetching student info:", error);
    }
  };

  fetchStudentInfo();
}, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCompleteProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:4000/api/v1/students", studentInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEditMode(false);
    } catch (error) {
      console.error("Error updating student info:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/student-signIn");
  };

  const toggleEditMode = () => {
    setEditMode((prevMode) => !prevMode);
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
              {editMode ? (
                <Input
                  type="text"
                  name="phone"
                  value={studentInfo.phone}
                  onChange={handleInputChange}
                />
              ) : (
                <Value>{studentInfo.phone}</Value>
              )}
            </ProfileDetail>
            <ProfileDetail>
              <Label>Semester:</Label>
              {editMode ? (
                <Dropdown
                  name="grade"
                  value={studentInfo.grade}
                  onChange={handleInputChange}
                >
                  <option value="">Select Semester</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </Dropdown>
              ) : (
                <Value>{studentInfo.grade}</Value>
              )}
            </ProfileDetail>
            <ProfileDetail>
              <Label>USN:</Label>
              {editMode ? (
                <Input
                  type="text"
                  name="registrationNumber"
                  value={studentInfo.registrationNumber}
                  onChange={handleInputChange}
                />
              ) : (
                <Value>{studentInfo.registrationNumber}</Value>
              )}
            </ProfileDetail>
            <ProfileDetail>
              <Label>Email:</Label>
              <Value>{studentInfo.email}</Value>
            </ProfileDetail>
            {editMode ? (
              <CompleteButton onClick={handleCompleteProfile}>
                Complete Your Profile
              </CompleteButton>
            ) : (
              <EditButton onClick={toggleEditMode}>Edit Profile</EditButton>
            )}
            <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
          </ProfileInfo>
        </Content>
      </ProfileContainer>
    </SidebarProvider>
  );
};

export default ProfileSection;
