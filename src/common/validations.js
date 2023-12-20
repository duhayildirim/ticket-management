import * as yup from "yup";

const applyValidations = yup.object().shape({
    name: yup.string().matches(/^[a-zA-ZığüşöçĞÜŞÖÇİ ]*$/, 'Geçersiz ad').required('Ad boş bırakılamaz.'),
    surname: yup.string().matches(/^[a-zA-ZığüşöçĞÜŞÖÇİ ]*$/, 'Geçersiz soyad').required('Soyad boş bırakılamaz.'),
    age: yup.number().required('Yaş boş bırakılamaz.').positive('Geçersiz değer')
        .min(16, '16 yaşından küçükler başvuru yapamaz').max(120),
    identityID: yup.number().required('TC Kimlik boş bırakılamaz.').positive('Geçersiz değer')
        .min(10000000000, '11 haneli numaranızı doğru kodlamanız gerekmektedir')
        .max(100000000000, '11 haneli numaranızı doğru kodlamanız gerekmektedir'),
    email: yup.string().required('Email boş bırakılamaz.').email('Geçersiz email formatı'),
    reasonForApp: yup.string().required('Başvuru nedeni boş bırakılamaz.'),
    address: yup.string().required('Adres boş bırakılamaz.'),
});

const loginValidations = yup.object().shape({
    username: yup.string().required('Kullanıcı adı boş bırakılamaz'),
    password: yup.string().required('Şifre boş bırakılamaz')
});

export { applyValidations, loginValidations };