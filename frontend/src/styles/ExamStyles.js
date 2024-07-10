import styled from "styled-components";

export const ExamContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  display: block;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ExamHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ExamForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
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

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ExamResultsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const ExamSubject = styled.h3`
  margin-bottom: 10px;
`;

export const ExamResult = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

export const ExamChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const ExamList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ExamItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
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
