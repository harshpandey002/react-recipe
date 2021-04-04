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
              "https://www.linkedin.com/in/harsh-kumar-pandey-5ab9071aa/",
              "_blank"
            )
          }
          id="linkedin"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M29 0.199982C13.094 0.199982 0.199982 13.094 0.199982 29C0.199982 44.906 13.094 57.8 29 57.8C44.906 57.8 57.8 44.906 57.8 29C57.8 13.094 44.906 0.199982 29 0.199982ZM21.95 40.937H16.118V22.169H21.95V40.937ZM18.998 19.865C17.156 19.865 15.965 18.56 15.965 16.946C15.965 15.299 17.192 14.033 19.073 14.033C20.954 14.033 22.106 15.299 22.142 16.946C22.142 18.56 20.954 19.865 18.998 19.865ZM43.25 40.937H37.418V30.536C37.418 28.115 36.572 26.471 34.463 26.471C32.852 26.471 31.895 27.584 31.472 28.655C31.316 29.036 31.277 29.576 31.277 30.113V40.934H25.442V28.154C25.442 25.811 25.367 23.852 25.289 22.166H30.356L30.623 24.773H30.74C31.508 23.549 33.389 21.743 36.536 21.743C40.373 21.743 43.25 24.314 43.25 29.84V40.937V40.937Z" />
        </svg>

        <svg
          onClick={() =>
            window.open(
              "https://github.com/harshpandey002/react-recipe",
              "_blank"
            )
          }
          id="git"
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
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    svg {
      cursor: pointer;
      width: 2.2rem;
      fill: rgba(0, 0, 0, 0.322);
      margin-right: 2px;
      margin-bottom: 0.5rem;
      border-radius: 100%;
    }
    #git {
      &:hover {
        fill: #000000;
      }
    }
    #linkedin {
      &:hover {
        fill: #0066ff;
        background-color: white;
      }
    }
  }
`;

export default App;
