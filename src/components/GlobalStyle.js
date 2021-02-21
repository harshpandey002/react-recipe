import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #222222;
    color: rgba(255, 255, 255, 0.87);
}

&::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(34, 34, 34);
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
