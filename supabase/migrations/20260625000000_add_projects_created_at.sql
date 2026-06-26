alter table public.projects
  add column if not exists created_at timestamptz;

update public.projects
set created_at = now()
where created_at is null;

alter table public.projects
  alter column created_at set default now(),
  alter column created_at set not null;

create index if not exists projects_created_at_idx
  on public.projects (created_at desc);
