import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./SidebarContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
  AddAssignmentSelect,
} from "../../styles/AssignmentsStyles";

const Assignments = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    grade: "",
    deadline: "",
    department: "",
    semester: "",
    section: "",
    subSection: "",
  });
  const [assignments, setAssignments] = useState([]);
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/assignments/getall"
      );
      // Ensure that assignments are always an array
      setAssignments(response.data.assignments || []);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (
      newAssignment.title.trim() !== "" &&
      newAssignment.description.trim() !== "" &&
      newAssignment.grade.trim() !== "" &&
      newAssignment.deadline.trim() !== "" &&
      newAssignment.department.trim() !== "" &&
      newAssignment.semester.trim() !== "" &&
      newAssignment.section.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/assignments",
          newAssignment
        );
        toast.success("Assignment added successfully");
        // Fetch assignments again after adding
        fetchAssignments();
        setNewAssignment({
          title: "",
          description: "",
          grade: "",
          deadline: "",
          department: "",
          semester: "",
          section: "",
          subSection: "",
        });
        setDepartment("");
        setSemester("");
        setSection("");
      } catch (error) {
        console.error("Error adding assignment:", error);
        toast.error("Error adding assignment");
      }
    } else {
      toast.error("Please fill out all required fields");
    }
  };

  const categorizedAssignments = (dept) => {
    return assignments
      .filter(
        (assignment) => assignment.department && assignment.department === dept
      )
      .reduce((acc, assignment) => {
        const section = `${assignment.semester}-${assignment.section}`;
        if (!acc[section]) {
          acc[section] = [];
        }
        acc[section].push(assignment);
        return acc;
      }, {});
  };

  const renderAssignmentsByDepartmentAndSection = (dept) => {
    const categorized = categorizedAssignments(dept);
    return Object.keys(categorized).map((section) => (
      <div key={section}>
        <h3>Section: {section}</h3>
        <AssignmentList>
          {categorized[section].map((assignment) => (
            <AssignmentItem key={assignment._id}>
              <strong>{assignment.title}: </strong>
              {assignment.description}, {"deadline is:"} {assignment.deadline}
            </AssignmentItem>
          ))}
        </AssignmentList>
      </div>
    ));
  };

  return (
    <SidebarProvider>
      <AssignmentsContainer>
        <ToastContainer />
        <Sidebar />
        <Content>
          <AssignmentsContent>
            <AssignmentsHeader>Assignments</AssignmentsHeader>
            <AddAssignmentForm onSubmit={handleAddAssignment}>
              <AddAssignmentInput
                type="text"
                placeholder="Enter subject code"
                value={newAssignment.title}
                onChange={(e) =>
                  setNewAssignment({ ...newAssignment, title: e.target.value })
                }
              />
              <AddAssignmentTextArea
                placeholder="Enter assignment description"
                value={newAssignment.description}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    description: e.target.value,
                  })
                }
              />
              <AddAssignmentSelect
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setSemester("");
                  setSection("");
                  setNewAssignment({
                    ...newAssignment,
                    grade: "",
                    department: e.target.value,
                    semester: "",
                    section: "",
                    subSection: "",
                  });
                }}
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
              </AddAssignmentSelect>
              {department && (
                <AddAssignmentSelect
                  value={semester}
                  onChange={(e) => {
                    setSemester(e.target.value);
                    setSection("");
                    setNewAssignment({
                      ...newAssignment,
                      grade: e.target.value,
                      semester: e.target.value,
                      section: "",
                      subSection: "",
                    });
                  }}
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
                </AddAssignmentSelect>
              )}
              {semester && (
                <AddAssignmentSelect
                  value={section}
                  onChange={(e) => {
                    setSection(e.target.value);
                    setNewAssignment({
                      ...newAssignment,
                      section: e.target.value,
                      subSection: "",
                    });
                  }}
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
                </AddAssignmentSelect>
              )}
              {section && (section === "P Cycle" || section === "C Cycle") && (
                <AddAssignmentSelect
                  value={newAssignment.subSection}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      subSection: e.target.value,
                    })
                  }
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
                </AddAssignmentSelect>
              )}
              <AddAssignmentInput
                type="date"
                placeholder="Enter assignment deadline"
                value={newAssignment.deadline}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    deadline: e.target.value,
                  })
                }
              />
              <AddAssignmentButton type="submit">
                Add Assignment
              </AddAssignmentButton>
            </AddAssignmentForm>

            {assignments.length > 0 && (
              <>
                <AssignmentsHeader>
                  Computer Science Engineering
                </AssignmentsHeader>
                {renderAssignmentsByDepartmentAndSection(
                  "COMPUTER SCIENCE ENGINEERING"
                )}

                <AssignmentsHeader>
                  Artificial Intelligence and Machine Learning
                </AssignmentsHeader>
                {renderAssignmentsByDepartmentAndSection(
                  "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING"
                )}

                <AssignmentsHeader>Civil Engineering</AssignmentsHeader>
                {renderAssignmentsByDepartmentAndSection("CIVIL ENGINEERING")}

                <AssignmentsHeader>
                  Electronics and Communication Engineering
                </AssignmentsHeader>
                {renderAssignmentsByDepartmentAndSection(
                  "ELECTRONICS AND COMMUNICATION ENGINEERING"
                )}
              </>
            )}
          </AssignmentsContent>
        </Content>
      </AssignmentsContainer>
    </SidebarProvider>
  );
};

export default Assignments;
