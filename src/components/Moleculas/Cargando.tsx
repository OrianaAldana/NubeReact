import { Spinner } from "../Atomos/Spinner";
import { Parrafo } from "../Atomos/Parrafo";

export function Cargando() {
  return (
    <div className="text-center p-4">
      <Spinner />
      <Parrafo className="mt-2 text-muted">Cargando...</Parrafo>
    </div>
  );
}
