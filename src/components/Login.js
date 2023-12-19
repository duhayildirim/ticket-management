function Login() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-primary text-uppercase"></h6>
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
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>kodluyoruz</p>
                                    <p className="m-0"><i className="fa fa-lock text-primary me-2"></i>bootcamp109</p>
                                </div>
                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name="email" />
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" name="password"/>
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Giriş Yap</button>
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
    )
}

export default Login;