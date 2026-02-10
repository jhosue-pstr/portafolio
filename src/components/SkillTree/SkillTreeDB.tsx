import { ReactNode } from "react";
import "./SkillTreeDB.css";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function SkillTreeDB({ open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="skilltree-overlay" onClick={onClose}>
      <div className="skilltree-modal" onClick={(e) => e.stopPropagation()}>
        <p>db</p>

        {children}
      </div>
    </div>
  );
}

export default SkillTreeDB;
