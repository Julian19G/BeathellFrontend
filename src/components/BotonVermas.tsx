'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

interface BotonVermasProps {
  onClick?: () => void
  text?: string
}

const BotonVermas: FC<BotonVermasProps> = ({ onClick, text = 'Ver más' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-black text-white px-6 py-2 rounded-2xl shadow-lg transition-colors hover:bg-gray-800 focus:outline-none"
    >
      {text}
    </motion.button>
  )
}

export default BotonVermas
