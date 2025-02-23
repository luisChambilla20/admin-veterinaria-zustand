import PatientForm from "./components/PatientForm";
import { PatientList } from "./components/PatientList";

export const App = () => {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de pacientes{" "}
          <span className="text-indigo-700"> Veterinaria </span>
        </h1>
        <div className="mt-12 md:flex gap-x-4">
          <PatientForm />
          <PatientList />
        </div>
      </div>
    </>
  );
};
