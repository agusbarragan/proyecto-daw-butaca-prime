import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

body{
  font-family: 'Poppins', sans-serif;
  background-color: #000022;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='2000' viewBox='0 0 800 800'%3E%3Cg fill='none' %3E%3Cg stroke='%23026' stroke-width='17'%3E%3Cline x1='-8' y1='-8' x2='808' y2='808'/%3E%3Cline x1='-8' y1='792' x2='808' y2='1608'/%3E%3Cline x1='-8' y1='-808' x2='808' y2='8'/%3E%3C/g%3E%3Cg stroke='%23002163' stroke-width='16'%3E%3Cline x1='-8' y1='767' x2='808' y2='1583'/%3E%3Cline x1='-8' y1='17' x2='808' y2='833'/%3E%3Cline x1='-8' y1='-33' x2='808' y2='783'/%3E%3Cline x1='-8' y1='-783' x2='808' y2='33'/%3E%3C/g%3E%3Cg stroke='%23002060' stroke-width='15'%3E%3Cline x1='-8' y1='742' x2='808' y2='1558'/%3E%3Cline x1='-8' y1='42' x2='808' y2='858'/%3E%3Cline x1='-8' y1='-58' x2='808' y2='758'/%3E%3Cline x1='-8' y1='-758' x2='808' y2='58'/%3E%3C/g%3E%3Cg stroke='%23001f5c' stroke-width='14'%3E%3Cline x1='-8' y1='67' x2='808' y2='883'/%3E%3Cline x1='-8' y1='717' x2='808' y2='1533'/%3E%3Cline x1='-8' y1='-733' x2='808' y2='83'/%3E%3Cline x1='-8' y1='-83' x2='808' y2='733'/%3E%3C/g%3E%3Cg stroke='%23001e59' stroke-width='13'%3E%3Cline x1='-8' y1='92' x2='808' y2='908'/%3E%3Cline x1='-8' y1='692' x2='808' y2='1508'/%3E%3Cline x1='-8' y1='-108' x2='808' y2='708'/%3E%3Cline x1='-8' y1='-708' x2='808' y2='108'/%3E%3C/g%3E%3Cg stroke='%23001d56' stroke-width='12'%3E%3Cline x1='-8' y1='667' x2='808' y2='1483'/%3E%3Cline x1='-8' y1='117' x2='808' y2='933'/%3E%3Cline x1='-8' y1='-133' x2='808' y2='683'/%3E%3Cline x1='-8' y1='-683' x2='808' y2='133'/%3E%3C/g%3E%3Cg stroke='%23001c53' stroke-width='11'%3E%3Cline x1='-8' y1='642' x2='808' y2='1458'/%3E%3Cline x1='-8' y1='142' x2='808' y2='958'/%3E%3Cline x1='-8' y1='-158' x2='808' y2='658'/%3E%3Cline x1='-8' y1='-658' x2='808' y2='158'/%3E%3C/g%3E%3Cg stroke='%23001b4f' stroke-width='10'%3E%3Cline x1='-8' y1='167' x2='808' y2='983'/%3E%3Cline x1='-8' y1='617' x2='808' y2='1433'/%3E%3Cline x1='-8' y1='-633' x2='808' y2='183'/%3E%3Cline x1='-8' y1='-183' x2='808' y2='633'/%3E%3C/g%3E%3Cg stroke='%23001a4c' stroke-width='9'%3E%3Cline x1='-8' y1='592' x2='808' y2='1408'/%3E%3Cline x1='-8' y1='192' x2='808' y2='1008'/%3E%3Cline x1='-8' y1='-608' x2='808' y2='208'/%3E%3Cline x1='-8' y1='-208' x2='808' y2='608'/%3E%3C/g%3E%3Cg stroke='%23001949' stroke-width='8'%3E%3Cline x1='-8' y1='567' x2='808' y2='1383'/%3E%3Cline x1='-8' y1='217' x2='808' y2='1033'/%3E%3Cline x1='-8' y1='-233' x2='808' y2='583'/%3E%3Cline x1='-8' y1='-583' x2='808' y2='233'/%3E%3C/g%3E%3Cg stroke='%23001846' stroke-width='7'%3E%3Cline x1='-8' y1='242' x2='808' y2='1058'/%3E%3Cline x1='-8' y1='542' x2='808' y2='1358'/%3E%3Cline x1='-8' y1='-558' x2='808' y2='258'/%3E%3Cline x1='-8' y1='-258' x2='808' y2='558'/%3E%3C/g%3E%3Cg stroke='%23001743' stroke-width='6'%3E%3Cline x1='-8' y1='267' x2='808' y2='1083'/%3E%3Cline x1='-8' y1='517' x2='808' y2='1333'/%3E%3Cline x1='-8' y1='-533' x2='808' y2='283'/%3E%3Cline x1='-8' y1='-283' x2='808' y2='533'/%3E%3C/g%3E%3Cg stroke='%2300163f' stroke-width='5'%3E%3Cline x1='-8' y1='292' x2='808' y2='1108'/%3E%3Cline x1='-8' y1='492' x2='808' y2='1308'/%3E%3Cline x1='-8' y1='-308' x2='808' y2='508'/%3E%3Cline x1='-8' y1='-508' x2='808' y2='308'/%3E%3C/g%3E%3Cg stroke='%2300153c' stroke-width='4'%3E%3Cline x1='-8' y1='467' x2='808' y2='1283'/%3E%3Cline x1='-8' y1='317' x2='808' y2='1133'/%3E%3Cline x1='-8' y1='-333' x2='808' y2='483'/%3E%3Cline x1='-8' y1='-483' x2='808' y2='333'/%3E%3C/g%3E%3Cg stroke='%23001439' stroke-width='3'%3E%3Cline x1='-8' y1='342' x2='808' y2='1158'/%3E%3Cline x1='-8' y1='442' x2='808' y2='1258'/%3E%3Cline x1='-8' y1='-458' x2='808' y2='358'/%3E%3Cline x1='-8' y1='-358' x2='808' y2='458'/%3E%3C/g%3E%3Cg stroke='%23001336' stroke-width='2'%3E%3Cline x1='-8' y1='367' x2='808' y2='1183'/%3E%3Cline x1='-8' y1='417' x2='808' y2='1233'/%3E%3Cline x1='-8' y1='-433' x2='808' y2='383'/%3E%3Cline x1='-8' y1='-383' x2='808' y2='433'/%3E%3C/g%3E%3Cg stroke='%23013' stroke-width='1'%3E%3Cline x1='-8' y1='392' x2='808' y2='1208'/%3E%3Cline x1='-8' y1='-408' x2='808' y2='408'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  //min-height: 100vh;
}
/*.boton_inicia_sesion_registro{
  background-color: #A0DDFF;
}

.botonGoogle {
  background-color: #758ECD;
}*/

