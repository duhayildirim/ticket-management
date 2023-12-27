import { useFormik } from 'formik';
import { applyValidations } from '../common/validations';
import codeGenerator from '../common/codeGenerator';
import { useApply } from '../context/ApplicationContext';
import { useHistory } from 'react-router-dom';
import Loading from '../common/loading';
import { useState } from 'react';

function Apply() {
    const { addApplication } = useApply();
    const history = useHistory();
    const [ loading, setLoading ] = useState(false);

    const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: 'Duha',
            surname: 'Yıldırım',
            age: '38',
            identityID: '69556922457',
            email: 'duhayildirim@gmail.com',
            reasonForApp: 'uçak bileti erteleme talebi',
            address: 'merkez/ elazığ'
        },
        onSubmit: values => {
            setLoading(true);
            const generatedCode = codeGenerator();
            const newApplication = {
                ...values,
                code: generatedCode,
                message: '',
                status: 'inceleniyor'
            };
            addApplication(newApplication);
            setLoading(false);
            history.push('/basvuru-basarili', { code: generatedCode });
        },
        validationSchema: applyValidations,
    });

    return (
        <>
            <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 py-5">
                            <div className="py-5">
                                <h1 className="text-white mb-4">Başvuru Takip ve Yönetim Sistemi</h1>
                                <p className="text-white mb-0">Kolay ve etkili bir şekilde çeşitli başvuruları yapmanızı sağlayan ve bu süreçleri adım adım takip etmenizi sağlayan bir platformdur. Herhangi bir iş, okul, proje veya etkinlik başvurusunu kolaylıkla oluşturabilir ve başvurunuzun her aşamasını detaylı olarak izleyebilirsiniz.
                                    <br />Kolay kullanımı ve detaylı takip özellikleriyle, başvuru süreçlerinizi daha verimli hale getirebilirsiniz.<br />Başvuru adımlarınızı oluştururken, her aşamada size rehberlik eder ve başvurunuzun durumunu net bir şekilde gösterir.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                                <h1 className="text-white mb-4">Hemen Başvur</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" name="name" className="form-control border-0" placeholder="Ad"
                                                onChange={handleChange} value={values.name} onBlur={handleBlur} />
                                            {
                                                errors.name && touched.name && <small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color: 'white' }}>  {errors.name}</small>
                                            }
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" name="surname" className="form-control border-0" placeholder="Soyad"
                                                onChange={handleChange} value={values.surname} onBlur={handleBlur} />
                                            {
                                                errors.surname && touched.surname && <small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color:    'white' }}>{errors.surname}</small>
                                            }
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="number" name="age" className="form-control border-0" placeholder="Yaş"
                                                onChange={handleChange} value={values.age} onBlur={handleBlur} />
                                            {
                                                errors.age && touched.age && <small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color: 'white' }}>    {errors.age}</small>
                                            }
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="number" name="identityID" className="form-control border-0" placeholder="TC Kimlik No"
                                                onChange={handleChange} value={values.identityID} onBlur={handleBlur} />
                                            {
                                                errors.identityID && touched.identityID && <small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color:  'white' }}>{errors.identityID}</small>
                                            }
                                        </div>
                                        <div className="col-12">
                                            <input type="email" name="email" className="form-control border-0" placeholder="Email"
                                                onChange={handleChange} value={values.email} onBlur={handleBlur} />
                                            {
                                                errors.email && touched.email && <small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color: 'white' }}>    {errors.email}</small>
                                            }
                                        </div>
                                        <div className="col-12">
                                            <input type="text" name="reasonForApp" className="form-control border-0" placeholder="Başvuru Nedeni"
                                                onChange={handleChange} value={values.reasonForApp} onBlur={handleBlur} />
                                            {
                                                errors.reasonForApp && touched.reasonForApp && <small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154',     color: 'white' }}>{errors.reasonForApp}</small>
                                            }
                                        </div>
                                        <div className="col-12">
                                            <input type="text" name="address" className="form-control border-0" placeholder="Adres"
                                                onChange={handleChange} value={values.address} onBlur={handleBlur} />
                                            {
                                                errors.address && touched.address && <small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color:    'white' }}>{errors.address}</small>
                                            }
                                        </div>
                                        <div className="col-12 d-flex align-items-center justify-content-center">
                                            {
                                                loading ? <Loading/> : (
                                                    <button className="btn btn-secondary w-50 py-3" type="submit">Başvur</button>
                                                )
                                            }
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Apply;