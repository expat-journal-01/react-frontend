//Signup page please set up an empty post request, I(Dominique) will finish it, if you need help doing so please dm me :)
//good luck!! I'll be here if you need any help

import React, { useState, useEffect } from 'react' 
import axios from 'axios'
// import * as yup from 'yup'
// import registerSchema from 

const initialRegisterValues = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    terms: false
  }
  
  const initialRegisterErrors = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    terms: false
  }
  
  const initialUsers = []
  const initialRegDisabled = true
  

function Register() {
    const [users, setUsers] = useState(initialUsers)
    const [registerValues, setRegisterValues] = useState(initialRegisterValues)
    const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors)
    const [disabledReg, setRegDisabled] = useState(initialRegDisabled)

    // console.log(registerValues)

    const inputChange = (name, value) => {
        setRegisterValues({ ...registerValues, [name]: value})
    }

    const onInputChange = event => {
        const name = event.target.name
        const value = event.target.value
        inputChange(name, value)
    }

    return (
    <form>
        <label>
            <input
                type='text'
                name='firstName'
                id='firstName'
                values={registerValues.firstName}
                onChange={onInputChange}
                placeholder='First Name'
            />
        </label>

        <label>
            <input
                 type='text'
                 name='lastName'
                 id='lastName'
                 values={registerValues.lastName}
                 onChange={onInputChange}
                 placeholder='Last Name'
            />
        </label>

        <label>
            <input
                 type='email'
                 name='email'
                 id='email'
                 values={registerValues.email}
                 onChange={onInputChange}
                 placeholder='Email Address'
            /> 
        </label>

        <label>
            <input
                 type='text'
                 name='username'
                 id='username'
                 values={registerValues.username}
                 onChange={onInputChange}
                 placeholder='Username'
            /> 
        </label>

        <label>
            <input
                 type='password'
                 name='password'
                 id='password'
                 values={registerValues.password}
                 onChange={onInputChange}
                 placeholder='Password'
            /> 
        </label>

        <label>
            <input
                 type='password'
                 name='confirmPassword'
                 id='confirmPassword'
                 values={registerValues.confirmPassword}
                 onChange={onInputChange}
                 placeholder='Confirm Password'
                 
            />
        </label>
        <h4>Accept the terms?</h4>
        <label> Accept
            <input
                 type='checkbox'
                 name='terms'
                 id='terms'
            />
        </label>
        <button>Register</button>
    </form>
    )
}

export default Register