import styled, { createGlobalStyle } from "styled-components"


export const Home = createGlobalStyle`
*{
    box-sizing: content-box;
    font-family: 'Nunito', Arial, Helvetica;
    margin:0px;
   body{
    overflow: hidden;
    label{
        font-size: 20px;
        display:flex ;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        margin :20px;

    }
} 
}
`
export const UI = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-evenly ;
    align-items: center;
    height:100vh;
    color:${({theme}) => theme.text};
    background-color:  ${({theme}) => theme.fondo}; 
    `

export const ContenedoBusqueda = styled.div`
display: flex;
border-radius:10px ;
width: 800px;
height: 400px ;
padding:30px;
background-color: ${({theme}) => theme.modal};;
position: relative;
z-index:2;
backdrop-filter:blur(5px) ;

`

export const Formulario = styled.div`
width: 50%;
border-right: 1px solid #b8b8b8;
padding: 0px 20px;
section{
    display: grid;
    align-content: center;
    justify-content: center;
    
}
`
export const Resultados = styled.div`
width: 50%;
padding: 0px 20px;
display:flex;
flex-direction: column;
section {
    font-size: 120px;
    text-align: center;
    font-weight: 400;
    margin:20px;
}


`

export const Select = styled.select`
width:200px ;
border-radius: 20px;
    text-align: center;
    outline:none;
    padding: 5px;
    font-size: 20px;
`


export const Input = styled.input`
width: 200px;
border-radius: 20px;
    text-align: center;
    outline:none;
    padding: 5px;
    font-size: 20px;
    border: 1px solid #747474;
`
export const Btn = styled.button`
cursor : pointer;
padding:5px;
font-size: 20px;
border-radius:20px;
border: none;
background-color:${({theme}) => theme.btn};
width: 200px;
margin:auto;
margin-top: 30px;
&:active{
    background: #b2bc91;
}
`

export const Error = styled.div`
text-align: center;
color: red;
font-size:30px ;
`
export const Detalles = styled.div`
`

export const MasDatos = styled.div`

    display: block;
    column-count: 2;
    div{
    padding:5px;
    width: 100%;
    background-color:  ${({theme}) => theme.div};
    border-radius: 8px;
    height: 55px;
    margin-bottom: 15px;
    border: 1px solid #b8b8b8;
}
p{
    text-align: center;
}
`

export const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    width: 50px;
    height: 50px;
}

`

export const Inicio = styled.div`
margin:auto;
img{
    width: 200px;
    margin-left: 40px;
    margin-bottom: 20px;
}

`
export const Spiner = styled.div`

    margin: 20px auto;
    width: 100px;
    height: 100px;
    position: relative;
    -webkit-transform: rotateZ(45deg);
            transform: rotateZ(45deg);
    top: 100px;
  
 .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
            transform: scale(1.1); 
  }
 .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
            animation: sk-foldCubeAngle 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
.sk-cube2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
            transform: scale(1.1) rotateZ(90deg);
  }
.sk-cube3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
            transform: scale(1.1) rotateZ(180deg);
  }
 .sk-cube4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
            transform: scale(1.1) rotateZ(270deg);
  }
.sk-cube2:before {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }
.sk-cube3:before {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s; 
  }
  .sk-cube4:before {
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
  }
  @-webkit-keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
              transform: perspective(140px) rotateX(-180deg);
      opacity: 0; 
    } 25%, 75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
              transform: perspective(140px) rotateX(0deg);
      opacity: 1; 
    } 90%, 100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
              transform: perspective(140px) rotateY(180deg);
      opacity: 0; 
    } 
  }
  
  @keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
              transform: perspective(140px) rotateX(-180deg);
      opacity: 0; 
    } 25%, 75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
              transform: perspective(140px) rotateX(0deg);
      opacity: 1; 
    } 90%, 100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
              transform: perspective(140px) rotateY(180deg);
      opacity: 0; 
    }
  }` 


  export const Switch = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
  label{
    position : relative;
    cursor : pointer;
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-color: #FFF;
  &::after{
    content: '';
    border: 1px solid #CCC;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
    left: -9px;
    background-color: #ccc;
    transition: all .4s;
  }
 

}
input{
  display:none;
}
input[type='checkbox']:checked + label::after{
    background-color: #063f4b;
    left: 9px;
  }
  
  `