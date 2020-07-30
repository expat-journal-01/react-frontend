import React from 'react'
import styled from 'styled-components'

const StyledUserCard = styled.div  `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 3px solid grey; */
    width: 25%;
    margin: 3%;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000000;
    background-color: whitesmoke;
    &:hover{
        background-color: #B67721;
    }

    h4 {
        font-size: 1.8rem;
    }

`

function User(props) {
    const {user} = props
    console.log('User', props)

    return (
       <StyledUserCard>
            <h4>@{user.username}</h4>  
            {/* <p>Location</p> */}
           
        </StyledUserCard>
    )
}

export default User
