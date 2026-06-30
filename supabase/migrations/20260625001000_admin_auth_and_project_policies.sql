create schema if not exists private;

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

alter table public.projects enable row level security;

drop policy if exists "Public can read projects" on public.projects;
drop policy if exists "Admins can insert projects" on public.projects;
drop policy if exists "Admins can update projects" on public.projects;
drop policy if exists "Admins can delete projects" on public.projects;

create policy "Public can read projects"
on public.projects
for select
to anon, authenticated
using (true);

create policy "Admins can insert projects"
on public.projects
for insert
to authenticated
with check (private.is_admin());

create policy "Admins can update projects"
on public.projects
for update
to authenticated
using (private.is_admin())
with check (private.is_admin());

create policy "Admins can delete projects"
on public.projects
for delete
to authenticated
using (private.is_admin());

do $$
declare
  gallery_table regclass;
begin
  foreach gallery_table in array array[
    to_regclass('public.projects_gallery'),
    to_regclass('public.project_gallery'),
    to_regclass('public.project_galleries')
  ]
  loop
    if gallery_table is not null then
      execute format('alter table %s enable row level security', gallery_table);

      execute format(
        'drop policy if exists %I on %s',
        'Public can read project gallery',
        gallery_table
      );
      execute format(
        'drop policy if exists %I on %s',
        'Admins can insert project gallery',
        gallery_table
      );
      execute format(
        'drop policy if exists %I on %s',
        'Admins can update project gallery',
        gallery_table
      );
      execute format(
        'drop policy if exists %I on %s',
        'Admins can delete project gallery',
        gallery_table
      );

      execute format(
        'create policy %I on %s for select to anon, authenticated using (true)',
        'Public can read project gallery',
        gallery_table
      );
      execute format(
        'create policy %I on %s for insert to authenticated with check (private.is_admin())',
        'Admins can insert project gallery',
        gallery_table
      );
      execute format(
        'create policy %I on %s for update to authenticated using (private.is_admin()) with check (private.is_admin())',
        'Admins can update project gallery',
        gallery_table
      );
      execute format(
        'create policy %I on %s for delete to authenticated using (private.is_admin())',
        'Admins can delete project gallery',
        gallery_table
      );
    end if;
  end loop;
end $$;

drop policy if exists "Public can view project images" on storage.objects;
drop policy if exists "Admins can upload project images" on storage.objects;
drop policy if exists "Admins can update project images" on storage.objects;
drop policy if exists "Admins can delete project images" on storage.objects;

create policy "Public can view project images"
on storage.objects
for select
to public
using (bucket_id = 'project-images');

create policy "Admins can upload project images"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'project-images'
  and private.is_admin()
);

create policy "Admins can update project images"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'project-images'
  and private.is_admin()
)
with check (
  bucket_id = 'project-images'
  and private.is_admin()
);

create policy "Admins can delete project images"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'project-images'
  and private.is_admin()
);
