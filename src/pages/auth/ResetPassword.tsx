import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { z } from "zod";

const passwordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
});

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for recovery event
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsRecovery(true);
      }
    });
    // Also check hash for type=recovery
    const hash = window.location.hash;
    if (hash.includes("type=recovery")) {
      setIsRecovery(true);
    }
    return () => subscription.unsubscribe();
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({ title: "Error", description: "Passwords do not match", variant: "destructive" });
      return;
    }
    const parsed = passwordSchema.safeParse({ password });
    if (!parsed.success) {
      toast({ title: "Validation Error", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: parsed.data.password });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Password updated", description: "Your password has been reset successfully." });
      navigate("/login");
    }
  };

  if (!isRecovery) {
    return (
      <>
        <SEOHead title="Reset Password – NotiProof" description="Reset your NotiProof password." canonical="https://notiproof.com/reset-password" noindex={true} />
        <section className="py-20 md:py-28">
          <div className="container-tight max-w-md mx-auto text-center">
            <p className="text-muted-foreground">Loading recovery session…</p>
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mt-4" />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead title="Set New Password – NotiProof" description="Set a new password for your NotiProof account." canonical="https://notiproof.com/reset-password" noindex={true} />
      <section className="py-20 md:py-28">
        <div className="container-tight max-w-md mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-foreground text-center mb-2">Set new password</h1>
            <p className="text-muted-foreground text-center mb-8">Choose a strong password for your account.</p>

            <form onSubmit={handleReset} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="password">New password</Label>
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
              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm password</Label>
                <Input
                  id="confirm"
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                  maxLength={128}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Updating…" : "Update password"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
