import IconArrowLeft from "../../../assets/img/IconArrowLeft";
import IconArrowRight from "../../../assets/img/IconArrowRight";
import CardHome from "../../cards/card-home/CardHome";
import "./NearbyHomes.scss";

import home1 from "../../../assets/img/abby-rurenko-uOYak90r4L0-unsplash.jpg";
import home2 from "../../../assets/img/evelyn-paris-XJnP4L958ds-unsplash.jpg";
import home3 from "../../../assets/img/gus-ruballo-h5QNclJUiA8-unsplash.jpg";
import home4 from "../../../assets/img/matt-jones-xpDHTc-pkog-unsplash.jpg";
import home5 from "../../../assets/img/phil-hearing-IYfp2Ixe9nM-unsplash.jpg";
import home6 from "../../../assets/img/rowan-heuvel-bjej8BY1JYQ-unsplash.jpg";

function NearbyHomes() {
  return (
    <div className="nearby-homes__container">
      <div className="nearby-homes--top">
        <div className="nearby-homes--top--headline">
          <div className="nearby-homes--top--text">
            <h5>Homes for you in Traverse City, Mi.</h5>
            <span>Based on homes you recently viewed</span>
          </div>
          <div className="nearby-homes--top--arrows">
            <div className="nearby-homes--top--arrows--icon--border">
              <IconArrowLeft className="nearby-homes--top--arrows--icon" />
            </div>
            <div className="nearby-homes--top--arrows--icon--border">
              <IconArrowRight className="nearby-homes--top--arrows--icon" />
            </div>
          </div>
        </div>
        <div className="nearby-homes--top--slide">
          <CardHome homeURL={home1} daysOnMarket={170} />
          <CardHome homeURL={home2} daysOnMarket={12} />
          <CardHome homeURL={home3} daysOnMarket={35} />
          <CardHome homeURL={home4} daysOnMarket={89} />
          <CardHome homeURL={home5} daysOnMarket={214} />
          <CardHome homeURL={home6} daysOnMarket={7} />
        </div>
      </div>
      <div className="nearby-homes--middle">middle</div>
      <div className="nearby-homes--bottom">bottom</div>
    </div>
  );
}

export default NearbyHomes;
