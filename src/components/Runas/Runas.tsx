import { ReactNode, useState } from "react";
import SkillTreeDB from "../SkillTree/SkillTreeDB";
import SkillTreeFront from "../SkillTree/SkillTreeFront";
import SkillTreeBack from "../SkillTree/SkillTreeBack";
import "./Runas.css";

interface RunasProps {
  url: string;
  titulo: string;
  children?: ReactNode;
  ruta: "db" | "front" | "back";
}

function Runas({ url, titulo, children, ruta }: RunasProps) {
  const [open, setOpen] = useState(false);

  const renderSkillTree = () => {
    switch (ruta) {
      case "db":
        return (
          <SkillTreeDB open={open} onClose={() => setOpen(false)}>
            {children}
          </SkillTreeDB>
        );
      case "front":
        return (
          <SkillTreeFront open={open} onClose={() => setOpen(false)}>
            {children}
          </SkillTreeFront>
        );
      case "back":
        return (
          <SkillTreeBack open={open} onClose={() => setOpen(false)}>
            {children}
          </SkillTreeBack>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <button className="btn-rune" onClick={() => setOpen(true)}>
        <img src={url} alt={titulo} className="imagen" />
        <span className="titulo-runa">{titulo}</span>
      </button>

      {renderSkillTree()}
    </>
  );
}

export default Runas;
