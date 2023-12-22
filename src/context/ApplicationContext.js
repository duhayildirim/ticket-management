import { createContext, useState, useContext } from 'react';

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const  [ applications , setApplications ] = useState([
        {
            name: 'Duha',
            surname: 'Yıldırım',
            age: '26',
            identityID: '69556922457',
            email: 'duhayildirim@gmail.com',
            reasonForApp: 'Uçak bileti erteleme talebi',
            address: 'Merkez/ Elazığ',
            code: 'UUU596233',
            message: 'Üzgünüz talebini reddetmek zorundayız. Ekiplerimiz gün içinde seninle iletişime geçecektir.',
            status: 'reddedildi'
        },
        {
            name: 'Mehmet',
            surname: 'Günes',
            age: '19',
            identityID: '55886922457',
            email: 'gunes1@gmail.com',
            reasonForApp: 'Fatura adresi değişme talebi',
            address: 'Keçiören/ Ankara',
            code: 'FAA889455',
            message: 'Gerekli kontroller sağlandıktan sonra sizinle iletişime geçeceğiz',
            status: 'inceleniyor'
        },
        {
            name: 'Melisa',
            surname: 'Yıldız',
            age: '27',
            identityID: '33957522457',
            email: 'yildizmelisa@gmail.com',
            reasonForApp: 'Askıya alınan hesabı tekrar açma talebi',
            address: 'Alanya/ Antalya',
            code: 'TTT977115',
            message: 'Hesabınız tekrar kullanıma açılmıştır.',
            status: 'onaylandı'
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