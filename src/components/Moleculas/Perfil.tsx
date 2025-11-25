import { Avatar } from "../Atomos/Avatar";
import { Titulo } from "../Atomos/Titulo";
import { Parrafo } from "../Atomos/Parrafo";

interface PerfilProps {
  nombre: string;
  descripcion: string;
}

export function Perfil({ nombre, descripcion }: PerfilProps) {
  return (
    <div
      className="card p-3 text-center shadow-sm mx-auto"
      style={{ width: "250px", borderRadius: "15px" }}
    >
      <div className="d-flex justify-content-center mb-3">
        <Avatar />
      </div>

      <Titulo nombre={nombre} tamaño="md" centrado color="primary" />

      <Parrafo className="text-muted mt-2">{descripcion}</Parrafo>
    </div>
  );
}
