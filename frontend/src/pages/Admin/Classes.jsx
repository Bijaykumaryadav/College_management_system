import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { SidebarProvider } from "./SidebarContext";
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassesHeader,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
  AddClassSelect,
  ClassesTable,
  TableHeader,
  TableRow,
  TableData,
} from "../../styles/ClassesStyles";

const Classes = () => {
  const [newClassName, setNewClassName] = useState("");
  const [classes, setClasses] = useState([]);
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [subSection, setSubSection] = useState("");
  const [showTable, setShowTable] = useState(true); // Initially show the table

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/getall"
      );
      if (response.data.classes) {
        setClasses(response.data.classes);
      } else {
        console.error(
          "Error fetching classes: Invalid data format",
          response.data
        );
      }
    } catch (error) {
      console.error("Error fetching classes:", error.message);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== "" && department && semester && section) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/class",
          {
            grade: newClassName,
            department,
            semester,
            section,
            subSection,
          }
        );

        console.log("Response data:", response.data);

        if (response.data.success) {
          setClasses((prevClasses) => [...prevClasses, response.data.class]);
          setNewClassName("");
          setDepartment("");
          setSemester("");
          setSection("");
          setSubSection("");
        } else {
          console.error(
            "Error adding class: Response data invalid",
            response.data
          );
        }
      } catch (error) {
        console.error("Error adding class:", error);
      }
    }
  };

  return (
    <SidebarProvider>
      <ClassesContainer>
        <Sidebar />
        <Content>
          <ClassesContent>
            <ClassesHeader>Classes</ClassesHeader>
            <AddClassForm onSubmit={handleAddClass}>
              <AddClassInput
                type="text"
                placeholder="Enter class name"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
              />
              <AddClassSelect
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="" disabled>
                  Assign Department
                </option>
                <option value="COMPUTER SCIENCE ENGINEERING">
                  COMPUTER SCIENCE ENGINEERING
                </option>
                <option value="ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING">
                  ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
                </option>
                <option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
                <option value="ELECTRONICS AND COMMUNICATION ENGINEERING">
                  ELECTRONICS AND COMMUNICATION ENGINEERING
                </option>
              </AddClassSelect>
              {department && (
                <AddClassSelect
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
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
                </AddClassSelect>
              )}
              {semester && (
                <AddClassSelect
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
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
                </AddClassSelect>
              )}
              {section && (section === "P Cycle" || section === "C Cycle") && (
                <AddClassSelect
                  value={subSection}
                  onChange={(e) => setSubSection(e.target.value)}
                >
                  <option value="" disabled>
                    Select Sub Section
                  </option>
                  {section === "P Cycle" && (
                    <>
                      <option value="P1">P1</option>
                      <option value="P2">P2</option>
                      <option value="P3">P3</option>
                      <option value="P4">P4</option>
                      <option value="P5">P5</option>
                    </>
                  )}
                  {section === "C Cycle" && (
                    <>
                      <option value="C1">C1</option>
                      <option value="C2">C2</option>
                      <option value="C3">C3</option>
                      <option value="C4">C4</option>
                      <option value="C5">C5</option>
                    </>
                  )}
                </AddClassSelect>
              )}
              <AddClassButton type="submit">Add Class</AddClassButton>
            </AddClassForm>
            <ClassesTable>
              <thead>
                <TableHeader>
                  <th>Class Name</th>
                  <th>Department</th>
                  <th>Semester</th>
                  <th>Section</th>
                  <th>Sub Section</th>
                </TableHeader>
              </thead>
              <tbody>
                {classes.map((classItem, index) => (
                  <TableRow key={index}>
                    <TableData>{classItem.grade}</TableData>
                    <TableData>{classItem.department}</TableData>
                    <TableData>{classItem.semester}</TableData>
                    <TableData>{classItem.section}</TableData>
                    <TableData>{classItem.subSection || "N/A"}</TableData>
                  </TableRow>
                ))}
              </tbody>
            </ClassesTable>
          </ClassesContent>
        </Content>
      </ClassesContainer>
    </SidebarProvider>
  );
};

export default Classes;
