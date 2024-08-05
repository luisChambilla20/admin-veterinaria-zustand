import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidV4 } from "uuid";
import { DraftPatient, Patient } from "./types";
import { persist } from "zustand/middleware";

type PatientState = {
  patients: Patient[];
  patientId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
  return {
    ...patient,
    id: uuidV4(),
  };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        patientId: "",

        addPatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            ...state,
            patients: [...state.patients, newPatient],
          }));
        },

        deletePatient: (id) => {
          set((state) => ({
            ...state,
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
        },

        getPatientById: (id) => {
          set((state) => ({
            ...state,
            patientId: id,
          }));
        },

        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.patientId
                ? { id: state.patientId, ...data }
                : patient
            ),
            patientId: "",
          }));
        },
      }),
      { name: "patient-storage" }
    )
  )
);
