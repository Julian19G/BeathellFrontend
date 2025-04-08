"use client";

import { motion } from "framer-motion";

interface Props {
    className?: string;
  }
  
  export default function ScrollIndicator({ className }: Props) {
    return (
      <div className={`flex justify-center items-center ${className}`}>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-red-500 text-4xl"
        >
          ↓
        </motion.div>
      </div>
    );
  }
  