import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background section-padding !py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-display text-xl font-bold tracking-wider">
              IRON<span className="text-gradient">CORE</span>
            </p>
            <p className="font-body text-xs text-muted-foreground">Forging Strength Since 2017</p>
          </div>
          <div className="flex gap-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Social media"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center font-body text-xs text-muted-foreground">
          © 2026 IronCore Fitness. All rights reserved. | Viman Nagar, Pune
        </p>
      </div>
    </footer>
  );
};

export default Footer;
