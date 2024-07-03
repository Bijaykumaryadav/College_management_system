// AdminDashboardStyles.js
import styled from "styled-components";

export const AdminDashboardContainer = styled.div`
  display: block;
`;

export const Content = styled.div`
  flex: 1;
  transition: margin-left 0.3s ease;
`;

export const TopContent = styled.div`
  gap: 20px;
  flex: 1; /* Take remaining space */
`;

export const BottomContent = styled.div`
  display: block;
  margin-top: 20px;
  /* Make the content side by side */
  gap: 20px; /* Add gap between the components */
`;

export const Section = styled.section`
  margin-bottom: 40px;
  flex: 1; /* Make the sections expand to fill the available space */
`;

export const SectionTitle = styled.h2`
  padding: 20px;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333; /* Darker text color */
`;

export const CardContainer = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  max-width: 250px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #007bff;
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #555555;
`;

export const StudentDashboardContainer = styled.div`
  display: block;
`;

export const TeacherDashboardContainer = styled.div`
  display: block;
`;
