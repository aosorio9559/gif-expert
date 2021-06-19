import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categories = ["One punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["FIFA 21"]);

  function handleAdd() {
    setCategories([...categories, "HOLA"]);
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
