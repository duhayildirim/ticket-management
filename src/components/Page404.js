import { Link } from 'react-router-dom/cjs/react-router-dom';

function Page404() {
    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">İlgili İçerik Bulunamadı</h1>
                            <p className="mb-4">Üzgünüz, aradığınız sayfa web sitemizde mevcut değil! Belki ana sayfamıza gidebilir veya farklı bir arama kullanmayı deneyebilirsiniz?</p>
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to="/basvuru-olustur">Başvuru Oluştur</Link>
                            <Link className="btn btn-primary rounded-pill py-3 px-5 mt-3" to="/basvuru-sorgula">Başvuru Sorgula</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404;