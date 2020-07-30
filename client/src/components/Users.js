import React from 'react'
import User from './User'
import styled from 'styled-components'

const StyledUser = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    /* border: 3px solid grey; */
    border-radius: 10px;
    box-shadow: inset 0 0 10px #000000;
    margin: 2% auto;
    background-color: #282c34;
`

function Users(props){
   const { userData }  = props

    return (
       <StyledUser>
           {
              userData.map((user) => 
                  <User user={user} key={user.id} />
              )
           }
       </StyledUser>
    )
}

export default Users 
