import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";
import { getRecipe } from "../api";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import ScrollTop from "./ScrollTop";

const Display = ({ recipe, setRecipe, search, id, setId }) => {
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

  const [rname, setRname] = useState();

  return (
    <DisplayStyled>
      <ScrollTop id={id} />
      {id && <Recipe id={id} rname={rname} />}
      {recipe.map((data) => (
        <Recipes
          title={data.title}
          img={data.image}
          setId={setId}
          key={data.id}
          id={data.id}
          setRname={setRname}
        />
      ))}
    </DisplayStyled>
  );
};

const DisplayStyled = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 1.6rem;
  padding-bottom: 2.7rem;
  flex: 20;
  overflow-y: scroll;
`;

export default Display;
