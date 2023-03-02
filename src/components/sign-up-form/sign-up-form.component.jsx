import React from 'react';
import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInputComponent from "../form-input/form-input.component";

const SignUpForm = () => {

    const defaultFormFields =
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return;
        }
        try {

            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetForm()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            }
            console.error(error)
        }
    }


    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>

                <FormInputComponent label={'Display Name'} onChange={handleChange} name={'displayName'}
                                    value={displayName} type={'text'} required/>
                <FormInputComponent label={"Email"} type={'email'} required onChange={handleChange} name={'email'}
                                    value={email}/>
                <FormInputComponent label={"Password"} type={'password'} required onChange={handleChange}
                                    name={'password'} value={password}/>
                <FormInputComponent label={"Confirm Password"} type={'password'} required onChange={handleChange}
                                    name={'confirmPassword'} value={confirmPassword}/>
                <button type={'submit'}>Sign Up</button>
            </form>

        </div>
    );
};


export default SignUpForm;
