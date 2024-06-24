import styled from "styled-components";

// Styled component for the main wrapper with gradient background
const Wrapper = styled.div`
  background: linear-gradient(to bottom right, orange, #401902, #edd68c);
  color: #fff;
  padding: 40px 0;
`;

// Styled component for the container inside the wrapper
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

// Styled component for each column
const Column = styled.div`
  flex: 1 1 300px;
  padding: 0px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 20px;
  }
`;

// Styled component for the heading (h4)
const Heading = styled.h4`
  font-size: 20px;
  margin-bottom: 15px;
`;

// Styled component for the paragraph (p)
const Paragraph = styled.p`
  line-height: 1.6;
`;

// Styled component for the links (ul)
const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Styled component for each link item (li)
const LinkItem = styled.li`
  margin-bottom: 8px;
`;

// Styled component for hyperlinks without underline and cursor pointer on hover
const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ffc107; /* Change color on hover */
  }
`;

// Footer component
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Heading>BANGALORE TECHNOLOGICAL INSTITUTE</Heading>
          <Paragraph>
            (An ISO 9001:2015 Certified Institute) Approved by AICTE,
            <br />
            Affiliated to VTU, Recognised by GoK.
            <br />
            Off Sarjapur Road, Near Wipro Corporate Office,
            <br />
            Chikkanayakanahalli Dinne Bangalore-35.
          </Paragraph>
          <Paragraph>
            Contact Principal:{" "}
            <StyledLink href="#">principal@btibangalore.org</StyledLink>
            <br />
            General Queries:{" "}
            <StyledLink href="#">contactus@btibangalore.org</StyledLink>
          </Paragraph>
        </Column>
        <Column>
          <Heading>AFFILIATIONS</Heading>
          <Paragraph>
            Approved by AICTE, New Delhi
            <br />
            Affiliated to VTU, Belagavi
            <br />
            Recognized by Govt. of Karnataka
            <br />
            ISO 9001:2015 Certified
            <br />
            In the process of NAAC and NBA & NIRF
          </Paragraph>
        </Column>
        <Column>
          <Heading>BTI CELL</Heading>
          <LinkList>
            <LinkItem>
              <StyledLink href="#">Student Counseling Cell</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#">Research & Development Cell</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#">
                Industry – Institution Interaction Cell
              </StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#">Entrepreneur Development Cell</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#">Career Guidance Cell</StyledLink>
            </LinkItem>
          </LinkList>
        </Column>
        <Column>
          <Heading>USEFUL LINKS</Heading>
          <LinkList>
            <LinkItem>
              <StyledLink href="#">Cultural Activities</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#">Mandatory Committees</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#">Quality Policy</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#">Careers</StyledLink>
            </LinkItem>
          </LinkList>
        </Column>
      </Container>
    </Wrapper>
  );
};

export default Footer;
