import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Users, Play, Instagram, Linkedin, Mail } from "lucide-react";
import { Curve } from "@/components";
import { LampDemoTeam } from "@/data/data";
import Image from "next/image";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { GetServerSideProps } from 'next';

// Create a motion-wrapped Image component for animations
const MotionImage = motion(Image);

// Updated team members with social links
const teamMembers = [
  {
    name: "PRABHA",
    role: "Co-Founder",
    image: "/dev.jpeg",
    description: "Visionary leader driving innovation and strategic growth with an unwavering commitment to excellence and transformative business solutions.",
    color: "purple" as const,
    instagram: "https://instagram.com/prabha",
    linkedin: "https://linkedin.com/in/prabha",
    email: "prabha@nukemarketing.com"
  },
  {
    name: "SWETHA",
    role: "Co-Founder",
    image: "/adi.jpeg",
    description: "Creative mastermind orchestrating brand narratives and user experiences that captivate audiences and inspire lasting connections.",
    color: "blue" as const,
    instagram: "https://instagram.com/swetha",
    linkedin: "https://linkedin.com/in/swetha",
    email: "swetha@nukemarketing.com"
  },
  {
    name: "RIYAS",
    role: "Chief Video Editor",
    image: "/rag.jpeg",
    description: "Crafting compelling visual stories through expert editing, bringing concepts to life with cinematic precision and creative flair.",
    color: "green" as const,
    instagram: "https://instagram.com/riyas",
    linkedin: "https://linkedin.com/in/riyas",
    email: "riyas@nukemarketing.com"
  },
  {
    name: "MASVOOD",
    role: "Chief Video Editor",
    image: "/dev.jpeg",
    description: "Transforming raw footage into powerful narratives with technical mastery and an artistic eye for detail and storytelling excellence.",
    color: "orange" as const,
    instagram: "https://instagram.com/masvood",
    linkedin: "https://linkedin.com/in/masvood",
    email: "masvood@nukemarketing.com"
  },
  {
    name: "RAGHAV",
    role: "Website Developer",
    image: "/rag.jpeg",
    description: "Building digital experiences where cutting-edge technology meets elegant design, creating seamless and performant web solutions.",
    color: "indigo" as const,
    instagram: "https://instagram.com/raghav",
    linkedin: "https://linkedin.com/in/raghav",
    email: "raghav@nukemarketing.com"
  },
];

// Sample image URLs for cosmic animation
const cosmicImages = [
  "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1586829135343-132950070391?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=100&h=100&fit=crop",
];

type ColorType = 'purple' | 'blue' | 'green' | 'orange' | 'indigo';

interface ColorClasses {
  bg: string;
  text: string;
  border: string;
}

const getColorClasses = (color: ColorType): ColorClasses => {
  const colors: Record<ColorType, ColorClasses> = {
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200' },
    indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-200' }
  };
  return colors[color] || colors.purple;
};

