"use client";
import Link from "next/link";

export default function Footer() {
  const phrase = ["UNCLE'S", "CHINESE"];
  const phrase1 = ["AUTHENTIC", "FLAVORS"];

  const socialItems = [
    { id: 1, title: "Instagram", href: "https://www.instagram.com/uncle_chinese/" },
    { id: 2, title: "Facebook", href: "https://www.facebook.com/uncleschinese" },
    { id: 3, title: "Zomato", href: "https://www.zomato.com/uncle-chinese" },
    { id: 4, title: "Swiggy", href: "https://www.swiggy.com/uncle-chinese" },
  ];

  const navItems = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Menu", href: "/menu" },
    { id: 3, title: "About Us", href: "/about" },
    { id: 4, title: "Locations", href: "/locations" },
    { id: 5, title: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full px-6 md:px-12 z-30 relative pt-8 bg-gradient-to-br from-red-600 to-red-700 flex flex-col rounded-t-3xl mt-[-20px] overflow-hidden" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
      {/* Asian Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5DF19' fill-opacity='0.3'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Main Content - 3 columns on desktop, stacked on mobile */}
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-2 py-2 relative z-10">
        {/* Column 1: Brand & tagline */}
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
            <span>{phrase[0]}</span>
            <span className="text-yellow-400">{phrase[1]}</span>
          </h1>
          <p className="text-white/90 text-lg font-medium max-w-xs" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
            24 Years of Authentic Thai & Chinese Cuisine
          </p>
        </div>

        {/* Column 2: Navigation & Socials */}
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Navigation */}
            <div>
              <h3 className="text-base font-bold text-white mb-3 uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>Navigate</h3>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="relative text-white/90 font-semibold text-sm mb-2 block hover:text-yellow-400 transition-colors duration-300 group"
                >
                  <span className="relative z-10 uppercase font-bold" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>{item.title}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            {/* Socials */}
            <div>
              <h3 className="text-base font-bold text-white mb-3 uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>Follow Us</h3>
              <div className="flex flex-row gap-3 flex-wrap">
                {socialItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400/20 hover:bg-yellow-400/40 text-white font-semibold text-sm px-3 py-2 rounded-lg transition-colors duration-300 uppercase"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Contact info */}
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <h3 className="text-base font-bold text-white mb-3 uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>Contact</h3>
          <a
            href="tel:02026152970"
            className="text-yellow-400 font-black text-base underline block mb-2 hover:text-white transition-colors duration-300 uppercase"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            020 2615 2970
          </a>
          <a
            href="mailto:uncleskitchen@gmail.com"
            className="relative text-white/90 font-semibold text-base block hover:text-yellow-400 transition-colors duration-300 group uppercase"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            <span className="relative z-10">uncleskitchen@gmail.com</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Locations Banner - compact grid */}
      <div className="w-full bg-black/20 backdrop-blur-sm rounded-lg p-3 mb-4 relative z-10 max-w-5xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
            Visit Our Locations
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-white/90 font-medium">
            <div className="flex items-center gap-2 bg-yellow-400/10 px-3 py-2 rounded-lg font-bold uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
              📍 Sanjay Park
            </div>
            <div className="flex items-center gap-2 bg-yellow-400/10 px-3 py-2 rounded-lg font-bold uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
              📍 Bavdhan
            </div>
            <div className="flex items-center gap-2 bg-yellow-400/10 px-3 py-2 rounded-lg font-bold uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
              📍 Koregaon Park
            </div>
            <div className="flex items-center gap-2 bg-yellow-400/10 px-3 py-2 rounded-lg font-bold uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
              📍 Camp
            </div>
            <div className="flex items-center gap-2 bg-yellow-400/10 px-3 py-2 rounded-lg font-bold uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
              📍 Hinjewadi
            </div>
            <div className="flex items-center gap-2 bg-yellow-400/10 px-3 py-2 rounded-lg font-bold uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
              📍 Lulla Nagar
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: logo left, credits right */}
      <div className="w-full pt-4 pb-2 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 border-t border-white/10">
        {/* Logo */}
        <div className="bg-white rounded-lg p-3 shadow-xl flex items-center">
          <Link href="/">
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="text-center" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
                <div className="text-lg mb-1">🥢</div>
                <div className="text-red-600 font-black text-sm uppercase">Uncle's</div>
                <div className="text-gray-700 font-black text-sm uppercase">Chinese</div>
              </div>
            </div>
          </Link>
        </div>
        {/* Credits */}
        <div className="flex gap-2 flex-col md:flex-row items-center">
          <h1 className="text-sm font-semibold text-white/70 uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>© Uncle's Chinese 2025</h1>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-sm font-semibold text-white/80 uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>Website by Raghav</span>
            <div className="flex gap-1">
              <a 
                href="https://www.linkedin.com/in/raghav-krishna-m-6357bb290/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center bg-blue-600 rounded hover:bg-blue-700 transition-colors"
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/_raaghaavvvv_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center bg-pink-600 rounded hover:bg-pink-700 transition-colors"
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm4.613 4.614a1.49 1.49 0 01.431 1.05v8.672c0 .4-.156.784-.431 1.05a1.49 1.49 0 01-1.05.431H6.437c-.4 0-.784-.156-1.05-.431a1.49 1.49 0 01-.431-1.05V5.664c0-.4.156-.784.431-1.05a1.49 1.49 0 011.05-.431h7.126c.4 0 .784.156 1.05.431zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm3.5-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/916385751370?text=Hi%20Raghav%2C%20I%20found%20your%20contact%20through%20the%20Uncle's%20Chinese%20website.%20I%27m%20interested%20in%20discussing%20website%20development%20services.%20Could%20we%20schedule%20a%20time%20to%20talk%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center bg-green-600 rounded hover:bg-green-700 transition-colors"
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}