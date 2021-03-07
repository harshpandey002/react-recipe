import { motion } from "framer-motion";
import styled from "styled-components";
import { popup } from "./animation";

const SimilarRecipes = ({ title, id, setId, setRname }) => {
  const clickHandler = () => {
    setId(id);
    setRname(title);
  };
  return (
    <SimilarRecipesStyled variants={popup} initial="hidden" animate="show">
      <img
        onClick={clickHandler}
        src={`https://spoonacular.com/recipeImages/${id}-312x150.jpg`}
        alt="food"
      />
    </SimilarRecipesStyled>
  );
};

const SimilarRecipesStyled = styled(motion.div)`
  background-color: rgba(11, 11, 11, 0);
  width: 75%;
  height: 15vh;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    width: 80%;
    height: 17vh;
    border-bottom: 1px solid #929292;
  }
`;

export default SimilarRecipes;
