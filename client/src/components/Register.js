

import React, { useState, useEffect } from 'react'
import { useHistory }  from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import { axiosAuth } from '../utils/axiosAuth';
import regFormSchema from '../validation/regFormSchema'
import Users from './Users'

import * as yup from 'yup'
import StyledRegister from './registerStyles/StyledRegister'
import StyledRegContainer from './registerStyles/StyledRegContainer'
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
    // confirmPassword: '',
    terms: false
  }
  
  const initialRegisterErrors = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    // confirmPassword: '',
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
    const [userData, setUserData] = useState([])
   
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
    // const [confirmState, setConfirm] = useState(true)


  


    const postNewUser = newUser => {
        axios.post('http://157.245.163.179:8000/api/auth/register', newUser)
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
            username: registerValues.username.trim(),
            password: registerValues.password.trim()
        }
        postNewUser(newUser)
    }

    // useEffect(() => {
    //     getUsers()
    // }, [])

    useEffect(() => {
        regFormSchema.isValid(registerValues).then(valid => {
          setRegDisabled(!valid)
        })
      }, [registerValues])

    return (
        <StyledRegContainer>
            <Users userData={userData} />
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
                        variant='outlined' 
                    />

                    <TextField
                        className='text-field'
                        name='lastName'
                        id='lastName'
                        values={registerValues.lastName}
                        onChange={inputChange}
                        placeholder='Last Name' 
                        variant='outlined' 
                    />

                    <TextField
                        className='text-field'
                        type='email'
                        name='email'
                        id='email'
                        values={registerValues.email}
                        onChange={inputChange}
                        placeholder='Email' 
                        variant='outlined' 
                    />

                    <TextField
                        className='text-field'
                        name='username'
                        id='username'
                        values={registerValues.username}
                        onChange={inputChange}
                        placeholder='Username' 
                        variant='outlined' 
                    />

                    <TextField
                        className='text-field'
                        type='password'
                        name='password'
                        id='password'
                        values={registerValues.password}
                        onChange={inputChange}
                        placeholder='Password' 
                        variant='outlined' 
                    />

                    {/* <TextField
                        className='text-field'
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        values={registerValues.confirmPassword}
                        onChange={inputChange}
                        placeholder='Confirm Password'
                        variant='outlined' 
                    /> */}

                    <FormControl>
                        <FormLabel className='checkbox-label' style={{ color: 'black' }}>Do you accept the terms of service?</FormLabel>
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
                    <div className='formErrors'>
                        <div>{registerErrors.firstName}</div>
                        <div>{registerErrors.lastName}</div>
                        <div>{registerErrors.email}</div>
                        <div>{registerErrors.username}</div>
                        <div>{registerErrors.password}</div>
                        <div>{registerErrors.terms}</div>
                        {/* <div>{!confirmState && <p>Passwords do not match</p>}</div> */}
                    </div>
                </div>
            </StyledRegister>
        </StyledRegContainer>
    )
}

export default Register