function ApplyCheck() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-5">BAŞVURU ARA</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-12">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="ucXfE4955YU89" />
                                                <label htmlFor="name">Kodunu gir:</label>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Ara</button>
                                        </div>
                                        <div className="col-md-5">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                    </div>
                    <div className="col-md-2">
                        <div id="spinner" className="show bg-white translate-middle">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                    </div>
                </div>
            </div>
            <div className="container-xxl service py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-primary text-uppercase">// Kodu //</h6>
                        <h1 className="mb-5">Başvuru sahibi: Duha Yıldırım</h1>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-lg-4">
                            <div className="nav w-100 nav-pills me-4">
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                    <i className="fa fa-eye fa-2x me-3"></i>
                                    <h4 className="m-0">İnceleniyor</h4>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                    <i className="fa fa-times fa-2x me-3"></i>
                                    <h4 className="m-0">Reddedildi</h4>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                    <i className="fa fa-check fa-2x me-3"></i>
                                    <h4 className="m-0">Onaylandı</h4>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <h3 className="mb-3">Başvurun inceleniyor en kısa zamanda tekrar kontrol et.</h3>
                                            <p className="mb-4"><strong className="text-primary text-uppercase"> Adminin Mesajı: </strong> Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                            <p>Başvuru nedeni: Quality Servicing</p>
                                            <p>Email:</p>
                                            <p>TC:</p>
                                            <p>Adres:</p>
                                        </div>
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

export default ApplyCheck;
