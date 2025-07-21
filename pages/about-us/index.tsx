"use client";
import Image from "next/image";
import Link from "next/link";
import { Star, Instagram, Linkedin, MessageCircle, Target, Zap, Eye, Users, Lightbulb, Rocket, Calendar, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { LampDemoAbout } from "@/data/data";
import { Curve } from "@/components";

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
      getAll: () => {
        kill: () => void;
      }[];
    };
    Matter: {
      Engine: any;
      Runner: any;
      World: any;
      Bodies: any;
      Body: any;
      Events: any;
    };
    SplitType: any;
    Lenis: new () => { on: (event: string, callback: () => void) => void; raf: (time: number) => void; };
  }
}

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://www.instagram.com/nuke_marketing_/", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: "https://www.linkedin.com/company/nuke-marketing7/posts/?feedView=all", icon: <Linkedin size={20} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/919789985132?text=Dear%20Nuke%20Marketing%20Team%2C%20I%20hope%20you%20are%20doing%20well.%20I%20am%20interested%20in%20learning%20more%20about%20your%20services%20and%20ongoing%20projects.%20Could%20you%20please%20provide%20more%20details%20or%20let%20me%20know%20a%20suitable%20time%20to%20discuss%20further%3F%20Looking%20forward%20to%20your%20response.%20Best%20regards%2C%20Client", icon: <MessageCircle size={20} /> },
];

const stats = [
  { number: "100+", label: "Brands Transformed" },
  { number: "1000+", label: "Content Pieces" },
  { number: "95%", label: "Client Retention" },
  { number: "500+", label: "Success Stories" }
];

const logos = [
  {
    name: "Babel",
    url: "/l1.webp",
  },
  {
    name: "Ngrok",
    url: "/l2.webp",
  },
  {
    name: "Webflow",
    url: "/l3.webp",
  },
  {
    name: "Perplexity",
    url: "/l4.webp",
  },
  {
    name: "Sanity",
    url: "/l5.webp",
  },
  {
    name: "Post CSS",
    url: "/l6.webp",
  },
];

// Bento Grid Components
interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

