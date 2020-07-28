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
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is required'),
    password: yup 
    .string()
    .min(4, 'Password must be at least 4 characters long')
    .required('Password is required'),
    confirmPassword: yup 
    .string(),
    // .oneOf([yup.ref("password")], "Both password need to be the same"),
    terms: yup 
    .boolean()
    .oneOf([true], 'Please agree to the terms of service')
    .required()
})

export default regFormSchema