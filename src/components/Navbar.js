import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useLogin } from '../context/UserContext';

function Navbar() {
    const { isActive, setIsActive } = useLogin();

    const handleClick = () => {
        setIsActive(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/basvuru-olustur" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary">BaşvuruTakip</h2>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto" id="navbarCollapse">
                    {isActive ? 
                        <>
                            <div className="navbar-nav p-4 ms-auto p-lg-0">
                                <Link to="/basvuru-listesi" className="nav-item nav-link">Başvuru Listesi</Link>
                            </div>
                            <div className="navbar-nav p-4 p-lg-0">
                                <Link to="/basvuru-sorgula" className="nav-item nav-link">Başvuru Sorgula</Link>
                            </div>
                            <div className="navbar-nav p-4 p-lg-0">
                                <div className='btn btn-primary'>
                                    <Link onClick={handleClick} to="/basvuru-olustur" className="nav-item nav-link" style={{ color : 'white', paddingLeft: '33px' }}>
                                        Çıkış Yap <i className="fa fa-arrow-left ms-3" style={{ color : 'white' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </> 
                        : 
                        <>
                            <div className="navbar-nav p-4 ms-auto p-lg-0">
                                <Link to="/basvuru-sorgula" className="nav-item nav-link">Başvuru Sorgula</Link>
                            </div>
                            <div className="navbar-nav p-4 p-lg-0">
                                <div className='btn btn-primary'>
                                    <Link to="/admin" className="nav-item nav-link" style={{ color : 'white', paddingLeft: '33px' }}>
                                        Giriş Yap <i className="fa fa-arrow-right ms-3" style={{ color : 'white' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </> 
                    }
                </div>
            </nav>
        </>
    );
}

export default Navbar;