const CosmicSection = () => {
  useEffect(() => {
    const cosmosElements = document.querySelectorAll(".cosmos");
    const total = cosmosElements.length;

    cosmosElements.forEach((cosmos, i) => {
      const angle = (360 / total) * i;
      const transform = `rotate(${angle}deg) translate(65vh)`;
      (cosmos as HTMLElement).style.transform = transform;

      const cosmosItems = cosmos.querySelectorAll(".cosmos-item");
      cosmosItems.forEach((item, j) => {
        (item as HTMLElement).style.animationDelay = `${j * 0.5}s`;
      });
    });
  }, []);

  return (
    <section className="relative min-h-[150vh] w-full bg-black overflow-hidden flex items-center justify-center">
      <style jsx>{`
        .cosmos {
          position: absolute;
          width: 100px;
          height: 180px;
        }

        .cosmos-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #7e7e7e;
          animation: fall-and-disappear 5s infinite ease-in-out;
          transform-origin: bottom;
          transform: scale(0);
          border-radius: 8px;
          overflow: hidden;
        }

        .cosmos-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes fall-and-disappear {
          0% {
            opacity: 0;
            top: 0;
            left: 0;
            transform: scale(1);
          }
          25% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            top: -250px;
            transform: scale(1);
          }
          100% {
            top: -200px;
            left: -350px;
            transform: scale(0);
          }
        }

        @media (max-width: 768px) {
          .cosmos {
            width: 70px;
            height: 120px;
          }
          
          @keyframes fall-and-disappear {
            0% {
              opacity: 0;
              top: 0;
              left: 0;
              transform: scale(1);
            }
            25% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              top: -150px;
              transform: scale(1);
            }
            100% {
              top: -120px;
              left: -200px;
              transform: scale(0);
            }
          }
        }
      `}</style>

      {/* Cosmic Title */}
      <motion.h1 
        className="absolute z-10 text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-center px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        &quot;Only The Best&quot;<sup className="text-lg sm:text-xl md:text-2xl">®</sup>
      </motion.h1>

      {/* Cosmic Animation Container */}
      <div className="absolute top-0 h-full w-full flex justify-center items-center overflow-hidden">
        {[...Array(7)].map((_, cosmosIndex) => (
          <div key={cosmosIndex} className="cosmos">
            {cosmicImages.map((imageSrc, itemIndex) => (
              <div key={itemIndex} className="cosmos-item">
                <Image
                  src={imageSrc}
                  alt={`cosmic-${itemIndex}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default function MeetOurTeam() {
  const [index, setIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [viewMode, setViewMode] = useState('carousel');

  // Initialize Locomotive Scroll
  useEffect(() => {
    const initLocomotiveScroll = async () => {
      if (typeof window !== 'undefined') {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
          lerp: 0.1,
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
          }
        });
        
        return () => {
          locomotiveScroll.destroy();
        };
      }
    };

    initLocomotiveScroll();
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  // Hide scroll indicator after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TeamCarousel = () => (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50 text-black pt-32 px-4">
      {/* View Toggle */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={() => setViewMode('showcase')}
          className="p-3 rounded-xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Users className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Header */}
      <div className="text-center w-full max-w-4xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-800 mb-4"
        >
          Meet Our Team
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 font-light italic"
        >
          &quot;Elevating moments into masterpieces, simplicity into significance&quot;
        </motion.p>
      </div>

      {/* Team Member Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl w-full px-4"
        >
          {/* Image Section */}
          <div className="relative group">
            <div className={`absolute -inset-1 ${getColorClasses(teamMembers[index].color).bg} rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
            <MotionImage
              src={teamMembers[index].image}
              alt={teamMembers[index].name}
              width={400}
              height={400}
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-xl border-4 border-white group-hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Role Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 ${getColorClasses(teamMembers[index].color).bg} rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300`}
            >
              <p className="text-white font-medium text-sm">
                {teamMembers[index].role}
              </p>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800 mb-4"
            >
              {teamMembers[index].name}
            </motion.h2>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`h-1 ${getColorClasses(teamMembers[index].color).bg} rounded-full my-4`} 
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed font-light italic mb-8"
            >
              {teamMembers[index].description}
            </motion.p>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 items-center"
            >
              <a
                href={teamMembers[index].instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href={teamMembers[index].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href={`mailto:${teamMembers[index].email}`}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 text-gray-700" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="p-4 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Next team member"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {teamMembers.map((_, memberIndex) => (
          <button
            key={memberIndex}
            onClick={() => setIndex(memberIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              memberIndex === index 
                ? `${getColorClasses(teamMembers[index].color).bg} shadow-md scale-125` 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );

  const TeamShowcase = () => (
    <section className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 text-black pt-32 px-4 pb-16">
      {/* View Toggle */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={() => setViewMode('carousel')}
          className="p-3 rounded-xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <Play className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Header */}
      <div className="text-center w-full max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-800 mb-4">
          Our Creative Team
        </h1>
        <p className="text-xl text-gray-600 font-light">
          Meet the passionate individuals behind our success
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, memberIndex) => (
          <motion.div
            key={memberIndex}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: memberIndex * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            onClick={() => {
              setIndex(memberIndex);
              setViewMode('carousel');
            }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                
                <div className={`h-0.5 w-16 ${getColorClasses(member.color).bg} rounded-full mx-auto mb-3`} />
                
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 ${getColorClasses(member.color).bg} text-white text-sm font-medium rounded-full`}>
                    {member.role}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Instagram className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <Curve backgroundColor={"#f1f1f1"}>
      <div data-scroll-container>
        {/* Lamp Demo at the top */}
        <LampDemoTeam />

        {/* Logo section */}
        <div className="w-full bg-black py-16 flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="nuke"
            width={200}
            height={200}
            className="h-32 w-auto object-contain"
          />
        </div>
        
        {/* Clean Team Section */}
        {viewMode === 'carousel' ? <TeamCarousel /> : <TeamShowcase />}

        {/* Cosmic Animation Section */}
        <CosmicSection />
      </div>
    </Curve>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Redirect to /nuke-team if not already there
  if (context.resolvedUrl !== '/nuke-team') {
    return {
      redirect: {
        destination: '/nuke-team',
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};