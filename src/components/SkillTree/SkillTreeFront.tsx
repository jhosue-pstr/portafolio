import { ReactNode } from "react";
import "./SkillTreeFront.css";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function SkillTreeFront({ open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="skilltree-overlay" onClick={onClose}>
      <div className="skilltree-modal" onClick={(e) => e.stopPropagation()}>
        <p>front</p>
        {children}
      </div>
    </div>
  );
}

export default SkillTreeFront;
