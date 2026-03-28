import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
});

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = signupSchema.safeParse({ name, email, password });
    if (!parsed.success) {
      toast({ title: "Validation Error", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        data: { name: parsed.data.name },
        emailRedirectTo: window.location.origin,
      },
    });
    setLoading(false);
    if (error) {
      toast({ title: "Signup failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Check your email", description: "We sent you a confirmation link to verify your account." });
      navigate("/login");
    }
  };

  return (
    <>
      <SEOHead
        title="Sign Up Free – NotiProof"
        description="Create your free NotiProof account and start boosting website conversions with social proof notifications and testimonials."
        canonical="https://notiproof.com/signup"
        noindex={true}
      />
      <section className="py-20 md:py-28">
        <div className="container-tight max-w-md mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-foreground text-center mb-2">Create your account</h1>
            <p className="text-muted-foreground text-center mb-8">Start your free trial — no credit card required</p>

            <form onSubmit={handleSignup} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  maxLength={255}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                  maxLength={128}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account…" : "Start Free"}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground text-center mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Log in
              </Link>
            </p>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By signing up, you agree to our{" "}
              <Link to="/terms-of-service/" className="underline">Terms</Link> and{" "}
              <Link to="/privacy-policy/" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
