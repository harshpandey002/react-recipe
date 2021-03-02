import { motion } from "framer-motion";
import styled from "styled-components";
import Logo from "../img/Logo.svg";
import Home from "../img/Home.svg";
import Save from "../img/Save.svg";
import Setting from "../img/Setting.svg";
import Dark from "../img/Dark.svg";

const Nav = () => {
  return (
    <NavStyled>
      <img src={Logo} alt="logo" />
    </NavStyled>
  );
};

const NavStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1.5;
  padding: 1.3rem 0rem;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  img {
    cursor: pointer;
    width: 3.5rem;
  }
`;

export default Nav;
