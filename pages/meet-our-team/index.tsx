import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Users, Play, Instagram, Linkedin, Mail } from "lucide-react";
import { Curve } from "@/components";
import { LampDemoTeam } from "@/data/data";
import Image from "next/image";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import * as THREE from 'three';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

// 3D Gallery Component
const ThreeDGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;
    scriptLoadedRef.current = true;

    const lenis = new Lenis({
      autoRaf: true,
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Clear any existing canvas and append new one
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    const galleryGroup = new THREE.Group();
    scene.add(galleryGroup);

    const radius = 6;
    const height = 30;
    const segments = 30;

    const cylinderGeometry = new THREE.CylinderGeometry(
      radius,
      radius,
      height,
      segments,
      1,
      true
    );
    const cylinderMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    galleryGroup.add(cylinder);

    const textureLoader = new THREE.TextureLoader();

    function getRandomImageNumber() {
      return Math.floor(Math.random() * 50) + 1;
    }

    function loadImageTexture(imageNumber: number): Promise<THREE.Texture> {
      return new Promise((resolve) => {
        const texture = textureLoader.load(
          `https://picsum.photos/800/600?random=${imageNumber}`,
          (loadedTexture) => {
            loadedTexture.generateMipmaps = true;
            loadedTexture.minFilter = THREE.LinearMipmapLinearFilter;
            loadedTexture.magFilter = THREE.LinearFilter;
            loadedTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            resolve(loadedTexture);
          }
        );
      });
    }

    function createCurvedPlane(width: number, height: number, radius: number, segments: number) {
      const geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];
      const indices: number[] = [];
      const uvs: number[] = [];

      const segmentsX = segments * 4;
      const segmentsY = Math.floor(height * 12);
      const theta = width / radius;

      for (let y = 0; y <= segmentsY; y++) {
        const yPos = (y / segmentsY - 0.5) * height;
        for (let x = 0; x <= segmentsX; x++) {
          const xAngle = (x / segmentsX - 0.5) * theta;
          const xPos = Math.sin(xAngle) * radius;
          const zPos = Math.cos(xAngle) * radius;
          vertices.push(xPos, yPos, zPos);

          uvs.push((x / segmentsX) * 0.8 + 0.1, y / segmentsY);
        }
      }

      for (let y = 0; y < segmentsY; y++) {
        for (let x = 0; x < segmentsX; x++) {
          const a = x + (segmentsX + 1) * y;
          const b = x + (segmentsX + 1) * (y + 1);
          const c = x + 1 + (segmentsX + 1) * (y + 1);
          const d = x + 1 + (segmentsX + 1) * y;
          indices.push(a, b, d);
          indices.push(b, c, d);
        }
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );
      geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();

      return geometry;
    }

    const numVerticalSections = 20;
    const blocksPerSection = 5;
    const verticalSpacing = 5;
    const blocks: THREE.Group[] = [];

    const totalBlockHeight = numVerticalSections * verticalSpacing;
    const heightBuffer = (height - totalBlockHeight) / 2;
    const startY = -height / 2 + heightBuffer + verticalSpacing;

    const sectionAngle = (Math.PI * 2) / blocksPerSection;
    const maxRandomAngle = sectionAngle * 0.3;

    async function createBlock(baseY: number, yOffset: number, sectionIndex: number, blockIndex: number) {
      const blockGeometry = createCurvedPlane(2.5, 1.75, radius, 10);
      const imageNumber = getRandomImageNumber();
      const texture = await loadImageTexture(imageNumber);

      const blockMaterial = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
        toneMapped: false,
      });

      const block = new THREE.Mesh(blockGeometry, blockMaterial);
      block.position.y = baseY + yOffset;

      const blockContainer = new THREE.Group();

      const baseAngle = sectionAngle * blockIndex;
      const randomAngleOffset = (Math.random() * 2 - 1) * maxRandomAngle;
      const finalAngle = baseAngle + randomAngleOffset;

      blockContainer.rotation.y = finalAngle;
      blockContainer.add(block);

      return blockContainer;
    }

    async function initializeBlocks() {
      for (let section = 0; section < numVerticalSections; section++) {
        const baseY = startY + section * verticalSpacing;

        for (let i = 0; i < blocksPerSection; i++) {
          const yOffset = Math.random() * 0.2 - 0.1;

          const blockContainer = await createBlock(baseY, yOffset, section, i);
          blocks.push(blockContainer);
          galleryGroup.add(blockContainer);
        }
      }
    }

    initializeBlocks();

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    camera.position.z = 12;
    camera.position.y = 0;

    let currentScroll = 0;
    let rotationSpeed = 0;
    const baseRotationSpeed = 0.0025;

    // Custom scroll handling for the gallery section
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.clientHeight;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (containerHeight - window.innerHeight)));
      
      currentScroll = scrollProgress * containerHeight;
      const totalScroll = containerHeight;
      
      const scrollFraction = currentScroll / totalScroll;
      const targetY = scrollFraction * height - height / 2;
      camera.position.y = -targetY;
    };

    lenis.on("scroll", handleScroll);
    window.addEventListener('scroll', handleScroll);

    function animate() {
      requestAnimationFrame(animate);

      galleryGroup.rotation.y += baseRotationSpeed + rotationSpeed;
      rotationSpeed *= 0.95;

      renderer.render(scene, camera);
    }

    const onWindowResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", onWindowResize);
    animate();

    // Cleanup function
    return () => {
      const container = containerRef.current;
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener('scroll', handleScroll);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full" style={{ height: '500vh', backgroundColor: '#0f0f0f' }}>
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between z-50 mix-blend-difference">
        <div className="flex gap-8">
          <p className="text-white text-xs font-mono uppercase tracking-wider">Silhouette</p>
          <p className="text-white text-xs font-mono uppercase tracking-wider">
            Microfolio <br />2017 - Ongoing
          </p>
        </div>
        <div>
          <p className="text-white text-xs font-mono uppercase tracking-wider">Info</p>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full p-6 flex justify-between z-50 mix-blend-difference">
        <p className="text-white text-xs font-mono uppercase tracking-wider">Experiment CG407</p>
        <p className="text-white text-xs font-mono uppercase tracking-wider">By Codegrid</p>
      </div>

      {/* 3D Canvas Container */}
      <div 
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-screen"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

// ... rest of the code remains the same ... 