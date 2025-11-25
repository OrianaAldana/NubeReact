import { Perfil } from "../Moleculas/Perfil";
import { Boton } from "../Atomos/Boton";

export function PerfilUsuario() {
  return (
    <div className="card p-4 shadow-sm text-center">
      <Perfil
        nombre="Gatito Elgod"
        descripcion="Administrador de la heladería"
      />

      <div className="mt-3 d-flex justify-content-center gap-3">
        <Boton nombre="Editar Perfil" />
        <Boton nombre="Cerrar Sesión" />
      </div>
    </div>
  );
}
