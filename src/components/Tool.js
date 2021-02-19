//Framer Motion
import { motion } from "framer-motion";
//Style
import styled from "styled-components";

const Tool = () => {
  return (
    <ToolStyled>
      <h1>Tool Component</h1>
    </ToolStyled>
  );
};

const ToolStyled = styled(motion.div)`
  color: #e9f545;
`;

export default Tool;
