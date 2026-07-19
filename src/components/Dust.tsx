export function Dust({ count = 18 }: { count?: number }) {
  const dots = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((_, i) => {
        const size = 1 + Math.random() * 3;
        const left = Math.random() * 100;
        const top = 30 + Math.random() * 70;
        const dur = 8 + Math.random() * 14;
        const delay = Math.random() * -dur;
        return (
          <span
            key={i}
            className="dust"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        );
      })}
    </div>
  );
}