import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: roboto;
        overflow-x: hidden;

    }
    body{
 background: #140726;
 overflow-x: none;
    }

    
    
/* Fundo que corre */
::-webkit-scrollbar-track {
    background-color: #232C3B;
}
/* Fundo que corre */

::-webkit-scrollbar {
    width: 6px;
    background: #4541BF;
}

/* Linha que desce */
::-webkit-scrollbar-thumb {
    background: #4541BF;
    border-radius: 15px;
}
/* Linha que desce*/


`;

export default GlobalStyled;
