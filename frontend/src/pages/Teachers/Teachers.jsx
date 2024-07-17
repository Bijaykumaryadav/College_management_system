// TeacherSection.js
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./SidebarContext";
import axios from "axios";
import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
} from "../../styles/TeachersStyles";

const TeacherSection = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/getall"
      );
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const categorizedTeachers = (department) => {
    return teachers.filter((teacher) => teacher.department === department);
  };

  return (
    <SidebarProvider>
      <TeachersContainer>
        <Sidebar />
        <Content>
          <TeachersContent>
            <TeachersHeader>Teachers</TeachersHeader>

            <TeachersHeader>Computer Science Engineering</TeachersHeader>
            <TeacherList>
              {categorizedTeachers("COMPUTER SCIENCE ENGINEERING").map(
                (teacher) => (
                  <TeacherItem key={teacher.id}>
                    {teacher.name} - {teacher.email} - {teacher.phone} -{" "}
                    {teacher.address} - {teacher.qualification} -{" "}
                    {teacher.department} - {teacher.position} -{" "}
                    {teacher.subjectCodes}
                  </TeacherItem>
                )
              )}
            </TeacherList>

            <TeachersHeader>
              Artificial Intelligence and Machine Learning
            </TeachersHeader>
            <TeacherList>
              {categorizedTeachers(
                "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING"
              ).map((teacher) => (
                <TeacherItem key={teacher.id}>
                  {teacher.name} - {teacher.email} - {teacher.phone} -{" "}
                  {teacher.address} - {teacher.qualification} -{" "}
                  {teacher.department} - {teacher.position} -{" "}
                  {teacher.subjectCodes}
                </TeacherItem>
              ))}
            </TeacherList>

            <TeachersHeader>Civil Engineering</TeachersHeader>
            <TeacherList>
              {categorizedTeachers("CIVIL ENGINEERING").map((teacher) => (
                <TeacherItem key={teacher.id}>
                  {teacher.name} - {teacher.email} - {teacher.phone} -{" "}
                  {teacher.address} - {teacher.qualification} -{" "}
                  {teacher.department} - {teacher.position} -{" "}
                  {teacher.subjectCodes}
                </TeacherItem>
              ))}
            </TeacherList>

            <TeachersHeader>
              Electronics and Communication Engineering
            </TeachersHeader>
            <TeacherList>
              {categorizedTeachers(
                "ELECTRONICS AND COMMUNICATION ENGINEERING"
              ).map((teacher) => (
                <TeacherItem key={teacher.id}>
                  {teacher.name} - {teacher.email} - {teacher.phone} -{" "}
                  {teacher.address} - {teacher.qualification} -{" "}
                  {teacher.department} - {teacher.position} -{" "}
                  {teacher.subjectCodes}
                </TeacherItem>
              ))}
            </TeacherList>
          </TeachersContent>
        </Content>
      </TeachersContainer>
    </SidebarProvider>
  );
};

export default TeacherSection;
