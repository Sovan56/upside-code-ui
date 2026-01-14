import { Instagram, Github, Globe, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  { name: "John Doe", role: "Lead Organizer", phone: "+91 98765 43210" },
  { name: "Jane Smith", role: "Technical Head", phone: "+91 87654 32109" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Globe, href: "#", label: "Website" },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative pt-24 pb-8 bg-card/50">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl text-primary text-glow-red tracking-widest mb-4">
              MIND-FLAYER
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              The ultimate inter-college hackathon experience. 48 hours of coding, 
              innovation, and venturing into the unknown.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg text-foreground tracking-wide mb-4">
              Contact Us
            </h4>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.name} className="space-y-1">
                  <p className="font-body text-sm text-foreground">{contact.name}</p>
                  <p className="font-body text-xs text-primary/60">{contact.role}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-3 h-3" />
                    <span className="font-body text-xs">{contact.phone}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 text-muted-foreground mt-4">
                <Mail className="w-4 h-4" />
                <a href="mailto:mindflayer@hackathon.com" className="font-body text-sm hover:text-primary transition-colors">
                  mindflayer@hackathon.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg text-foreground tracking-wide mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-muted-foreground">
              © 2025 Mind-Flayer Hackathon. All rights reserved.
            </p>
            <p className="font-display text-xs text-primary/40 tracking-widest">
              Powered by the Upside Code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
