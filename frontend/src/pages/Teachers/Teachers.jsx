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
  TeachersTable,
  TableRow,
  TableCell,
} from "../../styles/TeachersStyles"; // Adjust your import path and styles as per your project

const TeacherSection = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/teachers/getall"
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

            {categorizedTeachers("COMPUTER SCIENCE ENGINEERING").length > 0 && (
              <>
                <TeachersHeader>Computer Science Engineering</TeachersHeader>
                <TeachersTable>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Qualification</th>
                      <th>Department</th>
                      <th>Position</th>
                      <th>Subject Codes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorizedTeachers("COMPUTER SCIENCE ENGINEERING").map(
                      (teacher) => (
                        <TableRow key={teacher.id}>
                          <TableCell data-label="Name">
                            {teacher.name}
                          </TableCell>
                          <TableCell data-label="Email">
                            {teacher.email}
                          </TableCell>
                          <TableCell data-label="Phone">
                            {teacher.phone}
                          </TableCell>
                          <TableCell data-label="Address">
                            {teacher.address}
                          </TableCell>
                          <TableCell data-label="Qualification">
                            {teacher.qualification}
                          </TableCell>
                          <TableCell data-label="Department">
                            {teacher.department}
                          </TableCell>
                          <TableCell data-label="Position">
                            {teacher.position}
                          </TableCell>
                          <TableCell data-label="Subject Codes">
                            {teacher.subjectCodes}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </tbody>
                </TeachersTable>
              </>
            )}

            {categorizedTeachers("ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING")
              .length > 0 && (
              <>
                <TeachersHeader>
                  Artificial Intelligence and Machine Learning
                </TeachersHeader>
                <TeachersTable>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Qualification</th>
                      <th>Department</th>
                      <th>Position</th>
                      <th>Subject Codes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorizedTeachers(
                      "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING"
                    ).map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell data-label="Name">{teacher.name}</TableCell>
                        <TableCell data-label="Email">
                          {teacher.email}
                        </TableCell>
                        <TableCell data-label="Phone">
                          {teacher.phone}
                        </TableCell>
                        <TableCell data-label="Address">
                          {teacher.address}
                        </TableCell>
                        <TableCell data-label="Qualification">
                          {teacher.qualification}
                        </TableCell>
                        <TableCell data-label="Department">
                          {teacher.department}
                        </TableCell>
                        <TableCell data-label="Position">
                          {teacher.position}
                        </TableCell>
                        <TableCell data-label="Subject Codes">
                          {teacher.subjectCodes}
                        </TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </TeachersTable>
              </>
            )}

            {categorizedTeachers("CIVIL ENGINEERING").length > 0 && (
              <>
                <TeachersHeader>Civil Engineering</TeachersHeader>
                <TeachersTable>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Qualification</th>
                      <th>Department</th>
                      <th>Position</th>
                      <th>Subject Codes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorizedTeachers("CIVIL ENGINEERING").map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell data-label="Name">{teacher.name}</TableCell>
                        <TableCell data-label="Email">
                          {teacher.email}
                        </TableCell>
                        <TableCell data-label="Phone">
                          {teacher.phone}
                        </TableCell>
                        <TableCell data-label="Address">
                          {teacher.address}
                        </TableCell>
                        <TableCell data-label="Qualification">
                          {teacher.qualification}
                        </TableCell>
                        <TableCell data-label="Department">
                          {teacher.department}
                        </TableCell>
                        <TableCell data-label="Position">
                          {teacher.position}
                        </TableCell>
                        <TableCell data-label="Subject Codes">
                          {teacher.subjectCodes}
                        </TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </TeachersTable>
              </>
            )}

            {categorizedTeachers("ELECTRONICS AND COMMUNICATION ENGINEERING")
              .length > 0 && (
              <>
                <TeachersHeader>
                  Electronics and Communication Engineering
                </TeachersHeader>
                <TeachersTable>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Qualification</th>
                      <th>Department</th>
                      <th>Position</th>
                      <th>Subject Codes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorizedTeachers(
                      "ELECTRONICS AND COMMUNICATION ENGINEERING"
                    ).map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell data-label="Name">{teacher.name}</TableCell>
                        <TableCell data-label="Email">
                          {teacher.email}
                        </TableCell>
                        <TableCell data-label="Phone">
                          {teacher.phone}
                        </TableCell>
                        <TableCell data-label="Address">
                          {teacher.address}
                        </TableCell>
                        <TableCell data-label="Qualification">
                          {teacher.qualification}
                        </TableCell>
                        <TableCell data-label="Department">
                          {teacher.department}
                        </TableCell>
                        <TableCell data-label="Position">
                          {teacher.position}
                        </TableCell>
                        <TableCell data-label="Subject Codes">
                          {teacher.subjectCodes}
                        </TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </TeachersTable>
              </>
            )}
          </TeachersContent>
        </Content>
      </TeachersContainer>
    </SidebarProvider>
  );
};

export default TeacherSection;
