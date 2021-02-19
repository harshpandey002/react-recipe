//Components
import styled from "styled-components";
import Display from "./Display";
import Nav from "./Nav";
import Tool from "./Tool";
//Framer Motion
import { motion } from "framer-motion";

const Main = () => {
  return (
    <MainStyled>
      <h1>Main Component</h1>
      <Nav />
      <Display />
      <Tool />
    </MainStyled>
  );
};

const MainStyled = styled(motion.div)`
  color: #45f545;
`;

export default Main;
