import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Redes({ children }: Props) {
  return <p className="d-inline-flex gap-2">{children}</p>;
}

interface CardBodyProps {
  Link?: string;
  RedSocial: string;
  Usuario?: string;
}

const iconMap: Record<string, string> = {
  instagram: "bi bi-instagram",
  facebook: "bi bi-facebook",
  github: "bi bi-github",
  linkedin: "bi bi-linkedin",
};

export function CardBody({ Link, RedSocial, Usuario }: CardBodyProps) {
  const iconClass = iconMap[RedSocial.toLowerCase()] ?? "bi bi-question-circle";

  return (
    <div className="card-body fs-6">
      {Link && Link !== "" ? (
        <a
          href={Link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn active d-flex align-items-center gap-2"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          <i className={iconClass}></i>
          {Usuario}
        </a>
      ) : (
        <button
          type="button"
          className="btn d-flex align-items-center gap-2"
          disabled
          data-bs-toggle="button"
        >
          <i className={iconClass}></i>
          {RedSocial}
        </button>
      )}
    </div>
  );
}

export default Redes;
