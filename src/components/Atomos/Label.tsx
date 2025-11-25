interface LabelProps {
  texto: string;
}

export function Label({ texto }: LabelProps) {
  return <label className="form-label fw-semibold">{texto}</label>;
}
