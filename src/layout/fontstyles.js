import { createGlobalStyle } from "styled-components";

import BaskervilleOldFaceWoff from "../assets/fonts/BaskervilleOldFace.woff";
import BaskervilleOldFaceWoff2 from "../assets/fonts/BaskervilleOldFace.woff2";

import QuasimodaRegularWoff from "../assets/fonts/QuasimodaRegular.woff";
import QuasimodaRegularWoff2 from "../assets/fonts/QuasimodaRegular.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'BaskervilleOldFace';
  src: url(${BaskervilleOldFaceWoff2}) format('woff2'),
       url(${BaskervilleOldFaceWoff}) format('woff');
}

@font-face {
    font-family: 'QuasimodaRegular';
    src: url(${QuasimodaRegularWoff2}) format('woff2'),
         url(${QuasimodaRegularWoff}) format('woff');
  }

`;


export default FontStyles;
