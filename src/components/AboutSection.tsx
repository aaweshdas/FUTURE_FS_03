import { Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          About Us
        </p>
        <h2 className="mb-12 font-display text-4xl font-bold md:text-5xl">
          Built on <span className="text-gradient">Discipline</span> & Results
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-6 font-body text-muted-foreground leading-relaxed">
              Founded in 2017 in the heart of Pune, IronCore Fitness was born from a simple belief: every person deserves access to world-class fitness training without the world-class price tag. What started as a 2,000 sq. ft. space with basic equipment has grown into a 10,000 sq. ft. powerhouse with over 5,000 active members.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our certified trainers bring a combined 50+ years of experience across weight training, CrossFit, yoga, and sports conditioning. We don't just build bodies — we build confidence, discipline, and lifelong habits.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "Make fitness accessible, enjoyable, and results-driven for every individual in our community.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be Pune's most trusted fitness destination — known for transforming lives, not just physiques.",
              },
              {
                icon: Award,
                title: "Why Trust Us",
                desc: "ISO-certified facility, NSCA & ACE certified trainers, and a 96% member retention rate that speaks for itself.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
