import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

body{margin:auto; float:none; font-family: 'QuasimodaRegular';color: #B89260;font-weight: 400;
max-width:1600px;}

h1,h2,h3,h4,h5,h6{font-family: 'BaskervilleOldFace';margin:0;color: #B89260; font-weight: 400;margin-bottom:25px;}
h1, h2{font-size:56px; line-height:64px;}
h3{font-size:39px; line-height:46px;}
h4{font-size:34px; line-height:35px;}
h5{font-size:25px; line-height:28px;margin:0;}
p{font-family: 'QuasimodaRegular'; color: #B89260;margin: 0 0 30px 0; font-size: 16px; line-height: 26px;}

button{ width: auto;float: none; position: relative;display: inline-block;font-size: 16px; z-index: 999;color: #707070;margin-bottom: 15px; border-radius: 32px; border:2px solid #B89260; padding: 0 30px; line-height: 40px; background-color: transparent; cursor: pointer;}
button::before{position: absolute;content: '';top: 0;left: -2px;width: 102%;height: 100%; z-index: 1;opacity: 0;-webkit-transition: all 0.4s;-moz-transition: all 0.4s;-o-transition: all 0.4s;transition: all 0.4s;-webkit-transform: scale(0.2, 1);transform: scale(0.2, 1);background-color: #B89260;z-index:-1;border-radius: 32px;}
button:hover::before {opacity: 1;-webkit-transform: scale(1, 1);transform: scale(1, 1);}

.svg-icon {width: 1.3em;height: 1.3em; margin:0px 10px 0 0; float: left;}
.svg-icon path {fill: #B89260;}

.ml3 {
    font-weight: 900;
    font-size: 3.5em;
  }
@media only screen and (min-width:1101px) and (max-width:1250px){
h4{font-size:28px; line-height:30px;}
}
@media only screen and (min-width:992px) and (max-width:1100px){
h1, h2{ font-size: 50px; line-height:55px;}
h4{font-size:25px; line-height:28px;}
h3{font-size:33px; line-height:40px;}
}
@media only screen and (max-width:991px){
h1, h2{ font-size: 44px; line-height: 48px;}
h3{font-size:32px; line-height:38px;}
h4{font-size:28px; line-height:30px;}
h2 br, p br{ display:none;}
h5{font-size:20px;}
}
@media only screen and (max-width:599px){
h1, h2{ font-size: 30px; line-height: 35px;margin-bottom: 15px;}
h4{font-size:25px; line-height:28px;}
button{ font-size: 15px; padding: 0 18px;}
h3{font-size:28px; line-height:35px;margin-bottom: 15px;}
}
@media only screen and (max-width:479px){
h4{font-size:20px; margin-bottom: 15px;}
}


`;
 
export default GlobalStyle;