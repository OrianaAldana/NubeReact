import { ProductoService, type Producto, type ProductoCreate } from "../Servicios/ProductoServicio"; 
import { useState, useEffect, useCallback } from 'react';


interface ProductoHook {
  productos: Producto[];
  isLoading: boolean;
  error: string | null;
  refresh: () => void;
  crearProducto: (datos: ProductoCreate) => Promise<void>;
  actualizarProducto: (codigo: string, datos: ProductoCreate) => Promise<void>;
  eliminarProducto: (codigo: string) => Promise<void>;
}

export const useProductosData = (): ProductoHook => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0); 

  const cargarProductos = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await ProductoService.obtenerTodos();
      setProductos(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error de conexión con la API FabricaNube.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    cargarProductos();
  }, [cargarProductos, refreshKey]); 

  const refresh = () => setRefreshKey(prev => prev + 1);

  const crearProducto = async (datos: ProductoCreate) => {
    await ProductoService.crear(datos);
    refresh();
  };

  const actualizarProducto = async (codigo: string, datos: ProductoCreate) => {
    await ProductoService.actualizar(codigo, datos);
    refresh();
  };

  const eliminarProducto = async (codigo: string) => {
    await ProductoService.eliminar(codigo);
    refresh();
  };

  return { productos, isLoading, error, refresh, crearProducto, actualizarProducto, eliminarProducto };
};
