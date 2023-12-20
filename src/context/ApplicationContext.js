import { createContext, useState, useContext } from 'react';

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const  [ applications , setApplications ] = useState([
        {
            name: 'Duha',
            surname: 'Yıldırım',
            age: '38',
            identityID: '69556922457',
            email: 'duhayildirim@gmail.com',
            reasonForApp: 'Uçak bileti erteleme talebi',
            address: 'Merkez/ Elazığ',
            code: '',
            message: '',
            status: 'inceleniyor'
        },
        {
            name: 'Mehmet',
            surname: 'Günes',
            age: '19',
            identityID: '55886922457',
            email: 'gunes1@gmail.com',
            reasonForApp: 'Fatura adresi değişme talebi',
            address: 'Keçiören/ Ankara',
            code: '',
            message: '',
            status: 'inceleniyor'
        },
        {
            name: 'Melisa',
            surname: 'Ay',
            age: '44',
            identityID: '33957522457',
            email: 'aymelisa@gmail.com',
            reasonForApp: 'Hesap dondurma veya silme talebi',
            address: 'Alanya/ Antalya',
            code: '',
            message: '',
            status: 'inceleniyor'
        },
    ]);

    const values = {
        applications,
        setApplications
    };

    return <ApplicationContext.Provider value={values}>{children}</ApplicationContext.Provider>;
};

export const useApply = () => {
    const context = useContext(ApplicationContext);

    if(context === undefined){
        throw new Error('useApply must be used within a ApplicationsProvider');
    }

    return context;
};