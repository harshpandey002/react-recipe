//Framer Motion
import { motion } from "framer-motion";
//Style
import styled from "styled-components";

const Display = () => {
  return (
    <DisplayStyled>
      <h1>Display Component</h1>
    </DisplayStyled>
  );
};

const DisplayStyled = styled(motion.div)`
  color: #7445f5;
`;

export default Display;
