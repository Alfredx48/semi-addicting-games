import { createGlobalStyle } from "styled-components";

const NotFoundStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Sono:wght@400;700&display=swap');
body {
  background: black;
  background-image:url('https://miro.medium.com/max/1400/1*hFwwQAW45673VGKrMPE2qQ.png') ;
  background-repeat: no-repeat;

  background-position:center top;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  color:red;
}
h1 {
    font-size:100px
}
div{
    margin-top:25%;
}
`;
export default NotFoundStyle;
