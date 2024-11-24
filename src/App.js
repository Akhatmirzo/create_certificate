import { useState } from "react";
import "./App.css";
import Certificate from "./pages/Certificate";
import FormPage from "./pages/FormPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [student, setStudent] = useState({
    fullname: null,
    specialization_name: null,
    from: null,
    to: null,
    diplom_number: null,
    kredit_number: null,
    boss_name: null,
    createdAt: null,
    expiredAt: 5,
    record_number: null,
  });

  return (
    <Routes>
      <Route path="/" element={<FormPage setStudent={setStudent} />} />
      <Route path="/certificate" element={<Certificate student={student} />} />
    </Routes>
  );
}

export default App;
