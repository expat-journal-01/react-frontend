import React from 'react'

function User(props) {
    const {user} = props
    // console.log('User comp', props)

    return (
        // <h1>hi</h1>
        <p>@{user.username}</p>
    )
}

export default User
