import '../style/header.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid main-container">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}