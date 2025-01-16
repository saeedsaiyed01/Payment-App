import { motion } from "framer-motion";
//import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <div className="bg-white sticky top-0  flex items-center w-full py-0 px-0">
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10 }}
      className="flex w-full justify-between mx-auto bg-gray-100 shadow-lg backdrop-blur-lg border border-gray-950 p-6 rounded-2xl"
    >
      <span className="text-lg md:text-2xl font-bold tracking-tight text-gray-800 hidden md:block">
        MyPay
      </span>
    </motion.div>
  </div>
  

  );
};