import { motion } from "framer-motion";
import styled from "styled-components";

const SimilarRecipes = ({ title, id, setId, setRname }) => {
  const clickHandler = () => {
    setId(id);
    setRname(title);
  };
  return (
    <SimilarRecipesStyled>
      <img
        onClick={clickHandler}
        src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`}
        alt="food"
      />
    </SimilarRecipesStyled>
  );
};

const SimilarRecipesStyled = styled(motion.div)`
  background-color: rgb(11, 11, 11);
  width: 75%;
  height: 15vh;
  border-radius: 25px;
  overflow: hidden;
  margin-top: 1.5rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default SimilarRecipes;
