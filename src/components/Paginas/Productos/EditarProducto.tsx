import { FormularioGenerico } from "../../Organismos/FormularioGenerico";
import {useProductosData} from "../../Hooks/UseProductos";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarProducto() {
  const navigate = useNavigate();
  const { codigo } = useParams();
  const { productos, actualizarProducto } = useProductosData();

  const producto = productos.find(x => x.codigo === codigo);

  const campos = [
    { nombre: "nombre", label: "Nombre" },
    { nombre: "categoria", label: "Categoría" },
    { nombre: "costoProduccion", label: "Costo de Producción", type: "number" },
    { nombre: "stockMinimo", label: "Stock Mínimo", type: "number" },
    { nombre: "imagenUrl", label: "URL de Imagen" },
  ];

  const enviar = async (values: any) => {
    values.costoProduccion = Number(values.costoProduccion)
    values.stockMinimo = Number(values.stockMinimo)

    await actualizarProducto(codigo!, values);
    navigate("/productos");
  };

  if (!producto) return <div className="container mt-4">Cargando...</div>;

  return (
    <div className="container mt-4">
      <FormularioGenerico
        titulo={`Editar: ${producto.nombre}`}
        campos={campos}
        textoBoton="Actualizar"
        onSubmit={enviar}
      />
    </div>
  );
}
