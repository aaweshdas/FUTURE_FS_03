import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Monthly",
    price: "₹1,999",
    period: "/month",
    features: ["Full gym access", "Locker room access", "1 group class/week", "Basic fitness assessment"],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "₹4,999",
    period: "/3 months",
    features: ["Full gym access", "Locker room & steam", "Unlimited group classes", "Diet consultation", "Personal trainer (2 sessions)"],
    popular: true,
  },
  {
    name: "Yearly",
    price: "₹14,999",
    period: "/year",
    features: ["Full gym access", "All amenities", "Unlimited group classes", "Monthly diet consultation", "Personal trainer (8 sessions)", "Guest pass x4"],
    popular: false,
  },
];

const PlansSection = () => {
  return (
    <section id="plans" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <p className="mb-2 text-center font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Membership Plans
        </p>
        <h2 className="mb-12 text-center font-display text-4xl font-bold md:text-5xl">
          Choose Your <span className="text-gradient">Plan</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-card shadow-glow scale-105"
                  : "border-border bg-card shadow-card hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 font-body text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="mb-1 font-display text-2xl font-bold">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
                <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                className="w-full"
                onClick={() => {
                  const msg = encodeURIComponent(`Hi! I'm interested in the ${plan.name} plan (${plan.price}${plan.period}) at IronCore Fitness.`);
                  window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
                }}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
