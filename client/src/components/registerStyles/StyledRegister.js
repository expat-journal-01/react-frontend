import styled from 'styled-components'
// import { styled } from '@material-ui/core/styles'



const StyledRegister = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3%;
    width: 40%;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000000;
    background-color: whitesmoke;
   

    h1 {
        border-bottom: 10px double #B67721;
        color: black;
        width: 100%;
        font-family: 'Modern Antiqua', cursive;
        padding: 2% 0;
        margin-top: 4%;
        
    }

    .inputs-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
    
    }

    .text-field {
        margin: 2%;
        width: 70%;
        
    }

    .checkbox-label {
        margin: 2%;
        width: 100%;
        border-bottom: 2px solid #21B6A8 ;
    }

    .checkbox-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

   
    
    .sign-up-button {
        margin: 3%;
        background-color: #B6212D  ;
        font-family: 'Modern Antiqua', cursive;
        &:hover {
            background-color:  #7F171F;
        }
    }


    
    .formErrors {
        color: #B6212D;
        margin-bottom: 2%;
        font-weight: bold;
    }

   @media (max-width: 800px) {
       width: 70%;
   }

`


export default StyledRegister

// a generator site.
// #7F171F maroon
// #B6212D red
// #177F75 teal
// #21B6A8  light blue
// #B67721  mustard
// #888888  grey