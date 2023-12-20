import { useFormik } from 'formik';
import { adminMessageValidations } from '../common/validations';

function ApplyDetail() {
    const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            message: 'Örnek: Başvurunuz güvenlik sebebiyle reddedilmiştir.',
            status: 'reddedildi'
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: adminMessageValidations,
    });


    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="text-primary text-uppercase">// ADMİN PANEL //</h6>
                        <h1 className="mb-5">Başvuru Detayı</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <div className="testimonial-item text-center mt-5 mb-4">
                            <h5 className="mb-3">Ad Soyad</h5>
                            <p><strong>Kod: </strong>uXfe8955FG5f.</p>
                            <p><strong>Email: </strong>uXfe8955FG5f.</p>
                            <p><strong>TC: </strong>uXfe8955FG5f.</p>
                            <p><strong>Adres: </strong>uXfe8955FG5f.</p>
                            <div className="testimonial-text text-center p-1 mb-4">
                                <h6 className="mb-1">Başvuru nedeni:</h6>
                                <p className="mb-1">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                            <div className="testimonial-text bg-light text-center p-4">
                                <div className="col-md-12">
                                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <label className="mb-2" htmlFor="message">Başvuru sahibine mesaj gönder:</label>
                                                    <div>
                                                        <textarea name="message" type="text" className="form-control"
                                                            onChange={handleChange} value={values.message} onBlur={handleBlur} />
                                                    </div>
                                                    {
                                                        errors.message && touched.message && <small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color: '#b8101f' }}>
                                                            {errors.message}
                                                        </small>
                                                    }
                                                </div>
                                                <div className="col-md-4 mr-4">
                                                    <label className="mb-2" htmlFor="status">Başvuru durumunu güncelle:</label>
                                                    <div>
                                                        <select name="status" className="form-select border-0 ml-5"
                                                            onChange={handleChange} defaultValue={'reddedildi'}>
                                                            <option value={'inceleniyor'}>İnceleniyor</option>
                                                            <option value={'reddedildi'}>Reddedildi</option>
                                                            <option value={'onaylandı'}>Onaylandı</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <button className="mt-4 btn btn-primary w-100 py-3" type="submit">Kaydet</button>
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
        </>
    );
}

export default ApplyDetail;