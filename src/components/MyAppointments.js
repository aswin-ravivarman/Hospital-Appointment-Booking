function MyAppointments({ appointment, onCancel }) {

    return (
        <div className="card p-3 shadow mb-3">
            <h5>{appointment.doctorName}</h5>
            <p>{appointment.speciality}</p>
            <p><b>Date:</b> {appointment.date}</p>
            <p><b>Time:</b> {appointment.time}</p>
            <p><b>Contact:</b> {appointment.contactEmail}</p>

            <button
                className="btn btn-danger btn-sm"
                onClick={() => onCancel(appointment.id)}
            >
                Cancel Appointment
            </button>
        </div>
    );
}

export default MyAppointments;