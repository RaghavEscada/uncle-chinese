"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  const outlets = [
    {
      name: "Sanjay Park, Aundh",
      address: "Pune, MH 411007",
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Bavdhan, Near Metro",
      address: "Pune, MH 411021", 
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Koregaon Park",
      address: "Pune, MH 411001",
      phone: "020 2615 2970", 
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Camp Area",
      address: "Pune, MH 411001",
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Hinjewadi Phase 1",
      address: "Pune, MH 411057",
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Lulla Nagar",
      address: "Pune, MH 411040",
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/uncle_chinese/", 
      icon: <Instagram size={24} />,
      color: "hover:text-pink-500"
    },
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/uncleschinese", 
      icon: <Facebook size={24} />,
      color: "hover:text-blue-500"
    },
    { 
      name: "WhatsApp", 
      href: "https://wa.me/916385751370?text=Hi%20Uncle's%20Chinese%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant%20and%20menu.", 
      icon: <MessageCircle size={24} />,
      color: "hover:text-green-500"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-brice">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-20">
        <div className="flex flex-col items-center justify-center px-4 text-center w-full max-w-6xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tighter mb-8 font-brice"
          >
            <span className="block bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">GET IN</span>
            <span className="block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">TOUCH</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium mb-12 text-white font-brice"
          >
            We&apos;d love to hear from you
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center p-6 rounded-xl font-brice"
              style={{ 
                backgroundColor: '#1a1a1a',
                border: '1px solid #333'
              }}
            >
              <Phone className="w-8 h-8 mb-4 mx-auto" style={{ color: '#ff6b6b' }} />
              <h3 className="text-xl font-bold mb-2 font-brice">Call Us</h3>
              <p className="text-gray-300 font-brice">020 2615 2970</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center p-6 rounded-xl font-brice"
              style={{ 
                backgroundColor: '#1a1a1a',
                border: '1px solid #333'
              }}
            >
              <Mail className="w-8 h-8 mb-4 mx-auto" style={{ color: '#ff6b6b' }} />
              <h3 className="text-xl font-bold mb-2 font-brice">Email Us</h3>
              <p className="text-gray-300 font-brice">uncleskitchen@gmail.com</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center p-6 rounded-xl font-brice"
              style={{ 
                backgroundColor: '#1a1a1a',
                border: '1px solid #333'
              }}
            >
              <Clock className="w-8 h-8 mb-4 mx-auto" style={{ color: '#ff6b6b' }} />
              <h3 className="text-xl font-bold mb-2 font-brice">Hours</h3>
              <p className="text-gray-300 font-brice">11:00 AM - 11:00 PM</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4 font-brice" style={{ backgroundColor: '#3C3637' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-center mb-16 text-white font-brice"
          >
            Find Us
            <br />
            <span style={{ color: '#F5DF19' }}>Near You</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {outlets.map((outlet, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border-4 transition-all duration-300 hover:scale-105 hover:shadow-xl font-brice" 
                style={{ borderColor: '#F5DF19', backgroundColor: 'rgba(245, 223, 25, 0.1)' }}
              >
                <MapPin className="w-8 h-8 mb-4" style={{ color: '#F5DF19' }} />
                <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-4 font-brice">{outlet.name}</h3>
                <div className="space-y-2 text-gray-300 font-brice">
                  <p>{outlet.address}</p>
                  <p className="font-semibold">{outlet.phone}</p>
                  <p>{outlet.hours}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white font-brice">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black font-brice"
          >
            Send Us
            <br />
            <span style={{ color: '#EC3237' }}>A Message</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl mx-auto p-12 bg-gray-100 rounded-2xl shadow-2xl text-center"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-black font-brice">
                Ready to Experience Authentic Flavors?
              </h3>
              <p className="text-lg text-gray-700 font-brice">
                Visit any of our 6 locations across Pune or reach out to us directly. We&apos;re here to serve you the most authentic Chinese and Pan-Asian cuisine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a 
                  href="tel:02026152970"
                  className="px-8 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-colors font-brice"
                >
                  Call Now
                </a>
                <a 
                  href="https://wa.me/916385751370?text=Hi%20Uncle's%20Chinese%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant%20and%20menu."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors font-brice"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 font-brice" style={{ backgroundColor: '#EC3237' }}>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white font-brice"
          >
            Follow Us
            <br />
            <span style={{ color: '#F5DF19' }}>On Social</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl font-bold max-w-2xl mx-auto uppercase tracking-wide text-white font-brice"
          >
            Stay updated with our latest dishes, special offers, and behind-the-scenes moments.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 border-4 transform hover:scale-110 hover:shadow-xl font-brice ${link.color}`}
                style={{ 
                  backgroundColor: 'rgba(245, 223, 25, 0.1)', 
                  borderColor: '#F5DF19',
                  color: '#F8F8F8'
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="px-12 py-6 rounded-xl font-black text-xl transition-all duration-300 transform hover:scale-110 uppercase tracking-wide shadow-2xl font-brice"
            style={{ 
              backgroundColor: '#F8F8F8', 
              color: '#EC3237', 
              boxShadow: '0 10px 30px rgba(248,248,248,0.3)',
              border: '3px solid #F5DF19'
            }}
          >
            Order Now
          </motion.button>
        </div>
      </section>
    </div>
  );
}