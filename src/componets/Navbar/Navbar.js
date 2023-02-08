import React from "react";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-color">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">Barber App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="/addService">Agregar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;