import React from "react";
import CategorieCard from "../components/CategorieCard/CategorieCard";
const Categories = () => {
  return (
    <div className="app__container__categories">
      <CategorieCard category="marvel" />
      <CategorieCard category="starwars" />
      <CategorieCard category="disney" />
      <CategorieCard category="pixar" />
      <CategorieCard />
    </div>
  );
};

export default Categories;
