import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
function Titulo({ children }: Props) {
  return (
    <>
      <h1>Bienvenido a mi Dungeon</h1>
      {children && <div>{children}</div>}
    </>
  );
}

export default Titulo;
