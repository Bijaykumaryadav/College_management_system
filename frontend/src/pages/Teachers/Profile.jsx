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

const TeacherProfileSection = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    department: "", // Adding department to the state
    position: "", // Adding position to the state
  });

  const [editMode, setEditMode] = useState(false); // Initially false to show profile info first

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacherInfo = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:4000/api/v1/teachers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Teacher response:", response.data.data);

        const teacherData = response.data.data;

        setTeacherInfo({
          name: teacherData.name,
          email: teacherData.email,
          phone: teacherData.phone,
          address: teacherData.address,
          qualification: teacherData.qualification,
          department: teacherData.department || "",
          position: teacherData.position || "",
        });
      } catch (error) {
        console.error("Error fetching teacher info:", error);
      }
    };

    fetchTeacherInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCompleteProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:4000/api/v1/teachers", teacherInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEditMode(false);
    } catch (error) {
      console.error("Error updating teacher info:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/teacher-signIn");
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
          <ProfileHeader>Profile Details</ProfileHeader>
          <ProfileInfo>
            <ProfileDetail>
              <Label>Name:</Label>
              <Value>{teacherInfo.name}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Phone:</Label>
              {editMode ? (
                <Input
                  type="text"
                  name="phone"
                  value={teacherInfo.phone}
                  onChange={handleInputChange}
                />
              ) : (
                <Value>{teacherInfo.phone}</Value>
              )}
            </ProfileDetail>
            <ProfileDetail>
              <Label>Address:</Label>
              {editMode ? (
                <Input
                  type="text"
                  name="address"
                  value={teacherInfo.address}
                  onChange={handleInputChange}
                />
              ) : (
                <Value>{teacherInfo.address}</Value>
              )}
            </ProfileDetail>
            <ProfileDetail>
              <Label>Qualification:</Label>
              {editMode ? (
                <Input
                  type="text"
                  name="qualification"
                  value={teacherInfo.qualification}
                  onChange={handleInputChange}
                />
              ) : (
                <Value>{teacherInfo.qualification}</Value>
              )}
            </ProfileDetail>
            <ProfileDetail>
              <Label>Department:</Label>
              {editMode ? (
                <Input
                  type="text"
                  name="department"
                  value={teacherInfo.department}
                  onChange={handleInputChange}
                />
              ) : (
                <Value>{teacherInfo.department}</Value>
              )}
            </ProfileDetail>
            <ProfileDetail>
              <Label>Position:</Label>
              {editMode ? (
                <Dropdown
                  name="position"
                  value={teacherInfo.position}
                  onChange={handleInputChange}
                >
                  <option value="">Select Position</option>
                  <option value="Assistant Professor">
                    Assistant Professor
                  </option>
                  <option value="Associate Professor">
                    Associate Professor
                  </option>
                </Dropdown>
              ) : (
                <Value>{teacherInfo.position}</Value>
              )}
            </ProfileDetail>
            <ProfileDetail>
              <Label>Email:</Label>
              <Value>{teacherInfo.email}</Value>
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

export default TeacherProfileSection;
