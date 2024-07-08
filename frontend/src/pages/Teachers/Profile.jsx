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
    department: "",
    position: "",
    subjectCodes: "",
    _id: "",
  });

  const [editMode, setEditMode] = useState(false);

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

        if (
          teacherData != null &&
          teacherData.phone != null &&
          teacherData.address != null &&
          teacherData.qualification != null &&
          teacherData.department != null &&
          teacherData.position != null &&
          teacherData.subjectCodes != null
        ) {
          setTeacherInfo({
            name: teacherData.name,
            email: teacherData.email,
            phone: teacherData.phone,
            address: teacherData.address,
            qualification: teacherData.qualification,
            department: teacherData.department || "",
            position: teacherData.position || "",
            subjectCodes: teacherData.subjectCodes || "",
            _id: teacherData._id,
          });
        } else {
          const userResponse = await axios.get(
            "http://localhost:4000/api/v1/users/teachers",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("User response:", userResponse.data);

          const userData = userResponse.data;
          setTeacherInfo({
            name: userData.name,
            email: userData.email,
            phone: userData.phone || "",
            address: userData.address || "",
            qualification: userData.qualification || "",
            department: userData.department || "",
            position: userData.position || "",
            subjectCodes: userData.subjectCodes || "",
            _id: userData._id,
          });
        }
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
                <Dropdown
                  name="department"
                  value={teacherInfo.department}
                  onChange={handleInputChange}
                >
                  <option value="">Select Department</option>
                  <option value="COMPUTER SCIENCE ENGINEERING">
                    COMPUTER SCIENCE ENGINEERING
                  </option>
                  <option value="ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING">
                    ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
                  </option>
                  <option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
                  <option value="ELECTRICAL AND COMMUNICATION ENGINEERING">
                    ELECTRICAL AND COMMUNICATION ENGINEERING
                  </option>
                </Dropdown>
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
              <Label>Subject Codes:</Label>
              {editMode ? (
                <Input
                  type="text"
                  name="subjectCodes"
                  value={teacherInfo.subjectCodes}
                  onChange={handleInputChange}
                  placeholder="Enter subject codes separated by space"
                />
              ) : (
                <Value>{teacherInfo.subjectCodes}</Value>
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