const BentoGrid = ({ children, className = "" }: BentoGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 xm:gap-4 ${className}`}>
      {children}
    </div>
  );
};

interface BentoCardProps {
  number: number;
  title: string;
  description: string;
  icon?: React.ElementType;
  className?: string;
  size?: "default" | "large";
}

const BentoCard = ({
  number,
  title,
  description,
  icon: Icon,
  className = "",
  size = "default"
}: BentoCardProps) => {
  const sizeClasses: Record<"default" | "large", string> = {
    default: "lg:col-span-1",
    large: "lg:col-span-2"
  };

  return (
    <div className={`
      ${sizeClasses[size]}
      bg-gradient-to-br from-white/5 to-white/[0.02]
      border border-white/10 
      p-8 
      relative 
      group 
      hover:bg-gradient-to-br hover:from-white/10 hover:to-white/[0.05]
      hover:border-white/20 
      transition-colors
      duration-200
      rounded-2xl
      h-[320px]
      flex
      flex-col
      justify-between
      sm:h-[280px]
      xm:h-[240px]
      sm:p-6 
      xm:p-4
      shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
      hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]
      ${className}
    `}>
      <div>
        <div className="absolute top-0 right-0 text-xs text-white/50 p-4 font-mono sm:p-3 xm:p-2">
          {String(number).padStart(2, '0')}
        </div>

        {Icon && (
          <div className="mb-6 sm:mb-4 xm:mb-3">
            <Icon className="w-10 h-10 text-white/60 group-hover:text-white transition-colors duration-200 sm:w-8 sm:h-8 xm:w-6 xm:h-6" />
          </div>
        )}

        <h3 className="text-3xl font-black font-NeueMontreal mb-6 tracking-[-0.01em] text-white sm:text-2xl sm:mb-4 xm:text-xl xm:mb-3">
          {title}
        </h3>
      </div>

      <p className="text-white/70 text-lg leading-7 group-hover:text-white/90 transition-colors duration-200 sm:text-base sm:leading-6 xm:text-sm xm:leading-5">
        {description}
      </p>
    </div>
  );
};

const LogoCloud = () => {
  return (
    <div className="w-full py-16 sm:py-12 xm:py-8">
      <div className="mx-auto w-full px-8 sm:px-6 xm:px-4">
        <div className="text-center mb-12 sm:mb-8 xm:mb-6">
          <h3 className="text-sm font-light text-gray-500 mb-4 tracking-[0.2em] uppercase sm:text-xs xm:text-xs">Trusted Partners</h3>
          <div className="w-16 h-px bg-gradient-to-r from-white/30 via-white/50 to-white/30 mx-auto"></div>
        </div>
        <div
          className="group relative flex gap-12 overflow-hidden p-4 sm:gap-8 sm:p-3 xm:gap-6 xm:p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-16 sm:gap-12 xm:gap-8"
              >
                {logos.map((logo, key) => (
                  <Image
                    key={key}
                    src={logo.url}
                    width={180}
                    height={120}
                    className="h-64 w-64 bg-white rounded-lg object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 sm:h-14 sm:w-32 xm:h-12 xm:w-28"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js',
      'https://unpkg.com/split-type',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
      'https://unpkg.com/lenis@1.1.20/dist/lenis.min.js'
    ];

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.head.appendChild(script);
      });
    };

    Promise.all(scripts.map(loadScript)).then(() => {
      setTimeout(() => {
        if (
          typeof window !== 'undefined' &&
          window.gsap &&
          (window as any).ScrollTrigger &&
          (window as any).Matter &&
          (window as any).SplitType &&
          (window as any).Lenis
        ) {
          initStoryAnimation();
        }
      }, 500);
    });

    const initStoryAnimation = () => {
      const { gsap, ScrollTrigger, Matter, SplitType, Lenis } = window as any;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time: number) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      const highlightWords = [
        "Nuke", "corporate", "startup", "creative", "freelancing",
        "explodes", "wildfire", "recognition", "standards", "quality", "story"
      ];

      const text = new SplitType(storyRef.current, { types: "words" });
      const words = [...text.words];

      const { Engine, Runner, World, Bodies, Body, Events } = Matter;
      const engine = Engine.create({ gravity: { x: 0, y: 0 } });
      const runner = Runner.create();
      Runner.run(runner, engine);

      const floor = Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight + 5,
        window.innerWidth,
        20,
        { isStatic: true }
      );
      World.add(engine.world, floor);

      const shuffledWords = [...words];
      for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
      }

      const wordsToHighlight = words.filter((word) =>
        highlightWords.some((highlight) =>
          word.textContent?.toLowerCase().includes(highlight.toLowerCase())
        )
      );

      let physicsEnabled = false;
      let lastProgress = 0;
      interface CharBody {
        body: any;
        element: HTMLElement;
        initialX: number;
        initialY: number;
      }
      const charBodies: CharBody[] = [];

      wordsToHighlight.forEach((word) => {
        const chars = word.textContent?.split("") || [];
        const wordRect = word.getBoundingClientRect();
        const stickyElement = document.querySelector(".sticky");
        if (!stickyElement) return;
        const stickyRect = stickyElement.getBoundingClientRect();

        chars.forEach((char: string, charIndex: number) => {
          const charSpan = document.createElement("span");
          charSpan.className = "char";
          charSpan.textContent = char;
          charSpan.style.cssText = `
            display: inline-block;
            position: absolute;
            pointer-events: none;
            opacity: 0;
            color: #FF0000;
            font-size: inherit;
            font-weight: inherit;
          `;
          stickyElement.appendChild(charSpan);

          const charWidth = word.offsetWidth / chars.length;
          const x = wordRect.left - stickyRect.left + charIndex * charWidth;
          const y = wordRect.top - stickyRect.top;

          charSpan.style.left = `${x}px`;
          charSpan.style.top = `${y}px`;

          const body = Bodies.rectangle(
            x + charWidth / 2,
            y + charSpan.offsetHeight / 2,
            charWidth,
            charSpan.offsetHeight,
            {
              restitution: 0.75,
              friction: 0.5,
              frictionAir: 0.0175,
              isStatic: true,
            }
          );

          World.add(engine.world, body);
          charBodies.push({
            body,
            element: charSpan,
            initialX: x,
            initialY: y,
          });
        });
      });

      function resetAnimation() {
        engine.world.gravity.y = 0;

        charBodies.forEach(({ body, element, initialX, initialY }) => {
          Body.setStatic(body, true);
          Body.setPosition(body, {
            x: initialX + element.offsetWidth / 2,
            y: initialY + element.offsetHeight / 2,
          });
          Body.setAngle(body, 0);
          Body.setVelocity(body, { x: 0, y: 0 });
          Body.setAngularVelocity(body, 0);

          element.style.transform = "none";
          element.style.opacity = "0";
        });

        words.forEach((word) => {
          gsap.to(word, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.in",
          });
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky",
          start: "top top",
          end: `+=${window.innerHeight * 4}px`,
          pin: true,
          scrub: true,
          onUpdate: (self: { progress: number }) => {
            const isScrollingDown = self.progress > lastProgress;
            lastProgress = self.progress;

            if (self.progress >= 0.6 && !physicsEnabled && isScrollingDown) {
              physicsEnabled = true;
              engine.world.gravity.y = 1;

              wordsToHighlight.forEach((word) => {
                word.style.opacity = "0";
              });

              charBodies.forEach(({ body, element }) => {
                element.style.opacity = "1";
                Body.setStatic(body, false);
                Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.25);
                Body.setVelocity(body, {
                  x: (Math.random() - 0.5) * 5,
                  y: -Math.random() * 5,
                });
              });

              gsap.to(
                words.filter(
                  (word) =>
                    !highlightWords.some((hw) =>
                      word.textContent?.toLowerCase().includes(hw.toLowerCase())
                    )
                ),
                {
                  opacity: 0,
                  duration: 0.5,
                  ease: "power2.out",
                }
              );
            } else if (self.progress < 0.6 && physicsEnabled && !isScrollingDown) {
              physicsEnabled = false;
              resetAnimation();
            }
          },
        },
      });

      // Phase 1: Random words turn red
      const phase1 = gsap.timeline();
      shuffledWords.forEach((word) => {
        phase1.to(word, {
          color: "#FF0000",
          duration: 0.1,
          ease: "power2.inOut",
        }, Math.random() * 0.9);
      });

      // Phase 2: Highlight words turn white
      const phase2 = gsap.timeline();
      const shuffledHighlights = [...wordsToHighlight];
      for (let i = shuffledHighlights.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledHighlights[i], shuffledHighlights[j]] = [shuffledHighlights[j], shuffledHighlights[i]];
      }

      shuffledHighlights.forEach((word) => {
        phase2.to(word, {
          color: "#FFFFFF",
          duration: 0.1,
          ease: "power2.inOut",
        }, Math.random() * 0.9);
      });

      tl.add(phase1, 0).add(phase2, 1).to({}, { duration: 2 });

      Events.on(engine, "afterUpdate", () => {
        charBodies.forEach(({ body, element, initialX, initialY }) => {
          if (physicsEnabled) {
            const deltaX = body.position.x - (initialX + element.offsetWidth / 2);
            const deltaY = body.position.y - (initialY + element.offsetHeight / 2);
            element.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${body.angle}rad)`;
          }
        });
      });
    };

    return () => {
      if (typeof window !== 'undefined') {
        const { ScrollTrigger } = window as any;
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach((trigger: { kill: () => void }) => trigger.kill());
        }
      }
    };
  }, []);

  // Data for bento grids
  const whyNukeItems = [
    {
      id: 1,
      title: "Discovery Call",
      description: "First things first, we hop on a discovery call, not just to tick a box, but to truly understand what makes you and your brand tick. What&apos;s your story? What problems are you solving? And most importantly, what value are you bringing to the table?",
      icon: Target
    },
    {
      id: 2,
      title: "Work Mode",
      description: "Once we have this foundation, we get to work mode, breaking down ideas, brainstorming solutions, and doing a little bit of spying (aka competitor analysis). We also dig into industry trends to figure out what works and, more importantly, what doesn&apos;t.",
      icon: Zap
    },
    {
      id: 3,
      title: "Strategic Content",
      description: "No unnecessary fluff, just strategic, high-quality storytelling that connects with your audience and drives real results.",
      icon: Eye
    },
    {
      id: 4,
      title: "Consistency",
      description: "The real game-changer. We ensure you show up and stay accountable with consistent, quality content that builds trust.",
      icon: Users
    },
    {
      id: 5,
      title: "Creative Solutions",
      description: "We don&apos;t just follow trends, we create them. Every solution is tailored specifically to your brand&apos;s unique voice and goals.",
      icon: Lightbulb
    },
    {
      id: 6,
      title: "Unforgettable Impact",
      description: "At NUKE, we don&apos;t do generic. We make you unforgettable with strategies that create lasting impressions and meaningful connections.",
      icon: Rocket
    }
  ];

  return (
    <Curve backgroundColor={"#f1f1f1"}>
      <div className="w-full bg-black text-white">
        {/* Lamp Demo at the top */}
        <LampDemoAbout />

        {/* Hero Section */}
        <section className="min-h-screen bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
              {/* Left Column */}
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-white text-black rounded-full text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  Strategic Marketing Excellence
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[0.85] tracking-tight text-white">
                  Make Your<br />
                  <span className="font-light">Brand</span><br />
                  <span className="font-light">Unforgettable</span>
                </h1>

                <p className="text-lg sm:text-xl font-light leading-relaxed text-white/70 max-w-lg">
                  We don&apos;t just create content - we craft strategic, high-quality storytelling that connects with your audience and builds lasting brand recognition.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8">
                  <Link href="/contact" className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link href="/contacts" className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300">
                    Partner with Us
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="relative mt-8 lg:mt-0">
                <div className="aspect-square bg-black rounded-3xl overflow-hidden relative border border-white shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-extralight text-white mb-6">NUKE</div>
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <Target className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
                      </div>
                      <p className="text-white font-medium">Strategic Excellence</p>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-white">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                      <span className="text-sm font-medium text-white">Live Projects</span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-white">
                    <div className="text-xl sm:text-2xl font-light text-white">95%</div>
                    <div className="text-xs sm:text-sm text-white/70 font-medium">Client Satisfaction</div>
                  </div>

                  <div className="absolute top-1/2 left-6 sm:left-8 bg-white rounded-xl p-3 sm:p-4 shadow-lg transform -translate-y-1/2">
                    <div className="text-black text-center">
                      <div className="text-base sm:text-lg font-medium">100+</div>
                      <div className="text-xs opacity-90">Brands Transformed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-12 sm:py-16 mt-12 sm:mt-16 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2 group-hover:text-white/90 transition-colors">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section - Keeping red accents */}
        <section className="sticky relative w-full h-screen bg-black overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-[2] h-full flex flex-col justify-center px-16 sm:px-8 xm:px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24 sm:mb-12 xm:mb-8">
                <div className="w-16 h-px bg-red-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-12 gap-16 items-start sm:grid-cols-1 sm:gap-8 xm:grid-cols-1 xm:gap-6">
                <div className="col-span-3 sm:col-span-1 xm:col-span-1">
                  <div className="text-sm text-white/50 leading-8 tracking-[0.05em] sm:text-center sm:mb-8 xm:text-center xm:mb-6">
                    Founded 2023<br />
                    Chennai, India<br />
                    Creative Marketing<br />
                    Brand Strategy<br />
                    Digital Storytelling
                  </div>
                </div>

                <div className="col-span-9 sm:col-span-1 xm:col-span-1">
                  <div
                    ref={storyRef}
                    className="text-white text-lg leading-8 sm:text-base sm:leading-7 xm:text-sm xm:leading-6"
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    We started Nuke because, honestly, we just didn&apos;t fit into the corporate world!
                    <br /><br />
                    Both of us started our careers in a Big 4 firm, but somewhere between endless reports and corporate calls, we knew this wasn&apos;t it. Swetha was the first to break free—she quit and joined a startup, where she juggled multiple verticals and got a taste of the fast-paced creative world.
                    <br /><br />
                    Meanwhile, Prabha was always the &quot;fun guy&quot; — the one cracking jokes, pulling off skits at culturals, and entertaining everyone with his out-of-the-box ideas. Sitting at a desk all day? Definitely not his thing. So, he quit too.
                    <br /><br />
                    With zero plans but a lot of excitement, we started freelancing. We worked with creators, and our first-ever collaboration was with our good friend Mano Chandru aka MC. From writing scripts to structuring webinars, we did it all. One gig led to another, and soon we were working with Cuts Coffee Shyam, then Hoodieguy, and many more.
                    <br /><br />
                    But freelancing had its share of struggles—late payments, inconsistent work, and most importantly, the unsung heroes behind the scenes (editors, designers, writers) never getting the recognition they deserved. So, we thought, &quot;Why not build something bigger and better?&quot;
                    <br /><br />
                    That&apos;s how Nuke was born. The name? Well, we wanted to create marketing that explodes and spreads like wildfire. Also, let&apos;s be honest, we just thought it sounded cool. :P
                    <br /><br />
                    But beyond the name, we wanted to set new standards in the industry—where everyone in our team gets the recognition they deserve, where payments are smooth and are on time and where creativity and quality come first, ensuring real value for both our clients and their audience.
                    <br /><br />
                    So yeah, that&apos;s our story. Now, let&apos;s create yours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why NUKE Section */}
        <section className="w-full bg-black py-32 px-16 sm:py-20 sm:px-8 xm:py-16 xm:px-4">
          <div className="max-w-7xl mx-auto relative z-[2]">
            <div className="text-center mb-16 sm:mb-12 xm:mb-8">
              <h2 className="text-6xl font-black font-NeueMontreal mb-4 tracking-[-0.02em] sm:text-4xl xm:text-3xl text-white">
                Why NUKE?
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-white/30 via-white/50 to-white/30 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-8 xm:gap-6 mt-16 sm:mt-8 xm:mt-6">
              {/* Left Column - Main Text */}
              <div className="space-y-8 sm:space-y-6 xm:space-y-4">
                <p className="text-white/70 text-lg leading-8 sm:text-base sm:leading-7 xm:text-sm xm:leading-6">
                  First things first, we hop on a discovery call, not just to tick a box, but to truly understand what makes you and your brand tick. What&apos;s your story? What problems are you solving? And most importantly, what value are you bringing to the table?
                </p>
                <p className="text-white/70 text-lg leading-8 sm:text-base sm:leading-7 xm:text-sm xm:leading-6">
                  Once we have this foundation, we get to work mode, breaking down ideas, brainstorming solutions, and doing a little bit of spying (aka competitor analysis). We also dig into industry trends to figure out what works and, more importantly, what doesn&apos;t.
                </p>
                <p className="text-white/70 text-lg leading-8 sm:text-base sm:leading-7 xm:text-sm xm:leading-6">
                  Now, here&apos;s the thing: we don&apos;t believe in putting out content just for the sake of it. No unnecessary fluff, no random posts that go nowhere, just strategic, high-quality storytelling that actually connects with people.
                </p>
                <p className="text-white/70 text-lg leading-8 sm:text-base sm:leading-7 xm:text-sm xm:leading-6">
                  But the real game-changer? Consistency. We don&apos;t just create great content and leave you hanging. We make sure you show up, stay accountable, and build a brand that people recognize and trust.
                </p>
                <p className="text-white/70 text-lg leading-8 sm:text-base sm:leading-7 xm:text-sm xm:leading-6">
                  At NUKE, we don&apos;t do generic. We make you unforgettable. Not just another name in the crowd, but a brand that demands attention.
                </p>
              </div>

              {/* Right Column - Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4 xm:gap-3">
                <BentoCard
                  number={1}
                  title="Discovery"
                  description="We dive deep into your brand&apos;s story, problems, and value proposition to create a solid foundation for success."
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 h-[280px] sm:h-[240px] xm:h-[200px]"
                  icon={Target}
                />
                <BentoCard
                  number={2}
                  title="Strategy"
                  description="We analyze competitors and industry trends to develop effective, data-driven marketing strategies."
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 h-[280px] sm:h-[240px] xm:h-[200px]"
                  icon={Zap}
                />
                <BentoCard
                  number={3}
                  title="Quality"
                  description="No fluff, just strategic, high-quality storytelling that connects with your audience and drives results."
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 h-[280px] sm:h-[240px] xm:h-[200px]"
                  icon={Eye}
                />
                <BentoCard
                  number={4}
                  title="Consistency"
                  description="We ensure you show up and stay accountable with consistent, quality content that builds trust."
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 h-[280px] sm:h-[240px] xm:h-[200px]"
                  icon={Users}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full bg-black py-32 px-16 sm:py-20 sm:px-8 xm:py-16 xm:px-4">
          <div className="max-w-7xl mx-auto relative z-[2]">
            <div className="text-center mb-16 sm:mb-12 xm:mb-8">
              <h2 className="text-6xl font-black font-NeueMontreal mb-4 tracking-[-0.02em] sm:text-4xl xm:text-3xl text-white">
                NUKE&apos;s Mission & Vision
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-white/30 via-white/50 to-white/30 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 xm:gap-4 mt-16 sm:mt-8 xm:mt-6">
              {/* Mission */}
              <BentoCard
                number={1}
                title="Mission"
                description="We&apos;re here to redefine marketing, no fluff, no boring content, just bold strategies and creative storytelling that actually work. We help brands, businesses, and creators stand out, connect, and make an impact."
                className="bg-gradient-to-br from-black/40 to-black/20 border-white/10 h-[450px] sm:h-[400px] xm:h-[360px]"
                icon={Target}
              />

              {/* Vision */}
              <BentoCard
                number={2}
                title="Vision"
                description="NUKE is more than marketing; it&apos;s a movement. We aim to turn brands into unforgettable names, while giving credit to the creative minds behind the scenes. Marketing should be fun, effective, and never generic. Let&apos;s make it happen!"
                className="bg-gradient-to-br from-black/40 to-black/20 border-white/10 h-[450px] sm:h-[400px] xm:h-[360px]"
                icon={Rocket}
              />
            </div>
          </div>
        </section>

        {/* Spline Scene Section */}
        <section className="w-full bg-black py-32 px-16 sm:py-20 sm:px-8 xm:py-16 xm:px-4">
          <div className="max-w-7xl mx-auto relative z-[2]">
            <div className="w-full h-[600px] rounded-2xl overflow-hidden">
              <iframe
                src="https://prod.spline.design/d4yC8aVQfxXXcEUr/scene.splinecode"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Spline Scene"
              />
            </div>
          </div>
        </section>

        {/* Logo Cloud Section */}
        <LogoCloud />

        {/* Social Links Section */}
        <section className="w-full bg-black py-24 px-16 border-t border-white/10 sm:py-16 sm:px-8 xm:py-12 xm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-black font-NeueMontreal mb-12 tracking-[-0.01em] sm:text-xl sm:mb-8 xm:text-lg xm:mb-6">Ready to Launch Your Brand?</h3>
            <div className="flex justify-center gap-8 sm:flex-col sm:gap-4 sm:items-center xm:flex-col xm:gap-3 xm:items-center">
              <Link
                href="/contacts"
                className="flex items-center gap-3 px-6 py-3 text-base text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-500 sm:text-sm sm:px-4 sm:py-2 xm:text-xs xm:px-3 xm:py-2"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 text-base text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-500 sm:text-sm sm:px-4 sm:py-2 xm:text-xs xm:px-3 xm:py-2"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Curve>
  );
}