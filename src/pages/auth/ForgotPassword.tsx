import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
});

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse({ email });
    if (!parsed.success) {
      toast({ title: "Validation Error", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(parsed.data.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setSent(true);
    }
  };

  return (
    <>
      <SEOHead
        title="Forgot Password – NotiProof"
        description="Reset your NotiProof account password."
        canonical="https://notiproof.com/forgot-password"
      />
      <section className="py-20 md:py-28">
        <div className="container-tight max-w-md mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-foreground text-center mb-2">Reset your password</h1>
            <p className="text-muted-foreground text-center mb-8">
              Enter your email and we'll send you a reset link.
            </p>

            {sent ? (
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">Check your email</p>
                <p className="text-sm text-muted-foreground">
                  If an account exists for {email}, you'll receive a password reset link shortly.
                </p>
                <Link to="/login" className="text-sm text-primary hover:underline">
                  Back to login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleReset} className="space-y-5">
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
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending…" : "Send reset link"}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  <Link to="/login" className="text-primary hover:underline">Back to login</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
