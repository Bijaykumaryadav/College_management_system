// AnnouncementSection.js
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  AnnouncementContainer,
  SidebarContainer,
  Content,
  AnnouncementHeader,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementTitle,
} from "../../styles/AnnouncementStyles";
import { SidebarProvider } from "./SidebarContext";

const AnnouncementSection = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/announcements/getall"
      );
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  return (
    <SidebarProvider>
      <AnnouncementContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <AnnouncementHeader>Announcements</AnnouncementHeader>
          <AnnouncementList>
            {announcements.map((announcement) => (
              <AnnouncementItem key={announcement._id}>
                <AnnouncementTitle>
                  {announcement.announcement}
                </AnnouncementTitle>
              </AnnouncementItem>
            ))}
          </AnnouncementList>
        </Content>
      </AnnouncementContainer>
    </SidebarProvider>
  );
};

export default AnnouncementSection;
