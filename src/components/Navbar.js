import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    function handleLogout() {
        sessionStorage.removeItem('currentUser');
        alert("Logged Out Successfully!");
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    Hospital System
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarLinks"
                    aria-controls="navbarLinks"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarLinks"
                >
                    <ul className="navbar-nav align-items-lg-center">

                        {currentUser && (
                            <>
                                <li className="nav-item fw-semibold">
                                    <Link className="nav-link" to="/doctors">
                                        Doctors
                                    </Link>
                                </li>

                                <li className="nav-item fw-semibold">
                                    <Link className="nav-link" to="/myappointments">
                                        MyAppointments
                                    </Link>
                                </li>
                            </>
                        )}

                        {currentUser && currentUser.email === "admin@gmail.com" && (
                            <li className="nav-item fw-semibold">
                                <Link className="nav-link text-warning fw-semibold" to="/admin">
                                    Admin Dashboard
                                </Link>
                            </li>
                        )}

                        {!currentUser ? (
                            <>
                                <li className="nav-item fw-semibold">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item fw-semibold">
                                    <Link className="nav-link" to="/signup">
                                        Signup
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item fw-semibold">
                                    <Link className="nav-link fw-semibold" to="/profile">
                                        Hi, {currentUser.name}
                                    </Link>
                                </li>

                                <li className="nav-item fw-semibold">
                                    <button
                                        className="btn btn-danger btn-sm ms-lg-2 mt-2 mt-lg-0"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;