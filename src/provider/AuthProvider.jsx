import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // email account creation 
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("On state change Auth current value of the current users", currentUser);
            setUser(currentUser);
            // user er value set kore deyar por loading off hye jabe
            setLoading(false);

        });

        // jate always spy na kore. connection ba onno page e gele jate disconnect hoy.

        return () => {
            unSubscribe();
        }
    }, [])



    const authIfo = {
        user,
        loading,
        signUp,
        login,
        googleSignIn,
        logOut
    };

    return (
        <AuthContext.Provider value={authIfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}


/*
* 1. Created Context api file
* 2. const createContext Api like: export const AuthContext = createContext(null); 
* 3. Add provider like: <AuthContext.Provider value={authValue}>
</AuthContext.Provider>
* 4. add children props 
* 5. add this file in main.jsx file.
* 6. then use any children component like that: const authValue = useContext(AuthContext);
*/ 