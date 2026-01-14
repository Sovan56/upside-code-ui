import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set hackathon date to 30 days from now
    const hackathonDate = new Date();
    hackathonDate.setDate(hackathonDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-primary/60 text-sm tracking-[0.3em] uppercase mb-6"
        >
          Inter-College Hackathon 2025
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary text-glow-red tracking-[0.1em] mb-4 animate-flicker-subtle"
        >
          MIND-FLAYER
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-lg sm:text-xl md:text-2xl text-foreground/80 tracking-[0.2em] mb-12"
        >
          Enter the Upside Code
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item, index) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="relative">
                <div className="w-16 sm:w-20 md:w-24 h-20 sm:h-24 md:h-28 bg-card border border-primary/30 rounded-lg flex items-center justify-center overflow-hidden">
                  {/* LED background glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                  <span className="led-digit text-3xl sm:text-4xl md:text-5xl text-primary relative z-10">
                    {formatNumber(item.value)}
                  </span>
                </div>
              </div>
              <span className="font-body text-xs sm:text-sm text-muted-foreground mt-2 tracking-widest uppercase">
                {item.label}
              </span>
              {/* Separator */}
              {index < 3 && (
                <span className="hidden sm:block absolute translate-x-[60px] sm:translate-x-[80px] md:translate-x-[100px] text-primary text-2xl sm:text-3xl animate-pulse">
                  :
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
          Scroll to Enter the Upside Down
        </span>
        <ChevronDown className="w-6 h-6 text-primary animate-scroll-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
