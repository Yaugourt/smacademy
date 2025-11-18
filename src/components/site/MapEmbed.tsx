type Props = {
  query: string;
  height?: number;
  className?: string;
};

export default function MapEmbed({ query, height = 320, className }: Props) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl border">
        <iframe
          title={`Google Maps – ${query}`}
          src={src}
          width="100%"
          height={height}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, display: "block" }}
          allowFullScreen
        />
      </div>
    </div>
  );
}


