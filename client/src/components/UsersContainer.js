import React, { useState, useEffect } from 'react'
import { axiosAuth } from '../utils/axiosAuth';
import Users from './Users'
import styled from 'styled-components'

const StyledUserContainer = styled.div `
  

    h1 {
        font-size: 2.5rem;
        /* font-family: 'Modern Antiqua', cursive; */
        border-bottom: 5px solid #21B6A8;
        width: 20%;
        margin: 2% auto;
        
    }
`

function UsersContainer() {
    const [userData, setUserData] = useState([])
    // 
    
    useEffect(() => {
        axiosAuth().get('https://reqres.in/api/users?page=2')
        .then(res => {
            console.log('users data', res.data.data)
            setUserData(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <StyledUserContainer>
            <h1>Expat Friends</h1>
            <Users userData={userData} />  
        </StyledUserContainer>
    )

}

export default UsersContainer 