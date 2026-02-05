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
        <div className="col col-left">
          <Runas titulo="Backend" url="/runa-back.png" />

          <Runas titulo="Frontend" url="/runa-front.png" />
        </div>

        <div className="col col-center">
          <Box />
        </div>

        <div className="col col-right">
          <Runas titulo="Bases de datos" url="/runa-db.png" />
          <Runas titulo="Bases de datos" url="/runa.png" />
        </div>
      </main>
    </div>
  );
}

export default SkillPage;
