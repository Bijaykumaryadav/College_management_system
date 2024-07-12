import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const [formInputs, setFormInputs] = useState({
    subjectCode: "",
    examType: "",
    internalType: "",
    marks: "",
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
        });
      } else {
        console.error("Error: API response data is not an object");
      }
    } catch (error) {
      console.error("Error adding marks:", error);
    }
  };

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
      <AddMarksButton onClick={handleAddMarks}>Submit</AddMarksButton>

      <MarksTable>
        <thead>
          <tr>
            <TableCell>Subject Code</TableCell>
            <TableCell>Exam Type</TableCell>
            <TableCell>Internal Type</TableCell>
            <TableCell>Full Marks</TableCell>
            <TableCell>Scored Marks</TableCell>
          </tr>
        </thead>
        <tbody>
          {marksData.map((mark) => (
            <TableRow key={mark.subjectCode}>
              <TableCell>{mark.subjectCode}</TableCell>
              <TableCell>{mark.examType}</TableCell>
              <TableCell>{mark.internalType}</TableCell>
              <TableCell>{mark.fullMarks}</TableCell>
              <TableCell>
                <input
                  type="number"
                  value={mark.scoredMarks}
                  onChange={(e) =>
                    handleMarksChange(mark.subjectCode, e.target.value)
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </MarksTable>
    </AddMarksContainer>
  );
};

export default AddMarks;
