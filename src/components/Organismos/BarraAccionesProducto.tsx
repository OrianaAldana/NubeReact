import { Boton } from "../Atomos/Boton";

export function BarraAccionesProducto({ onCrear }: { onCrear: () => void }) {
  return (
    <div className="d-flex justify-content-end mb-3">
      <Boton nombre="Agregar Producto" onClick={onCrear} />
    </div>
  );
}
