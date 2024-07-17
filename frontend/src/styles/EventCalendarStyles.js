import styled from "styled-components";

export const EventCalendarContainer = styled.div`
  display: ${({ isDashboard }) => (isDashboard ? "block" : "flex")};
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const CalendarContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

export const Events = styled.div`
  margin-top: 20px;
`;

export const Event = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;

export const AddEventForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EventInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const EventDateInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const AddEventButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
`;
