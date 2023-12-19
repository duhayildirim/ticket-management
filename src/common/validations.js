import * as yup from "yup";

const validations = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z ]*$/, 'Geçersiz ad').required('Ad boş bırakılamaz.'),
    surname: yup.string().matches(/^[a-zA-Z ]*$/, 'Geçersiz ad').required('Soyad boş bırakılamaz.'),
    age: yup.number().required('Yaş boş bırakılamaz.').positive('Geçersiz değer')
        .min(16, '16 yaşından küçükler başvuru yapamaz').max(120),
    identityID: yup.number().required('TC Kimlik boş bırakılamaz.').positive('Geçersiz değer')
        .min(10000000000, '11 haneli numaranızı doğru kodlamanız gerekmektedir')
        .max(100000000000, '11 haneli numaranızı doğru kodlamanız gerekmektedir'),
    email: yup.string().required('Email boş bırakılamaz.').email('Geçersiz email formatı'),
    reasonForApp: yup.string().required('Başvuru nedeni boş bırakılamaz.'),
    address: yup.string().required('Adres boş bırakılamaz.'),
});

export default validations;