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
          <Runas url="/runa-back.png" titulo="Backend" ruta="back">
            xddd{" "}
          </Runas>
          <Runas url="/runa-front.png" titulo="Frontend" ruta="front">
            contenido front
          </Runas>
        </div>

        <div className="col col-center">
          <Box />
        </div>

        <div className="col col-right">
          <Runas url="/runa-db.png" titulo="Backend" ruta="db">
            contenido back
          </Runas>
          <Runas url="/runa-db.png" titulo="Backend" ruta="db">
            contenido back
          </Runas>
        </div>
      </main>
    </div>
  );
}

<Runas url="/db.png" titulo="Database" ruta="db">
  contenido db
</Runas>;

export default SkillPage;
