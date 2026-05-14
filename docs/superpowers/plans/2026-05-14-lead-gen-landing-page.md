# Lead Generation Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lead generation landing page skeleton with a contact form integrated with Supabase.

**Architecture:** Next.js App Router frontend, Tailwind CSS for styling, and client-side Supabase integration for lead capture.

**Tech Stack:** Next.js, Tailwind CSS, Supabase, Vercel.

---

## File Structure
- `.env.local`: Environment variables for Supabase.
- `lib/supabase.ts`: Supabase client initialization.
- `app/layout.tsx`: Root layout with Tailwind and fonts.
- `app/page.tsx`: Main landing page containing Hero, Features, and ContactForm sections.
- `components/Hero.tsx`: Hero section component.
- `components/Features.tsx`: Features grid component.
- `components/ContactForm.tsx`: Lead capture form with validation and Supabase integration.

---

### Task 1: Project Initialization & Environment Setup

**Files:**
- Create: `.env.local`

- [ ] **Step 1: Create `.env.local` with placeholders**
```bash
echo "NEXT_PUBLIC_SUPABASE_URL=your-supabase-url" > .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key" >> .env.local
```

- [ ] **Step 2: Install dependencies**
```bash
npm install @supabase/supabase-js
```

- [ ] **Step 3: Commit**
```bash
git add .env.local package.json package-lock.json
git commit -m "chore: initial project setup and dependencies"
```

### Task 2: Supabase Client Configuration

**Files:**
- Create: `lib/supabase.ts`

- [ ] **Step 1: Initialize Supabase client**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

- [ ] **Step 2: Commit**
```bash
git add lib/supabase.ts
git commit -m "feat: configure supabase client"
```

### Task 3: Core UI Layout and Styling

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Configure Global Layout**
Update `app/layout.tsx` to include a simple navbar and basic Tailwind configuration.

- [ ] **Step 2: Set up `app/page.tsx` structure**
Create the main page structure that will hold the components.
```tsx
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactForm';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <ContactForm />
    </main>
  );
}
```

- [ ] **Step 3: Commit**
```bash
git add app/layout.tsx app/page.tsx
git commit -m "feat: setup landing page shell"
```

### Task 4: Hero and Features Components

**Files:**
- Create: `components/Hero.tsx`
- Create: `components/Features.tsx`

- [ ] **Step 1: Implement Hero Component**
Build a high-impact hero with a CTA button that anchors to `#contact`.

- [ ] **Step 2: Implement Features Component**
Build a 3-column layout showcasing benefits.

- [ ] **Step 3: Commit**
```bash
git add components/Hero.tsx components/Features.tsx
git commit -m "feat: implement hero and features sections"
```

### Task 5: Contact Form Implementation (The Core)

**Files:**
- Create: `components/ContactForm.tsx`

- [ ] **Step 1: Create Form UI**
Build a form with fields: `full_name`, `email`, and `message`.

- [ ] **Step 2: Implement Submission Logic**
Integrate the Supabase client to insert leads.
```tsx
const { error } = await supabase
  .from('leads')
  .insert([{ full_name, email, message }]);
```

- [ ] **Step 3: Add Loading and Success/Error states**
Ensure the user knows when the data is being sent and if it succeeded.

- [ ] **Step 4: Commit**
```bash
git add components/ContactForm.tsx
git commit -m "feat: implement contact form with supabase integration"
```

### Task 6: Verification & Final Polish

- [ ] **Step 1: Verify form submission in Supabase dashboard**
Manually test the form and check the `leads` table.

- [ ] **Step 2: Final CSS polish**
Check responsiveness on mobile/desktop.

- [ ] **Step 3: Final Commit**
```bash
git add .
git commit -m "feat: finalize landing page and verify lead capture"
```
