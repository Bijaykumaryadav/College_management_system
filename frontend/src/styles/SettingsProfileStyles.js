// SettingsProfileStyles.js
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  display: block;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ProfileHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ProfileDetails = styled.div`
  max-width: 400px;
`;

export const ProfileLabel = styled.label`
  font-weight: bold;
`;

export const ProfileInfo = styled.p`
  margin-bottom: 10px;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ProfileDetail = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Value = styled.span`
  margin-left: 10px;
`;

export const LogoutButton = styled.button`
  display: block;
  padding: 10px 20px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px; // Optional: to add some space if needed
`;
