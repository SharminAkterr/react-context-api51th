import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("On state change Auth current value of the current users", currentUser);
            setUser(currentUser);
        });

        // jate always spy na kore. connection ba onno page e gele jate disconnect hoy.

        return () => {
            unSubscribe();
        }
    }, [])

    const logOut = () => {
        return signOut(auth);
    }

    const authIfo = {
        user,
        signUp,
        login,
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