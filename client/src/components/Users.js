import React, { useEffect } from 'react'
import User from './User'
import styled from 'styled-components'

const StyledUser = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

`


function Users(props){
   const { userData, userPicture }  = props
//    console.log(userPicture)

    return (
       <StyledUser>
           {
              userData.map((user) => 
                //   console.log(user)
                  <User user={user} key={user.id} />
              )
           }
            {/* {
              userPicture.map((picture) => 
                  <Picture picture={picture.picture} key={picture.id} />

              )
           } */}
       </StyledUser>
    )
}

export default Users 