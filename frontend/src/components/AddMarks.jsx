import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AddMarksContainer,
  FormLabel,
  FormInput,
  AddAssignmentSelect,
  AddMarksButton,
  MarksTable,
  TableRow,
  TableCell,
  AddMarksInput,
} from "../styles/AddMarksStyles";

const AddMarks = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    subjectCode: "",
    examType: "",
    internalType: "",
    marks: "",
    fullMarks: "",
    passFail: "",
  });

  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    fetchMarksData();
  }, []);

  const fetchMarksData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/marks/${studentId}`
      );
      console.log("Fetched marks data:", response.data.marks);
      setMarksData(response.data.marks);
    } catch (error) {
      console.error("Error fetching marks data:", error);
    }
  };

  const handleInputChange = (name, value) => {
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleAddMarks = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/marks/${studentId}`,
        formInputs
      );
      if (response.data.success) {
        fetchMarksData();
        setFormInputs({
          subjectCode: "",
          examType: "",
          internalType: "",
          marks: "",
          fullMarks: "",
          passFail: "",
        });
      } else {
        console.error("Error: API response data is not an object");
      }
    } catch (error) {
      console.error("Error adding marks:", error);
    }
  };

  const handleNavigateToDashboard = () => {
    navigate("/admin/dashboard");
  };

  const renderMarksTable = (filterCondition) => (
    <MarksTable>
      <thead>
        <tr>
          <TableCell>Subject Code</TableCell>
          <TableCell>Exam Type</TableCell>
          <TableCell>Internal Type</TableCell>
          <TableCell>Full Marks</TableCell>
          <TableCell>Scored Marks</TableCell>
          <TableCell>Pass/Fail</TableCell>
        </tr>
      </thead>
      <tbody>
        {marksData.filter(filterCondition).map((mark) => (
          <TableRow
            key={`${mark.subjectCode}-${mark.internalType || "external"}`}
          >
            <TableCell>{mark.subjectCode}</TableCell>
            <TableCell>{mark.examType}</TableCell>
            <TableCell>{mark.internalType || "N/A"}</TableCell>
            <TableCell>{mark.fullMarks}</TableCell>
            <TableCell>{mark.marks}</TableCell>
            <TableCell>{mark.passFail}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </MarksTable>
  );

  return (
    <AddMarksContainer>
      <FormLabel>Enter Subject Code:</FormLabel>
      <FormInput
        type="text"
        value={formInputs.subjectCode}
        onChange={(e) => handleInputChange("subjectCode", e.target.value)}
        required
      />
      <FormLabel>Exam Type:</FormLabel>
      <AddAssignmentSelect
        value={formInputs.examType}
        onChange={(e) => handleInputChange("examType", e.target.value)}
        required
      >
        <option value="" disabled>
          Select Exam Type
        </option>
        <option value="internal">Internal</option>
        <option value="external">External</option>
      </AddAssignmentSelect>
      {formInputs.examType === "internal" && (
        <>
          <FormLabel>Internal Type:</FormLabel>
          <AddAssignmentSelect
            value={formInputs.internalType}
            onChange={(e) => handleInputChange("internalType", e.target.value)}
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
        value={formInputs.marks}
        onChange={(e) => handleInputChange("marks", e.target.value)}
        required
      />
      <FormLabel>Enter Full Marks:</FormLabel>
      <AddMarksInput
        type="number"
        value={formInputs.fullMarks}
        onChange={(e) => handleInputChange("fullMarks", e.target.value)}
        required
      />
      <FormLabel>Pass/Fail:</FormLabel>
      <AddAssignmentSelect
        value={formInputs.passFail}
        onChange={(e) => handleInputChange("passFail", e.target.value)}
        required
      >
        <option value="" disabled>
          Select Pass/Fail
        </option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </AddAssignmentSelect>
      <AddMarksButton onClick={handleAddMarks}>Submit</AddMarksButton>
      <AddMarksButton onClick={handleNavigateToDashboard}>
        Go to Dashboard
      </AddMarksButton>

      <FormLabel>I INTERNAL</FormLabel>
      {renderMarksTable((mark) => mark.internalType === "I INTERNAL")}
      <FormLabel>II INTERNAL</FormLabel>
      {renderMarksTable((mark) => mark.internalType === "II INTERNAL")}
      <FormLabel>III INTERNAL</FormLabel>
      {renderMarksTable((mark) => mark.internalType === "III INTERNAL")}
      <FormLabel>EXTERNAL</FormLabel>
      {renderMarksTable((mark) => mark.examType === "external")}
    </AddMarksContainer>
  );
};

export default AddMarks;
