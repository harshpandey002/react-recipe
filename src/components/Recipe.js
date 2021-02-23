import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";
import { getRecipe } from "../api";

const Recipe = ({ id, rname }) => {
  const [food, setFood] = useState([]);
  const [ingridient, setIngridient] = useState([]);
  useEffect(() => {
    axios
      .get(getRecipe("Details", id))
      .then((data) => {
        setFood(data.data[0].steps);
        console.log(food);
      })
      .catch((err) => console.log("recipe error"));

    axios
      .get(getRecipe("Ingredients", id))
      .then((data) => {
        setIngridient(data.data.ingredients);
        console.log(data.data.ingredients);
      })
      .catch((err) => console.log("ingridient error"));
  }, [id]);
  return (
    <RecipeStyled>
      <div className="header">
        <h1>{rname}</h1>
        <img
          src={`https://spoonacular.com/recipeImages/${id}-636x393.jpg`}
          alt="food"
        />
      </div>
      <div className="recipe">
        <div className="description">
          <h2>Steps:</h2>
          <ol>
            {food.map((data) => (
              <li>{data.step}</li>
            ))}
          </ol>
        </div>
        <div className="ingredient">
          <h2>Ingredients:</h2>
          {ingridient.map((data) => (
            <p>{`${data.name} (${data.amount.metric.value}${data.amount.metric.unit})`}</p>
          ))}
        </div>
      </div>
    </RecipeStyled>
  );
};

const RecipeStyled = styled(motion.div)`
  /* position: absolute; */
  background-color: #0b0b0b;
  width: 59vw;
  text-align: center;
  border-radius: 25px;
  margin-top: 1.9rem;
  h1 {
    text-transform: capitalize;
  }
  .header {
    margin-bottom: 2rem;
  }
  .recipe {
    display: flex;
    h2 {
      border-bottom: 2px solid #a3a3a3;
      margin-bottom: 1rem;
    }
    .description {
      text-align: left;
      flex: 5;
      padding-left: 1rem;
      h2 {
        padding-left: 1.5rem;
      }
      li {
        font-size: 1.8rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
    }
    .ingredient {
      border-left: 2px solid #a3a3a3;
      flex: 2;
      padding-right: 1rem;
      p {
        font-size: 1.5rem;
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export default Recipe;
