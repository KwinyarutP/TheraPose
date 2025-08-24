import React, { useState } from "react";
import { Shell } from "./assets/ui";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import RegisterRole from "./pages/RegisterRole";
import RegisterPatient from "./pages/RegisterPatient";
import RegisterTherapist from "./pages/RegisterTherapist";
import Docs from "./pages/Docs";
import TargetUsers from "./pages/TargetUsers";

// Patient screens
import PatientProgramList from "./patient/ProgramList";
import PatientPostureInfo from "./patient/PostureInfo";
import CameraSession from "./patient/CameraSession";
import Finished from "./patient/Finished";
import Results from "./patient/Results";

// Therapist screens
import TherapistDashboard from "./therapist/Dashboard";
import TherapistAddPatient from "./therapist/AddPatient";
import PatientInfo from "./therapist/PatientInfo";

const screens = {
  landing: "landing",
  login: "login",
  registerRole: "registerRole",
  registerPatient: "registerPatient",
  registerTherapist: "registerTherapist",
  therapistDash: "therapistDash",
  therapistAddPatient: "therapistAddPatient",
  patientInfo: "patientInfo",
  patientProgramList: "patientProgramList",
  patientPostureInfo: "patientPostureInfo",
  cameraSession: "cameraSession",
  finished: "finished",
  results: "results",
  docs: "docs",
  targetUsers: "targetUsers",
};

export default function App() {
  const [route, setRoute] = useState(screens.landing);
  const [formData, setFormData] = useState({});
  const [patients, setPatients] = useState([
    { id: 1, name: "Somchai Prasert", hn: "H123456", status: "Active", progress: 85 },
    { id: 2, name: "Mali Jaidee", hn: "H123457", status: "New", progress: 0 },
    { id: 3, name: "Suwan Klong", hn: "H123458", status: "Completed", progress: 100 }
  ]);

  const go = (r) => setRoute(r);
  const updateFormData = (key, value) => setFormData(prev => ({ ...prev, [key]: value }));

  return (
    <Shell onNavigate={go}>
      {route === screens.landing && <Landing go={go} />}
      {route === screens.login && <Login go={go} formData={formData} updateFormData={updateFormData} />}
      {route === screens.registerRole && <RegisterRole go={go} />}
      {route === screens.registerPatient && <RegisterPatient go={go} formData={formData} updateFormData={updateFormData} />}
      {route === screens.registerTherapist && <RegisterTherapist go={go} formData={formData} updateFormData={updateFormData} />}

      {route === screens.therapistDash && <TherapistDashboard go={go} patients={patients} />}
      {route === screens.therapistAddPatient && <TherapistAddPatient go={go} patients={patients} setPatients={setPatients} />}
      {route === screens.patientInfo && <PatientInfo go={go} patients={patients} />}

      {route === screens.patientProgramList && <PatientProgramList go={go} />}
      {route === screens.patientPostureInfo && <PatientPostureInfo go={go} />}
      {route === screens.cameraSession && <CameraSession go={go} />}
      {route === screens.finished && <Finished go={go} />}
      {route === screens.results && <Results go={go} />}

      {route === screens.docs && <Docs />}
      {route === screens.targetUsers && <TargetUsers />}
    </Shell>
  );
}
