function Management() {
    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="text-primary text-uppercase">// ADMİN PANEL //</h6>
                        <h1 className="mb-5">Bekleyen Başvurular</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <div className="testimonial-item mt-4">
                            <div className="testimonial-text bg-light p-3">
                                <div className="row g-3">
                                    <h6 className="mb-1 text-center">Ad Soyad</h6>
                                    <div className="col-md-9">
                                        <p><strong>Kod: </strong>uXfe8955FG5f.</p>
                                        <p><strong>Başvuru nedeni: </strong>Uçak bileti erteleme talebi.</p>
                                        <p><strong style={{color: 'red'}}>Başvuru durum: </strong>
                                            Değerlendirilmeyi bekliyor. </p>
                                    </div>
                                    <div className="col-md-3">
                                        <button className="mt-4 btn btn-primary w-75 py-3" type="submit">
                                            Detay <i className="fa fa-eye"></i>
                                        </button>
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

export default Management;