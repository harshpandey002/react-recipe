import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    box-sizing: border-box;
}

body{
  background-image: repeating-linear-gradient(135deg, rgba(0,0,0,0.05),rgba(0,0,0,0.06),rgba(0,0,0,0.05),transparent,rgba(0,0,0,0.05),rgba(0,0,0,0.1),rgba(0,0,0,0.1),rgba(0,0,0,0.06),rgba(0,0,0,0.02),rgba(0,0,0,0.05),rgba(0,0,0,0.04),rgba(0,0,0,0.02),rgba(0,0,0,0.07) 3px),linear-gradient(90deg, rgb(63, 122, 63),rgb(218, 204, 62));
    color: rgb(146, 146, 146);
}

&::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(22, 22, 22, 0.788);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(18, 18, 18,0);
  }

h1{
  font-size: 3rem;
}

h2{
  font-size: 2.3rem;
}


`;

export default GlobalStyle;
