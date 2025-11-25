
const API_BASE_URL =
  "https://test-production-d2fa.up.railway.app/api/Productos";

// Estructura de la entidad Producto de tu backend C#
export interface Producto {
  idProducto: number;
  codigo: string;
  nombre: string;
  categoria: string;
  costoProduccion: number;
  stockActual: number;
  stockMinimo: number;
  imagenUrl: string;
}

// Estructura para crear o actualizar
export interface ProductoCreate {
  nombre: string;
  categoria: string;
  costoProduccion: number;
  stockMinimo: number;
  imagenUrl: string;
}

// Estructura adaptada del ProductoService.ts (usando fetch nativo)
export const ProductoService = {
  // Configuración de cabeceras para JSON
  HEADERS: {
    "Content-Type": "application/json",
  },

  async obtenerTodos(): Promise<Producto[]> {
    const respuesta = await fetch(API_BASE_URL);
    if (!respuesta.ok)
      throw new Error(
        `Error ${respuesta.status}: No se pudo cargar los productos.`
      );
    return await respuesta.json();
  },

  async crear(datos: ProductoCreate): Promise<Producto> {
    const res = await fetch(API_BASE_URL, {
      method: "POST",
      headers: ProductoService.HEADERS,
      body: JSON.stringify(datos),
    });
    if (!res.ok)
      throw new Error(`Error ${res.status}: Falló la creación del producto.`);
    return await res.json();
  },

  async actualizar(codigo: string, datos: ProductoCreate): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/${codigo}`, {
      method: "PUT",
      headers: ProductoService.HEADERS,
      body: JSON.stringify(datos),
    });
    if (!res.ok)
      throw new Error(`Error ${res.status}: Falló la actualización.`);
  },

  async eliminar(codigo: string): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/${codigo}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`Error ${res.status}: Falló la eliminación.`);
  },
};
