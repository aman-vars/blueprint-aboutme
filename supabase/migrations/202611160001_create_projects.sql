begin;

create table public.projects (
  slug text primary key check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  name text not null,
  category text not null,
  description text not null,
  contribution text not null,
  highlight text not null,
  technologies text[] not null,
  repository_url text,
  demo_url text,
  display_order integer not null check (display_order >= 0),
  published boolean not null default false
);

alter table public.projects enable row level security;

-- Remove any inherited/default table privileges before allowing anonymous reads.
revoke all on table public.projects from public, anon, authenticated;
grant usage on schema public to anon;
grant select on table public.projects to anon;

create policy "Anonymous visitors can read published projects"
  on public.projects
  for select
  to anon
  using (published = true);

-- No INSERT, UPDATE, DELETE, or other write privileges/policies for visitors.
commit;
