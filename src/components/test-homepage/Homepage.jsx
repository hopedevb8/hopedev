import { Container } from "./StyledHomepage";
import Header from "./header/Header";
import Protection from "./protection/Protection";
import HomeBanner from "./home-banner/HomeBanner";
import Platform from "./platform/Platform";
import Started from "./started/Started";
import Why from "./why/Why";
import UserStory from "./user-stories/UserStory";
import FAQ from "./faq/FAQ";
import Footer from "./footer/Footer";
import TimelineDemo from "./timeline/Timeline";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <HomeBanner />
      <Platform />
      <Started />
      <Why />
      <TimelineDemo/>
      <Protection />
      <UserStory />
      <FAQ />
      <Footer />
    </Container>
  );
};
export default HomePage;