.movies-content {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.item-movie {
  width: 250px;
  height: 300px;
  background-size: cover;
  border-radius: 15px;
  display: flex;
  align-items: flex-end;
}

.item-movie:hover > .info {
  color: #fff;
  background-color: black;
}

.info {
  background-color: #ffffffd9;
  width: 100%;
  padding: 10px 30px;
  height: 87px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0px 0px 15px 15px;
  transition: .7s;
}

.info p {
  margin: 0;
}

.info p span {
  text-decoration: none;
}

.info h4 {
  margin: 0 0 3px;
  line-height: 21px;
}

.row-info {
  display: flex;
  justify-content: space-between
}

.form-search {
  margin: 3% 0 5%;
  justify-content: center;
  color: white;
}

.form-search input[type="text"] {
  font-family: inherit;
  padding: 9px 17px;
  font-size: 20px;
  border-radius: 15px 0px 0px 15px;
  outline: none;
  border: 0;
}

.form-search input[type="submit"] {
  font-size: 20px;
  padding: 12px 18px;
  border-radius: 0px 15px 15px 0px;
  background-color: #000;
  color: #fff;
  border: 0;
    cursor: pointer;
}

.form-search input[type="submit"]:hover {
  background-color: #483f3f;
}

.form-search h2 {
  font-size: 50px;
}

.fa-twitter{
  color: rgb(28,150,232);
}

.fa-instagram{
  color: rgb(205,46,122);
}

.fa-facebook {
  color: rgb(59, 91, 152);
}


.divLogueo {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

  
.divLogueo h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff;
}

.formularioLogueo {
    display: flex;
    flex-direction: column;
}


.formularioLogueo label {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #ffffff;
}
  
.formularioLogueo input {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.input-group {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.seat-selected {
  background-color: #f0ad4e;
  color: #fff;
  cursor: not-allowed;
}


.btn-floating {
  border-radius: 50%;
  display: inline-block;
  justify-content: center;
  align-items: center;
}

.footer_pagina{
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
}

`
export const StyledApp = styled.div`

    text-align: center;
    margin: 0 8% 4%;

`

export const StyledLoading = styled.div`

    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top:  10rem;
    border-radius: 50%;
    border: 8px solid #000;
    border-top-color: #FCAF3C;
    animation: spinner .6s linear infinite;

`

export const StyledSingleMovie = styled.div`

    display: flex;
    gap: 25px;
    margin: 7% 0 3%;
    justify-content: center;

`

export const StyledSingleInfo = styled.div`

    width: 500px;
    text-align: left;
    background-color: #ffffff9e;
    padding: 13px 25px;
    border-radius: 15px;


`