//Signup page please set up an empty post request, I(Dominique) will finish it, if you need help doing so please dm me :)
//good luck!! I'll be here if you need any help

import React, { useState, useEffect } from 'react'
import { useHistory }  from 'react-router-dom';
import axios from 'axios'
import regFormSchema from '../validation/regFormSchema'
import * as yup from 'yup'
import StyledRegister from './StyledRegister'


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
    const { push } = useHistory();
    const [users, setUsers] = useState(initialUsers)
    const [registerValues, setRegisterValues] = useState(initialRegisterValues)
    const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors)
    const [disabledReg, setRegDisabled] = useState(initialRegDisabled)

    //POST request, not in use at the momement
    const postNewUser = newUser => {
        axios.post('http://backend-expat-journal.herokuapp.com/api/auth/register', newUser)
        .then(res => {
            setUsers([ res.data, ...users ])
            setRegisterValues(initialRegisterValues)
            push(`/login`);
            console.log(res)
        })
        .catch(err => {
            console.log(err.response)
        })
    }


    const inputChange = event => {
        event.persist()
        event.target.type === 'checkbox' ? setRegisterValues ({ ...registerValues, [event.target.name]: event.target.checked}) : setRegisterValues({ ...registerValues, [event.target.name]: event.target.value })
        yup
            .reach(regFormSchema, event.target.name)
            .validate(event.target.type === 'checkbox' ? event.target.checked : event.target.value)
            .then((valid) => {
                setRegisterErrors({ ...registerErrors, [event.target.name]: ''})
            })
            .catch((err) => {
                setRegisterErrors({ ...registerErrors, [event.target.name]: err.errors})
            })
    }

    
    const onSubmit = event => {
        event.preventDefault()
        const newUser = {
            // firstName: registerValues.firstName.trim(),
            // lastName: registerValues.lastName.trim(),
            // email: registerValues.email.trim(),
            username: registerValues.username.trim(),
            password: registerValues.password.trim()
            // confirmPassword: registerValues.confirmPassword.trim(),
        }
        //instead of posting new user, just console logging the data for now
        // console.log(newUser)

        postNewUser(newUser)
    }

    useEffect(() => {
        regFormSchema.isValid(registerValues).then(valid => {
          setRegDisabled(!valid)
        })
      }, [registerValues])

    return (
    <StyledRegister onSubmit={onSubmit}>
        <h3>Sign Up</h3>
        <div className='inputs-container'>
            <label className='firstName'>
                <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    values={registerValues.firstName}
                    onChange={inputChange}
                    placeholder='First Name'
                />
            </label>

            <label className='lastName'>
                <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    values={registerValues.lastName}
                    onChange={inputChange}
                    placeholder='Last Name'
                />
            </label>

            <label  className='email'>
                <input
                    type='email'
                    name='email'
                    id='email'
                    values={registerValues.email}
                    onChange={inputChange}
                    placeholder='Email Address'
                /> 
            </label>

            <label  className='username'>
                <input
                    type='text'
                    name='username'
                    id='username'
                    values={registerValues.username}
                    onChange={inputChange}
                    placeholder='Username'
                /> 
            </label>

            <label  className='password'>
                <input
                    type='password'
                    name='password'
                    id='password'
                    values={registerValues.password}
                    onChange={inputChange}
                    placeholder='Password'
                /> 
            </label>

            {/* <label  className='confirmPassword'>
                <input
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    values={registerValues.confirmPassword}
                    onChange={inputChange}
                    placeholder='Confirm Password'
                    
                />
            </label> */}

            <h4>Accept the terms?</h4>
            <label className='terms'> Accept
                <input
                    type='checkbox'
                    name='terms'
                    id='terms'
                    checked={registerValues.terms}
                    onChange={inputChange}

                />
            </label>
            <button disabled={disabledReg}>Register</button>
            <div>
                <div>{registerErrors.firstName}</div>
                <div>{registerErrors.lastName}</div>
                <div>{registerErrors.email}</div>
                <div>{registerErrors.username}</div>
                <div>{registerErrors.password}</div>
                {/* <div>{registerErrors.confirmPassword}</div> */}
                <div>{registerErrors.terms}</div>
            </div>
        </div>
    </StyledRegister>
    )
}

export default Register