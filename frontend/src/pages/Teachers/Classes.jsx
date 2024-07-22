import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  ClassContainer,
  SidebarContainer,
  Content,
  ClassHeader,
  ClassesTable,
  TableHeader,
  TableRow,
  TableData,
} from "../../styles/ClassesStyles";
import { SidebarProvider } from "./SidebarContext";

const ClassSection = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/class/getall"
      );
      if (response.data && Array.isArray(response.data.classes)) {
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

  return (
    <SidebarProvider>
      <ClassContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <ClassHeader>Classes</ClassHeader>
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
        </Content>
      </ClassContainer>
    </SidebarProvider>
  );
};

export default ClassSection;
