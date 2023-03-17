import styled, { keyframes } from 'styled-components'

const nubes = keyframes`
from{
   transform:translate(-1000px);
}
to{
    transform:translate(1500px);
}
`

export const Nubes = styled.div`
width: 100%;
position: absolute;
z-index:1;
top: 0px;
&>:nth-child(1){
    position: absolute;
    top: 200px;
    animation: ${nubes} 20s infinite;
}
&>:nth-child(2){
    position: absolute;
    top: 50px;
    animation: ${nubes} 50s infinite;
}
&>:nth-child(3){
    position: absolute;
    top: 100px;
    animation: ${nubes} 28s infinite;
}
&>:nth-child(4){
    position: absolute;
    top: 300px;
    animation: ${nubes} 30s infinite;
}
&>:nth-child(5){
    position: absolute;
    top: 400px;
    animation: ${nubes} 40s infinite;
}
&>:nth-child(6){
    position: absolute;
    top: 450px;
    animation: ${nubes} 45s infinite;
}
`