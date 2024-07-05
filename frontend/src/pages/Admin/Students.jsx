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
  AddStudentSelect
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
        await axios.post("http://localhost:4000/api/v1/students", newStudent);
        setNewStudent({
          name: "",
          email: "",
          registrationNumber: "",
          grade: "",
        });
        fetchStudents(); // Fetch the updated list of students
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
  };

  const categorizeStudents = (departmentCode, semester) => {
    return students.filter(
      (student) =>
        student.registrationNumber.includes(departmentCode) &&
        student.grade === semester
    );
  };

  const renderStudentsByDepartmentAndSemester = (departmentCode, departmentName) => {
    const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];
    return (
      <>
        <StudentsHeader>{departmentName}</StudentsHeader>
        {semesters.map((semester) => (
          <div key={`${departmentCode}-${semester}`}>
            <StudentsHeader>Semester {semester}</StudentsHeader>
            <StudentList>
              {categorizeStudents(departmentCode, semester).map((student) => (
                <StudentItem key={student.id}>
                  {student.name} - {student.email} - {student.registrationNumber} - {student.grade}
                </StudentItem>
              ))}
            </StudentList>
          </div>
        ))}
      </>
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
              <AddStudentSelect
                value={newStudent.grade}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, grade: e.target.value })
                }
              >
                <option value="" disabled>Select Semester</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </AddStudentSelect>
              <AddStudentButton type="submit">Add Student</AddStudentButton>
            </AddStudentForm>
            {renderStudentsByDepartmentAndSemester("CS", "Computer Science Engineering")}
            {renderStudentsByDepartmentAndSemester("AI", "Artificial Intelligence and Machine Learning")}
            {renderStudentsByDepartmentAndSemester("CV", "Civil Engineering")}
            {renderStudentsByDepartmentAndSemester("EC", "Electrical and Communication Engineering")}
          </StudentsContent>
        </Content>
      </StudentsContainer>
    </SidebarProvider>
  );
};

export default Students;