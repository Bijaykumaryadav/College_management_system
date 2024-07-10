import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./SidebarContext";
import axios from "axios";
import {
  ExamContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
  AddAssignmentSelect,
  ExamList,
  ExamItem,
  AddMarksInput,
  AddMarksButton,
} from "../../styles/ExamStyles";

const Exam = () => {
  const [examData, setExamData] = useState([]);
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [subSection, setSubSection] = useState("");
  const [additionalMarks, setAdditionalMarks] = useState({});
  const [showAddMarksForm, setShowAddMarksForm] = useState({});
  const [subjectCode, setSubjectCode] = useState("");
  const [examType, setExamType] = useState("");
  const [internalType, setInternalType] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/exam/getall"
      );
      console.log(response.data);
      if (Array.isArray(response.data.exams)) {
        setExamData(response.data.exams);
      } else {
        setExamData([]);
      }
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();
    const newExam = {
      name,
      registrationNumber,
      className: `${department} - Semester ${semester} - ${section} - ${subSection}`,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/exam",
        newExam
      );
      console.log(response.data);
      if (response.data.success) {
        setExamData([...examData, response.data.exam]);
        setName("");
        setRegistrationNumber("");
        setDepartment("");
        setSemester("");
        setSection("");
        setSubSection("");
      } else {
        console.error("Error: API response data is not an object");
      }
    } catch (error) {
      console.error("Error adding exam:", error);
    }
  };

  const handleAddMarks = async (index) => {
    const exam = examData[index];
    const newMarks = parseInt(additionalMarks[index]);
    if (isNaN(newMarks)) {
      alert("Please enter valid marks");
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/exam/${exam._id}`,
        {
          marks: exam.marks + newMarks,
        }
      );
      console.log(response.data);
      if (response.data.success) {
        const updatedExamData = [...examData];
        updatedExamData[index].marks += newMarks;
        setExamData(updatedExamData);
        setAdditionalMarks({ ...additionalMarks, [index]: "" });
      } else {
        console.error("Error: API response data is not an object");
      }
    } catch (error) {
      console.error("Error adding marks:", error);
    }
  };

  const toggleAddMarksForm = (index) => {
    setShowAddMarksForm({
      ...showAddMarksForm,
      [index]: !showAddMarksForm[index],
    });
  };

  const calculateTotalMarks = () => {
    let total = 0;
    for (let i = 0; i < examData.length; i++) {
      total += examData[i].marks;
    }
    return total;
  };

  return (
    <SidebarProvider>
      <ExamContainer>
        <Sidebar />
        <Content>
          <ExamHeader>Exam Evaluation Details</ExamHeader>
          <ExamForm onSubmit={handleAddExam}>
            <FormLabel>Name:</FormLabel>
            <FormInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormLabel>USN:</FormLabel>
            <FormInput
              type="text"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
            <FormLabel>Department:</FormLabel>
            <AddAssignmentSelect
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setSemester("");
                setSection("");
                setSubSection("");
              }}
              required
            >
              <option value="" disabled>
                Select Department
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
              <>
                <FormLabel>Semester:</FormLabel>
                <AddAssignmentSelect
                  value={semester}
                  onChange={(e) => {
                    setSemester(e.target.value);
                    setSection("");
                    setSubSection("");
                  }}
                  required
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
              </>
            )}
            {semester && (
              <>
                <FormLabel>Section:</FormLabel>
                <AddAssignmentSelect
                  value={section}
                  onChange={(e) => {
                    setSection(e.target.value);
                    setSubSection("");
                  }}
                  required
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
              </>
            )}
            {section && (section === "P Cycle" || section === "C Cycle") && (
              <>
                <FormLabel>Sub Section:</FormLabel>
                <AddAssignmentSelect
                  value={subSection}
                  onChange={(e) => setSubSection(e.target.value)}
                  required
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
              </>
            )}
            <AddButton type="submit">Add Exam</AddButton>
          </ExamForm>
          <h2>Total Marks: {calculateTotalMarks()}</h2>
          <h3>Exam Details:</h3>
          <ExamList>
            {examData.map((exam, index) => (
              <ExamItem key={index}>
                <div>
                  Name: {exam.name}, USN: {exam.registrationNumber}, Class:{" "}
                  {exam.className}, Marks: {exam.marks}
                </div>
                <div>
                  <AddMarksButton onClick={() => toggleAddMarksForm(index)}>
                    Add Marks
                  </AddMarksButton>
                  {showAddMarksForm[index] && (
                    <div>
                      <FormLabel>Enter Subject Code:</FormLabel>
                      <FormInput
                        type="text"
                        value={subjectCode}
                        onChange={(e) => setSubjectCode(e.target.value)}
                        required
                      />
                      <FormLabel>Exam Type:</FormLabel>
                      <AddAssignmentSelect
                        value={examType}
                        onChange={(e) => setExamType(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select Exam Type
                        </option>
                        <option value="internal">Internal</option>
                        <option value="external">External</option>
                      </AddAssignmentSelect>
                      {examType === "internal" && (
                        <>
                          <FormLabel>Internal Type:</FormLabel>
                          <AddAssignmentSelect
                            value={internalType}
                            onChange={(e) => setInternalType(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Select Internal Type
                            </option>
                            <option value="I INTERNAL">I INTERNAL</option>
                            <option value="II INTERNAL">II INTERNAL</option>
                            <option value="III INTERNAL">III INTERNAL</option>
                          </AddAssignmentSelect>
                        </>
                      )}
                      <FormLabel>Enter Marks:</FormLabel>
                      <AddMarksInput
                        type="number"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                        required
                      />
                      <AddMarksButton onClick={() => handleAddMarks(index)}>
                        Submit
                      </AddMarksButton>
                    </div>
                  )}
                </div>
              </ExamItem>
            ))}
          </ExamList>
        </Content>
      </ExamContainer>
    </SidebarProvider>
  );
};

export default Exam;
