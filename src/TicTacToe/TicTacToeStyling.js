import {createGlobalStyle} from "styled-components"

const TicTacToeStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Sono:wght@400;700&display=swap');
html, body{
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-size: 30px;
  font-family:Sono;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(250deg, cornflowerblue, crimson);
  background-repeat: no-repeat;
  }
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
table td {
  border: 1px solid grey;
  width: 100px;
  height: 100px;
  color: deepskyblue;
}
table
{
  background:black;

}
table td
{
  padding:10px;
}
table tr:first-child
{
  box-shadow:0px 8px 5px -5px cornsilk;
}
table tr:nth-child(2)
{
  box-shadow:0px -8px 5px -5px cornsilk
        , 0px 8px 5px -5px cornsilk;
}
table tr:last-child
{
  box-shadow:0px -8px 5px -5px cornsilk;
}
table tr td:first-child
{
  box-shadow:8px 0px 5px -5px cornsilk;
}
table tr td:nth-child(2)
{
  box-shadow:-8px 0px 5px -5px cornsilk
        , 8px 0px 5px -5px cornsilk;
}
table tr td:last-child
{
  box-shadow:-8px 0px 5px -5px cornsilk;
}
td:hover
{
background: paleturquoise;
}
`
export default TicTacToeStyle
