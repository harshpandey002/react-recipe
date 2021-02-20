import { motion } from "framer-motion";
import styled from "styled-components";
import Filter from "./Filter";
import Similar from "./Similar";
import Search from "../img/Search.svg";

const Tool = () => {
  return (
    <ToolStyled>
      <div className="search">
        <input type="text" />
        <img src={Search} alt="search" />
      </div>
      {<Filter /> || <Similar />}
    </ToolStyled>
  );
};

const ToolStyled = styled(motion.div)`
  .search {
    display: flex;
    justify-content: center;
    background-color: #121212;
    border-radius: 35px;
    width: 85%;
    overflow: hidden;
    input {
      width: 100%;
      background-color: #121212;
      border: none;
      outline: none;
      font-size: 1.3rem;
      padding: 1rem 1rem;
      color: rgba(255, 255, 255, 0.87);
    }
    img {
      width: 2.5rem;
      cursor: pointer;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #0b0b0b;
  flex: 8;
  align-self: center;
  border-radius: 35px;
  height: 80vh;
  margin-right: 2.5rem;
`;

export default Tool;