import "./Logo.scss";
import LogoMain from "./logo-home.svg";

function Logo() {
  return (
    <>
      <div className="logo">
        <img src={LogoMain} alt="logo-main" />
        <div className="logo__text">
          <div className="logo__text--left">HOME</div>
          <div className="logo__text--right">FINDER</div>
        </div>
      </div>
    </>
  );
}

export default Logo;
