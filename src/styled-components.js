import styled from 'styled-components'
const Keyboard = styled.div`
max-width:75vw;
position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);
padding:1rem;
background-color:#7F5283;
display:grid;
grid-template-columns:repeat(30,20px);
grid-template-rows:repeat(5,40px);
gap:3px;
border-radius:10px;
`
const StyledKey = styled.button`
background-color:#A6D1E6;
border-radius:12px;

`
const Background = styled.div`
background-color: #3D3C42;
width: 100vw;
height: 100vh;
text-align:center;
`
const Feedback = styled.div`
position: absolute; 
left: 50%;
top: 20%;
transform: translate(-50%,-50%);
`

export { Keyboard, StyledKey, Background, Feedback } 