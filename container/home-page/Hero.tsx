"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="font-brice relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#EC3237] to-[#d42a2f] overflow-hidden"
      id="hero"
      data-scroll-section
      data-scroll
      data-scroll-speed="-.3"
    >
      {/* Sketchfab 3D Model Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <iframe
          title="Chinese Dragon Loong"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/66f01ab2a0fd4a589ddecb0a565adfba/embed?autostart=1&ui_hint=0"
          className="w-full h-full"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        />
      </div>
      {/* Overlay Text */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="font-brice text-6xl md:text-8xl lg:text-9xl font-semibold leading-none tracking-tighter mb-8 text-center" style={{ textShadow: '0 8px 32px rgba(0,0,0,0.95)' }}>
          <span className="block text-[#EC3237]">UNCLE'S</span>
          <span className="block text-[#F5DF19]">CHINESE</span>
        </h1>
        <div className="mb-12">
          <p className="text-lg md:text-2xl font-light text-white/90 mb-2" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.85)' }}>
            Authentic Thai & Chinese Cuisine
          </p>
          <p className="text-sm md:text-base text-white/90 font-extralight tracking-wide max-w-2xl mx-auto" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}>
            Bold flavors and warm hospitality — 24 years of tradition across 6 locations
          </p>
        </div>
      </div>
      {/* UC Logo overlay */}
      <div className="absolute bottom-10 pt-11 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white backdrop-blur-sm rounded-full p-3 shadow-lg">
          <img 
            src="/uc.png" 
            alt="Uncle's Chinese" 
            className="w-32 h-24 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}