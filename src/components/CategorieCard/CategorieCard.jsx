import React from "react";
import styles from "./CategorieCard.module.css";

const CategorieCard = ({ category = "disney" }) => {
  let logo = "";

  switch (category) {
    case "starwars":
      logo =
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=600&aspectRatio=1.78&format=png";
      break;
    case "pixar":
      logo =
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png";
      break;
    case "disney":
      logo =
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=600&aspectRatio=1.78&format=png";
      break;
    case "marvel":
      logo =
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png";
      break;
    default:
      logo = "";
  }
  return (
    <div className={`${styles.Card} ${styles[category]}`}>
      <img class="title" src={logo} alt="" className={styles.image} />
    </div>
  );
};

export default CategorieCard;
