import "./CardHome.scss";
import home1 from "../../../assets/img/abby-rurenko-uOYak90r4L0-unsplash.jpg";
import home2 from "../../../assets/img/evelyn-paris-XJnP4L958ds-unsplash.jpg";
import home3 from "../../../assets/img/gus-ruballo-h5QNclJUiA8-unsplash.jpg";
import home4 from "../../../assets/img/matt-jones-xpDHTc-pkog-unsplash.jpg";
import home5 from "../../../assets/img/phil-hearing-IYfp2Ixe9nM-unsplash.jpg";
import home6 from "../../../assets/img/rowan-heuvel-bjej8BY1JYQ-unsplash.jpg";

function CardHome({ homeURL, daysOnMarket = 7 }) {
  return (
    <div className="card-home__container">
      <div
        style={{
          backgroundImage: `url(${homeURL})`,
        }}
        className="card-home__top"
      >
        <div className="card-home__days-on-market">
          <span>{daysOnMarket} days on Home Finder</span>
        </div>
      </div>
      <div className="card-home__bottom">bottom</div>
    </div>
  );
}

export default CardHome;
