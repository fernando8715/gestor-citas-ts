// al instalar uuid se debe instalar los types cuando se trabaja con TS
import { v4 as uuidv4 } from 'uuid';
import { devtools, persist } from 'zustand/middleware'
import { create } from 'zustand'
import { DraftPatient, Patient } from './types'


type PatientState = {
    patients: Patient[],
    activeId: Patient['id'],
    addPatient: (data: DraftPatient) => void,
    deletePatient: (id: Patient['id']) => void,
    setPatientById: (id: Patient['id']) => void,
    updatePatient: (data: DraftPatient) => void,
}

const createPatient = (patient: DraftPatient): Patient => {
    return { id: uuidv4(), ...patient }
}

// el store recibe como parametros el set y get y estas funciones reciben como parametro el state
export const usePatientStore = create<PatientState>()
    //los parametros que recibe la funcion son *set* para modificar y *get* para recuperar
    (devtools(
        // la función de persist de Zustand maneja el almacenamiento por defecto en el localStorage o se puede especificar en las opciones que sea en SessionStorage.
        persist((set) => ({
            patients: [],
            activeId: '',

            addPatient: (data) => {
                const newPatient = createPatient(data); // agrega un id empleando la libreria de uuidv4

                //para modificar se utiliza set la siguiente estructura.
                set((state) => ({
                    patients: [...state.patients, newPatient],
                }))
            },
            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(p => p.id !== id)
                }))
            },

            setPatientById: (id) => {
                set(() => ({
                    activeId: id
                }))
            },

            // los datos que recibe del formulario estan sin el ID, para modificarlo le paso el ID que recupere en activeId
            updatePatient: (data) => {
                set((state) => ({
                    patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
                    activeId: '',
                }))

            }

        }), {
            name: 'pacientes',
            // storage: createJSONStorage(() => sessionStorage)
            // con esta opcion en la función de *persist* va a almacenarlo en sessionStorage
        })
    ))