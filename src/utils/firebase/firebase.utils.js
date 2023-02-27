import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDsgkgh_4uBIoycQWQyZS57Uj_bQqJOKqc",
    authDomain: "crown-clothing-db-e79ae.firebaseapp.com",
    projectId: "crown-clothing-db-e79ae",
    storageBucket: "crown-clothing-db-e79ae.appspot.com",
    messagingSenderId: "337816420950",
    appId: "1:337816420950:web:1fbe1b6ffba56f241e31f7"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
        })
    } catch (error) {
        console.log('Error creating user', error.message)
    }
}

}