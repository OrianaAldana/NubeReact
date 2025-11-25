import type { IconType } from "react-icons";
interface BotonIconoProps {
  Icon: IconType;
  onClick?: () => void;
}

export function BotonIcono({ Icon, onClick }: BotonIconoProps) {
  return (
    <button className="btn btn-outline-secondary" onClick={onClick}>
      <Icon />
    </button>
  );
}
