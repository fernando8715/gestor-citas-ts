import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Patient } from "../types"
import { PatientDetailsItem } from "./PatientDetailsItem"
import { formatDate } from "../helpers"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

export const PatientDetails = ({ patient }: PatientDetailsProps) => {

    const deletePatient = usePatientStore(state => state.deletePatient);
    const setPatientById = usePatientStore(state => state.setPatientById);

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 my-10 flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between">
            <div>
                <PatientDetailsItem label='Paciente' data={patient.name} />
                <PatientDetailsItem label='Fecha de la cita' data={formatDate(patient.date.toString())} />
                <PatientDetailsItem label='Sintomas' data={patient.symptoms} />
                <PatientDetailsItem label='Propietario' data={patient.caretaker} />
                <PatientDetailsItem label='Email Propietario' data={patient.email} />
            </div>
            <div className="flex justify-between lg:items-start gap-2">
                <div className="flex flex-col items-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white uppercase p-2 rounded" onClick={() => setPatientById(patient.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                    <p className="bg-black text-white mt-2 px-1 rounded">Editar</p>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white uppercase p-2 rounded"
                        onClick={() => {deletePatient(patient.id), toast.error('Paciente eliminado')}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <p className="bg-black text-white mt-2 px-1 rounded">Eliminar</p>
                </div>
            </div>
        </div>
    )
}

