function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary">BaşvuruTakip</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="service.html" className="nav-item nav-link">Başvurularım</a>
                    </div>
                    <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Giriş Yap<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </nav>
        </>
    )
};

export default Navbar;