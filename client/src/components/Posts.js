import React, { useEffect } from 'react'
import { axiosAuth } from '../utils/axiosAuth';



function Posts(){

    useEffect(() => {
        axiosAuth().get('http://157.245.163.179:8000/api/posts')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <h1>hi</h1>
    )
}

export default Posts 