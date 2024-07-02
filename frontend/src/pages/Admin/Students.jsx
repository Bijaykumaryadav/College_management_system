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
        setStudents([...students, response.data.student]);
        setNewStudent({
          name: "",
          email: "",
          registrationNumber: "",
          grade: "",
        });
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
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
            <StudentList>
              {students.map((student) => (
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
