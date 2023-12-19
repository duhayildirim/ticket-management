import { useFormik } from "formik";

function Apply() {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            age: '',
            identityID: '',
            email: '',
            reasonForApp: '',
            address: ''
        },
        onSubmit: values => {
            console.log(values);
        },
    });

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
                            <h1 className="text-white mb-4">Hemen Başvur</h1>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" name="name" className="form-control border-0" placeholder="Ad"
                                            onChange={formik.handleChange} value={formik.values.name} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" name="surname" className="form-control border-0" placeholder="Soyad"
                                            onChange={formik.handleChange} value={formik.values.surname} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="number" name="age" className="form-control border-0" placeholder="Yaş"
                                            onChange={formik.handleChange} value={formik.values.age} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="number" name="identityID" className="form-control border-0" placeholder="TC Kimlik No"
                                            onChange={formik.handleChange} value={formik.values.identityID} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" name="email" className="form-control border-0" placeholder="Email"
                                            onChange={formik.handleChange} value={formik.values.email} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="reasonForApp" className="form-control border-0" placeholder="Başvuru Nedeni"
                                            onChange={formik.handleChange} value={formik.values.reasonForApp} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="address" className="form-control border-0" placeholder="Adres"
                                            onChange={formik.handleChange} value={formik.values.address} />
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