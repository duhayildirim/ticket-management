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

    const { user } = context;

    const isAdminRoute = (path) => {
        return path.startsWith('/admin');
    };

    const canAccessRoute = (path) => {
        // Kontrol edilecek rotalar burada belirlenebilir
        if (isAdminRoute(path)) {
            return user.isActive === true; // isActive true ise erişime izin ver
        }
        return true; // Diğer rotalara izin ver
    };

    return { ...context, canAccessRoute };
};
