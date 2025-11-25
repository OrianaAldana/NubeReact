import { ItemLista } from "../Moleculas/ItemLista";

interface ListaProps {
  items: {
    texto: string;
    estado: "primary" | "success" | "warning" | "danger";
  }[];
}

export function ListaEstados({ items }: ListaProps) {
  return (
    <div className="card p-3 shadow-sm">
      {items.map((item, index) => (
        <ItemLista key={index} texto={item.texto} estado={item.estado} />
      ))}
    </div>
  );
}
