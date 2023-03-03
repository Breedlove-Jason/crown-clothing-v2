import React from 'react';
import Button from "../../button/button.component";

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };


    return (
        <div>
            <h1>Sign In Page</h1>
            <Button buttonType={'google'} onClick={logGoogleUser}>Sign In With Google</Button>
            {/*<button onClick={logGoogleUser}>Sign In With Google</button>*/}
            <SignUpForm/>
        </div>
    );
};

export default SignIn;
