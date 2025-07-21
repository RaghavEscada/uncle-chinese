import React, { useEffect } from 'react';
import { ArrowRight, Instagram, MessageCircle, Target, Star, MapPin, Phone, Mail } from 'lucide-react';

// Add type definitions for GSAP and ScrollTrigger
declare global {
  interface Window {
    gsap: {
      ticker: {
        add: (callback: (time: number) => void) => void;
        lagSmoothing: (value: number) => void;
      };
      utils: {
        interpolate: (start: number, end: number, progress: number) => number;
      };
      set: (target: Element, vars: any) => void;
      registerPlugin: (plugin: any) => void;
    };
    ScrollTrigger: {
      update: () => void;
      create: (config: any) => {
        progress: number;
      };
      getAll: () => Array<{ kill: () => void }>;
    };
    Lenis: new () => {
      on: (event: string, callback: () => void) => void;
      raf: (time: number) => void;
    };
  }
}

// Review Card Component
const ReviewCard = ({ img, name, email, description }: any) => {
  return (
    <figure className="relative w-80 cursor-pointer overflow-hidden rounded-xl border-2 p-6 transition-all duration-300 hover:scale-105"
            style={{ borderColor: '#F5DF19', backgroundColor: 'rgba(248, 248, 248, 0.9)' }}>
      <div className="flex flex-row items-center gap-3 mb-4">
        <img
          className="rounded-full border-2"
          style={{ borderColor: '#EC3237' }}
          width="48"
          height="48"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-black uppercase" 
                      style={{ color: '#3C3637', fontFamily: 'Montserrat Alternates, sans-serif' }}>
            {name}
          </figcaption>
          <p className="text-sm font-semibold" style={{ color: '#EC3237', fontFamily: 'Montserrat Alternates, sans-serif' }}>
            {email}
          </p>
        </div>
      </div>
      <blockquote className="text-base font-semibold leading-relaxed" 
                  style={{ color: '#3C3637', fontFamily: 'Montserrat Alternates, sans-serif' }}>
        "{description}"
      </blockquote> 
    </figure>
  );
};

