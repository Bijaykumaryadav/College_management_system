import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { SidebarProvider } from "./SidebarContext";
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentsTable,
  TableRow,
  TableCell,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
  AddStudentSelect,
} from "../../styles/StudentsStyles";

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
    registrationNumber: "",
    grade: "",
    section: "",
    subSection: "",
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/students/getall"
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
      newStudent.phone.trim() !== "" &&
      newStudent.registrationNumber.trim() !== "" &&
      newStudent.grade.trim() !== "" &&
      newStudent.section.trim() !== ""
    ) {
      try {
        await axios.post(
          "https://bticlz.onrender.com/api/v1/students",
          newStudent
        );
        setNewStudent({
          name: "",
          email: "",
          phone: "",
          registrationNumber: "",
          grade: "",
          section: "",
          subSection: "",
        });
        fetchStudents();
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
  };

  const categorizeStudents = (
    departmentCode,
    semester,
    section,
    subSection
  ) => {
    return students.filter(
      (student) =>
        student.registrationNumber.includes(departmentCode) &&
        student.grade === semester &&
        student.section === section &&
        (!subSection || student.subSection === subSection)
    );
  };

  const renderStudentsByDepartmentSemesterSectionAndSubSection = (
    departmentCode,
    departmentName
  ) => {
    const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const sections = ["P Cycle", "C Cycle", "A", "B", "C", "D", "E", "F"];
    const subSections = {
      "P Cycle": ["P1", "P2", "P3", "P4", "P5"],
      "C Cycle": ["C1", "C2", "C3", "C4", "C5"],
    };

    return (
      <>
        <StudentsHeader>{departmentName}</StudentsHeader>
        {semesters.map((semester) =>
          sections.map((section) => {
            let sectionContent = null;
            if (subSections[section]) {
              sectionContent = subSections[section].map((subSection) => {
                const categorizedStudents = categorizeStudents(
                  departmentCode,
                  semester,
                  section,
                  subSection
                );
                if (categorizedStudents.length > 0) {
                  return (
                    <div
                      key={`${departmentCode}-${semester}-${section}-${subSection}`}
                    >
                      <StudentsHeader>
                        Semester {semester} - Section {section} - Sub-Section{" "}
                        {subSection}
                      </StudentsHeader>
                      <StudentsTable>
                        <thead>
                          <tr>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>USN</TableCell>
                            <TableCell>Semester</TableCell>
                            <TableCell>Section</TableCell>
                            <TableCell>Sub-Section</TableCell>
                          </tr>
                        </thead>
                        <tbody>
                          {categorizedStudents.map((student) => (
                            <TableRow key={student.id}>
                              <TableCell>{student.name}</TableCell>
                              <TableCell>{student.email}</TableCell>
                              <TableCell>{student.phone}</TableCell>
                              <TableCell>
                                {student.registrationNumber}
                              </TableCell>
                              <TableCell>{student.grade}</TableCell>
                              <TableCell>{student.section}</TableCell>
                              <TableCell>{student.subSection}</TableCell>
                            </TableRow>
                          ))}
                        </tbody>
                      </StudentsTable>
                    </div>
                  );
                }
                return null;
              });
            } else {
              const categorizedStudents = categorizeStudents(
                departmentCode,
                semester,
                section,
                null
              );
              if (categorizedStudents.length > 0) {
                sectionContent = (
                  <div key={`${departmentCode}-${semester}-${section}`}>
                    <StudentsHeader>
                      Semester {semester} - Section {section}
                    </StudentsHeader>
                    <StudentsTable>
                      <thead>
                        <tr>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Phone</TableCell>
                          <TableCell>USN</TableCell>
                          <TableCell>Semester</TableCell>
                          <TableCell>Section</TableCell>
                          <TableCell>Sub-Section</TableCell>
                        </tr>
                      </thead>
                      <tbody>
                        {categorizedStudents.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.phone}</TableCell>
                            <TableCell>{student.registrationNumber}</TableCell>
                            <TableCell>{student.grade}</TableCell>
                            <TableCell>{student.section}</TableCell>
                            <TableCell>{student.subSection}</TableCell>
                          </TableRow>
                        ))}
                      </tbody>
                    </StudentsTable>
                  </div>
                );
              }
            }
            return sectionContent;
          })
        )}
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
                placeholder="Enter phone number"
                value={newStudent.phone}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, phone: e.target.value })
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
                <option value="" disabled>
                  Select Semester
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </AddStudentSelect>
              <AddStudentSelect
                value={newStudent.section}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, section: e.target.value })
                }
              >
                <option value="" disabled>
                  Select Section
                </option>
                <option value="P Cycle">P Cycle</option>
                <option value="C Cycle">C Cycle</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </AddStudentSelect>
              {newStudent.section &&
                (newStudent.section === "P Cycle" ||
                  newStudent.section === "C Cycle") && (
                  <AddStudentSelect
                    value={newStudent.subSection}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        subSection: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Select Sub Section
                    </option>
                    {newStudent.section === "P Cycle" && (
                      <>
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                        <option value="P3">P3</option>
                        <option value="P4">P4</option>
                        <option value="P5">P5</option>
                      </>
                    )}
                    {newStudent.section === "C Cycle" && (
                      <>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                        <option value="C3">C3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                      </>
                    )}
                  </AddStudentSelect>
                )}
              <AddStudentButton type="submit">Add Student</AddStudentButton>
            </AddStudentForm>
            {renderStudentsByDepartmentSemesterSectionAndSubSection(
              "CS",
              "Computer Science Engineering"
            )}
            {renderStudentsByDepartmentSemesterSectionAndSubSection(
              "AI",
              "Artificial Intelligence and Machine Learning"
            )}
            {renderStudentsByDepartmentSemesterSectionAndSubSection(
              "CV",
              "Civil Engineering"
            )}
            {renderStudentsByDepartmentSemesterSectionAndSubSection(
              "EC",
              "Electrical and Communication Engineering"
            )}
          </StudentsContent>
        </Content>
      </StudentsContainer>
    </SidebarProvider>
  );
};

export default Students;
