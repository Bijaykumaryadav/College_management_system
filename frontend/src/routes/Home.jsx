// Home.js
import {
  HomeContainer,
  SchoolInfo,
  Title,
  LoremTextContainer,
} from "../styles/styles";
import ImageSlider from "../components/ImageSlider";
import Enquire from "../components/Enquire";
import Admission from "../components/Admission";
import SocialMedia from "../components/Socialmedia";


const Home = () => {
  const loremText =
    "The College Management System (CMS) for Bangalore Technological Institute is designed to streamline and enhance the administrative and academic functions of the college. This comprehensive system provides various modules for managing students, teachers, classes, exams, and marks, thereby ensuring efficient and effective operations within the institution.";

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
