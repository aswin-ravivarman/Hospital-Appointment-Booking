import React from "react";
import { useNavigate } from "react-router-dom";

function PatientProfile() {

    const navigate = useNavigate();
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!currentUser) {
        navigate("/login");
        return null;
    }

    function handleLogout() {
        sessionStorage.removeItem("currentUser");
        alert("Logged Out Successfully!");
        navigate("/login");
    }

    return (
        <div className="container mt-5">

            <div className="card shadow p-4">

                <h3 className="mb-4 text-primary">
                    Patient Profile
                </h3>

                <p><strong>Name:</strong> {currentUser.name}</p>
                <p><strong>Email:</strong> {currentUser.email}</p>
                <p><strong>Role:</strong> {currentUser.role}</p>

                <div className="mt-4">
                    <button 
                        className="btn btn-danger"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>

            </div>

        </div>
    );
}

export default PatientProfile;