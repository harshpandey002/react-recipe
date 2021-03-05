import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeIn } from "./animation";

const Recipes = ({ title, id, setId, setRname }) => {
  const clickHandler = () => {
    setId(id);
    setRname(title);
  };
  return (
    <RecipesStyled variants={fadeIn} initial="hidden" animate="show">
      <div className="card" onClick={clickHandler}>
        <img
          src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`}
          alt="food"
        />

        <div className="title">
          <h4>{title}</h4>
        </div>
      </div>
    </RecipesStyled>
  );
};

const RecipesStyled = styled(motion.div)`
  width: 30%;
  height: 25vh;
  border-radius: 25px;
  overflow: hidden;
  margin-top: 1.5rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.158);
  .card {
    img {
      width: 100%;
      height: 22vh;
      object-fit: cover;
    }
  }
  .title {
    text-align: center;
    font-size: 1.1rem;
  }
  transition: all 0.3s;
  &:hover {
    width: 35%;
    height: 28vh;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid #929292;
  }
`;

export default Recipes;
