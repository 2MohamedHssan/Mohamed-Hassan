'use client'
import { motion } from 'framer-motion'
import React from 'react'

function MobileBtn({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <button onClick={() => setOpen(!open)}
      className="md:hidden cursor-pointer text-white focus:outline-none z-50 relative"
      aria-label="Toggle Menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-end gap-1.5">
        <motion.span
          animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-[#979797] block origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="w-4 h-0.5 bg-[#c6a05a] block"
        />
        <motion.span className="h-0.5 bg-[#979797] block origin-center"
          animate={ open
            ? { rotate: -45, y: -6, width: "100%" }
            : { rotate: 0, y: 0, width: "50%" }
          }
        />
      </div>
    </button>
  )
}

export default MobileBtn