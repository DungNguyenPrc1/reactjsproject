import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    // const [auth, setAuth] = useState({});

    const login = (user) => {
        setUser(true);
        window.localStorage.setItem('persit', JSON.stringify(user));
    };

    const logout = () => {
        setUser(null);
    };
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
// export default AuthContext;
