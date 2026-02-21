import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
import trainer3 from "@/assets/trainer3.jpg";
import trainer4 from "@/assets/trainer4.jpg";

const trainers = [
  { name: "Arjun Mehta", role: "Head Strength Coach", exp: "12 years", spec: "Powerlifting & Bodybuilding", img: trainer1 },
  { name: "Priya Sharma", role: "Fitness Coach", exp: "8 years", spec: "HIIT & Fat Loss", img: trainer2 },
  { name: "Vikram Rao", role: "CrossFit Specialist", exp: "10 years", spec: "CrossFit & Functional Training", img: trainer3 },
  { name: "Sneha Patil", role: "Yoga & Wellness", exp: "6 years", spec: "Yoga, Zumba & Flexibility", img: trainer4 },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="section-padding">
      <div className="container mx-auto">
        <p className="mb-2 text-center font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Our Trainers
        </p>
        <h2 className="mb-12 text-center font-display text-4xl font-bold md:text-5xl">
          Meet The <span className="text-gradient">Team</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t) => (
            <div key={t.name} className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/50">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={t.img}
                  alt={`${t.name} - ${t.role}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{t.name}</h3>
                <p className="font-body text-sm text-primary">{t.role}</p>
                <div className="mt-3 space-y-1 font-body text-xs text-muted-foreground">
                  <p>Experience: {t.exp}</p>
                  <p>Specialization: {t.spec}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
