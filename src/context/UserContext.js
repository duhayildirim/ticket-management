import { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [ username, setUsername ] = useState(localStorage.getItem('username') || 'kodluyoruz');
    const [ password, setPassword ] = useState(localStorage.getItem('password') || 'bootcamp109');
    const [ isActive, setIsActive ] = useState(localStorage.getItem('isActive') === 'true');

    useEffect(() => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('isActive', isActive.toString());
    }, [username, password, isActive]);

    const values = {
        username,
        password,
        isActive,
        setUsername,
        setPassword,
        setIsActive,
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useLogin = () => {
    const context = useContext(UserContext);

    if(context === undefined){
        throw new Error('useLogin must be used within a UserProvider');
    }

    return context;
};