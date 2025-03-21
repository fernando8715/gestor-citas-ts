import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Error } from "./Error";
import { usePatientStore } from "../store";

import type { DraftPatient } from "../types";


export const PatientForm = () => {

    const addPatient = usePatientStore(state => state.addPatient);
    const activeId = usePatientStore(state => state.activeId);
    const patients = usePatientStore(state => state.patients);
    const updatePatient = usePatientStore(state => state.updatePatient)

    // la documentación de reac-hook-form https://react-hook-form.com/
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<DraftPatient>();

    useEffect(() => {
        if (activeId) {
            const activePatient = patients.filter(patient => patient.id === activeId)[0];
            // la funcion setValue va a setear los valores recuperados en el formulario
            setValue("name", activePatient.name);
            setValue("caretaker", activePatient.caretaker);
            setValue("email", activePatient.email);
            setValue("date", activePatient.date);
            setValue("symptoms", activePatient.symptoms);
        }
    }, [activeId])

    const registerPatient = (data: DraftPatient) => {
        if (activeId) {
            updatePatient(data);
            toast.success('Paciente actualizado con exíto', {theme:"dark"});
        } else {
            addPatient(data);
            toast.success('Paciente agregado exitosamente', {theme:"dark"});
        }
        reset();  // esta funcion de react-hook-form borra los datos del formulario luego del submit
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-bold text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register('name', { required: 'El nombre del paciente es obliatorio' })}
                    />
                    {errors.name && (
                        <Error>{errors.name?.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register('caretaker', { required: 'El nombre del propietario es obligatorio' })}
                    />
                    {errors.caretaker && (
                        <Error>{errors.caretaker?.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Email de Registro"
                        {...register('email', {
                            required: 'Email obligatorio',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email no valido'
                            }
                        })}

                    />
                    {errors.email && (
                        <Error>{errors.email?.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register('date', {
                            required: 'Seleccione una fecha',
                        })}
                    />
                    {errors.date && (
                        <Error>{errors.date?.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Síntomas del paciente"
                        {...register('symptoms', {
                            required: 'Describa los sintomas',
                            minLength: {
                                value: 6,
                                message: 'Haga una descripción mas extensa de los sintomas'
                            }
                        })}
                    />
                    {errors.symptoms && (
                        <Error>{errors.symptoms?.message?.toString()}</Error>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Guardar Paciente'
                />
            </form>
        </div>
    )
}