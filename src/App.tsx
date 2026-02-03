import "./App.css";
import Titulo from "./Titulo";
import Redes, { CardBody } from "./components/Redes";

function App() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <Titulo />
      </header>

      <body></body>
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
      </aside>
    </div>
  );
}

export default App;
