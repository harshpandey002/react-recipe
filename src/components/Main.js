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
      <Nav />
      <Display />
      <Tool />
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
`;

export default Main;
