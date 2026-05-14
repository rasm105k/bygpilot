# Agents Guide

## Project Overview
Next.js landing page for lead generation using Supabase for data storage and Vercel for hosting.

## Tech Stack
- **Frontend**: Next.js (App Router), Tailwind CSS
- **Backend/Database**: Supabase
- **Deployment**: Vercel

## Developer Workflow
- **Deployment**: The project is designed for Vercel. Use Vercel CLI or GitHub integration for deployments.
- **Database**: Lead data is stored in a Supabase table named `leads`.

## Database Schema: `leads`
- `id`: uuid (PK)
- `created_at`: timestamp
- `full_name`: text
- `email`: text
- `message`: text
