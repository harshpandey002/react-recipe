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
  width: 95vw;
  height: 90vh;
  margin: 2.3rem auto;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.363);
  @media only screen and (max-width: 1079px) {
    display: none;
  }
  background-color: rgba(0, 0, 0, 0.158);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 35px;
`;

export default Main;
