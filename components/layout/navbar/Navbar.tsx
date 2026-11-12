'use client'
import Image from 'next/image'
import NavLinks from './NavLinks'
import MobileBtn from './MobileBtn'
import MobileMenue from './MobileMenue'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false)
  const [showNav, setShowNav] = useState(true);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
      y: showNav ? 0 : -100,
      opacity: showNav ? 1 : 0,
    }}
  transition={{
    duration: 0.3,
    ease: "easeOut",
  }}
  className="sticky top-0 z-50 w-full bg-[#000000]/85 backdrop-blur-xl border-b border-amber-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
>
      <div className='flex items-center p-2 overflow-hidden justify-between w-full px-4 container mx-auto'>
        <div className='w-14 h-12 md:w-20 md:h-14 relative '>
          <Image
            loading="eager" 
            src={`/logo.png`}
            alt='logo' 
            fill
            sizes="80px"
          />
        </div>
        <NavLinks/>
        {/* Mobile Menu */}
        <AnimatePresence>{open && <MobileMenue/>}</AnimatePresence>
        <MobileBtn open={open} setOpen={setOpen}/>
      </div>
    </motion.nav>
  )
}

export default Navbar