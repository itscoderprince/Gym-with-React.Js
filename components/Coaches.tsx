
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Coach {
  name: string;
  role: string;
  bio: string;
  img: string;
  philosophy: string;
  successStories: string[];
  bookingLink: string;
}

const COACHES_DATA: Coach[] = [
  {
    name: 'Alex Morgan',
    role: 'Head of Strength',
    bio: 'Former Olympic weightlifter, specialized in advanced hypertrophy.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXrBAUT1cT_PWEUKpnZRgzY8h63HdzRO9tVhUQjQKgq-g2oH4ZdDGEBwG0m0kRTcyRtK09_SzjsttxuWN84090H9TzeilAkpGjSCYk8C-G-CwzsBwt1lFjkApCLDjnW3TGcwZPwkH52gQFVaxwBzztbNSxzsQnNDhOPyXYAAnZdGRmw6OsE3cEAAOmfINP_fhE7C6Dd6GELeq8LTj4B41Aa3kwWqmgv56rHM1GgWoubKcEhZrrgz3tGqWLlVmH9gNeApQ3PUtTyw',
    philosophy: "Strength is the bedrock of all athletic performance.",
    successStories: ["Achieved 500lb deadlift for client.", "Rehabbed collegiate pro athlete."],
    bookingLink: "#book"
  },
  {
    name: 'Sarah Jenkins',
    role: 'CrossFit Specialist',
    bio: 'Level 3 Coach building elite functional fitness athletes.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV75enCpYMkoyXeVh4VuWJPXmZaBhNOs_RdVf4gP2j0MZGFUYsTWuQD8k4aB0RVq7dSUvHrWx8Y7h6kIYYjsWuoSUWmDbv7wDEwiW8kdZSTGOYaBEBvzIIodfO2ufvpUzyr1OD87_4HXty184ZwHJxaVSAFge0nIbFZtaZRxgwGGJ4Piz0tF9-K0auTPmvmU8Zr5niCGBWj2tIIEmoRiTu9HUZ2RjAUgipwKDVAjO3MMUxgh94oHNR2P3APPJ497w9cuD86UdORw',
    philosophy: "Functional fitness is preparing for the unknown.",
    successStories: ["Guided athletes to Regionals.", "Client lost 60lbs lean muscle gain."],
    bookingLink: "#book"
  },
  {
    name: 'Marcus Chen',
    role: 'Powerlifting Coach',
    bio: 'National record holder in deadlift, guides athletes to unparalleled gains.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJgi6Y5XvurlpdZOP-C99SNRbZKMDFknvM9YVmM_H_-VrxeahnrMM9M9UswLzZVJpuGGf86lbpO6rmJ9Zyl8v6_-j6VXZe8cHnPhl1XIkJw4sqatUlnDka-fenNlOn_Zl0d-cdOP7zx_a2jxxbOAG3lgBQ8vVh2edbHlcBOUPyV5uCGP4_j673lWsE4PyqbxkKsvM00iSllmO7eg2DoisDWcoseZT796qa51mxEespqzVSEJCzehDHIa-Tb5WmXU6KL9orUY-wNQ',
    philosophy: "Maximum effort is a learned skill and mechanical precision.",
    successStories: ["Coached 2023 National Champ.", "Added 45kg to client total."],
    bookingLink: "#book"
  },
  {
    name: 'Elena Rodriguez',
    role: 'Mobility & Recovery',
    bio: 'Expert in biomechanics, optimizing movement and preventing injuries.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1WdorUDGsoRhjAejpWY9y_iPDV8pZTdJX-QpnQiDj8WymM1yRrlXGN6qSSCUfLlMOxBXbapoW5lPBjAEadPbgu13dAFgu7ByfrQfthiPD8p0PsLz99jf7sFtPE_8aD2Ydi8-lZjEUcU5HreJBru5KzPZKUGVColQhkqFzjaKSvheotT7eOBkYoUdE_7H2_pVuPTwq2kEpPIlE-nzp0D0EGGfYZ8vJFXuq5x_PM94xjMXyGXChbe1xdC5MJeY1ZirAZPTcDC13-A',
    philosophy: "longevity is key to consistent elite performance.",
    successStories: ["Eliminated shoulder impingement.", "Reduced recovery time by 40%."],
    bookingLink: "#book"
  }
];

const Coaches: React.FC = () => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  return (
    <section className="py-16 md:py-32 bg-background-dark" id="trainers">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 md:px-6 mb-10 md:mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-2 md:mb-4 text-white">World Class Coaches</h2>
        <p className="text-white/50 max-w-2xl font-body text-base md:text-lg italic">The industry's most respected minds, now in one facility.</p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {COACHES_DATA.map((coach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedCoach(coach)}
              className="relative group rounded-sm overflow-hidden h-[220px] sm:h-[300px] lg:h-[450px] border border-white/5 cursor-pointer bg-background-accent"
            >
              <img
                alt={coach.name}
                className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                src={coach.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent flex flex-col justify-end p-3 md:p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg md:text-2xl font-display font-bold text-white uppercase mb-0.5 md:mb-1">{coach.name}</h3>
                  <p className="text-primary text-[10px] md:text-sm font-display font-bold uppercase tracking-widest">{coach.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCoach && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCoach(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-5xl glass-panel overflow-hidden flex flex-col lg:flex-row rounded-sm"
            >
              <button onClick={() => setSelectedCoach(null)} className="absolute top-6 right-6 z-50 text-white hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-4xl">close</span>
              </button>
              <div className="lg:w-2/5 h-[400px] lg:h-auto">
                <img src={selectedCoach.img} className="w-full h-full object-cover contrast-110" alt={selectedCoach.name} />
              </div>
              <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto max-h-[80vh]">
                <h3 className="text-5xl font-display font-bold text-white uppercase mb-1">{selectedCoach.name}</h3>
                <p className="text-primary text-xl font-display font-bold uppercase tracking-widest mb-8">{selectedCoach.role}</p>
                <div className="space-y-6">
                  <p className="text-white/80 font-body text-lg italic border-l-2 border-primary pl-4">"{selectedCoach.philosophy}"</p>
                  <div>
                    <h4 className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-2">Background</h4>
                    <p className="text-white/70 font-body">{selectedCoach.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Coaches;
