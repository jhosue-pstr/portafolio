import { ReactNode } from "react";
import "./SkillTree.css";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function SkillTree({ open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="skilltree-overlay" onClick={onClose}>
      <div className="skilltree-modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default SkillTree;
