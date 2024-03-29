import React from "react";
import { Formik, Form } from "formik";
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema = {validate}
            onSubmit = {values => {
                console.log(values);
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                    <Form>
                        <TextField label='First Name' name='firstNmae' type='text' />
                        <TextField label='Last Name' name='lastNmae' type='text' />
                        <TextField label='Email' name='email' type='text' />
                        <TextField label='Password' name='password' type='password' />
                        <TextField label='Confirm Password' name='confirmpassword' type='password' />
                        <button type='submit' className='btn btn-dark mt-3'>Register</button>
                        <button type='reset' className="btn btn-danger mt-3 ml-3">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}