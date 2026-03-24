

## Authentication Implementation Plan

### What Exists
- **Database**: `profiles` table (id, name, role, account_type, business_type, status, onboarding_progress), `user_roles` table with `app_role` enum, `user_subscriptions` table
- **Security functions**: `has_role()`, `is_admin()`, `is_superadmin()`, `prevent_role_self_modification()` trigger
- **Frontend**: No auth pages, no auth context, no protected routes. Navbar has hardcoded "Login" link to `https://app.notiproof.com/login`

### What to Build

**1. Auth Context Provider** (`src/contexts/AuthContext.tsx`)
- Wraps app with auth state via `onAuthStateChange` (set up BEFORE `getSession()`)
- Exposes `user`, `session`, `loading`, `signOut`
- Fetches profile from `profiles` table when authenticated

**2. Auth Pages**
- `/login` — Email + password login form, link to signup and forgot password
- `/signup` — Email + password signup with name field, creates profile via existing trigger
- `/forgot-password` — Email input, calls `resetPasswordForEmail` with redirect to `/reset-password`
- `/reset-password` — Checks for `type=recovery` in URL hash, form to set new password via `updateUser`

**3. Protected Route Component** (`src/components/ProtectedRoute.tsx`)
- Redirects unauthenticated users to `/login`
- Used for future dashboard/account pages

**4. Update Navbar**
- Replace hardcoded "Login" link with dynamic auth state
- Show user name + "Dashboard" + "Sign Out" when logged in
- Show "Login" + "Start Free" when logged out

**5. Update App.tsx**
- Wrap with `AuthProvider`
- Add routes: `/login`, `/signup`, `/forgot-password`, `/reset-password`
- These auth pages use Layout but skip breadcrumbs

### Files to Create/Edit
- `src/contexts/AuthContext.tsx` — new
- `src/pages/auth/Login.tsx` — new
- `src/pages/auth/Signup.tsx` — new
- `src/pages/auth/ForgotPassword.tsx` — new
- `src/pages/auth/ResetPassword.tsx` — new
- `src/components/ProtectedRoute.tsx` — new
- `src/components/Navbar.tsx` — update login/signup buttons
- `src/App.tsx` — add AuthProvider + auth routes

### Security Notes
- Roles checked via server-side `has_role()` security definer function (already exists)
- No client-side role checks for authorization decisions
- RLS policies already in place on the database
- Password reset requires dedicated `/reset-password` page with `updateUser` call

