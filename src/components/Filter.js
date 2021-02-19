import styled from "styled-components";
import { motion } from "framer-motion";

const Filter = () => {
  return <FilterStyled></FilterStyled>;
};

const FilterStyled = styled(motion.div)`
  background-color: #121212;
  border-radius: 35px;
  width: 85%;
  height: 75%;
`;

export default Filter;
