import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    box-sizing: border-box;
}


body{
  background-image: linear-gradient(45deg, rgb(43, 33, 93),rgb(81, 240, 237));
  color: #d1d1d1;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
}

&::-webkit-scrollbar {
    width: 0;
    height: 0;
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
