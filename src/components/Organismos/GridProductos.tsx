import { TarjetaProducto } from "../Moleculas/TarjetaProducto";
import type { Producto } from "../Servicios/ProductoServicio";

interface Props {
  productos: Producto[];
  onEditar: (codigo: string) => void;
  onEliminar: (codigo: string) => void;
}

export function GridProductos({ productos, onEditar, onEliminar }: Props) {
  return (
    <div className="row mt-3">
      {productos.map((p) => (
        <div key={p.codigo} className="col-md-4 mb-3">
          <TarjetaProducto
            codigo={p.codigo}
            nombre={p.nombre}
            precio={p.costoProduccion.toString()}
            imagen={p.imagenUrl ?? "/img/default.png"}
            onEditar={onEditar}
            onEliminar={onEliminar}
          />
        </div>
      ))}
    </div>
  );
}
