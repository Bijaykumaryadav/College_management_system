import styled from "styled-components";
import { FaWhatsapp, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

// Styled components
const SocialList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  position: fixed;
  top: 40%;
  left: 0;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const SocialItem = styled.li`
  margin-bottom: 0px; /* Added some space between items */
  transition: margin-left 0.3s ease;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  height: 56px;
  background-color: #6b7280;
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  padding: 0 12px;
  transition: all 0.3s ease;
  border-radius: 1px;
  margin-left: -100px;
  cursor: pointer;

  &:hover {
    background-color: #555;
    margin-left: 0; /* Slide in only the hovered link */
    border-radius: 8px;
  }

  span {
    margin-right: 8px; /* Adjust the space between the text and icon */
  }

  svg {
    font-size: 1.5rem;
    margin: 0; /* Remove any margin from the icon */
  }
`;

// Social media links data
const socialMediaLinks = [
  { name: "WhatsApp", url: "https://wa.me/917090404050", icon: <FaWhatsapp /> },
  {
    name: "Facebook",
    url: "https://www.facebook.com/bti.bangalore.315",
    icon: <FaFacebook />,
  },
  { name: "YouTube", url: "http://www.youtube.com/BTI", icon: <FaYoutube /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bti-bangalore-b224081b4/",
    icon: <FaLinkedin />,
  },
];

// Component
const SocialMedia = () => {
  return (
    <SocialList>
      {socialMediaLinks.map((link, index) => (
        <SocialItem key={index}>
          <SocialLink
            href={link.url}
            target="_blank"
            title={link.name}
            rel="noreferrer"
          >
            <span>{link.name}</span>
            {link.icon}
          </SocialLink>
        </SocialItem>
      ))}
    </SocialList>
  );
};

export default SocialMedia;
