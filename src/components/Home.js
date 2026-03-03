import React from "react";
import { Link } from "react-router-dom";

function Home() {

    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    return (
        <div className="container mt-5">

            <div className="card shadow p-5 text-center">

                <h1 className="mb-3 text-primary"> Welcome to Hospital Appointment Platform</h1>

                {currentUser ? (
                    <>
                        <h4 className="mb-4">
                            Hello, {currentUser.name}
                        </h4>

                        <p className="mb-4">
                            You can book appointments with top specialists and manage your visits easily.
                        </p>

                        <div className="d-flex justify-content-center gap-3">

                            <Link to="/doctors" className="btn btn-primary btn-lg">
                                View Doctors
                            </Link>

                            <Link to="/myappointments" className="btn btn-success btn-lg">
                                My Appointments
                            </Link>

                        </div>
                    </>
                ) : (
                    <>
                        <p className="mb-4">
                            Please login or signup to book appointments.
                        </p>

                        <div className="d-flex justify-content-center gap-3">

                            <Link to="/login" className="btn btn-primary btn-lg">
                                Login
                            </Link>

                            <Link to="/signup" className="btn btn-success btn-lg">
                                Signup
                            </Link>

                        </div>
                    </>
                )}

            </div>

        </div>
    );
}

export default Home;