import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 tracking-wide">
            Ready to Face the <span className="text-primary text-glow-red">Unknown</span>?
          </h2>
          
          <p className="font-body text-muted-foreground max-w-xl mb-10">
            Join teams from across colleges as we venture into the Upside Down. 
            Build, innovate, and survive the 48-hour coding marathon.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-neon group flex items-center gap-3"
          >
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            <span className="font-display">Register Now</span>
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
          </motion.a>

          <p className="font-body text-xs text-muted-foreground mt-6 tracking-wide">
            Limited spots available • Teams of 2-4
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
