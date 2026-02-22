import { Dumbbell, HeartPulse, User, Flame, Sparkles, Activity } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Weight Training", desc: "Build strength and muscle mass with our extensive free-weight zone and guided resistance programs." },
  { icon: HeartPulse, title: "Cardio Training", desc: "High-intensity treadmills, ellipticals, and cycling stations to boost your cardiovascular endurance." },
  { icon: User, title: "Personal Training", desc: "One-on-one sessions with certified trainers who tailor every workout to your specific goals." },
  { icon: Flame, title: "CrossFit", desc: "Functional high-intensity workouts that push your limits and build real-world athletic performance." },
  { icon: Sparkles, title: "Yoga & Zumba", desc: "Find balance with yoga or burn calories with high-energy Zumba dance fitness classes." },
  { icon: Activity, title: "Fat Loss Programs", desc: "Science-backed 8 and 12-week programs combining nutrition coaching with targeted training." },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding">
      <div className="container mx-auto">
        <p className="mb-2 text-center font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Our Programs
        </p>
        <h2 className="mb-12 text-center font-display text-4xl font-bold md:text-5xl">
          Train Your <span className="text-gradient">Way</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/20">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
