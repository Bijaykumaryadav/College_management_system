// Home.js
import {
  HomeContainer,
  SchoolInfo,
  Title,
  LoremTextContainer,
} from "../styles/styles";
import { LoremIpsum } from "lorem-ipsum";
import ImageSlider from "../components/ImageSlider";
import Enquire from "../components/Enquire";
import Admission from "../components/Admission";
import SocialMedia from "../components/Socialmedia";

const lorem = new LoremIpsum();

const Home = () => {
  const loremText = lorem.generateParagraphs(1);

  return (
    <>
      <HomeContainer>
        <SchoolInfo>
          <Title>College Management System</Title>
          <LoremTextContainer>
            <p>{loremText}</p>
          </LoremTextContainer>
        </SchoolInfo>
        <ImageSlider />
      </HomeContainer>
      <Enquire />
      <Admission />
      <SocialMedia />
    </>
  );
};

export default Home;
