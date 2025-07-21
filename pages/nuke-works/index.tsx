import { useEffect, useRef } from "react";
import { Curve, Ready } from "@/components";
import { LampDemoCraft } from "@/data/data";
import { X } from "@/container";
import { Globe, Video, Camera, Smartphone, ArrowUpRight } from "lucide-react";


// Bento Card Button Component
interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  className?: string;
  size?: "default" | "large";
}

const BentoCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href,
  className = "",
  size = "default"
}: BentoCardProps) => {
  const sizeClasses: Record<"default" | "large", string> = {
    default: "lg:col-span-1",
    large: "lg:col-span-2"
  };

  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]}
        bg-black
        border border-white/20 
        p-0
        relative 
        group 
        hover:bg-gray-900
        hover:border-white/40 
        rounded-2xl
        h-[400px]
        flex
        flex-col
        sm:h-[350px]
        shadow-xl
        overflow-hidden
        cursor-pointer
        ${className}
      `}
    >
      {/* Image Section - Removed */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-black/40" />

      {/* Icon and Arrow */}
      <div className="absolute top-4 left-4 z-10">
        <Icon className="w-8 h-8 text-white drop-shadow-lg sm:w-6 sm:h-6" />
      </div>
      <div className="absolute top-4 right-4 z-10">
        <ArrowUpRight className="w-6 h-6 text-white drop-shadow-lg sm:w-5 sm:h-5" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-6 pt-12 h-1/2 sm:p-4 text-left relative z-10">
        <div>
          <h3 className="text-2xl font-bold mb-3 tracking-[-0.01em] text-white sm:text-xl sm:mb-2">
            {title}
          </h3>
        </div>
        
        <p className="text-white/70 text-base leading-relaxed sm:text-sm">
          {description}
        </p>
        
        {/* Button indicator */}
        <div className="mt-4 flex items-center text-white/60">
          <span className="text-sm font-medium">Click to explore</span>
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </button>
  );
};

// Bento Grid Section Component
const BentoGridSection = () => {
  const gridItems = [
    {
      title: "Instagram Reel Edits",
      description: "Professional reel editing services that create viral-worthy content, boost engagement, and grow your social media presence with stunning visual storytelling.",
      icon: Camera,
      href: "/contact",
      size: "large" as const
    },
    {
      title: "BTS",
      description: "Behind-the-scenes content that showcases your authentic brand personality and builds deeper connections.",
      icon: Video,
      href: "/contact",
      size: "default" as const
    },
    {
      title: "Dr. Shanti Growth",
      description: "Strategic growth solutions and digital marketing expertise to elevate Dr. Shanti's practice and reach.",
      icon: Smartphone,
      href: "/drshanthigrowth.html",
      size: "default" as const
    },
    {
      title: "Renjitha Growth",
      description: "Comprehensive digital growth strategies and brand development solutions for Renjitha's business expansion.",
      icon: Smartphone,
      href: "/renjithagrowth.html",
      size: "default" as const
    },
    {
      title: "Amutha Surabhi",
      description: "Crafting unique and memorable brand identities for a Millet based brand  that resonate with your audience and set you apart.",
      icon: Globe,
      href: "/amuthasurabhi.html",
      size: "default" as const
    }
  ];

  return (
    <section className="w-full py-20 px-8 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-12">
          <h2 className="text-6xl  mb-6 tracking-[-0.02em] sm:text-4xl text-white">
            Our Creative Works
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From stunning websites to engaging social content, we bring your vision to life across all digital platforms.
          </p>
          <div className="w-24 h-1 bg-white/50 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
          {gridItems.map((item, index) => (
            <BentoCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              href={item.href}
              size={item.size}
              className={index === 0 ? "lg:col-span-2" : ""}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-12">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Presentation() {
  const containerRef = useRef(null);

  useEffect(() => {
    // If you still want to manually initialize Locomotive Scroll
    // (though using LocomotiveScrollProvider is recommended)
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        // Add your locomotive scroll options here
      });

      // Optionally, you can destroy the instance when the component unmounts
      return () => {
        locomotiveScroll.destroy();
      };
    })();
  }, []);

  return (
    <>
      <div data-scroll-container ref={containerRef}>
        <Curve backgroundColor={"#000000"}>
          <LampDemoCraft />
          
          {/* New Bento Grid Section */}
          <BentoGridSection />
       
          <Ready />

        </Curve>
      </div>
    </>
  );
}