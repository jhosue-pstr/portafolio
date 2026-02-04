import React from "react";
import "./BotonesI.css";

interface Props {
  Titulo: string;
  Link?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function BotonI({ Link, Titulo, className, onClick }: Props) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }

    if (Link) window.location.href = Link;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn active boton-base ${className ?? ""}`.trim()}
    >
      {Link ? (
        <span className="boton-text">{Titulo}</span>
      ) : (
        <span className="boton-text">{Titulo}</span>
      )}
    </button>
  );
}

export default BotonI;
