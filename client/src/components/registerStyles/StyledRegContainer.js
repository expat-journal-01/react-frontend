import styled from 'styled-components'

const StyledRegContainer = styled.div `
    width: 70%;
    margin: 3% auto; 
    border-radius: 10px;
    box-shadow: inset 0 0 10px #000000;
    /* background-color: lightgrey; */
    /* background-image: url('https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; 
    background-position: center; */
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .user-data {
        display: flex;
        flex-direction: column;
        background-color: white;
        margin: 2%;
        width: 80%;

    }

    @media (max-width: 800px) {
       width: 90%;
   }


`

export default StyledRegContainer