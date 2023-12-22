import { useApply } from '../context/ApplicationContext';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

function ApplyCheck() {
    const [ showErr, setShowErr] = useState(false);
    const [ filteredData, setFilteredData ] = useState();
    const { applications } = useApply();
    const history = useHistory();

    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: values => {
            if(values.search.length > 0){
                setShowErr(false);
                const result = applications.filter((app) => {
                    return app.code.includes(values.search);
                });
                if(result[0]){
                    setFilteredData(result[0]);
                } else {
                    history.push('/error');
                }
            } else {
                setShowErr(true);
            }
        }
    });

    function renderStatusMessage() {
        if (filteredData.status === 'inceleniyor') {
            return 'Başvurun inceleniyor, bir süre sonra tekrar kontrol et.';
        } else if (filteredData.status === 'onaylandı') {
            return 'Tebrikler, Başvurun onaylandı.';
        } else {
            return 'Üzgünüz, Başvuruna olumlu yanıt veremiyoruz.';
        }
    }

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-5">BAŞVURU ARA</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text"  className="form-control" name="search" id="search" value={values.search} onChange={handleChange}/>
                                                <label htmlFor="search">Kodunu  gir:</label>
                                            </div>
                                            {
                                                showErr == true && (<small style={{ textDecoration: 'underline', textDecorationColor: '#0B2154', color: '#b8101f' }}>
                                                Lütfen size verilen kodu girin.
                                                </small>)
                                            }
                                        </div>
                                        <div className="col-md-5">
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Ara</button>
                                        </div>
                                        <div className="col-md-5">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {
                filteredData ? (
                    <div className="container-xxl service py-2">
                        <div className="container">
                            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                                <h6 className="text-primary text-uppercase">// {filteredData.code} //</h6>
                                <h1 className="mb-4">Başvuru sahibi: {filteredData.name} {filteredData.surname}</h1>
                            </div>
                            <div className="row g-4 wow fadeInUp d-flex justify-content-center" data-wow-delay="0.3s">
                                <div className="col-lg-4">
                                    <div className="nav w-100 nav-pills me-4">
                                        <button className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${filteredData.status === 'inceleniyor' ? 'active' : ''}`}>
                                            <i className="fa fa-eye fa-2x me-3"></i>
                                            <h4 className="m-0">İnceleniyor</h4>
                                        </button>
                                        <button className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${filteredData.status === 'onaylandı' ? 'active' : ''}`}>
                                            <i className="fa fa-check fa-2x me-3"></i>
                                            <h4 className="m-0">Onaylandı</h4>
                                        </button>
                                        <button className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${filteredData.status === 'reddedildi' ? 'active' : ''}`}>
                                            <i className="fa fa-times fa-2x me-3"></i>
                                            <h4 className="m-0">Reddedildi</h4>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="tab-content w-100">
                                        <div className="tab-pane fade show active" id="tab-pane-1">
                                            <div className="row g-4">
                                                <div className="col-md-12">
                                                    <h3 className="mb-3">{renderStatusMessage()}</h3>
                                                    <p className="mb-4"><strong className="text-primary text-uppercase"> Adminin Mesajı: </strong> {filteredData.message ? filteredData.message : 'Adminden henüz bir mesaj yok.'} </p>
                                                    <p> <strong>Başvuru nedeni: </strong>{filteredData.reasonForApp}</p>
                                                    <p> <strong>Email: </strong>{filteredData.email}</p>
                                                    <p> <strong>TC: </strong>{filteredData.identityID}</p>
                                                    <p> <strong>Adres: </strong>{filteredData.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
}

export default ApplyCheck;
