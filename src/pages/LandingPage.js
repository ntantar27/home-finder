import "./LandingPage.scss";
import Hero from "../components/landingPage/Hero";
import NavBar from "../components/layout/navbar/NavBar";
import NearbyHomes from "../components/landingPage/section/NearbyHomes";

function LandingPage() {
  return (
    <div className="landing-page__container">
      <NavBar />
      <Hero />
      <div className="landing-page__nearby-homes--container">
        <NearbyHomes />
      </div>
    </div>
  );
}

export default LandingPage;
