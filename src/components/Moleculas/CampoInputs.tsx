interface CampoInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  ayuda?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CampoInput({
  label,
  name,
  type = "text",
  placeholder = "",
  ayuda,
  value,
  onChange,
}: CampoInputProps) {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <input
        className="form-control"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {ayuda && <small className="text-muted">{ayuda}</small>}
    </div>
  );
}
