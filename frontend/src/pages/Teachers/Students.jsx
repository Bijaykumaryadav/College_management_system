// StudentSection.js
import React, { useState, useEffect } from "react";
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
} from "../../styles/StudentsStyles";

const StudentSection = () => {
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

export default StudentSection;
