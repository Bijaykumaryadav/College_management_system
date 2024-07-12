import styled from "styled-components";

// Styled components
export const AddMarksContainer = styled.div`
  padding: 20px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
`;

export const AddAssignmentSelect = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  background-color: #fff;
  font-size: 16px;
`;

export const AddMarksInput = styled.input`
  padding: 8px;
  margin-right: 10px;
`;

export const AddMarksButton = styled.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const MarksTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;
