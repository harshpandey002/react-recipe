import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";
import { recipeDetail, recipeIngredient } from "../api";
import { popup } from "./animation";

const Recipe = ({ id, rname }) => {
  const [food, setFood] = useState([]);
  const [ingridient, setIngridient] = useState([]);
  useEffect(() => {
    axios
      .get(recipeDetail(id))
      .then((data) => {
        setFood(data.data[0].steps);
      })
      .catch((err) => console.log("Recipe API error"));

    axios
      .get(recipeIngredient(id))
      .then((data) => {
        setIngridient(data.data.ingredients);
      })
      .catch((err) => console.log("Ingridient API error"));
  }, [id]);
  return (
    <RecipeStyled>
      <div className="header">
        <h1>{rname}</h1>
        <motion.img
          variants={popup}
          initial="hidden"
          animate="show"
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
  width: 59vw;
  text-align: center;
  border-radius: 25px;
  margin-top: 1rem;

  background-color: rgba(0, 0, 0, 0.158);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  h1 {
    text-transform: capitalize;
  }
  .header {
    margin-top: 0.6rem;
    margin-bottom: 2rem;
  }
  .recipe {
    display: flex;

    h2 {
      border-bottom: 2px solid rgba(163, 163, 163, 0.2);
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
        font-size: 1.3rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
    }
    .ingredient {
      border-left: 2px solid rgba(163, 163, 163, 0.2);
      flex: 2;
      padding-right: 1rem;
      p {
        font-size: 1.3rem;
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export default Recipe;
