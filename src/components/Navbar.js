import { Link } from "react-router-dom/cjs/react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/basvuru-olustur" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary">BaşvuruTakip</h2>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/basvuru-sorgula" className="nav-item nav-link">Başvuru Sorgula</Link>
                    </div>
                    <Link to="/admin" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Giriş Yap<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>
        </>
    )
};

export default Navbar;