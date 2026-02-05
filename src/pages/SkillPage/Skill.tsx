import "./Skill.css";
import Runas from "../../components/Runas/Runas";
import Box from "../../components/CajaPersonaje/Box";

function SkillPage() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Skills</h1>
      </header>
      <main className="botones-wrapper">
        <Runas titulo="Backend" url="/runa-back.png"></Runas>
        <Runas titulo="Bases de datos" url="/runa-db.png"></Runas>
        <Runas titulo="Frontend" url="/runa-front.png"></Runas>
        <Box></Box>
      </main>
    </div>
  );
}

export default SkillPage;
