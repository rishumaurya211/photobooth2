import { AnimatePresence, motion } from "framer-motion";

export function FlashEffect({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="pointer-events-none absolute inset-0 z-40 bg-white"
        />
      )}
    </AnimatePresence>
  );
}