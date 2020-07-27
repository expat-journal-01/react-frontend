import styled from 'styled-components'

const StyledRegister = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 5px 7px;

    .inputs-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .inputs-container label {
        margin: 3%;
    }

    h4 {
        margin: 0;
    }
    button {
        margin: 3%;
    }
   



`
export default StyledRegister