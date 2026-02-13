create extension if not exists "pgcrypto";

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  brand text not null,
  budget text not null,
  brief text not null,
  source text not null,
  created_at timestamp with time zone default now()
);

alter table public.contact_requests enable row level security;

create policy "Allow anon inserts"
on public.contact_requests
for insert
to anon
with check (true);
