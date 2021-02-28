import { useState } from "react";
//Components
import styled from "styled-components";
import Display from "./Display";
import Nav from "./Nav";
import Tool from "./Tool";
//Framer Motion
import { motion } from "framer-motion";

const Main = () => {
  const [textInput, setTextInput] = useState("");
  const [rname, setRname] = useState();
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [id, setId] = useState();
  return (
    <MainStyled>
      <Nav />
      <Display
        recipe={recipe}
        setRecipe={setRecipe}
        search={search}
        id={id}
        setId={setId}
        rname={rname}
        setRname={setRname}
      />
      <Tool
        recipe={recipe}
        setRecipe={setRecipe}
        textInput={textInput}
        setTextInput={setTextInput}
        setSearch={setSearch}
        id={id}
        setId={setId}
        rname={rname}
        setRname={setRname}
      />
    </MainStyled>
  );
};

const MainStyled = styled(motion.div)`
  display: flex;
  background-color: #121212;
  width: 95vw;
  height: 90vh;
  margin: 2.3rem auto;
  border-radius: 35px;
  overflow: hidden;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  @media only screen and (max-width: 1079px) {
    display: none;
  }
`;

export default Main;
