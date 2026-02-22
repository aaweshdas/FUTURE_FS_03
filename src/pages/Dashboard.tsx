import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { User, Phone, Dumbbell, LogOut, Calendar, Crown, Edit2, Save, X } from "lucide-react";

interface Profile {
  full_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  selected_plan: string | null;
  membership_status: string | null;
  membership_start: string | null;
  membership_end: string | null;
}

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({ full_name: "", phone: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user!.id)
      .single();
    if (!error && data) {
      setProfile(data);
      setEditForm({ full_name: data.full_name || "", phone: data.phone || "" });
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: editForm.full_name, phone: editForm.phone })
      .eq("id", user!.id);
    if (error) {
      toast.error("Failed to update profile");
    } else {
      toast.success("Profile updated!");
      setEditing(false);
      fetchProfile();
    }
    setSaving(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleWhatsAppInquiry = (plan: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${plan} plan at IronCore Fitness. My name is ${profile?.full_name || "a member"}. Please share more details.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse font-display text-xl text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const plans = [
    { name: "Monthly", price: "₹1,999", period: "/month" },
    { name: "Quarterly", price: "₹4,999", period: "/3 months" },
    { name: "Yearly", price: "₹14,999", period: "/year" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="/" className="font-display text-2xl font-bold tracking-wider">
            IRON<span className="text-gradient">CORE</span>
          </a>
          <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2 text-muted-foreground">
            <LogOut className="h-4 w-4" /> Sign Out
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Profile Card */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <div className="flex items-start justify-between mb-6">
            <h2 className="font-display text-2xl font-bold">My Profile</h2>
            {!editing ? (
              <Button variant="ghost" size="sm" onClick={() => setEditing(true)} className="gap-2">
                <Edit2 className="h-4 w-4" /> Edit
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => setEditing(false)}>
                  <X className="h-4 w-4" />
                </Button>
                <Button variant="default" size="sm" onClick={handleSave} disabled={saving} className="gap-2">
                  <Save className="h-4 w-4" /> Save
                </Button>
              </div>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                {editing ? (
                  <Input
                    value={editForm.full_name}
                    onChange={(e) => setEditForm({ ...editForm, full_name: e.target.value })}
                    placeholder="Full Name"
                  />
                ) : (
                  <div>
                    <p className="text-xs text-muted-foreground">Name</p>
                    <p className="font-medium">{profile.full_name || "Not set"}</p>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                {editing ? (
                  <Input
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    placeholder="Phone number"
                  />
                ) : (
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium">{profile.phone || "Not set"}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Crown className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Membership</p>
                  <p className="font-medium capitalize">{profile.membership_status || "Inactive"}</p>
                </div>
              </div>
              {profile.selected_plan && (
                <div className="flex items-center gap-3">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Plan</p>
                    <p className="font-medium">{profile.selected_plan}</p>
                  </div>
                </div>
              )}
              {profile.membership_end && (
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Valid Until</p>
                    <p className="font-medium">{new Date(profile.membership_end).toLocaleDateString("en-IN")}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Plans */}
        <div>
          <h2 className="mb-6 font-display text-2xl font-bold">
            Choose a <span className="text-gradient">Plan</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border p-6 transition-all ${
                  profile.selected_plan === plan.name
                    ? "border-primary bg-primary/5 shadow-glow"
                    : "border-border bg-card shadow-card hover:border-primary/30"
                }`}
              >
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <div className="my-4">
                  <span className="font-display text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <Button
                  variant={profile.selected_plan === plan.name ? "heroOutline" : "hero"}
                  className="w-full"
                  onClick={() => handleWhatsAppInquiry(plan.name)}
                >
                  {profile.selected_plan === plan.name ? "Current Plan" : "Enquire on WhatsApp"}
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center font-body text-sm text-muted-foreground">
            📞 Or call us at <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a> to discuss plans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
