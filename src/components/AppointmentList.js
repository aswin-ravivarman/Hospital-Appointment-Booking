import MyAppointments from "./MyAppointments";

function AppointmentList(props) {

    const user = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!user) {
        return <p className="text-center mt-4">Please login</p>;
    }

    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const myappointments = appointments.filter(
        (a) => a.userEmail === user.email
    );

    return (
        <div className="container mt-4">
            <h3>My Appointments</h3>
            {myappointments.length > 0 ? (
                myappointments.map((appointment) => (
                    <MyAppointments
                        key={appointment.id}
                        appointment={appointment}
                        onCancel={props.onCancel}
                    />
                ))
            ) : (
                <p>No appointments booked yet.</p>
            )}
        </div>
    );
}

export default AppointmentList;