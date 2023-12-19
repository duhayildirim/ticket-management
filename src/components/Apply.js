function Apply() {
    return (
        <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6 py-5">
                        <div className="py-5">
                            <h1 className="text-white mb-4">Başvuru Takip ve Yönetim Sistemi</h1>
                            <p className="text-white mb-0">Kolay ve etkili bir şekilde çeşitli başvuruları yapmanızı sağlayan ve bu süreçleri adım adım takip etmenizi sağlayan bir platformdur. Herhangi bir iş, okul, proje veya etkinlik başvurusunu kolaylıkla oluşturabilir ve başvurunuzun her aşamasını detaylı olarak izleyebilirsiniz.
                                <br />Kolay kullanımı ve detaylı takip özellikleriyle, başvuru süreçlerinizi daha verimli hale getirebilirsiniz.<br />Başvuru adımlarınızı oluştururken, her aşamada size rehberlik eder ve başvurunuzun durumunu net bir şekilde gösterir.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                            <h1 className="text-white mb-4">Hemen Başvuru</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control border-0" placeholder="Ad" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control border-0" placeholder="Soyad" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="number" className="form-control border-0" placeholder="Yaş" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="number" className="form-control border-0" placeholder="TC Kimlik No" />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control border-0" placeholder="Email" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control border-0" placeholder="Başvuru Nedeni" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control border-0" placeholder="Adres" />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-secondary w-100 py-3" type="submit">Başvur</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Apply;