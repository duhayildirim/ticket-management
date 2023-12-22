function Loading() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <div id="spinner" className="show bg-white translate-middle">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-5"></div>
            </div>
        </div>
    );
}

export default Loading;
