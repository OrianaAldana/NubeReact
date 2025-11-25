import { CampoInput } from "../Moleculas/CampoInputs";
import { Boton } from "../Atomos/Boton";
import { useState } from "react";

interface CampoFormulario {
  nombre: string;          // nombre interno del campo
  label: string;           // etiqueta visible
  type?: string;           // text, number, email, etc.
  placeholder?: string;
}

interface FormularioGenericoProps {
  titulo: string;                       // título del formulario
  campos: CampoFormulario[];            // lista de campos a renderizar
  textoBoton: string;                   // texto del botón
  onSubmit: (values: Record<string, any>) => void; // función al enviar
}

export function FormularioGenerico({
  titulo,
  campos,
  textoBoton,
  onSubmit,
}: FormularioGenericoProps) {
  
  // Estado local dinámico
  const valoresIniciales = campos.reduce((acc, campo) => {
    acc[campo.nombre] = "";
    return acc;
  }, {} as Record<string, any>);

  const [formData, setFormData] = useState(valoresIniciales);

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    < form onSubmit={manejarSubmit} >
      <div className="card p-4 shadow-sm" style={{ maxWidth: "450px" }}>
        <h4 className="mb-3">{titulo}</h4>

        {campos.map((campo) => (
          <CampoInput
            key={campo.nombre}
            label={campo.label}
            name={campo.nombre}
            type={campo.type || "text"}
            placeholder={campo.placeholder}
            onChange={manejarCambio}
          />
        ))}

        <Boton nombre={textoBoton} type="submit" />

      </div>
    </form>
  );
}
