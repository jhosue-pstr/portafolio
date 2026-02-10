import { ReactNode } from "react";
import "./SkillTreeBack.css";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function SkillTreeBack({ open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="skilltree-overlay" onClick={onClose}>
      <div className="skilltree-modal" onClick={(e) => e.stopPropagation()}>
        <p>Back</p>
        {children}
      </div>
    </div>
  );
}

export default SkillTreeBack;
