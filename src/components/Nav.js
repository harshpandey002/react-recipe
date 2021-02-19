import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = () => {
  return <NavStyled></NavStyled>;
};

const NavStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0b0b0b;
  flex: 1.5;
  padding: 1.3rem 0rem;
`;

export default Nav;
