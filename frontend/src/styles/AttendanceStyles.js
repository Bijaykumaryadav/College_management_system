import styled from "styled-components";

export const AttendanceContainer = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const AttendanceContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AttendanceHeader = styled.h2`
  margin-bottom: 20px;
`;

export const AttendanceList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarContainer = styled.div`
  display: block;
`;

export const AttendanceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const StudentName = styled.span`
  flex: 1;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-left: 10px;

  input {
    margin-right: 5px;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AttendanceDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
    font-weight: bold;
  }

  input {
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

export const AttendanceStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
    font-weight: bold;
  }

  select {
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
  }
`;

