import { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    const initialUser = {
        username: storedUser ? storedUser.username : 'kodluyoruz',
        password: storedUser ? storedUser.password : 'bootcamp109',
        isActive: storedUser ? storedUser.isActive === true : false,
    };

    const [user, setUser] = useState(initialUser);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const values = {
        user,
        setUser,
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useLogin = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useLogin must be used within a UserProvider');
    }

    return context;
};
