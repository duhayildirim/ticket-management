import { useApply } from '../context/ApplicationContext';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Management() {
    const { applications } = useApply();

    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="text-primary text-uppercase">// ADMİN PANEL //</h6>
                        <h1 className="mb-5">Bekleyen Başvurular</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        {
                            applications && applications.length > 0 ? (
                                applications.map((app, index) => (
                                    <div key={index} className="testimonial-item mt-4">
                                        <div className="testimonial-text bg-light p-3">
                                            <div className="row g-3">
                                                <h6 className="mb-1 text-center">{app.name} {app.surname}</h6>
                                                <div className="col-md-9">
                                                    <p><strong>Kod: </strong>{app.code}</p>
                                                    <p><strong>Başvuru nedeni: </strong>{app.reasonForApp}</p>
                                                    <p><strong style={{color: 'red'}}>Başvuru durumu: </strong>{app.status}</p>
                                                </div>
                                                <div className="col-md-3">
                                                    <Link to={`/basvuru-detay/${app.code}`} className="mt-4 btn btn-primary w-75 py-3">
                                                        Detay <i className="fa fa-eye"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="testimonial-item mt-2">
                                    <div className="testimonial-text bg-light p-3">
                                        <div className="row g-3">
                                            <h6 className="mb-1 text-center">Aktif başvuru bulunmamaktadır.</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Management;