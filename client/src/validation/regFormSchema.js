import * as yup from 'yup'

const regFormSchema = yup.object().shape({
    firstName: yup 
    .string()
    .required('First name is required'), 
    lastName: yup 
    .string()
    .required('Last name is required'),  
    email: yup 
    .string()
    .email('Must be a valid email address')
    .required('Email is required'), 
    username: yup 
    .string()
    .required('Username is required'),
    password: yup 
    .string()
    .required('Password is required'),
    confirmPassword: yup 
    .string()
    .required('Password is required'),
    terms: yup 
    .boolean()
    .oneOf([true], 'Please agree to the terms of service')
    .required()
})

export default regFormSchema