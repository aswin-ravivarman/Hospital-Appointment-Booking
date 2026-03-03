import React, { useState } from "react";

function Doctors(props) {

    const [showForm, setShowForm] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function handleConfirm() {

        if (!date || !time) {
            alert("Select date and time");
            return;
        }

        const user = JSON.parse(sessionStorage.getItem("currentUser"));
        if (!user) {
            alert("Please login first");
            return;
        }

        let appointments =
            JSON.parse(localStorage.getItem("appointments")) || [];

        const doctorAppointments = appointments.filter(
            (a) =>
                a.doctorName === props.name &&
                a.date === date
        );

        const hasMorning = props.availability.some(slot => slot.toLowerCase().includes("am"));
        const hasEvening = props.availability.some(slot => slot.toLowerCase().includes("pm"));

        let limit = 10;
        if (hasMorning && hasEvening) {
            limit = 20;
        }

        if (doctorAppointments.length >= limit) {
            alert("Maximum appointments reached for this day");
            return;
        }

        props.onBook({
            userEmail: user.email,
            doctorName: props.name,
            speciality: props.speciality,
            contactEmail: props.contactEmail,
            date,
            time
        });

        alert("Appointment Booked Successfully");

        setDate("");
        setTime("");
        setShowForm(false);
    }

    return (
        <div className="card p-4 shadow mb-3">

            <h3>{props.name}</h3>
            <p>{props.speciality} - {props.experience} years</p>
            <p>Qualification: {props.qualification}</p>
            <p>Consultation Fee: ₹{props.consultationFee}</p>
            <p>Rating: {props.rating} / 5</p>

            {!showForm ? (
                <button className="btn btn-primary" onClick={() => setShowForm(true)}>Book</button>
            ) : (
                <div className="mt-3">

                    <input
                        type="date"
                        className="form-control mb-2"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <select
                        className="form-control mb-2"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="">Select Time</option>
                        {props.availability.map((slot, index) => (
                            <option key={index} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>

                    <button className="btn btn-success me-2" onClick={handleConfirm}>Confirm</button>

                    <button className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>

                </div>
            )}

        </div>
    );
}

export default Doctors;