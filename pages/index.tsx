"use client";
import { Footer, Ready } from "@/components";
import { About, Clients, Hero, Projects, VideoHome, X } from "@/container";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// Set mounted
		setIsMounted(true);
		
		// Simple 5-second timer
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 5000);

		return () => {
			clearTimeout(timer);
			setIsMounted(false);
		};
	}, []);

	// Don't render anything until mounted (prevents hydration mismatch)
	if (!isMounted) {
		return null;
	}

	return (
		<div className="relative w-full h-full">
			{/* Main content */}
			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: isLoading ? 0 : 1 }}
				transition={{ duration: 0.5 }}
				className={`${isLoading ? 'pointer-events-none' : ''}`}
			>
				<Hero />
				<About />
				<Clients />
				<Ready />
			</motion.div>

			{/* Simple Loader */}
			{isLoading && (
				<motion.div 
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-white"
				>
					<div className="text-center">
						{/* Logo */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
							className="mb-8"
						>
							<img 
								src="/uc.png" 
								alt="Uncle&apos;s Chinese Logo" 
								className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto"
							/>
						</motion.div>
						
						{/* Text Animation */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-black"
						>
							<h1 className="text-3xl md:text-4xl font-bold mb-2 font-brice">
								UNCLE&apos;S <span className="text-red-500">CHINESE</span>
							</h1>
							<p className="text-lg md:text-xl text-gray-600 font-brice">
								Loading authentic flavors...
							</p>
						</motion.div>
						
						{/* Progress Bar */}
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: "100%" }}
							transition={{ duration: 5, ease: "linear" }}
							className="mt-8 h-1 bg-red-500 rounded-full max-w-xs mx-auto"
						/>
					</div>
				</motion.div>
			)}
		</div>
	);
}