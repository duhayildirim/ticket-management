import { useFormik } from 'formik';
import { loginValidations } from '../common/validations';
import { useLogin } from '../context/UserContext';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const { username, password, setIsActive } = useLogin();
    const [ loginErrMessage, setLoginErrMessage ] = useState(false);
    const history = useHistory();

    const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            if(values.username === username && values.password === password){
                setLoginErrMessage(false);
                setIsActive(true);
                history.push('/basvuru-listesi');
            } else {
                setLoginErrMessage(true);
            }

        },
        validationSchema: loginValidations,
    });

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5">Giriş Yap</h1>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">// Admin info: //</h5>
                                    <p className="m-0"><i className="fa fa-user text-primary me-2"></i>kodluyoruz</p>
                                    <p className="m-0"><i className="fa fa-lock text-primary me-2"></i>bootcamp109</p>
                                </div>
                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-12 d-flex align-items-center justify-content-center">
                                        <div className="form-floating w-50">
                                            <input
                                                type="text"
                                                className="form-control "
                                                name="username"
                                                onChange={handleChange}
                                                value={values.username}
                                                onBlur={handleBlur}
                                            />
                                            <label htmlFor="username">Kullanıcı adı</label>
                                        </div>
                                    </div>
                                    {errors.username && touched.username && ( // Hata mesajı burada kontrol edilecek
                                        <div className="col-md-12">
                                            <small className="d-flex justify-content-center" style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color: '#b8101f' }}>
                                                {errors.username}
                                            </small>
                                        </div>
                                    )}
                                    <div className="col-md-12 d-flex align-items-center justify-content-center">
                                        <div className="form-floating w-50">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                onChange={handleChange}
                                                value={values.password}
                                                onBlur={handleBlur}
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    {errors.password && touched.password && ( // Hata mesajı burada kontrol edilecek
                                        <div className="col-md-12">
                                            <small className="d-flex justify-content-center" style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color: '#b8101f' }}>
                                                {errors.password}
                                            </small>
                                        </div>
                                    )}
                                    <div className="col-md-4"></div>
                                    <div className="col-4">
                                        {loginErrMessage && (
                                            <span className='d-flex justify-content-center py-3' style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color: '#b8101f' }}>
                                                Hatalı kullanıcı adı veya parola !
                                            </span>
                                        )}
                                        <button className="btn btn-primary w-100 py-3 d-flex justify-content-center mt-3" type="submit">Giriş Yap</button>
                                    </div>
                                    <div className="col-md-4"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;