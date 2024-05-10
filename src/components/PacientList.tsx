import { usePatientStore } from "../store"
import { PatientDetails } from "./PatientDetails";

export const PacientList = () => {

  const patients = usePatientStore(state => state.patients);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ?
        (<>
          <h2 className="text-center text-3xl font-bold">Listado de pacientes</h2>
          <p className="text-center text-lg mt-5 mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
          {patients.map(patient => (
            <PatientDetails key={patient.id} patient={patient}/>
          ))}
        </>)
        : (
          <>
            <h2 className="text-center text-3xl font-bold">No hay pacientes</h2>
            <p className="text-center text-lg mt-5 mb-10">
              Registra los pacientes y {''}
              <span className="text-indigo-600 font-bold">apareceran aquí</span>
            </p>
          </>
        )

      }
    </div>
  )
}



