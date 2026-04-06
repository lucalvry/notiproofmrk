import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";

const STORAGE_KEY = "notiproof-cookie-consent";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

function getStoredConsent(): CookiePreferences | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}

function storeConsent(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const prefs: CookiePreferences = { essential: true, analytics: true, marketing: true };
    storeConsent(prefs);
    setVisible(false);
  };

  const handleRejectNonEssential = () => {
    const prefs: CookiePreferences = { essential: true, analytics: false, marketing: false };
    storeConsent(prefs);
    setVisible(false);
  };

  const handleSavePreferences = () => {
    storeConsent({ ...preferences, essential: true });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl shadow-2xl p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-base font-semibold text-foreground">🍪 Cookie Preferences</h3>
          <button
            onClick={handleRejectNonEssential}
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          We use cookies to ensure the best experience on our website. Essential cookies are required for the site to function. You can choose to enable analytics and marketing cookies.{" "}
          <Link to="/cookie-policy/" className="text-primary hover:underline">
            Learn more
          </Link>
        </p>

        {showManage && (
          <div className="space-y-3 mb-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Essential</p>
                <p className="text-xs text-muted-foreground">Required for the site to work</p>
              </div>
              <Switch checked={true} disabled aria-label="Essential cookies (always on)" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Analytics</p>
                <p className="text-xs text-muted-foreground">Help us understand usage patterns</p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(v) => setPreferences((p) => ({ ...p, analytics: v }))}
                aria-label="Analytics cookies"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Marketing</p>
                <p className="text-xs text-muted-foreground">Used for targeted advertising</p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(v) => setPreferences((p) => ({ ...p, marketing: v }))}
                aria-label="Marketing cookies"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2">
          {showManage ? (
            <Button onClick={handleSavePreferences} className="flex-1" size="sm">
              Save Preferences
            </Button>
          ) : (
            <>
              <Button onClick={handleAcceptAll} className="flex-1" size="sm">
                Accept All
              </Button>
              <Button onClick={handleRejectNonEssential} variant="outline" className="flex-1" size="sm">
                Reject Non-Essential
              </Button>
              <Button onClick={() => setShowManage(true)} variant="ghost" className="flex-1" size="sm">
                Manage Preferences
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
