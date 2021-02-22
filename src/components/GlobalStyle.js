import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    box-sizing: border-box;
}

body{
    background-color: #222222;
    color: rgb(146, 146, 146);
}

&::-webkit-scrollbar {
    width: 0.5rem;
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
