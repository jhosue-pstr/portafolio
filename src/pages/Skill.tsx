import Runas from "../components/Runas/Runas";

function SkillPage() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Skills</h1>
      </header>
      <main className="botones-wrapper">
        <p style={{ color: "#ffffff", fontSize: "1.2rem" }}>
          Aquí puedes mostrar tus habilidades, tecnologías y herramientas.
        </p>
        <Runas titulo="Bases de datos" url="/runa-db.png"></Runas>
      </main>
    </div>
  );
}

export default SkillPage;
