import { ToastContainer } from 'react-toastify';
import { PatientForm } from "./components/PatientForm"
import { PacientList } from "./components/PacientList"


function App() {

  return (
    <>
      <div className="container mx-auto mt-14">
        <h1 className="text-4xl font-black text-center md:w-2/3 md:mx-auto">Seguimiento de pacientes de <span className="text-indigo-600">veterinaria</span></h1>
      </div>

      <div className="mt-12 md:flex">
        <PatientForm />
        <PacientList />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
