import SearchBar from "../forms/SearchBar";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__content--container">
        <div className="hero__content">
          <div className="hero__content--headline">
            <h1>
              Agents. Tours.
              <br />
              Loans. Homes.
            </h1>
          </div>
          <div className="hero__content--search-bar--container">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
