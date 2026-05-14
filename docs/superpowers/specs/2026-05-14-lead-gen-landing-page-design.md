# Design: Lead Generation Landing Page

## Overview
A simple, high-conversion landing page skeleton designed for lead generation, hosted on Vercel and utilizing Supabase for lead capture.

## Architecture
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Components
- **Hero Section**: Catchy headline, sub-headline, and a primary Call to Action (CTA) that scrolls to the form.
- **Features Section**: A simple 3-column grid highlighting key value propositions.
- **Contact Form**: 
    - Fields: Name, Email, Message.
    - Validation: Basic email format and required field checks.
    - Feedback: Success/Error messages upon submission.
- **Footer**: Basic copyright and links.

## Data Flow
1. **User Input**: User enters data into the `ContactForm` component.
2. **Processing**: On submit, the client-side Supabase SDK `supabase.from('leads').insert([...])` is called.
3. **Storage**: Lead data is stored in the `leads` table in Supabase.
4. **Response**: The UI updates to show a "Thank you" message upon successful insertion.

## Database Schema (Supabase)
Table: `leads`
- `id`: uuid (primary key, default: gen_random_uuid())
- `created_at`: timestamp with time zone (default: now())
- `full_name`: text
- `email`: text
- `message`: text
