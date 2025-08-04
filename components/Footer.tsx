"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);

  useEffect(() => {
    // Preload the iframe
    const iframe = document.createElement('iframe');
    iframe.src = "https://sketchfab.com/models/13e6cff1ed444cd39b19c57aadfdd6c5/embed?autospin=1&autostart=1&camera=0&preload=1&transparent=1";
    iframe.style.display = 'none';
    
    iframe.onload = () => {
      setIsAnimationLoaded(true);
      document.body.removeChild(iframe);
    };
    
    document.body.appendChild(iframe);
  }, []);
  const navItems = [
    { id: 1, title: "Menu", href: "/menu" },
    { id: 2, title: "About", href: "/about-us" },
    { id: 3, title: "Locations", href: "/locations" },
    { id: 4, title: "Contact", href: "/contact" },
    { id: 5, title: "Careers", href: "/careers" },
  ];

  const socialItems = [
    { id: 1, title: "Instagram", href: "https://www.instagram.com/uncle_chinese/" },
    { id: 2, title: "Facebook", href: "https://www.facebook.com/uncleschinese" },
    { id: 3, title: "Zomato", href: "https://www.zomato.com/uncle-chinese" },
    { id: 4, title: "Swiggy", href: "https://www.swiggy.com/uncle-chinese" },
  ];

  return (
    <footer className="w-full bg-black text-white px-6 md:px-20 pt-20 pb-12 relative overflow-hidden font-brice">
      {/* 3D Animation Background */}
      {isAnimationLoaded && (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60">
          <iframe
            title="Chinese Hanfu Loli"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/13e6cff1ed444cd39b19c57aadfdd6c5/embed?autospin=1&autostart=1&camera=0&preload=1&transparent=1"
            className="w-full h-full"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      )}
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top Section - Brand + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          
          {/* Left - Brand */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-bold uppercase tracking-tight leading-[0.8] mb-6">
              UNCLE&apos;S <span className="text-red-500">CHINESE</span>
            </h1>
          </div>

          {/* Center - UCNav Logo */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-20">
            <div className="bg-black rounded-full p-5 shadow-lg">
              <Image 
                src="/ucnav.png" 
                alt="Uncle&apos;s Chinese Navigation" 
                width={160}
                height={112}
                className="w-32 h-24 md:w-40 md:h-28 object-contain"
                priority={false}
              />
            </div>
          </div>

          {/* Right - Navigation */}
          <div className="lg:pt-8">
            <div className="space-y-1 mb-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block text-white hover:text-red-500 transition-colors text-lg md:text-xl font-light"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>



        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Pune North */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-6 font-medium">Pune North</h3>
            <div className="space-y-4">
              <div className="text-white text-lg font-light">
                Sanjay Park, Aundh<br/>
                Pune, MH 411007
              </div>
              <div className="text-white text-lg font-light">
                Bavdhan, Near Metro<br/>
                Pune, MH 411021
              </div>
            </div>
          </div>

          {/* Pune Central */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-6 font-medium">Pune Central</h3>
            <div className="space-y-4">
              <div className="text-white text-lg font-light">
                Koregaon Park<br/>
                Pune, MH 411001
              </div>
              <div className="text-white text-lg font-light">
                Camp Area<br/>
                Pune, MH 411001
              </div>
            </div>
          </div>

          {/* Pune West */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-6 font-medium">Pune West</h3>
            <div className="space-y-4">
              <div className="text-white text-lg font-light">
                Hinjewadi Phase 1<br/>
                Pune, MH 411057
              </div>
              <div className="text-white text-lg font-light">
                Lulla Nagar<br/>
                Pune, MH 411040
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-6 font-medium">Socials</h3>
            <div className="space-y-4">
              {socialItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:text-red-500 transition-colors text-lg font-light"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end pt-12 border-t border-gray-800">
          
          {/* Left - Copyright */}
          <div className="mb-8 lg:mb-0">
            <div className="text-gray-500 text-lg mb-2">© Uncle&apos;s Chinese 2025</div>
            <div className="text-white text-lg mb-1">
              <a href="tel:02026152970" className="hover:text-red-500 transition-colors">
                020 2615 2970
              </a>
            </div>
            <div className="text-white text-lg">
              <a href="mailto:uncleskitchen@gmail.com" className="hover:text-red-500 transition-colors">
                uncleskitchen@gmail.com
              </a>
            </div>
          </div>

          {/* Right - Credits & Logo */}
          <div className="flex items-end gap-8">
            <div className="text-right">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gray-500 text-sm">Website by Raghav</span>
                <div className="flex gap-2">
                  <a 
                    href="https://www.linkedin.com/in/raghav-krishna-m-6357bb290/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/_raaghaavvvv_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm4.613 4.614a1.49 1.49 0 01.431 1.05v8.672c0 .4-.156.784-.431 1.05a1.49 1.49 0 01-1.05.431H6.437c-.4 0-.784-.156-1.05-.431a1.49 1.49 0 01-.431-1.05V5.664c0-.4.156-.784.431-1.05a1.49 1.49 0 011.05-.431h7.126c.4 0 .784.156 1.05.431zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm3.5-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/916385751370?text=Hi%20Raghav%2C%20I%20found%20your%20contact%20through%20the%20Uncle&apos;s%20Chinese%20website.%20I%27m%20interested%20in%20discussing%20website%20development%20services.%20Could%20we%20schedule%20a%20time%20to%20talk%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

           </div>
        </div>
      </div>
    </footer>
  );
}