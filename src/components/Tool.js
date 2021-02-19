import { motion } from "framer-motion";
import styled from "styled-components";

const Tool = () => {
  return <ToolStyled></ToolStyled>;
};

const ToolStyled = styled(motion.div)`
  background-color: #0b0b0b;
  flex: 8;
  align-self: center;
  border-radius: 35px;
  height: 80vh;
  margin-right: 2.5rem;
`;

export default Tool;
