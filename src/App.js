//Components
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./components/Main";
import { motion } from "framer-motion";
import styled from "styled-components";

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Main />
    </AppStyled>
  );
}

const AppStyled = styled(motion.div)``;

export default App;
