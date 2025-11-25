interface TextoPequenoProps {
  texto: string;
  color?: "muted" | "danger" | "success";
}

export function TextoPequeno({ texto, color = "muted" }: TextoPequenoProps) {
  return <small className={`text-${color}`}>{texto}</small>;
}
