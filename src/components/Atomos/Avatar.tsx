interface AvatarProps { imageUrl?: string; }
export function Avatar({ imageUrl }: AvatarProps) {
  const src = imageUrl || "https://placehold.co/100x100/A0B2C3/ffffff?text=Prod";
  return (
    <img 
      src={src} 
      width={100} 
      height={100} 
      className="rounded-circle shadow-sm"
      style={{ objectFit: 'cover' }}
      onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = "https://placehold.co/100x100/D0D0D0/666666?text=Error"; 
      }}
    />
  );
}
