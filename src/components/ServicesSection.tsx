"use client";

import { useEffect, useRef, useState } from 'react';
import { Cpu, Shield, ShoppingCart, Building2 } from 'lucide-react';

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Cpu,
      title: 'Deep Technology Solutions',
      description: 'Advanced R&D in AI, quantum computing, biotechnology, and next-generation materials.',
      features: [
        'Artificial Intelligence & Machine Learning',
        'Quantum Computing Research',
        'Advanced Materials Science',
        'Biotechnology Innovation',
      ],
      gradient: 'from-[#ff6b35]/20 to-purple-500/20',
      iconBg: 'bg-[#ff6b35]/10',
    },
    {
      icon: Shield,
      title: 'Defense & Strategic Tech',
      description: 'Cutting-edge defense solutions and strategic technologies for national security.',
      features: [
        'Cybersecurity Systems',
        'Advanced Surveillance Tech',
        'Secure Communications',
        'Strategic Intelligence',
      ],
      gradient: 'from-blue-500/20 to-[#ff6b35]/20',
      iconBg: 'bg-blue-500/10',
    },
    {
      icon: ShoppingCart,
      title: 'Online Market Platforms',
      description: 'Next-generation digital marketplaces leveraging AI and blockchain technology.',
      features: [
        'B2B Marketplace Solutions',
        'Blockchain Integration',
        'Smart Contract Systems',
        'Digital Commerce Tools',
      ],
      gradient: 'from-green-500/20 to-[#ff6b35]/20',
      iconBg: 'bg-green-500/10',
    },
    {
      icon: Building2,
      title: 'Commercial & MNC Collaborations',
      description: 'Strategic partnerships and innovation programs with multinational corporations.',
      features: [
        'Innovation Consulting',
        'Cross-Industry Partnerships',
        'Technology Transfer',
        'Joint Venture Development',
      ],
      gradient: 'from-yellow-500/20 to-[#ff6b35]/20',
      iconBg: 'bg-yellow-500/10',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-4 py-1 mb-4 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full">
            <span className="text-sm text-[#ff6b35] font-semibold">Our Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What We Offer
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions across technology sectors, designed to drive 
            innovation and create lasting impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff6b35]/50 transition-all duration-300">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 ${service.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-[#ff6b35]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ff6b35] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-400">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6b35] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff6b35]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
