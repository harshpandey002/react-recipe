import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";
import { randomRecipe } from "../api";
import Recipes from "./Recipes";

const Display = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    axios
      .get(randomRecipe())
      .then((data) => {
        setRecipe(data.data.recipes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DisplayStyled>
      {recipe.map((data) => (
        <Recipes title={data.title} img={data.image} key={data.id} />
      ))}
    </DisplayStyled>
  );
};

const DisplayStyled = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex: 20;
  padding: 3.2rem 0 0.8rem 2.5rem;
`;

export default Display;
