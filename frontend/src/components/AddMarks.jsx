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
  const [overallPercentages, setOverallPercentages] = useState({});

  useEffect(() => {
    fetchMarksData();
  }, []);

  const fetchMarksData = async () => {
    try {
      const response = await axios.get(
        `https://bticlz.onrender.com/api/v1/marks/${studentId}`
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
      const marksDataToSend = { ...formInputs };
      if (marksDataToSend.examType !== "internal") {
        delete marksDataToSend.internalType;
      }
      const response = await axios.post(
        `https://bticlz.onrender.com/api/v1/marks/${studentId}`,
        marksDataToSend
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

  const calculateOverallPercentage = async (type, isExternal = false) => {
    const filteredMarks = marksData.filter((mark) =>
      isExternal ? mark.examType === type : mark.internalType === type
    );

    if (filteredMarks.length === 0) {
      setOverallPercentages((prev) => ({
        ...prev,
        [type]: "N/A",
      }));
      return;
    }

    const totalMarks = filteredMarks.reduce((acc, mark) => acc + mark.marks, 0);
    const totalFullMarks = filteredMarks.reduce(
      (acc, mark) => acc + mark.fullMarks,
      0
    );

    if (totalFullMarks === 0) {
      setOverallPercentages((prev) => ({
        ...prev,
        [type]: "N/A",
      }));
      return;
    }

    const overallPercentage = ((totalMarks / totalFullMarks) * 100).toFixed(2);

    setOverallPercentages((prev) => ({
      ...prev,
      [type]: overallPercentage,
    }));

    if (isExternal) {
      try {
        const response = await axios.post(
          `https://bticlz.onrender.com/api/v1/marks/percentage/${studentId}`,
          { externalPercentage: overallPercentage }
        );
        if (!response.data.success) {
          console.error("Error updating external percentage");
        }
      } catch (error) {
        console.error("Error updating external percentage:", error);
      }
    }
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
      <AddMarksButton onClick={() => calculateOverallPercentage("I INTERNAL")}>
        Calculate Overall Percentage
      </AddMarksButton>
      {overallPercentages["I INTERNAL"] && (
        <div>Overall Percentage: {overallPercentages["I INTERNAL"]}%</div>
      )}
      <FormLabel>II INTERNAL</FormLabel>
      {renderMarksTable((mark) => mark.internalType === "II INTERNAL")}
      <AddMarksButton onClick={() => calculateOverallPercentage("II INTERNAL")}>
        Calculate Overall Percentage
      </AddMarksButton>
      {overallPercentages["II INTERNAL"] && (
        <div>Overall Percentage: {overallPercentages["II INTERNAL"]}%</div>
      )}
      <FormLabel>III INTERNAL</FormLabel>
      {renderMarksTable((mark) => mark.internalType === "III INTERNAL")}
      <AddMarksButton
        onClick={() => calculateOverallPercentage("III INTERNAL")}
      >
        Calculate Overall Percentage
      </AddMarksButton>
      {overallPercentages["III INTERNAL"] && (
        <div>Overall Percentage: {overallPercentages["III INTERNAL"]}%</div>
      )}
      <FormLabel>EXTERNAL</FormLabel>
      {renderMarksTable((mark) => mark.examType === "external")}
      <AddMarksButton
        onClick={() => calculateOverallPercentage("external", true)}
      >
        Calculate Overall Percentage
      </AddMarksButton>
      {overallPercentages["external"] && (
        <div>Overall Percentage: {overallPercentages["external"]}%</div>
      )}
    </AddMarksContainer>
  );
};

export default AddMarks;
