import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  // 1. Re-introduced Scroll Hooks for the background parallax effect
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen bg-black overflow-hidden flex items-start pt-20 md:pt-24 lg:pt-28">

      {/* --- INTEGRATED OLD BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

        {/* Background Image Texture */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }} // Kept opacity low (0.4) for texture effect
          transition={{ duration: 1.5 }}
          style={{
            // Using a high-quality gym texture image here. 
            // You can replace this URL with 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9aTRV2dpXhWqTyOyVKee6UoxnPCnX2IL_4vMF5t0FQ2JXgeEj_FcHmWTDgb-F2Nxv4fxfEda2xeIaWfq2_Gu-BBU6BfLAe_njfkerJBzgShMgxBlmvX-ktiIim8Rliyc8wU_47jYL5q7Er62dmB5hmJsgeC2CNiY0cIMh5fK8JautGiA-qbQhm7YyqCitxuS2QKfdu82DWwxwnqpl3iIxcKNughwov014Z6xps_6EGS-5lCEKSYAs7pd--9_fhbwPzkWZOMvq_A' if you prefer your specific image.
            backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop")',
            y: backgroundY
          }}
          className="w-full h-full bg-cover bg-center mix-blend-overlay"
        ></motion.div>
      </div>

      {/* Grid Pattern (Optional: Kept very subtle on top of the image for extra texture) */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10"></div>

      {/* --- CONTENT CONTAINER (Professional "Big Image" Layout) --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">

        {/* LEFT: TEXT CONTENT */}
        <div className="flex-1 text-center lg:text-left pt-8 lg:pt-0">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-white mb-4 md:mb-6 font-display leading-[0.95]"
          >
            Forging <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500">
              Elite Status.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 md:mt-6 text-neutral-300 text-sm md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Advanced biomechanics meets raw intensity. We don't just train bodies; we re-engineer human performance for the modern age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-5"
          >
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-white rounded-md font-bold uppercase tracking-widest text-xs md:text-sm transition-all shadow-[0_0_20px_rgba(218,11,46,0.4)] hover:shadow-[0_0_30px_rgba(218,11,46,0.6)] hover:-translate-y-1">
              Start Journey
            </button>
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border border-white/20 text-white rounded-md font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2 group">
              <span>View Programs</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 md:mt-12 flex items-center justify-center lg:justify-start gap-6 md:gap-10 border-t border-white/10 pt-6 md:pt-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">500+</h3>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Athletes</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">98%</h3>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Success</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: VISUALS (Responsive Height) */}
        <div className="flex-1 w-full relative h-[50vh] md:h-[55vh] lg:h-[70vh] max-h-[700px] flex items-center justify-center lg:justify-end">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[600px] h-full"
          >
            {/* Main Image Container */}
            <div className="absolute inset-0 z-10 rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 opacity-40"></div>
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
                alt="Pro Athlete"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Floating Glass Card - Heart Rate (Hidden on mobile to avoid overlap) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden md:block absolute bottom-8 -left-12 bg-black/80 backdrop-blur-xl border border-white/10 p-5 rounded-md shadow-2xl z-30 min-w-[220px]"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Live Metrics</span>
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
              </div>
              <div className="flex items-end gap-1 h-10">
                {[35, 55, 40, 70, 50, 90, 60, 85, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: "20%" }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                    className="flex-1 bg-primary rounded-sm"
                  />
                ))}
              </div>
              <div className="mt-2 text-right">
                <span className="text-2xl font-bold text-white font-display">184</span> <span className="text-xs text-neutral-500">BPM</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;