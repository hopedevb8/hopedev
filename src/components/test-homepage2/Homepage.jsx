import { Container, ContentContainer } from "./StyledHomepage";
import Header from "./header/Header";
import LeftBar from "./left-bar/LeftBar";
import MiddleContent from "./middle/MiddleContent";
import RightBar from "./right-bar/RightBar";
const HomePage = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <LeftBar />
        <MiddleContent />
        <RightBar />
      </ContentContainer>
    </Container>
  );
};
export default HomePage;
