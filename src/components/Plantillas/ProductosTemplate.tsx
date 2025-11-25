import { GridProductos } from "../Organismos/GridProductos";
import { Boton } from "../Atomos/Boton";
import { Titulo } from "../Atomos/Titulo";

interface Props {
  productos: any[];
  cargando: boolean;
  onCrear: () => void;
  onEditar: (codigo: string) => void;
  onEliminar: (codigo: string) => void;
}

export function ProductosTemplate({
  productos,
  cargando,
  onCrear,
  onEditar,
  onEliminar,
}: Props) {
  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <Titulo nombre="Gestión de Productos" tamaño="lg" />
        <Boton nombre="Agregar Producto" onClick={onCrear} />
      </div>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <GridProductos
          productos={productos}
          onEditar={onEditar}
          onEliminar={onEliminar}
        />
      )}

    </div>
  );
}
