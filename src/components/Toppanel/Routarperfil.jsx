import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SenttingsUser from "./SenttinUser";
import Panelperfil from "../../pages/Perfil/Panelperfil";

function Routaruser() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SenttingsUser/>} />
        <Route path="/perfil" element={<Panelperfil/>} />
      </Routes>
    </Router>
  );
}

export default Routaruser;
