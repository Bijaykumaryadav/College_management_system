import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BsGraphUp,
  BsPeople,
  BsPerson,
  BsFileText,
  BsBook,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
  BsCalendarEvent,
} from "react-icons/bs";
import logo from "../assets/logo.png";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
  height: 100%;
  background-color: #2c3e50;
  color: white;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease;
  z-index: 100;
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495e;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #34495e;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: ${({ isOpen }) => (isOpen ? "150px" : "50px")};
  cursor: pointer;
  height: auto;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #34495e;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleIcon = styled.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const MainContent = styled.div`
  margin-left: ${({ isOpen }) => (isOpen ? "265px" : "80px")};
  transition: margin-left 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>
          <Link to="/">
            <Logo src={logo} alt="Logo" isOpen={isOpen} />
          </Link>
        </SidebarHeader>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGraphUp />
            </SidebarIcon>
            <StyledLink to="/admin/dashboard">Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsPeople />
            </SidebarIcon>
            <StyledLink to="/admin/classes">Classes</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsPeople />
            </SidebarIcon>
            <StyledLink to="/admin/students">Students</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsPerson />
            </SidebarIcon>
            <StyledLink to="/admin/teachers">Teachers</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsFileText />
            </SidebarIcon>
            <StyledLink to="/admin/assignments">Assignments</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsBook />
            </SidebarIcon>
            <StyledLink to="/admin/exams">Exams</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGraphDown />
            </SidebarIcon>
            <StyledLink to="/admin/performance">Performance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsCalendar />
            </SidebarIcon>
            <StyledLink to="/admin/attendance">Attendance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsBook />
            </SidebarIcon>
            <StyledLink to="/admin/library">Library</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsChatDots />
            </SidebarIcon>
            <StyledLink to="/admin/communication">Announcement</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsCalendarEvent />
            </SidebarIcon>
            <StyledLink to="/admin/events">Events & Calendar</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGear />
            </SidebarIcon>
            <StyledLink to="/admin/settings">Settings & Profile</StyledLink>
          </SidebarNavItem>
        </SidebarNav>
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
        </ToggleButton>
      </SidebarContainer>
      <MainContent isOpen={isOpen}>
        <ContentWrapper>{children}</ContentWrapper>
      </MainContent>
    </>
  );
};

export default Sidebar;
