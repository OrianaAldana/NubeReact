import { Badge } from "../Atomos/Bagde";
import type { IconType } from "react-icons";

interface BotonAccionProps {
  Icon: IconType;
  texto: string;
  tipoBadge?: "primary" | "success" | "warning" | "danger";
}

export function BotonAccion({ Icon, texto, tipoBadge }: BotonAccionProps) {
  return (
    <button className="btn btn-outline-primary d-flex align-items-center gap-2">
      <Icon />
      {texto}
      {tipoBadge && <Badge texto={tipoBadge} tipo={tipoBadge} />}
    </button>
  );
}