// Testimonial Marquee Component
interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function TestimonialMarquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] ${
              vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"
            } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""} ${
              reverse ? "[animation-direction:reverse]" : ""
            }`}
            style={{
              animation: `${reverse ? 'marquee-reverse' : 'marquee'} var(--duration) linear infinite`,
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// Services Section Component
const ServicesSection = () => {
  useEffect(() => {
    // Load GSAP dynamically for services section
    const loadServicesGSAP = async () => {
      if (typeof window === 'undefined') return;
      
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
      document.head.appendChild(gsapScript);

      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
      document.head.appendChild(scrollTriggerScript);

      await new Promise<void>((resolve) => {
        let scriptsLoaded = 0;
        const onLoad = () => {
          scriptsLoaded++;
          if (scriptsLoaded === 2) resolve();
        };
        gsapScript.onload = onLoad;
        scrollTriggerScript.onload = onLoad;
      });

      initializeServicesAnimation();
    };

    const initializeServicesAnimation = () => {
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        
        const serviceCards = document.querySelectorAll('.service-card');
        const serviceHeader = document.querySelector('.service-header');
        
        // Animate service cards on scroll
        serviceCards.forEach((card, index) => {
          window.gsap.fromTo(card, 
            { 
              y: 100, 
              opacity: 0,
              rotation: index % 2 === 0 ? -5 : 5
            },
            {
              y: 0,
              opacity: 1,
              rotation: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });

        // Animate header
        if (serviceHeader) {
          window.gsap.fromTo(serviceHeader,
            { y: -50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: serviceHeader,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }
    };

    loadServicesGSAP();
  }, []);

  const services = [
    {
      icon: "🍜",
      title: "Dine-In Experience",
      subtitle: "Restaurant",
      description: "Immerse yourself in our warm, family-friendly atmosphere across 6 locations in Pune. Enjoy authentic Chinese and Thai cuisine with exceptional hospitality that makes every visit memorable."
    },
    {
      icon: "🛵",
      title: "Online Delivery",
      subtitle: "Service",
      description: "Get your favorite Uncle's Chinese dishes delivered hot and fresh to your doorstep. We partner with leading delivery platforms to bring authentic flavors directly to you."
    },
    {
      icon: "🎉",
      title: "Private Events",
      subtitle: "Catering",
      description: "Make your celebrations special with our catering services. From intimate family gatherings to large corporate events, we bring the authentic taste of Asia to your occasion."
    },
    {
      icon: "👨‍🍳",
      title: "Chef's Specials",
      subtitle: "Menu",
      description: "Discover our signature dishes crafted by experienced chefs using traditional recipes and premium ingredients. Each dish tells a story of 24 years of culinary expertise."
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#3C3637' }}>
      <div className="max-w-6xl mx-auto">
        <div className="service-header text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6" 
              style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>
            Our <span style={{ color: '#F5DF19' }}>Services</span>
          </h2>
          <p className="text-xl font-bold italic max-w-2xl mx-auto" 
             style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>
            "Excellence in every service, authenticity in every experience."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} 
                 className="service-card p-8 rounded-2xl border-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                 style={{ 
                   backgroundColor: 'rgba(236, 50, 55, 0.1)', 
                   borderColor: '#F5DF19',
                   backdropFilter: 'blur(10px)'
                 }}>
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-3xl font-black uppercase mb-2" 
                  style={{ color: '#F5DF19', fontFamily: 'Montserrat Alternates, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-xl font-bold uppercase mb-4 tracking-wide" 
                 style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>
                {service.subtitle}
              </p>
              <p className="text-base font-semibold leading-relaxed" 
                 style={{ color: 'rgba(248, 248, 248, 0.9)', fontFamily: 'Montserrat Alternates, sans-serif' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        
        @keyframes marquee-reverse {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://www.instagram.com/uncle_chinese/", icon: <Instagram size={24} /> },
  { id: 2, title: "WhatsApp", href: "https://wa.me/919789985132", icon: <MessageCircle size={24} /> },
];

const stats = [
  { number: "24", label: "Years of Experience" },
  { number: "6", label: "Outlet Locations" },
  { number: "1000+", label: "Happy Customers" },
  { number: "100+", label: "Authentic Dishes" }
];

const outlets = [
  "Sanjay Park",
  "Bavdhan", 
  "Koregaon Park",
  "Camp",
  "Hinjewadi",
  "Lulla Nagar"
];

// Testimonials data
const testimonials = [
  {
    name: "Rajesh Sharma",
    email: "rajesh.s@gmail.com",
    description: "The best Chinese food in Pune! Uncle's Chinese never disappoints. Authentic flavors every single time.",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
  },
  {
    name: "Priya Patel",
    email: "priya.patel@gmail.com", 
    description: "Been coming here for 5 years. The Hakka noodles and Manchurian are absolutely divine!",
    img: "https://img.freepik.com/free-photo/smiling-asian-woman_23-2147766303.jpg",
  },
  {
    name: "Amit Joshi",
    email: "amit.j@gmail.com",
    description: "Family atmosphere, incredible food, and great service. This is our go-to place for celebrations!",
    img: "https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg",
  },
  {
    name: "Sneha Desai",
    email: "sneha.desai@gmail.com",
    description: "Uncle's Chinese maintains the perfect balance of authentic taste and modern presentation.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg",
  },
  {
    name: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    description: "24 years of excellence! Every dish tells a story of passion and authentic Asian cooking.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg",
  },
  {
    name: "Kavya Iyer",
    email: "kavya.iyer@gmail.com",
    description: "The warmth of the staff and the incredible flavors make this place truly special.",
    img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt-is-wearing-yellow-shirt_911060-133057.jpg",
  },
];

const firstRow = testimonials.slice(0, 2);
const secondRow = testimonials.slice(2, 4);
const thirdRow = testimonials.slice(4, 6);

const ScrollAnimationSection = () => {
  useEffect(() => {
    // Load GSAP and ScrollTrigger dynamically
    const loadGSAP = async () => {
      // Create script elements
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';

      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';

      const lenisScript = document.createElement('script');
      lenisScript.src = 'https://unpkg.com/lenis@1.1.14/dist/lenis.min.js';

      // Add scripts to head
      document.head.appendChild(gsapScript);
      document.head.appendChild(scrollTriggerScript);
      document.head.appendChild(lenisScript);

      // Wait for scripts to load
      await new Promise<void>((resolve) => {
        let scriptsLoaded = 0;
        const onLoad = () => {
          scriptsLoaded++;
          if (scriptsLoaded === 3) resolve();
        };
        gsapScript.onload = onLoad;
        scrollTriggerScript.onload = onLoad;
        lenisScript.onload = onLoad;
      });

      // Initialize animation after scripts load
      initializeAnimation();
    };

    const initializeAnimation = () => {
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger && window.Lenis) {
        const lenis = new window.Lenis();
        lenis.on('scroll', window.ScrollTrigger.update);
        window.gsap.ticker.add((time: number) => {
          lenis.raf(time * 1000);
        });
        window.gsap.ticker.lagSmoothing(0);

        window.gsap.registerPlugin(window.ScrollTrigger);

        const stickySection = document.querySelector('.scroll-sticky');
        const stickyHeader = document.querySelector('.scroll-sticky-header') as HTMLElement;
        const cards = document.querySelectorAll('.scroll-card');
        const stickyHeight = window.innerHeight * 5;

        const transforms = [
          [
            [10, 50, -10, 10],
            [20, -10, -45, 20],
          ],
          [
            [0, 47.5, -10, 15],
            [-25, 15, -45, 30],
          ],
          [
            [0, 52.5, -10, 5],
            [15, -5, -40, 60],
          ],
          [
            [0, 50, 30, -80],
            [20, -10, 60, 5],
          ],
          [
            [0, 55, -15, 30],
            [25, -15, 60, 95],
          ],
          [
            [10, 45, -20, 25],
            [15, -20, -50, 40],
          ],
        ];

        window.ScrollTrigger.create({
          trigger: stickySection,
          start: 'top top',
          end: `+=${stickyHeight}px`,
          pin: true,
          pinSpacing: true,
          onUpdate: (self: { progress: number }) => {
            const progress = self.progress;

            if (stickyHeader) {
              const maxTranslate = stickyHeader.offsetWidth - window.innerWidth;
              const translateX = -progress * maxTranslate;
              window.gsap.set(stickyHeader, { x: translateX });
            }

            cards.forEach((card, index) => {
              const delay = index * 0.15;
              const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

              if (cardProgress > 0) {
                const cardStartX = 25;
                const cardEndX = -650;
                const yPos = transforms[index][0];
                const rotations = transforms[index][1];

                const cardX = window.gsap.utils.interpolate(
                  cardStartX,
                  cardEndX,
                  cardProgress
                );

                const yProgress = cardProgress * 3;
                const yIndex = Math.min(Math.floor(yProgress), yPos.length - 2);
                const yInterpolation = yProgress - yIndex;
                const cardY = window.gsap.utils.interpolate(
                  yPos[yIndex],
                  yPos[yIndex + 1],
                  yInterpolation
                );

                const cardRotation = window.gsap.utils.interpolate(
                  rotations[yIndex],
                  rotations[yIndex + 1],
                  yInterpolation
                );

                window.gsap.set(card, {
                  xPercent: cardX,
                  yPercent: cardY,
                  rotation: cardRotation,
                  opacity: 1,
                });
              } else {
                window.gsap.set(card, { opacity: 0 });
              }
            });
          },
        });
      }
    };

    loadGSAP();

    return () => {
      // Cleanup
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&display=swap');
        
        .scroll-section {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .scroll-sticky {
          position: relative;
          background-color: #EC3237;
          overflow: hidden;
        }

        .scroll-sticky::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .scroll-3d-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          opacity: 0.4;
        }

        .scroll-sticky-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 250vw;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          will-change: transform;
          z-index: 2;
        }

        .scroll-sticky-header h1 {
          margin: 0;
          color: #F8F8F8;
          font-size: clamp(24vw, 30vw, 40vw);
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 95%;
          font-family: "Montserrat Alternates", sans-serif;
          text-transform: uppercase;
          text-shadow: 0 4px 20px rgba(0,0,0,0.8);
        }

        .scroll-card {
          position: absolute;
          top: 10%;
          left: 100%;
          width: min(325px, 90vw);
          height: min(500px, 80vh);
          background: linear-gradient(135deg, #F8F8F8 0%, #ffffff 100%);
          border-radius: 1em;
          padding: 0.5em;
          will-change: transform;
          z-index: 2;
          border: 3px solid #F5DF19;
          box-shadow: 0 20px 40px -10px rgba(236, 50, 55, 0.4), 0 15px 25px -5px rgba(245, 223, 25, 0.3);
        }

        .scroll-card .card-img {
          width: 100%;
          height: 40%;
          border-radius: 0.5em;
          overflow: hidden;
          background: #EC3237;
        }

        .scroll-card .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          width: 100%;
          height: 60%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #3C3637;
          padding: 0.5em;
        }

        .card-content h2 {
          font-size: clamp(24px, 5vw, 42px);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
          color: #3C3637;
          font-family: "Montserrat Alternates", sans-serif;
          text-transform: uppercase;
        }

        .card-content p {
          font-size: clamp(16px, 3vw, 20px);
          font-weight: 500;
          letter-spacing: -0.005em;
          margin: 0;
          color: #3C3637;
          font-family: "Montserrat Alternates", sans-serif;
        }

        @media (max-width: 768px) {
          .scroll-card {
            width: 280px;
            height: 450px;
          }
        }
      `}</style>

      <section className="scroll-section scroll-sticky">
        {/* REMOVED Sketchfab 3D ramen iframe from here */}

        <div className="scroll-sticky-header">
          <h1>Our Story</h1>
        </div>

        <div className="scroll-card">
          <div className="card-img">
            <div style={{
              width: '100%',
              height: '100%',
              background: '#EC3237',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F8F8F8',
              fontSize: '32px',
              fontWeight: 'bold',
              fontFamily: 'Montserrat Alternates, sans-serif'
            }}>
              🏠 FAMILY
            </div>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2>Family Legacy</h2>
            </div>
            <div className="card-description">
              <p>
                24 years of serving authentic 
                Chinese & Pan-Asian flavors 
                that taste like home.
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-card">
          <div className="card-img">
            <div style={{
              width: '100%',
              height: '100%',
              background: '#EC3237',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F8F8F8',
              fontSize: '32px',
              fontWeight: 'bold',
              fontFamily: 'Montserrat Alternates, sans-serif'
            }}>
              🍜 AUTHENTIC 
            </div>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2>Traditional Recipes</h2>
            </div>
            <div className="card-description">
              <p>
                Honoring time-tested recipes
                with premium ingredients and
                bold, authentic flavors.
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-card">
          <div className="card-img">
            <div style={{
              width: '100%',
              height: '100%',
              background: '#EC3237',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F8F8F8',
              fontSize: '32px',
              fontWeight: 'bold',
              fontFamily: 'Montserrat Alternates, sans-serif'
            }}>
              🏪 COMMUNITY
            </div>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2>Neighborhood Favorite</h2>
            </div>
            <div className="card-description">
              <p>
                Six locations across Pune
                where friends and families
                gather for great food.
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-card">
          <div className="card-img">
            <div style={{
              width: '100%',
              height: '100%',
              background: '#EC3237',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F8F8F8',
              fontSize: '32px',
              fontWeight: 'bold',
              fontFamily: 'Montserrat Alternates, sans-serif'
            }}>
              🎯 QUALITY
            </div>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2>Premium Experience</h2>
            </div>
            <div className="card-description">
              <p>
                Every dish crafted with care,
                making every customer feel
                like part of our family.
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-card">
          <div className="card-img">
            <div style={{
              width: '100%',
              height: '100%',
              background: '#EC3237',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F8F8F8',
              fontSize: '32px',
              fontWeight: 'bold',
              fontFamily: 'Montserrat Alternates, sans-serif'
            }}>
              🌟 INNOVATION
            </div>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2>Modern Twist</h2>
            </div>
            <div className="card-description">
              <p>
                Blending classic Asian
                traditions with contemporary
                dining experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-card">
          <div className="card-img">
            <div style={{
              width: '100%',
              height: '100%',
              background: '#EC3237',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F8F8F8',
              fontSize: '32px',
              fontWeight: 'bold',
              fontFamily: 'Montserrat Alternates, sans-serif'
            }}>
              ❤️ PASSION
            </div>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2>Food with Heart</h2>
            </div>
            <div className="card-description">
              <p>
                Every meal prepared with
                passion and served with
                warmth and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default function UnclesChineseWebsite() {
  return (
    <div style={{ fontFamily: 'Montserrat Alternates, sans-serif' }} className="bg-red-600 text-white">
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden py-8 md:py-16 lg:py-20"
        style={{ 
          background: 'linear-gradient(135deg, #EC3237 0%, #d42a2f 100%)',
          fontFamily: 'Montserrat Alternates, sans-serif'
        }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/10 to-transparent"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-2 sm:px-4 text-center w-full">
          <h1 
            className="text-3xl xs:text-4xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tighter mb-4 md:mb-6 max-w-xs xs:max-w-md md:max-w-4xl mt-6 md:mt-12"
            style={{ 
              textShadow: '0 8px 32px rgba(0,0,0,0.8)',
              fontFamily: 'Montserrat Alternates, sans-serif',
              textTransform: 'uppercase'
            }}
          >
            <span className="block" style={{ color: '#F8F8F8' }}>BOLD FLAVORS,</span>
            <span className="block" style={{ color: '#F5DF19' }}>WARM HEARTS</span>
          </h1>
          <div className="mb-6 md:mb-8 max-w-xs xs:max-w-md md:max-w-3xl mx-auto">
            <p 
              className="text-sm xs:text-base md:text-xl font-bold mb-2 uppercase tracking-wider"
              style={{ 
                color: '#F5DF19',
                textShadow: '0 4px 16px rgba(0,0,0,0.6)',
                fontFamily: 'Montserrat Alternates, sans-serif'
              }}
            >
              Authentic Thai & Chinese Cuisine
            </p>
            <p 
              className="text-xs xs:text-sm md:text-base font-semibold tracking-wide"
              style={{ 
                color: 'rgba(248, 248, 248, 0.95)',
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                fontFamily: 'Montserrat Alternates, sans-serif'
              }}
            >
              Bold flavors and warm hospitality — 24 years of tradition across 6 locations
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8 w-full max-w-md mx-auto">
            <button 
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-black text-base transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl uppercase tracking-wide" 
              style={{ 
                backgroundColor: '#F5DF19', 
                color: '#3C3637', 
                fontFamily: 'Montserrat Alternates, sans-serif',
                border: '3px solid #F5DF19',
                boxShadow: '0 10px 30px rgba(245,223,25,0.4)'
              }}
            >
              Order Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button 
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-black text-base transition-all duration-300 transform hover:scale-105 backdrop-blur-sm uppercase tracking-wide" 
              style={{ 
                borderColor: '#F8F8F8', 
                color: '#F8F8F8', 
                fontFamily: 'Montserrat Alternates, sans-serif',
                backgroundColor: 'rgba(248, 248, 248, 0.1)',
                border: '3px solid #F8F8F8',
                boxShadow: '0 10px 30px rgba(248,248,248,0.2)'
              }}
            >
              Find Locations
            </button>
          </div>

          {/* Stats Grid - Responsive */}
          <div className="w-full max-w-4xl px-2 xs:px-4 mt-6 md:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-3 rounded-xl backdrop-blur-md border-2"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(245, 223, 25, 0.3)'
                  }}
                >
                  <div 
                    className="text-lg xs:text-xl md:text-2xl font-black mb-1" 
                    style={{ 
                      color: '#F5DF19', 
                      fontFamily: 'Montserrat Alternates, sans-serif'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-xs font-semibold uppercase tracking-wide" 
                    style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Badge */}
          <div className="mt-8 md:mt-12 mb-4 flex justify-center">
            <div 
              className="rounded-full p-2 md:p-3 shadow-2xl backdrop-blur-sm border-3"
              style={{ 
                backgroundColor: 'rgba(248, 248, 248, 0.95)',
                borderColor: '#F5DF19',
                boxShadow: '0 15px 30px rgba(245,223,25,0.3)'
              }}
            >
              <div 
                className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl font-black"
                style={{ 
                  backgroundColor: '#EC3237',
                  color: '#F8F8F8',
                  fontFamily: 'Montserrat Alternates, sans-serif',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}
              >
                UC
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Animation Section */}
      <ScrollAnimationSection />

      {/* About Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#F8F8F8' }}>
        {/* 3D Ramen as bold background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '140vw',
          height: '140vh',
          transform: 'translate(-50%, -50%) scale(1.3)',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          <iframe
            title="Tantanmen Ramen"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/bc2ca26765fc42ca923d766f8ffb4ddd/embed?autospin=1&autostart=1&preload=1&transparent=1&dnt=1&ui_controls=0&ui_infos=0&ui_stop=0&ui_watermark=0"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
        </div>
        {/* Overlay for readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255,255,255,0.55)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide" 
               style={{ backgroundColor: '#EC3237', color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>
            <Target className="w-4 h-4 mr-2" />
            Our Story
          </div>

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight" style={{ color: '#3C3637', fontFamily: 'Montserrat Alternates, sans-serif' }}>
            Authentic Flavors,
            <br />
            <span className="font-black" style={{ color: '#EC3237' }}>Family Tradition</span>
          </h2>

          <p
            className="text-2xl font-black leading-relaxed mb-4 max-w-3xl mx-auto"
            style={{
              color: '#222',
              textShadow: '0 2px 8px rgba(255,255,255,0.7), 0 1px 0 #fff',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '1rem',
              padding: '1.5rem 1rem',
              fontFamily: 'Montserrat Alternates, sans-serif'
            }}
          >
            For over two decades, Uncle's Chinese has been serving the most authentic Chinese and Pan-Asian cuisine in Pune. Our journey began with a simple mission: to bring the true flavors of Asia to your table, creating a warm and welcoming space where every guest feels like family.
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-12">
            <div className="rounded-2xl p-8 text-left border-4" style={{ backgroundColor: '#EC3237', color: '#F8F8F8', borderColor: '#F5DF19' }}>
              <h3 className="text-3xl font-black mb-4 uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>Our Mission</h3>
              <p className="leading-relaxed font-semibold" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
                To serve authentic, high-quality Asian flavors in a welcoming and casual dining space, 
                creating a memorable experience for every guest.
              </p>
            </div>

            <div className="rounded-2xl p-8 text-left border-4" style={{ backgroundColor: '#F8F8F8', borderColor: '#EC3237', color: '#3C3637' }}>
              <h3 className="text-3xl font-black mb-4 uppercase" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>Our Vision</h3>
              <p className="leading-relaxed font-semibold" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
                To be the most loved neighborhood Chinese & Pan-Asian restaurant, expanding across multiple 
                locations while staying true to our signature flavors and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#3C3637' }}>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight" style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>
            Find Us
            <br />
            <span className="font-black" style={{ color: '#F5DF19' }}>Near You</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {outlets.map((outlet, index) => (
              <div key={index} className="p-6 rounded-xl border-4 transition-all duration-300 hover:scale-105 hover:shadow-xl" 
                   style={{ borderColor: '#F5DF19', backgroundColor: 'rgba(245, 223, 25, 0.1)' }}>
                <MapPin className="w-8 h-8 mb-3 mx-auto" style={{ color: '#F5DF19' }} />
                <h3 className="text-xl font-black uppercase tracking-wide" style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>{outlet}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#EC3237' }}>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight" style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>
            Ready to
            <br />
            <span className="font-black" style={{ color: '#F5DF19' }}>Taste Tradition?</span>
          </h2>

          <p className="text-xl font-bold max-w-2xl mx-auto uppercase tracking-wide" style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>
            Experience the authentic flavors that have made us Pune's favorite Asian restaurant for over two decades.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(245, 223, 25, 0.1)' }}>
              <Phone className="w-6 h-6" style={{ color: '#F5DF19' }} />
              <span className="font-bold text-lg" style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>020 2615 2970</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(245, 223, 25, 0.1)' }}>
              <Mail className="w-6 h-6" style={{ color: '#F5DF19' }} />
              <span className="font-bold text-lg" style={{ color: '#F8F8F8', fontFamily: 'Montserrat Alternates, sans-serif' }}>uncleskitchen@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 border-4 transform hover:scale-110 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'rgba(245, 223, 25, 0.1)', 
                  borderColor: '#F5DF19',
                  color: '#F8F8F8'
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <button 
            className="px-12 py-6 rounded-xl font-black text-xl transition-all duration-300 transform hover:scale-110 uppercase tracking-wide shadow-2xl"
            style={{ 
              backgroundColor: '#F8F8F8', 
              color: '#EC3237', 
              fontFamily: 'Montserrat Alternates, sans-serif',
              boxShadow: '0 10px 30px rgba(248,248,248,0.3)',
              border: '3px solid #F5DF19'
            }}
          >
            Visit Us Today
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <div className="mx-auto max-w-4xl p-4 text-center sm:py-14">
            <h1 className="mb-4 text-5xl md:text-7xl font-black uppercase tracking-tight" style={{ color: '#3C3637', fontFamily: 'Montserrat Alternates, sans-serif' }}>
              Our Customers 
              <br />
              <span style={{ color: '#EC3237' }}>
                Love Us!
              </span>
            </h1>
            <p className="text-2xl p-7 font-bold italic" style={{ color: '#3C3637', fontFamily: 'Montserrat Alternates, sans-serif' }}>
              "Ordinary doesn't live here. We craft extraordinary flavors, one authentic dish at a time."
            </p>
          </div>

          <TestimonialMarquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.email} {...review} />
            ))}
          </TestimonialMarquee> 
          <TestimonialMarquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.email} {...review} />
            ))}
          </TestimonialMarquee>
          <TestimonialMarquee pauseOnHover className="[--duration:20s]">
            {thirdRow.map((review) => (
              <ReviewCard key={review.email} {...review} />
            ))}
          </TestimonialMarquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-100"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-100"></div>
        </div>
      </section>

     </div>
  );
}