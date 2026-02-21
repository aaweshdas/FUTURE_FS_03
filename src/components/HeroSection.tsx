import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="IronCore Fitness gym interior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="container relative z-10 mx-auto section-padding">
        <div className="max-w-2xl">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary animate-fade-in-up">
            Premium Fitness Center in Pune
          </p>
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Forge Your{" "}
            <span className="text-gradient">Strongest</span>{" "}
            Self
          </h1>
          <p className="mb-8 max-w-lg font-body text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            State-of-the-art equipment, certified trainers, and flexible plans designed to help you crush every fitness goal. Your transformation starts here.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <Button variant="hero" size="lg">
              Join Now
            </Button>
            <Button variant="heroOutline" size="lg">
              Free Trial
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8 border-t border-border pt-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { num: "8+", label: "Years Experience" },
              { num: "5000+", label: "Happy Members" },
              { num: "20+", label: "Expert Trainers" },
              { num: "50+", label: "Programs" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-primary">{stat.num}</p>
                <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
