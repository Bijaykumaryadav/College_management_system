import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { SidebarProvider } from "./SidebarContext";
import {
  AnnouncementContainer,
  Content,
  Title,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
  AnnouncementDate,
} from "../../styles/AnnouncementStyles";

const Announcement = ({ isDashboard }) => {
  const [announcements, setAnnouncements] = useState([]);

  // Function to fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/announcements/getall"
      );
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <SidebarProvider>
      <AnnouncementContainer isDashboard={isDashboard}>
        <Sidebar />
        <Content>
          <Title>Announcements</Title>
          {/* Display Announcements */}
          <AnnouncementList>
            {announcements.map((announcement) => (
              <AnnouncementItem key={announcement._id}>
                <AnnouncementContent>
                  {announcement.announcement}
                </AnnouncementContent>
                <AnnouncementDate>
                  {new Date(announcement.date).toLocaleDateString()}
                </AnnouncementDate>
              </AnnouncementItem>
            ))}
          </AnnouncementList>
        </Content>
      </AnnouncementContainer>
    </SidebarProvider>
  );
};

export default Announcement;
