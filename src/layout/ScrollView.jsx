import React from "react";
import Recommanded from "../components/Recommanded/Recommanded";
const ScrollView = () => {
  return (
    <div className="app__container__scrollview">
      <Recommanded title="Notre sélection" />
      <Recommanded title="Tout sur xfiles" />
      <Recommanded title="Les pincesses Disney" />
      <Recommanded title="Films de pirate" />
      <Recommanded title="Marvel" />
    </div>
  );
};

export default ScrollView;
