import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";
import { getRecipe } from "../api";
import Recipes from "./Recipes";

const Display = ({ recipe, setRecipe, textInput, search }) => {
  useEffect(() => {
    if (search == " ") {
      axios
        .get(getRecipe("Random"))
        .then((data) => {
          setRecipe(data.data.recipes);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(getRecipe(`${search}`))
        .then((data) => {
          setRecipe(data.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [search]);

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
  overflow-y: scroll;
`;

export default Display;
