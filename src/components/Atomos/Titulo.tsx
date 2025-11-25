interface PropsTitulo {
  nombre?: string;
  color?: string; // primary, secondary, success, danger, etc.
  tamaño?: "sm" | "md" | "lg"; // tamaño del texto
  centrado?: boolean;
}

export function Titulo({
  nombre = "Título",
  color = "primary",
  tamaño = "md",
  centrado = false,
}: PropsTitulo) {
  const clasesTamaño =
    tamaño === "sm" ? "fs-5" : tamaño === "lg" ? "fs-1" : "fs-3"; // tamaño md por defecto

  return (
    <h2
      className={`${clasesTamaño} text-${color} ${
        centrado ? "text-center" : ""
      } fw-bold`}
      style={{ letterSpacing: "1px" }}
    >
      {nombre}
    </h2>
  );
}
