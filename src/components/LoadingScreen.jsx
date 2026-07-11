import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1020]">
      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 1.4, repeat: Infinity }} className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_120px_rgba(139,92,246,0.25)]">
        <span className="text-3xl font-black text-white">NJ</span>
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;
