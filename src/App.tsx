import { useState } from "react";
import "./App.css";
import Titulo from "./Titulo";
import Redes, { CardBody } from "./components/Redes/Redes";
import BotonI from "./components/BotonesI/BotonesI";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProyectosPage from "./pages/ProyectoPage/Proyectos";
import SkillPage from "./pages/SkillPage/Skill";
import Puerta from "./components/Puerta/Puerta";

function Home() {
  const navigate = useNavigate();
  const [doorState, setDoorState] = useState<"closed" | "opening">("closed");

  const onIngresar = () => {
    if (doorState === "opening") return;
    setDoorState("opening");
  };

  const onDoorDone = () => {
    if (doorState !== "opening") return;
    navigate("/skill");
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <Titulo />
      </header>

      <main className="botones-wrapper">
        <Puerta state={doorState} onDone={onDoorDone} size="lg" />
        <BotonI
          Titulo={"Ingresar"}
          className="boton-ingresar"
          onClick={onIngresar}
        />
      </main>

      <aside className="app-redes">
        <Redes>
          <CardBody Link={""} RedSocial={"Instagram"} />
          <CardBody Link={""} RedSocial={"facebook"} />
          <CardBody
            Link={"https://github.com/jhosue-pstr"}
            RedSocial={"github"}
            Usuario="jhosue-pstr"
          />
          <CardBody Link={""} RedSocial={"linkedin"} />
        </Redes>

        <BotonI
          Titulo={"Proyectos"}
          className="boton-proyectos"
          onClick={() => navigate("/proyectos")}
        />
      </aside>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos" element={<ProyectosPage />} />
      <Route path="/skill" element={<SkillPage />} />
    </Routes>
  );
}

export default App;
