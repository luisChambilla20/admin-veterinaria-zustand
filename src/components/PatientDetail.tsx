import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import { Patient } from "../types";
import { PatientDetailItem } from "./PatientDetailItem";

type PatientDetailProps = {
  patient: Patient;
};

export const PatientDetail = ({ patient }: PatientDetailProps) => {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  const deletePatientForm = () => {
    toast.error("Paciente Eliminado");
    deletePatient(patient.id);
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-lg rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Dueño" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />

      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="uppercase font-bold text-white bg-indigo-600 px-10 py-3 rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          type="button"
          className="uppercase font-bold text-white bg-red-600 px-10 py-3 rounded-lg"
          onClick={() => deletePatientForm()}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
