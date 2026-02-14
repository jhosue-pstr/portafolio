import { ReactNode } from "react";
import "./SkillTreeDB.css";
import Runas from "../Runas/Runas";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function SkillTreeDB({ open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="skilltree-overlay" onClick={onClose}>
      <div
        className="skilltree-modal skilltree-grid"
        onClick={(e) => e.stopPropagation()}
      >
        <Runas className="runa-sql" url="/runa-sql.png"></Runas>
        <Runas className="runa-Nosql" url="/runa-Nosql.png"></Runas>
        <Runas className="runa-postgres" url="/runa-postgres.png"></Runas>
        <Runas className="runa-mysql" url="/runa-mysql.png"></Runas>
        <Runas className="runa-db" url="/runa-db.png"></Runas>
      </div>
    </div>
  );
}

export default SkillTreeDB;
