interface BadgeProps {
  texto: string;
  tipo?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "light"
    | "dark";
}
export function Badge({ texto, tipo = "primary" }: BadgeProps) {
  return <span className={`badge bg-${tipo}`}>{texto}</span>;
}
