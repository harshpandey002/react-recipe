import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";
import { getRecipe } from "../api";
import Recipes from "./Recipes";
import Recipe from "./Recipe";

const Display = ({ recipe, setRecipe, search }) => {
  useEffect(() => {
    if (search == "") {
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

  const [id, setId] = useState(null);

  return (
    <DisplayStyled>
      {/* <Recipe id={id} recipe={recipe[7]} /> */}
      {recipe.map((data) => (
        <Recipes
          title={data.title}
          img={data.image}
          setId={setId}
          key={data.id}
          id={data.id}
        />
      ))}
    </DisplayStyled>
  );
};

const DisplayStyled = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex: 20;
  padding: 3.2rem 0 0.8rem 3.5rem;
  overflow-y: scroll;
`;

export default Display;
