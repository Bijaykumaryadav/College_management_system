import React, { useState, useEffect } from "react";
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
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
  AddTeacherDropdown,
} from "../../styles/TeachersStyles";

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    department: "",
    position: "",
    subjectCodes: "",
  });
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

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    if (
      newTeacher.name.trim() !== "" &&
      newTeacher.email.trim() !== "" &&
      newTeacher.phone.trim() !== "" &&
      newTeacher.address.trim() !== "" &&
      newTeacher.qualification.trim() !== "" &&
      newTeacher.department.trim() !== "" &&
      newTeacher.position.trim() !== "" &&
      newTeacher.subjectCodes.trim() !== ""
    ) {
      try {
        await axios.post("http://localhost:4000/api/v1/teachers", newTeacher);
        setNewTeacher({
          name: "",
          email: "",
          phone: "",
          address: "",
          qualification: "",
          department: "",
          position: "",
          subjectCodes: "",
        });
        fetchTeachers();
      } catch (error) {
        console.error("Error adding teacher:", error);
      }
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
            <AddTeacherForm onSubmit={handleAddTeacher}>
              <AddTeacherInput
                type="text"
                placeholder="Enter teacher name"
                value={newTeacher.name}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, name: e.target.value })
                }
              />
              <AddTeacherInput
                type="email"
                placeholder="Enter teacher email"
                value={newTeacher.email}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, email: e.target.value })
                }
              />
              <AddTeacherInput
                type="text"
                placeholder="Enter teacher phone"
                value={newTeacher.phone}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, phone: e.target.value })
                }
              />
              <AddTeacherInput
                type="text"
                placeholder="Enter teacher address"
                value={newTeacher.address}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, address: e.target.value })
                }
              />
              <AddTeacherInput
                type="text"
                placeholder="Enter teacher qualification"
                value={newTeacher.qualification}
                onChange={(e) =>
                  setNewTeacher({
                    ...newTeacher,
                    qualification: e.target.value,
                  })
                }
              />
              <AddTeacherDropdown
                name="department"
                value={newTeacher.department}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, department: e.target.value })
                }
              >
                <option value="">Select Department</option>
                <option value="COMPUTER SCIENCE ENGINEERING">
                  COMPUTER SCIENCE ENGINEERING
                </option>
                <option value="ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING">
                  ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
                </option>
                <option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
                <option value="ELECTRICAL AND COMMUNICATION ENGINEERING">
                  ELECTRICAL AND COMMUNICATION ENGINEERING
                </option>
              </AddTeacherDropdown>
              <AddTeacherDropdown
                name="position"
                value={newTeacher.position}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, position: e.target.value })
                }
              >
                <option value="">Select Position</option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Associate Professor">Associate Professor</option>
              </AddTeacherDropdown>
              <AddTeacherInput
                type="text"
                placeholder="Enter teacher subject codes"
                value={newTeacher.subjectCodes}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, subjectCodes: e.target.value })
                }
              />
              <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
            </AddTeacherForm>

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

            {categorizedTeachers("ELECTRICAL AND COMMUNICATION ENGINEERING")
              .length > 0 && (
              <>
                <TeachersHeader>
                  Electrical and Communication Engineering
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
                      "ELECTRICAL AND COMMUNICATION ENGINEERING"
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

export default Teachers;
