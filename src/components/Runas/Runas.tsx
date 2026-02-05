import { ReactNode, useState } from "react";
import SkillTree from "../SkillTree/SkillTree";
import "./runas.css";

interface RunasProps {
  url: string;
  titulo: string;
  children?: ReactNode;
}

function Runas({ url, titulo, children }: RunasProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn-rune" onClick={() => setOpen(true)}>
        <img src={url} alt={titulo} className="imagen" />
        <span className="titulo-runa">{titulo}</span>
      </button>

      <SkillTree open={open} onClose={() => setOpen(false)}>
        {children}
      </SkillTree>
    </>
  );
}

export default Runas;
