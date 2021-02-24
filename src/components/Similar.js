import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { getRecipe } from "../api";
import Recipes from "./Recipes";

const Similar = ({ id, setId, setRname }) => {
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    axios
      .get(getRecipe("Similar", id))
      .then((data) => {
        setSimilar(data.data);
        console.log(similar);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <SimilarStyled>
      {similar.map((data) => (
        <Recipes
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
  text-align: center;
  background-color: #121212;
  border-radius: 35px;
  width: 85%;
  height: 75%;
  overflow: scroll;
`;

export default Similar;
