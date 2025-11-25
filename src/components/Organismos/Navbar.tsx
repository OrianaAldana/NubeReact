import { BotonIcono } from "../Atomos/BotonIcono";
import { BotonAccion } from "../Moleculas/BotonAccion";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";

export function Navbar() {
  return (
    <nav className="d-flex justify-content-between align-items-center p-3 shadow-sm">
      <BotonIcono Icon={FaHome} />

      <div className="d-flex gap-3">
        <BotonAccion Icon={FaUser} texto="Perfil" />
        <BotonAccion Icon={FaShoppingCart} texto="Carrito" tipoBadge="danger" />
      </div>
    </nav>
  );
}
