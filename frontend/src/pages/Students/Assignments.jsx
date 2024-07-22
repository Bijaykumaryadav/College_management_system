// StudentAssignments.js
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentButton,
  AssignmentDoneMessage,
} from "../../styles/AssignmentsStyles";
import { SidebarProvider } from "./SidebarContext";

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [students, setStudents] = useState([]);
  const studentId = students.length > 0 ? students[0]._id : null; // Assuming the first student for now

  useEffect(() => {
    fetchAssignments();
    fetchStudents();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/assignments/getall"
      );
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/students"
      );
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDoAssignment = async (id, opinion) => {
    if (!studentId) {
      console.error("No student ID available");
      return;
    }

    try {
      await axios.post(
        "https://bticlz.onrender.com/api/v1/assignments/submit",
        {
          assignmentId: id,
          studentId: studentId,
          opinion: opinion,
        }
      );
      // Update the assignment as done in the local state
      setAssignments((prevAssignments) =>
        prevAssignments.map((assignment) =>
          assignment._id === id ? { ...assignment, done: true } : assignment
        )
      );
    } catch (error) {
      console.error("Error submitting assignment:", error);
    }
  };

  return (
    <SidebarProvider>
      <AssignmentsContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <h1>Assignments</h1>
          {assignments.map((assignment) => (
            <AssignmentCard key={assignment._id}>
              <AssignmentTitle>{assignment.title}</AssignmentTitle>
              <AssignmentDescription>
                {assignment.description}
              </AssignmentDescription>
              {!assignment.done ? (
                <AssignmentForm
                  onDoAssignment={(opinion) =>
                    handleDoAssignment(assignment._id, opinion)
                  }
                />
              ) : (
                <AssignmentDoneMessage>Assignment Done</AssignmentDoneMessage>
              )}
            </AssignmentCard>
          ))}
        </Content>
      </AssignmentsContainer>
    </SidebarProvider>
  );
};

const AssignmentForm = ({ onDoAssignment }) => {
  const [opinion, setOpinion] = useState("");

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== "") {
      onDoAssignment(opinion);
    } else {
      alert("Please provide your opinion/assignment.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={opinion}
        onChange={handleInputChange}
        placeholder="Enter your opinion/assignment..."
      />
      <AssignmentButton type="submit">Submit</AssignmentButton>
    </form>
  );
};

export default StudentAssignments;
