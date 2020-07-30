import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { axiosAuth } from '../utils/axiosAuth';
import Users from './Users'

function UsersContainer() {
    const [userData, setUserData] = useState([])
    const [userPicture, setUserPicture] = useState([])

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

    // useEffect(() => {
    //     axiosAuth().get('https://randomuser.me/api/?inc=picture')
    //     .then(res => {
    //         // console.log('users picture', res.data.results)
    //         setUserPicture(res.data.results)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
      
    // }, [])

    return (
        <div>
            <h1>User Container Test</h1>
            <div className='user-data'>
                <Users userData={userData} />
                {/* <Pictures userPicture={userPicture} /> */}
            </div>

        </div>
    )

}

export default UsersContainer 