import PropTypes from 'prop-types';
import { createContext } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const authValue = {
        name: "mimi",
        module: 51
    }


    return (
        <AuthContext.Provider value={authValue}>
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