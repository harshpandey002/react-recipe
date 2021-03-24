//Components
import GlobalStyle from "./components/GlobalStyle";
import Main from "./components/Main";
import { motion } from "framer-motion";
import styled from "styled-components";

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <h3>
        This Web Page is not supported on Small Devices for now. Please switch
        to a laptop to view this Application.
      </h3>
      <Main />
      <div className="icons">
        <svg
          onClick={() =>
            window.open(
              "https://github.com/harshpandey002/react-recipe",
              "_blank"
            )
          }
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
        </svg>
      </div>
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
    opacity: 0;
    @media only screen and (max-width: 1079px) {
      opacity: 1;
    }
  }
  .icons {
    display: flex;
    position: absolute;
    top: 2px;
    right: 7.5%;
    svg {
      cursor: pointer;
      width: 2rem;
      fill: #464646;
      &:hover {
        fill: #ffffff;
      }
    }
  }
`;

export default App;
