import "./Puerta.css";

export type PuertaState = "closed" | "opening";

interface Props {
  state: PuertaState;
  onDone?: () => void;
  size?: "md" | "lg";
}

function Puerta({ state, onDone, size }: Props) {
  return (
    <div className="puerta-scene" aria-hidden="true">
      <div className={`puerta puerta--${size} ${state}`}>
        <div className="puerta-frame" />
        <div className="puerta-panel panel-left" />
        <div className="puerta-panel panel-right" onTransitionEnd={onDone} />
      </div>
      <div className={`puerta-flash ${state}`} />
    </div>
  );
}

export default Puerta;
