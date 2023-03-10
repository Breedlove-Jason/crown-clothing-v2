import React from 'react';
import {useState} from "react";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss';

const SignInForm = () => {

    const defaultFormFields =
        {
            email: '',
            password: '',
        }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong password')
                    break;
                case 'auth/user-not-found':
                    alert('User not found')
                    break;
                default:
                    console.log(error)
            }
        }
        resetForm()
    }


    return (
        <div className={'sign-up-container'}>
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInputComponent label={"Email"} type={'email'} required onChange={handleChange} name={'email'}
                                    value={email}/>
                <FormInputComponent label={"Password"} type={'password'} required onChange={handleChange}
                                    name={'password'} value={password}/>
                <div className={'buttons-container'}>
                    <Button type={'submit'}>Sign In</Button>
                    <Button type={'button'} buttonType={'google'} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>

        </div>
    );
};


export default SignInForm;
