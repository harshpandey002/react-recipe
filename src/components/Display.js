import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";
import { randomRecipe, searchRecipe } from "../api";
import Recipes from "./Recipes";
import Recipe from "./Recipe";

const Display = ({ recipe, setRecipe, search, id, setId, rname, setRname }) => {
  useEffect(() => {
    if (search == "") {
      axios
        .get(randomRecipe())
        .then((data) => {
          setRecipe(data.data.recipes);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(searchRecipe(`${search}`))
        .then((data) => {
          setRecipe(data.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [search]);

  return (
    <DisplayStyled>
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
