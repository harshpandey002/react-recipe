import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";
import { randomRecipe } from "../api";

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
        <h2>{data.title}</h2>
      ))}
    </DisplayStyled>
  );
};

const DisplayStyled = styled(motion.div)`
  flex: 20;
`;

export default Display;
