function Loading() {
    return (
        <button className="btn btn-primary w-100 py-3 d-flex justify-content-center mt-3" disabled type="submit">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>    
        </button>
    );
}

export default Loading;
