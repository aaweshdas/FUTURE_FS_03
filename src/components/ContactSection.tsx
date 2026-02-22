import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("inquiries").insert({
      name: form.name.trim().slice(0, 100),
      email: form.email.trim().slice(0, 255),
      phone: form.phone.trim().slice(0, 20),
      message: form.message.trim().slice(0, 1000),
      user_id: user?.id || null,
    });

    if (error) {
      toast.error("Failed to send message. Please try again.");
    } else {
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <p className="mb-2 text-center font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Contact Us
        </p>
        <h2 className="mb-12 text-center font-display text-4xl font-bold md:text-5xl">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info + Map */}
          <div>
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: MapPin, title: "Address", text: "2nd Floor, Phoenix Mall Road, Viman Nagar, Pune 411014" },
                { icon: Phone, title: "Phone", text: "+91 98765 43210" },
                { icon: Mail, title: "Email", text: "info@ironcorefitness.in" },
                { icon: Clock, title: "Hours", text: "Mon–Sat: 5 AM – 11 PM\nSunday: 6 AM – 10 PM" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                  <item.icon className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-display text-sm font-semibold">{item.title}</p>
                    <p className="font-body text-xs text-muted-foreground whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="IronCore Fitness Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455931148768!3d18.562551667384613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-lg border border-border bg-card p-8 shadow-card">
            <h3 className="font-display text-xl font-bold">Send Us a Message</h3>
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
              { key: "email", label: "Email", type: "email", placeholder: "you@email.com" },
              { key: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
            ].map((field) => (
              <div key={field.key}>
                <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            ))}
            <div>
              <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your fitness goals..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button variant="hero" type="submit" size="lg" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
