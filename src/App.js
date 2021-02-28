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
      <h3>
        This Web Page is not support on Small Devices for now. Please switch to
        a laptop to view this Application.
      </h3>
      <Main />
    </AppStyled>
  );
}

const AppStyled = styled(motion.div)`
  h3 {
    color: black;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

export default App;
