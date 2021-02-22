import { motion } from "framer-motion";
import styled from "styled-components";

const Recipes = ({ title, img, id, setId, setRname }) => {
  const clickHandler = () => {
    setId(id);
    setRname(title);
  };
  return (
    <RecipesStyled>
      <div className="card" onClick={clickHandler}>
        <img src={img} alt="food" />
        <div className="title">
          <h4>{title}</h4>
        </div>
      </div>
    </RecipesStyled>
  );
};

const RecipesStyled = styled(motion.div)`
  background-color: rgb(11, 11, 11);
  width: 30%;
  height: 23vh;
  border-radius: 25px;
  overflow: hidden;
  margin-right: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  .card {
    img {
      width: 100%;
      height: 20vh;
      object-fit: cover;
    }
  }
  .title {
    text-align: center;
    font-size: 1.1rem;
  }
`;

export default Recipes;
