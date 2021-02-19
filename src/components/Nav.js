//Framer Motion
import { motion } from "framer-motion";
//Style
import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyled>
      <h1>Nav Component</h1>
    </NavStyled>
  );
};

const NavStyled = styled(motion.div)`
  color: #f54545;
`;

export default Nav;
