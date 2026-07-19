import { AnimatePresence, motion } from "framer-motion";

export function CountdownOverlay({ value }: { value: number | "FLASH" | null }) {
  return (
    <AnimatePresence>
      {value !== null && (
        <motion.div
          key={String(value)}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
        >
          <span className="font-display text-[14rem] leading-none text-warm-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
            {value}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}