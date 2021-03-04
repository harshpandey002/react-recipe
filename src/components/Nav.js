import { motion } from "framer-motion";
import styled from "styled-components";
import { randomRecipe } from "../api";
import Logo from "../img/Logo.svg";
import axios from "axios";

const Nav = ({ setId, setSimilar, setRecipe }) => {
  const clickHandler = () => {
    axios
      .get(randomRecipe())
      .then((data) => {
        setRecipe(data.data.recipes);
      })
      .catch((err) => console.log(err));
    setId("");
    setSimilar([]);
  };
  return (
    <NavStyled>
      <img onClick={clickHandler} src={Logo} alt="logo" />
    </NavStyled>
  );
};

const NavStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1.5;
  padding: 1.3rem 0rem;

  background-color: rgba(0, 0, 0, 0.158);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  img {
    cursor: pointer;
    width: 3.5rem;
  }
`;

export default Nav;
