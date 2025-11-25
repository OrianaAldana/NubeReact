import { Badge } from "../Atomos/Bagde";
import { Parrafo } from "../Atomos/Parrafo";
import { Divider } from "../Atomos/Divider";

interface ItemListaProps {
  texto: string;
  estado: "primary" | "success" | "warning" | "danger";
}

export function ItemLista({ texto, estado }: ItemListaProps) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <Parrafo>{texto}</Parrafo>
        <Badge texto={estado} tipo={estado} />
      </div>
      <Divider />
    </>
  );
}
