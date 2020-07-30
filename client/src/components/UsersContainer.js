import React, { useState, useEffect } from 'react'
import { axiosAuth } from '../utils/axiosAuth';
import Users from './Users'
import styled from 'styled-components'

const StyledUserContainer = styled.div `
    h1 {
        font-size: 2.5rem;
        font-family: 'Modern Antiqua', cursive;
        border-bottom: 10px double  #7F171F;
        width: 70%;
        margin: 2% auto;
    }

`

function UsersContainer() {
    const [userData, setUserData] = useState([])
    // 
    
    useEffect(() => {
        axiosAuth().get('http://157.245.163.179:8000/api/users')
        .then(res => {
            console.log('users data', res.data)
            setUserData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <StyledUserContainer>
            <h1>Friends List</h1>
            <Users userData={userData} />  
        </StyledUserContainer>
    )

}

export default UsersContainer 