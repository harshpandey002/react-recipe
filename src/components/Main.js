import { useState } from "react";
//Components
import styled from "styled-components";
import Display from "./Display";
import Nav from "./Nav";
import Tool from "./Tool";
//Framer Motion
import { motion } from "framer-motion";
import ScrollTop from "./ScrollTop";
import { popup } from "./animation";

const Main = () => {
  const [textInput, setTextInput] = useState("");
  const [rname, setRname] = useState();
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [similar, setSimilar] = useState([]);
  const [id, setId] = useState();
  return (
    <MainStyled>
      <ScrollTop id={id} />
      <Nav
        setSearch={setSearch}
        setId={setId}
        setSimilar={setSimilar}
        setRecipe={setRecipe}
      />
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
        similar={similar}
        setSimilar={setSimilar}
      />
    </MainStyled>
  );
};

const MainStyled = styled(motion.div)`
  display: flex;
  width: 95vw;
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.363);
  @media only screen and (max-width: 1079px) {
    display: none;
  }
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 35px;
`;

export default Main;
