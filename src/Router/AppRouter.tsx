import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListaProductos from "../components/Paginas/Productos/ListaProductos";
import CrearProducto from "../components/Paginas/Productos/CrearProducto";
import EditarProducto from "../components/Paginas/Productos/EditarProducto";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/productos" />} />

        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/productos/crear" element={<CrearProducto />} />
        <Route path="/productos/editar/:codigo" element={<EditarProducto />} />
      </Routes>
    </BrowserRouter>
  );
}
