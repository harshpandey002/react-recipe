import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";
import { getRecipe } from "../api";

const Recipe = ({ id, recipe }) => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    axios
      .get(getRecipe("Details", id))
      .then((data) => {
        setFood(data.data[0].steps);
        console.log(food);
      })
      .catch((err) => console.log("Error"));
  }, [id]);
  return (
    <RecipeStyled>
      <div className="header">
        <h1>{recipe.title}</h1>
        <img
          src={`https://spoonacular.com/recipeImages/${id}-636x393.jpg`}
          alt="food"
        />
      </div>
      <div className="description">
        <h2>Steps:</h2>
        <ol>
          {food.map((data) => (
            <li>{data.step}</li>
          ))}
        </ol>
      </div>
    </RecipeStyled>
  );
};

const RecipeStyled = styled(motion.div)`
  position: absolute;
  background-color: #0b0b0b;
  text-align: center;
  padding: 2rem 1.7rem;
  .header {
    margin-bottom: 2rem;
  }
  .description {
    text-align: left;
    li {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
`;

export default Recipe;
