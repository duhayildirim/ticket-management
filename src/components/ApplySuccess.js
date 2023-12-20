import { useRef } from 'react';

function ApplySuccess() {
    const applyCodeRef = useRef(null);

    const handleCopyClick = () => {
        const code = applyCodeRef.current.textContent;

        navigator.clipboard.writeText(code)
            .then(() => {
                alert('Kod panoya kopyalandı! Şimdi "Başvuru Sorgula" sekmesinde kodunu aratarak, başvurunun son durumunu görebilirsin.');
            })
            .catch(err => {
                console.error('Kopyalama başarısız oldu: ', err);
            });
    };

    return (
        <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-10 py-5">
                        <div className="py-5">
                            <h1 className="text-white mb-4">Başvurunu aldık  <i style={{ marginLeft: '5px' }} className="fa fa-check"></i> </h1>
                            <p className="text-white mb-4">Aşağıda bulunan başvuru kodunu kopyalayıp; -Başvuru Sorgula- sekmesinde aratarak, başvurunun son durumunu görebilirsin.</p>
                            <div className="d-flex align-items-center">
                                <h3 className="text-white apply-code mt-1" ref={applyCodeRef}>usdfdsf:ASDASDsd</h3>
                                <button className="btn-xs btn-primary" style={{ marginLeft: '5px' }} type="button" onClick={handleCopyClick}>
                                    <i className="fa fa-copy"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 py-5">
                        <div className="py-5 mt-4">
                            <button className="mt-4 btn btn-primary py-3" type="button">Başvuru Sorgula</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplySuccess;
