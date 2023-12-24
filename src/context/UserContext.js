import { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

const localUsername = localStorage.getItem('username') || 'kodluyoruz'; 
const localPassword = localStorage.getItem('password') || 'bootcamp109';
const localIsActive = localStorage.getItem('isActive') || false;

export const UserProvider = ({ children }) => {
    const [ username, setUsername ] = useState(localUsername);
    const [ password, setPassword ] = useState(localPassword);
    const [ isActive, setIsActive ] = useState(localIsActive);

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            localStorage.setItem('username', username);
        }
        if (!localStorage.getItem('password')) {
            localStorage.setItem('password', password);
        }
        if (!localStorage.getItem('isActive')) {
            localStorage.setItem('isActive', isActive.toString());
        }
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