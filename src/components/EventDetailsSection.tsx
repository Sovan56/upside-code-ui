import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Trophy } from "lucide-react";

const events = [
  {
    title: "Opening Ceremony",
    description: "Enter the portal as we unveil the challenges that await in the Upside Down.",
    icon: Calendar,
    details: [
      { icon: Calendar, text: "Feb 15, 2025" },
      { icon: Clock, text: "9:00 AM" },
      { icon: MapPin, text: "Main Auditorium" },
    ],
  },
  {
    title: "Hackathon Begins",
    description: "48 hours of non-stop coding. Build solutions that could save Hawkins.",
    icon: Clock,
    details: [
      { icon: Calendar, text: "Feb 15-17, 2025" },
      { icon: Clock, text: "48 Hours" },
      { icon: Users, text: "Teams of 2-4" },
    ],
  },
  {
    title: "Mentor Sessions",
    description: "Industry experts guide you through the darkness with their wisdom.",
    icon: Users,
    details: [
      { icon: Calendar, text: "Throughout Event" },
      { icon: Clock, text: "On-demand" },
      { icon: Users, text: "20+ Mentors" },
    ],
  },
  {
    title: "Demo Day",
    description: "Present your creation to the council. Only the strongest survive.",
    icon: Trophy,
    details: [
      { icon: Calendar, text: "Feb 17, 2025" },
      { icon: Clock, text: "2:00 PM" },
      { icon: Trophy, text: "₹1,00,000 Prize Pool" },
    ],
  },
];

const EventDetailsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section id="details" className="relative py-24">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary text-glow-red tracking-wide mb-4">
            EVENT DETAILS
          </h2>
          <p className="font-body text-muted-foreground">
            Swipe to explore the journey ahead
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide pb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-6 px-4 md:px-8 lg:px-16 w-max">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="event-card w-[300px] sm:w-[350px] flex-shrink-0"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <event.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground tracking-wide">
                    {event.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-3">
                {event.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <detail.icon className="w-4 h-4 text-primary/60" />
                    <span className="font-body text-sm text-foreground/80">
                      {detail.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Glow effect on bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-center gap-2">
          {events.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/30 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
