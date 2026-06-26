create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz default now()
);

insert into public.admin_users (user_id)
values ('95a6f960-1139-4cc0-ac46-eda7b4704e3a')
on conflict (user_id) do nothing;

alter table public.admin_users enable row level security;

drop policy if exists "Admins can read own admin status" on public.admin_users;

create policy "Admins can read own admin status"
on public.admin_users
for select
to authenticated
using (user_id = (select auth.uid()));

create schema if not exists private;

create or replace function private.is_admin(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = uid
  );
$$;

grant usage on schema private to authenticated;
grant execute on function private.is_admin(uuid) to authenticated;
