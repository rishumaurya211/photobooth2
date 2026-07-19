import { motion } from "framer-motion";

interface PhotoStripProps {
  photos: string[];
  caption?: string;
  date?: string;
  rotate?: number;
  className?: string;
}

export function PhotoStrip({ photos, caption = "moments, kept", date, rotate = -2, className = "" }: PhotoStripProps) {
  const slots = [0, 1, 2, 3].map((i) => photos[i]);
  return (
    <motion.div
      style={{ rotate: `${rotate}deg` }}
      className={`relative inline-block paper-shadow-lg ${className}`}
    >
      <div className="bg-warm-white p-3 pb-5 paper-texture">
        <div className="flex flex-col gap-2">
          {slots.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] w-44 overflow-hidden bg-charcoal sm:w-52"
            >
              {src ? (
                <img src={src} alt={`frame ${i + 1}`} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-warm-white/40 font-display text-3xl">
                  {i + 1}
                </div>
              )}
              <div className="absolute inset-0 grain-overlay" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-end justify-between px-1">
          <p className="font-hand text-lg leading-none text-brown-deep">{caption}</p>
          {date && (
            <p className="text-[9px] uppercase tracking-[0.25em] text-brown">{date}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}