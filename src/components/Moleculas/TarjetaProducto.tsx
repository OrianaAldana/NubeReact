import { Titulo } from "../Atomos/Titulo";
import { TextoPequeno } from "../Atomos/TextoPequeno";
import { Boton } from "../Atomos/Boton";

interface Props {
  codigo: string;
  nombre: string;
  precio: string;
  imagen: string;
  onEditar: (codigo: string) => void;
  onEliminar: (codigo: string) => void;
}

export function TarjetaProducto({
  codigo,
  nombre,
  precio,
  imagen,
  onEditar,
  onEliminar,
}: Props) {
  return (
    <div
      className="card p-3 shadow-sm text-center"
      style={{ width: "250px", borderRadius: "12px" }}
    >
      <img
        src={imagen}
        className="rounded mb-3"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
      />

      <Titulo nombre={nombre} tamaño="sm" centrado />
      <TextoPequeno texto={`Precio: ${precio}`} color="success" />

      <div className="d-flex justify-content-between mt-3">
        <Boton nombre="Editar" onClick={() => onEditar(codigo)} />
        <Boton nombre="Eliminar" onClick={() => onEliminar(codigo)} />
      </div>
    </div>
  );
}
