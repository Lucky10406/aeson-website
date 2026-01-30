"use client";

import { useEffect, useRef, useState } from 'react';
import { Rocket, Users, TrendingUp, Award } from 'lucide-react';

export function JoinSection() {
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

  const benefits = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Work on cutting-edge projects that shape the future',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Join a diverse team of world-class experts',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Accelerate your career with unlimited opportunities',
    },
    {
      icon: Award,
      title: 'Impact',
      description: 'Make a meaningful difference in critical industries',
    },
  ];

  return (
    <section
      id="join"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-1 mb-4 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full">
              <span className="text-sm text-[#ff6b35] font-semibold">Join AESON</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Build the Future With Us
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join a team that's redefining what's possible in deep technology, 
              defense, and commercial innovation.
            </p>
          </div>

          {/* Benefits Grid */}
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300"
                style={{
                  transitionDelay: `${400 + index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-12 h-12 mb-4 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main CTA Card */}
          <div
            className={`relative p-8 md:p-12 bg-gradient-to-br from-[#ff6b35]/10 to-purple-500/10 border border-[#ff6b35]/30 rounded-2xl overflow-hidden transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent animate-pulse" />
            
            <div className="relative text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Make an Impact?
              </h3>
              
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're looking for exceptional talent to join our mission. Whether you're 
                a researcher, engineer, strategist, or innovator, there's a place for you at AESON.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group relative px-8 py-4 bg-[#ff6b35] text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b35]/50 hover:scale-105">
                  <span className="relative z-10 font-semibold">Join AESON</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg hover:border-[#ff6b35] hover:bg-white/5 transition-all duration-300 font-semibold">
                  View Open Positions
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#ff6b35]/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
