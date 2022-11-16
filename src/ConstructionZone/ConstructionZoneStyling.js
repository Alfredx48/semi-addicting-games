import {createGlobalStyle} from "styled-components"

const ConstructionZoneStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Sono:wght@400;700&display=swap');
html, body{
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-size: 30px;
  font-family:Sono;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(173deg, khaki, #1b1212 );
  background-repeat: no-repeat;
  }

`
export default ConstructionZoneStyle
