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
    section: "",
    subSection: "",
    _id: "",
  });

  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const token = localStorage.getItem("token");

        const studentResponse = await axios.get(
          "http://localhost:4000/api/v1/students",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Student response:", studentResponse.data.data);

        const studentData = studentResponse.data.data;

        if (
          studentData != null &&
          studentData.phone != null &&
          studentData.grade != null &&
          studentData.registrationNumber != null &&
          studentData.section != null
        ) {
          setStudentInfo({
            name: studentData.name,
            email: studentData.email,
            phone: studentData.phone,
            grade: studentData.grade,
            registrationNumber: studentData.registrationNumber,
            section: studentData.section,
            subSection: studentData.subSection || "",
            _id: studentData._id,
          });
        } else {
          const userResponse = await axios.get(
            "http://localhost:4000/api/v1/users/students",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("User response:", userResponse.data);

          const userData = userResponse.data;

          setStudentInfo({
            name: userData.name,
            email: userData.email,
            phone: userData.phone || "",
            grade: userData.grade || "",
            registrationNumber: userData.registrationNumber || "",
            section: userData.section || "",
            subSection: userData.subSection || "",
            _id: userData._id,
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
              <Label>Section:</Label>
              {editMode ? (
                <Dropdown
                  name="section"
                  value={studentInfo.section}
                  onChange={handleInputChange}
                >
                  <option value="">Select Section</option>
                  <option value="P Cycle">P Cycle</option>
                  <option value="C Cycle">C Cycle</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </Dropdown>
              ) : (
                <Value>{studentInfo.section}</Value>
              )}
            </ProfileDetail>
            {editMode &&
              (studentInfo.section === "P Cycle" ||
                studentInfo.section === "C Cycle") && (
                <ProfileDetail>
                  <Label>Sub Section:</Label>
                  <Dropdown
                    name="subSection"
                    value={studentInfo.subSection}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Sub Section</option>
                    {studentInfo.section === "P Cycle" && (
                      <>
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                        <option value="P3">P3</option>
                        <option value="P4">P4</option>
                        <option value="P5">P5</option>
                      </>
                    )}
                    {studentInfo.section === "C Cycle" && (
                      <>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                        <option value="C3">C3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                      </>
                    )}
                  </Dropdown>
                </ProfileDetail>
              )}
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
