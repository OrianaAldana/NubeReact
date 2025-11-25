import { GridProductos } from "../../Organismos/GridProductos";
import { BarraAccionesProducto } from "../../Organismos/BarraAccionesProducto";
import { Cargando } from "../../Moleculas/Cargando";
import { Titulo } from "../../Atomos/Titulo";
import {useProductosData} from "../../Hooks/UseProductos";
import { useNavigate } from "react-router-dom";

export default function ListaProductos() {
  const navigate = useNavigate();
  const { productos, isLoading, error, eliminarProducto } = useProductosData();

  const irCrear = () => navigate("/productos/crear");
  const irEditar = (codigo: string) => navigate(`/productos/editar/${codigo}`);

  return (
    <div className="container mt-4">
      <Titulo nombre="Gestión de Productos" tamaño="lg" />

      <BarraAccionesProducto onCrear={irCrear} />

      {isLoading && <Cargando />}

      {error && (
        <div className="alert alert-danger mt-3">{error}</div>
      )}

      {!isLoading && !error && (
        <GridProductos
          productos={productos}
          onEditar={irEditar}
          onEliminar={eliminarProducto}
        />
      )}
    </div>
  );
}
