import doct from "../data/DoctorsData.json";
import Doctors from "./Doctors";

function DoctorList(props) {

    const doctorList = doct.map((doc) => (
        <Doctors
            key={doc.id}
            {...doc}
            onBook={props.onBook}
        />
    ));

    return <div className="container mt-4">{doctorList}</div>;
}

export default DoctorList;