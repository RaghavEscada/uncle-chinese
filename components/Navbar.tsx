"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { Phone, MapPin, Clock, ChefHat, Star } from "lucide-react";
import MobileNav from "./MobileNav";

const navVariants = {
  vissible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};

// Uncle's Chinese navigation items
const unclesNavItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Menu", href: "/menu" },
  { id: 3, title: "About Us", href: "/about" },
  { id: 4, title: "Locations", href: "/locations" },
  { id: 5, title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Set background based on scroll position
    setIsScrolled(latest > 50);
    
    // Hide/show navbar based on scroll direction
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Desktop Navbar - only visible on lg+ */}
      <div className="hidden lg:block">
        <motion.nav
          variants={navVariants}
          className="w-full h-[80px] px-8 lg:px-12 fixed top-0 left-0 z-50"
          animate={hidden ? "hidden" : "vissible"}
        >
          {/* No background, fully transparent navbar */}
          <div className="relative z-10 h-full flex items-center justify-between">
            {/* Uncle's Chinese Logo (ucnav.png) */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/ucnav.png"
                alt="Uncle's Chinese Kitchen Logo"
                style={{ height: '48px', width: 'auto' }}
              />
            </Link>
            {/* Center Navigation */}
            <div className="flex items-center gap-8">
              {unclesNavItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link href={item.href} className="group relative">
                    <motion.span 
                      className="font-montserrat font-medium text-[#3C3637] hover:text-[#EC3237] transition-colors duration-300 relative py-2 px-1"
                      whileHover={{ y: -1 }}
                    >
                      {item.title}
                    </motion.span>
                    {/* Underline Animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#EC3237] to-[#F5DF19] origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
            {/* Right Section - Contact & CTA */}
            <div className="flex items-center gap-6">
              {/* Contact Info */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 text-sm"
              >
                {/* Phone */}
                <div className="flex items-center gap-2 text-[#3C3637] hover:text-[#EC3237] transition-colors cursor-pointer">
                  <Phone size={16} className="text-[#F5DF19]" />
                  <span className="font-montserrat font-medium">020 2615 2970</span>
                </div>
                {/* Locations */}
                <div className="flex items-center gap-2 text-[#3C3637] hover:text-[#EC3237] transition-colors cursor-pointer">
                  <MapPin size={16} className="text-[#F5DF19]" />
                  <span className="font-montserrat font-medium">6 Locations</span>
                </div>
              </motion.div>
              {/* Order Online CTA */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link href="/order">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative bg-gradient-to-r from-[#EC3237] to-[#d42a2f] hover:from-[#d42a2f] hover:to-[#c22227] text-[#F8F8F8] font-montserrat font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
                  >
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-[#F5DF19]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-[#3C3637] transition-colors duration-300">
                      Order Online
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-lg"
                      >
                        🛒
                      </motion.span>
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
          {/* Bottom Border with Uncle's Touch */}
       
        </motion.nav>
      </div>
      {/* Mobile Navbar - only visible on mobile */}
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </>
  );
}