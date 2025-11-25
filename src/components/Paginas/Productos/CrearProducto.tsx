import { FormularioGenerico } from "../../Organismos/FormularioGenerico";
import {useProductosData} from "../../Hooks/UseProductos";
import { useNavigate } from "react-router-dom";

export default function CrearProducto() {
  const navigate = useNavigate();
  const { crearProducto } = useProductosData();

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

    await crearProducto(values)
    navigate("/productos")
  };

  return (
    <div className="container mt-4">
      <FormularioGenerico
        titulo="Crear Producto"
        campos={campos}
        textoBoton="Guardar"
        onSubmit={enviar}
      />
    </div>
  );
}
