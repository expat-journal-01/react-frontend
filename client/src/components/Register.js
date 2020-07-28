//Signup page please set up an empty post request, I(Dominique) will finish it, if you need help doing so please dm me :)
//good luck!! I'll be here if you need any help

import React, { useState, useEffect } from 'react' 
import axios from 'axios'
import regFormSchema from '../validation/regFormSchema'
import * as yup from 'yup'
import StyledRegister from './StyledRegister'
import { 
    TextField, 
    FormControl, 
    FormControlLabel, 
    Button, Checkbox, 
    FormLabel, 
    FormGroup,
    FormHelperText, 
    InputLabel
  } from '@material-ui/core'


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
    const [confirmState, setConfirm] = useState(true)

    //POST request, not in use at the momement
    const postNewUser = newUser => {
        axios.post('http://backend-expat-journal.herokuapp.com/api/auth/register', newUser)
        .then(res => {
            console.log(res)
            setUsers([ res.data, ...users ])
            setRegisterValues(initialRegisterValues)
        })
        .catch(err => {
            console.log(err)
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
        if(registerValues.password === registerValues.confirmPassword) {
            setConfirm(true)
            const newUser = {
                firstName: registerValues.firstName.trim(),
                lastName: registerValues.lastName.trim(),
                email: registerValues.email.trim(),
                username: registerValues.username.trim(),
                password: registerValues.password.trim(),
                confirmPassword: registerValues.confirmPassword.trim(),
            }
            //instead of posting new user, just console logging the data for now
            console.log(newUser)
    
            // postNewUser(newUser)
        } else {
            setConfirm(false)
        }
       
    }

    useEffect(() => {
        regFormSchema.isValid(registerValues).then(valid => {
          setRegDisabled(!valid)
        })
      }, [registerValues])

    return (
    <StyledRegister onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <div className='inputs-container'>
            <TextField
                className='text-field'
                name='firstName'
                id='firstName'
                values={registerValues.firstName}
                onChange={inputChange}
                placeholder='First Name' 
            />

             <TextField
                className='text-field'
                name='lastName'
                id='lastName'
                values={registerValues.lastName}
                onChange={inputChange}
                placeholder='Last Name' 
            />

            <TextField
                className='text-field'
                type='email'
                name='email'
                id='email'
                values={registerValues.email}
                onChange={inputChange}
                placeholder='Email' 
            />

            <TextField
                className='text-field'
                name='username'
                id='username'
                values={registerValues.username}
                onChange={inputChange}
                placeholder='Username' 
            />

            <TextField
                className='text-field'
                type='password'
                name='password'
                id='password'
                values={registerValues.password}
                onChange={inputChange}
                placeholder='Password' 
            />

            <TextField
                className='text-field'
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                values={registerValues.confirmPassword}
                onChange={inputChange}
                placeholder='Confirm Password' 
            />

            <FormControl required>
                <FormLabel className='checkbox-label' style={{ color: '#177F75' }}>Do you accept the terms of service?</FormLabel>
                <FormGroup className='checkbox-container'>
                    <FormControlLabel className='accept-label' control={
                        <Checkbox
                        name='terms'
                        id='terms'
                        checked={registerValues.terms}
                        onChange={inputChange}
                        style={{ color:' #177F75' }}
                        />
                    }
                    label='Accept'
                    />
                </FormGroup>
            </FormControl>

           
            <Button className='sign-up-button' onClick={onSubmit} disabled={disabledReg} variant='contained' color='primary' >Sign Up</Button>
            {/* <div>
                <h4>Already have an account?</h4>
                <a href='#'>Login</a>
            </div> */}
            <div className='formErrors'>
                <div>{registerErrors.firstName}</div>
                <div>{registerErrors.lastName}</div>
                <div>{registerErrors.email}</div>
                <div>{registerErrors.username}</div>
                <div>{registerErrors.password}</div>
                <div>{registerErrors.terms}</div>
                <div>{!confirmState && <p>Passwords do not match</p>}</div>
            </div>
        </div>
    </StyledRegister>
    )
}

export default Register