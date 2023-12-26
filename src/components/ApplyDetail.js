import { useFormik } from 'formik';
import { adminMessageValidations } from '../common/validations';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useApply } from '../context/ApplicationContext';
import Loading from '../common/loading';
import { useState } from 'react';

function ApplyDetail() {
    const { code } = useParams();
    const { applications, updateApplication } = useApply();
    const history = useHistory();
    const [ loading, setLoading ] = useState(false);

    const applyFiltered = applications.filter((app) => {
        return app.code.includes(code);
    });

    const apply = applyFiltered.length > 0 ? applyFiltered[0] : null;

    if (!applyFiltered.length || !apply) {
        history.push('/error');
        window.location.reload();
        return null;
    }

    const defaultInitialValues = {
        message: 'Örnek: Başvurunuz güvenlik sebebiyle reddedilmiştir.',
        status: 'reddedildi'
    };

    const applyMessage = apply && apply.message ? apply.message : defaultInitialValues.message;
    const applyStatus = apply && apply.status ? apply.status : defaultInitialValues.status;
    
    const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            message: applyMessage,
            status: applyStatus
        },
        onSubmit: values => {
            setLoading(true);
            updateApplication(code, values);
            setLoading(false);
            history.push('/basvuru-listesi');
        },
        validationSchema: adminMessageValidations,
    });

    if (!apply) {
        return <Loading />;
    }

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="text-primary text-uppercase">// ADMİN PANEL //</h6>
                    <h1 className="mb-5">Başvuru Detayı</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    <div className="testimonial-item mt-4">
                        <div className="testimonial-text bg-light p-3">
                            <div className="row g-3 p-4">
                                <h5 className="text-center mb-2">{apply.name} {apply.surname}</h5>
                                <div className="col-md-6">
                                    <p><strong>Kod: </strong>{apply.code}</p>
                                    <p><strong>Email: </strong>{apply.email}</p>
                                    <p><strong>TC: </strong>{apply.identityID}</p>
                                    <p><strong>Adres: </strong>{apply.address}</p>
                                    <p><strong>Başvuru nedeni: </strong>{apply.reasonForApp}</p>
                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-md-12 d-flex align-items-center justify-content-center">
                                            <div className="w-100">
                                                <label className="mb-2" htmlFor="message">Başvuru sahibine mesaj gönder:</label>
                                                <textarea name="message" type="text" className="form-control"
                                                    onChange={handleChange} value={values.message} onBlur={handleBlur} />
                                                {
                                                    errors.message && touched.message && <small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154',color: '#b8101f' }}>
                                                        {errors.message}
                                                    </small>
                                                }
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-12 d-flex align-items-center justify-content-center mt-3">
                                            <div className="w-100">
                                                <label className="mb-2" htmlFor="status">Başvuru durumunu güncelle:</label>
                                                <select name="status" className="form-select border-0 ml-5"
                                                    onChange={handleChange} value={values.status}>
                                                    <option value={'inceleniyor'}>İnceleniyor</option>
                                                    <option value={'reddedildi'}>Reddedildi</option>
                                                    <option value={'onaylandı'}>Onaylandı</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="w-100 d-flex align-items-center justify-content-center">
                                                {loading ? <Loading/> : (
                                                    <button className="mt-4 btn btn-primary py-3 w-50" type="submit">Kaydet</button>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplyDetail;
