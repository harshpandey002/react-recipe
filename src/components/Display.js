//Framer Motion
import { motion } from "framer-motion";
//Style
import styled from "styled-components";

const Display = () => {
  return <DisplayStyled></DisplayStyled>;
};

const DisplayStyled = styled(motion.div)`
  flex: 20;
`;

export default Display;
