import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { SidebarProvider } from "./SidebarContext";
import {
  ExamContainer,
  Content,
  ExamHeader,
  ExamList,
  ExamItem,
  AddMarksButton,
} from "../../styles/ExamStyles";

const Exam = () => {
  const [students, setStudents] = useState([]);
  const [redirectTo, setRedirectTo] = useState(null);
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

  const navigateToAddMarks = (studentId) => {
    setRedirectTo(`/add-marks/${studentId}`); // Set the route to redirect
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
        <ExamHeader>{departmentName}</ExamHeader>
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
                      <ExamHeader>
                        Semester {semester} - Section {section} - Sub-Section{" "}
                        {subSection}
                      </ExamHeader>
                      <ExamList>
                        {categorizedStudents.map((student) => (
                          <ExamItem key={student._id}>
                            <div>
                              Name: {student.name}, USN:{" "}
                              {student.registrationNumber}
                            </div>
                            <div>
                              <AddMarksButton
                                onClick={() => navigateToAddMarks(student._id)}
                              >
                                Add Marks
                              </AddMarksButton>
                            </div>
                          </ExamItem>
                        ))}
                      </ExamList>
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
                    <ExamHeader>
                      Semester {semester} - Section {section}
                    </ExamHeader>
                    <ExamList>
                      {categorizedStudents.map((student) => (
                        <ExamItem key={student._id}>
                          <div>
                            Name: {student.name}, USN:{" "}
                            {student.registrationNumber}
                          </div>
                          <div>
                            <AddMarksButton
                              onClick={() => navigateToAddMarks(student._id)}
                            >
                              Add Marks
                            </AddMarksButton>
                          </div>
                        </ExamItem>
                      ))}
                    </ExamList>
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

  // Render the Navigate component if redirectTo is set
  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <SidebarProvider>
      <ExamContainer>
        <Sidebar />
        <Content>
          <ExamHeader>Exam Evaluation Details</ExamHeader>
          {renderStudentsByDepartmentSemesterSectionAndSubSection(
            "CS",
            "Computer Science and Engineering"
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
            "Electronics and Communication Engineering"
          )}
        </Content>
      </ExamContainer>
    </SidebarProvider>
  );
};

export default Exam;
