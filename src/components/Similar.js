import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { getRecipe } from "../api";
import SimilarRecipes from "./SimilarRecipes";

const Similar = ({ id, setId, setRname, similar, setSimilar }) => {
  useEffect(() => {
    axios
      .get(getRecipe("Similar", id))
      .then((data) => {
        setSimilar(data.data);
        console.log(similar);
      })
      .catch((err) => console.log("Similar Error"));
  }, [id]);
  return (
    <SimilarStyled>
      {similar.map((data) => (
        <SimilarRecipes
          title={data.title}
          img={data.image}
          setId={setId}
          key={data.id}
          id={data.id}
          setRname={setRname}
        />
      ))}
    </SimilarStyled>
  );
};

const SimilarStyled = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  border-radius: 35px;
  width: 85%;
  height: 75%;
  overflow: scroll;
`;

export default Similar;
