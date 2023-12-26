import { createContext, useState, useContext, useEffect } from 'react';

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const initialApp = [
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
    ];

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const storedApps = JSON.parse(localStorage.getItem('apps'));
        if (!storedApps || storedApps.length === 0) {
            localStorage.setItem('apps', JSON.stringify(initialApp));
            setApplications(initialApp);
        } else {
            setApplications(storedApps);
        }
    }, []);

    const addApplication = (newApplication) => {
        const updatedApplications = [...applications, newApplication];
        setApplications(updatedApplications);
        localStorage.setItem('apps', JSON.stringify(updatedApplications));
    };

    const updateApplication = (code, updatedValues) => {
        const updatedApplications = applications.map((app) => {
            if (app.code === code) {
                return {
                    ...app,
                    ...updatedValues
                };
            }
            return app;
        });

        setApplications(updatedApplications);
        localStorage.setItem('apps', JSON.stringify(updatedApplications));
    };

    const values = {
        applications,
        addApplication,
        updateApplication
    };

    return (
        <ApplicationContext.Provider value={values}>
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApply = () => {
    const context = useContext(ApplicationContext);

    if (context === undefined) {
        throw new Error('useApply must be used within an ApplicationProvider');
    }

    return context;
};
