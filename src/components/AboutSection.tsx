"use client";

import { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Globe, Zap } from 'lucide-react';

export function AboutSection() {
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

  const highlights = [
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Driving breakthrough solutions in deep technology and strategic sectors',
    },
    {
      icon: Lightbulb,
      title: 'Open Collaboration',
      description: 'Fostering partnerships across industries and multinational corporations',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operating at the intersection of defense, commerce, and digital markets',
    },
    {
      icon: Zap,
      title: 'Rapid Execution',
      description: 'Converting visionary ideas into market-ready solutions',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-4 py-1 mb-4 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full">
            <span className="text-sm text-[#ff6b35] font-semibold">About AESON</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Pioneering the Future
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            AESON is an open innovation company at the forefront of deep technology, 
            creating transformative solutions across defense, digital markets, and 
            enterprise collaboration.
          </p>
        </div>

        {/* Mission & Vision */}
        <div
          className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-[#ff6b35]/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To accelerate innovation by bridging cutting-edge technology with real-world 
                applications, empowering organizations to solve complex challenges and unlock 
                new opportunities in an interconnected world.
              </p>
            </div>
          </div>

          <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-[#ff6b35]/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the premier catalyst for open innovation, creating an ecosystem where 
                deep technology, strategic defense solutions, and commercial collaborations 
                converge to shape the future.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`group relative p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 mb-4 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center group-hover:bg-[#ff6b35]/20 transition-colors duration-300">
                  <highlight.icon className="w-6 h-6 text-[#ff6b35]" />
                </div>
                
                <h4 className="text-lg font-semibold mb-2 text-white">{highlight.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
