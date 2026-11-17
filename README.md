# Aman Varshney Portfolio

A responsive personal portfolio featuring Memory Wrap, Pancake, and BCTumor, alongside experience at IBM and Uber.

The single-page layout brings together a short introduction, GitHub and LinkedIn links, project contributions, and industry experience. A white and blue theme and responsive project cards keep it compact across desktop and mobile.

Built with React, TypeScript, Vite, Supabase, and simple CSS, without a component library.

## Featured projects

- **Memory Wrap** — Top-K and clustering strategies for interpretable, self-explainable neural networks.
- **Pancake** — a Python reimplementation of a cloud security framework using key replication, replica swapping, and batching.
- **BCTumor** — a U-Net model for MRI tumor classification and segmentation, with a focus on preprocessing and data augmentation.

## Project data

Supabase provides published projects in display order. Anonymous visitors have read-only access to published rows. Typed local data serves as a fallback when Supabase is unconfigured or a request fails; a successful response with no published projects shows an empty state. Missing demo URLs remain clearly marked as pending.

## Core files

- `src/data/profile.ts` — bio, experience, and social links.
- `src/data/projects.ts` — local fallback projects.
- `src/lib/` — typed Supabase client and project loader.
- `src/hooks/useProjects.ts` — project loading state and request lifecycle.
- `src/App.tsx` — page sections and project cards.
- `src/styles.css` — styling and responsive layout.
- `supabase/` — table migration, published-only anonymous read policy, and project seeds.
- `.env.example` — Supabase environment variable placeholders.
