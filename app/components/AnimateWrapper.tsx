'use client'

import { AnimatePresence, motion } from 'framer-motion'

type AnimateWrapperType = {
  initial?: { opacity: number; },
  animate?: { opacity: number; },
  transition?: { duration: number },
  className?: string,
  keyValue: string,
  children: React.ReactNode,
}
export default function AnimateWrapper({
  children, initial = { opacity: 0 }, animate = { opacity: 1 }, transition = { duration: 1 }, className, keyValue
}: AnimateWrapperType) {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
