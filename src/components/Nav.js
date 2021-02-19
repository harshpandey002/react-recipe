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
      <div className="icons">
        <img src={Home} alt="home" />
        <img src={Save} alt="save" />
        <img src={Setting} alt="setting" />
        <img src={Dark} alt="dark" />
      </div>
    </NavStyled>
  );
};

const NavStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0b0b0b;
  flex: 1.5;
  padding: 1.3rem 0rem;
  img {
    cursor: pointer;
    width: 3.5rem;
  }
  .icons {
    margin-top: 1.8rem;
    text-align: center;
    img {
      display: block;
      width: 2rem;
      margin-bottom: 1.2rem;
    }
  }
`;

export default Nav;
