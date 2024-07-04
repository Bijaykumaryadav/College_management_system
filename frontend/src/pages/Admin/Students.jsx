import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { SidebarProvider } from "./SidebarContext";
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from "../../styles/StudentsStyles";

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    registrationNumber: "",
    grade: "",
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (
      newStudent.name.trim() !== "" &&
      newStudent.email.trim() !== "" &&
      newStudent.registrationNumber.trim() !== "" &&
      newStudent.grade.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/students",
          newStudent
        );
        setNewStudent({
          name: "",
          email: "",
          registrationNumber: "",
          grade: "",
        });
        // Fetch the updated list of students
        fetchStudents();
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
  };

  const categorizeStudents = (departmentCode) => {
    return students.filter((student) =>
      student.registrationNumber.includes(departmentCode)
    );
  };

  return (
    <SidebarProvider>
      <StudentsContainer>
        <Sidebar />
        <Content>
          <StudentsContent>
            <StudentsHeader>Students</StudentsHeader>
            <AddStudentForm onSubmit={handleAddStudent}>
              <AddStudentInput
                type="text"
                placeholder="Enter student name"
                value={newStudent.name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
              />
              <AddStudentInput
                type="email"
                placeholder="Enter student email"
                value={newStudent.email}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, email: e.target.value })
                }
              />
              <AddStudentInput
                type="text"
                placeholder="Enter USN"
                value={newStudent.registrationNumber}
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    registrationNumber: e.target.value,
                  })
                }
              />
              <AddStudentInput
                type="text"
                placeholder="Enter Sem"
                value={newStudent.grade}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, grade: e.target.value })
                }
              />
              <AddStudentButton type="submit">Add Student</AddStudentButton>
            </AddStudentForm>
            <StudentsHeader>Computer Science Engineering</StudentsHeader>
            <StudentList>
              {categorizeStudents("CS").map((student) => (
                <StudentItem key={student.id}>
                  {student.name} - {student.email} -{" "}
                  {student.registrationNumber} - {student.grade}
                </StudentItem>
              ))}
            </StudentList>
            <StudentsHeader>
              Artificial Intelligence and Machine Learning
            </StudentsHeader>
            <StudentList>
              {categorizeStudents("AI").map((student) => (
                <StudentItem key={student.id}>
                  {student.name} - {student.email} -{" "}
                  {student.registrationNumber} - {student.grade}
                </StudentItem>
              ))}
            </StudentList>
            <StudentsHeader>Civil Engineering</StudentsHeader>
            <StudentList>
              {categorizeStudents("CV").map((student) => (
                <StudentItem key={student.id}>
                  {student.name} - {student.email} -{" "}
                  {student.registrationNumber} - {student.grade}
                </StudentItem>
              ))}
            </StudentList>
            <StudentsHeader>
              Electrical and Communication Engineering
            </StudentsHeader>
            <StudentList>
              {categorizeStudents("EC").map((student) => (
                <StudentItem key={student.id}>
                  {student.name} - {student.email} -{" "}
                  {student.registrationNumber} - {student.grade}
                </StudentItem>
              ))}
            </StudentList>
          </StudentsContent>
        </Content>
      </StudentsContainer>
    </SidebarProvider>
  );
};

export default Students;
