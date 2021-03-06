import { motion } from "framer-motion";
import styled from "styled-components";
import Similar from "./Similar";
import Search from "../img/Search.svg";
import { slideright } from "./animation";

const Tool = ({
  textInput,
  setTextInput,
  setSearch,
  id,
  setId,
  rname,
  setRname,
  similar,
  setSimilar,
}) => {
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    setSearch(textInput);
    setTextInput("");
    setId("");
    setSimilar([]);
  };

  return (
    <ToolStyled variants={slideright} initial="hidden" animate="show">
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch}>
          <img type="submit" src={Search} alt="search" />
        </button>
      </form>
      <Similar
        id={id}
        setId={setId}
        rname={rname}
        setRname={setRname}
        similar={similar}
        setSimilar={setSimilar}
      />
    </ToolStyled>
  );
};

const ToolStyled = styled(motion.div)`
  .search {
    display: flex;
    justify-content: center;
    width: 85%;
    overflow: hidden;
    button {
      background-color: transparent;
      border: none;
      outline: none;
    }
    input {
      width: 100%;
      border: none;
      outline: none;
      font-family: "Montserrat", sans-serif;
      font-size: 1.3rem;
      padding: 1rem 1rem;
      color: rgba(255, 255, 255, 0.87);
      background: rgba(255, 255, 255, 0);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
    img {
      width: 2.5rem;
      cursor: pointer;
    }
    background: rgba(255, 255, 255, 0);

    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 35px;
    border: 1px solid rgba(119, 119, 119, 0.18);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 8;
  align-self: center;
  border-radius: 35px;
  height: 80vh;
  margin-right: 2.5rem;

  background-color: rgba(0, 0, 0, 0.158);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export default Tool;
