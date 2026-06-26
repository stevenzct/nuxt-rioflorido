<template>
  <div class="min-h-screen bg-[#f5f9fc] text-gray-950">
    <AppHeader :isHeroWhite="true" />

    <main class="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 pb-16 pt-28 lg:pt-32">
      <section class="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside class="h-fit rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:sticky lg:top-28">
          <div class="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
              <p class="text-sm font-medium text-gray-500">Admin</p>
              <h1 class="font-neue-montreal text-2xl font-bold">Projects CMS</h1>
            </div>
            <button
              type="button"
              class="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gray-950 text-white transition hover:bg-gray-800"
              @click="openCreateForm"
              aria-label="Create project"
            >
              <span class="material-icons text-[22px]">add</span>
            </button>
          </div>

          <div class="mt-4 space-y-4">
            <label class="block">
              <span class="mb-2 block text-sm font-bold text-gray-800">Search</span>
              <div class="relative">
                <span class="material-icons pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-gray-400">
                  search
                </span>
                <input
                  v-model="searchQuery"
                  type="search"
                  class="h-12 w-full rounded-md border border-gray-300 bg-white pl-10 pr-3 text-sm outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                  placeholder="Address, client, details"
                />
              </div>
            </label>

            <div class="block">
              <span class="mb-2 block text-sm font-bold text-gray-800">Client</span>
              <AdminFilterSelect
                v-model="clientFilter"
                v-model:active-dropdown="activeFilterDropdown"
                dropdown-id="client"
                icon="business"
                :options="clientFilterOptions"
              />
            </div>

            <div class="block">
              <span class="mb-2 block text-sm font-bold text-gray-800">Sort</span>
              <AdminFilterSelect
                v-model="sortOrder"
                v-model:active-dropdown="activeFilterDropdown"
                dropdown-id="sort"
                icon="sort"
                :options="sortOptions"
              />
            </div>

            <div class="grid grid-cols-3 gap-2 pt-2">
              <div class="rounded-md bg-gray-50 p-3">
                <p class="text-xs font-medium text-gray-500">Total</p>
                <p class="mt-1 text-2xl font-bold">{{ projects.length }}</p>
              </div>
              <div class="rounded-md bg-gray-50 p-3">
                <p class="text-xs font-medium text-gray-500">Shown</p>
                <p class="mt-1 text-2xl font-bold">{{ filteredProjects.length }}</p>
              </div>
              <div class="rounded-md bg-gray-50 p-3">
                <p class="text-xs font-medium text-gray-500">Gallery</p>
                <p class="mt-1 text-2xl font-bold">{{ galleryImageCount }}</p>
              </div>
            </div>

            <button
              type="button"
              class="flex h-12 w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 text-sm font-bold text-gray-950 transition hover:border-gray-950"
              @click="resetFilters"
            >
              <span class="material-icons text-[18px]">restart_alt</span>
              Reset filters
            </button>
          </div>
        </aside>

        <section class="space-y-6">
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p class="text-sm font-medium text-gray-500">Manage portfolio entries</p>
                <h2 class="font-neue-montreal text-3xl font-bold md:text-4xl">
                  Project Records
                </h2>
                <p v-if="adminEmail" class="mt-2 text-sm text-gray-500">
                  Signed in as {{ adminEmail }}
                </p>
              </div>
              <div class="flex flex-wrap gap-2">
                <button
                  type="button"
                  class="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 text-sm font-bold transition hover:border-gray-950"
                  :disabled="pending || isRefreshing"
                  @click="refreshProjects"
                >
                  <span
                    class="material-icons text-[18px]"
                    :class="{ 'animate-spin': isRefreshing }"
                    >sync</span
                  >
                  {{ isRefreshing ? "Refreshing..." : "Refresh" }}
                </button>
                <button
                  type="button"
                  class="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gray-950 px-4 text-sm font-bold text-white transition hover:bg-gray-800"
                  @click="openCreateForm"
                >
                  <span class="material-icons text-[18px]">add</span>
                  New project
                </button>
              </div>
            </div>

            <div
              v-if="statusMessage"
              class="mt-5 flex items-start gap-3 rounded-md border p-3 text-sm"
              :class="
                statusType === 'success'
                  ? 'border-green-200 bg-green-50 text-green-800'
                  : statusType === 'error'
                    ? 'border-red-200 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-[#f5f9fc] text-gray-700'
              "
            >
              <span
                class="material-icons text-[20px]"
                :class="
                  statusType === 'success'
                    ? 'text-green-600'
                    : statusType === 'error'
                      ? 'text-red-600'
                      : 'text-gray-500'
                "
              >
                {{
                  statusType === "success"
                    ? "check_circle"
                    : statusType === "error"
                      ? "error"
                      : "info"
                }}
              </span>
              <p>{{ statusMessage }}</p>
            </div>
          </div>

          <div v-if="pending" class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div
              v-for="item in 6"
              :key="item"
              class="h-[420px] animate-pulse rounded-lg border border-gray-200 bg-white"
            ></div>
          </div>

          <div
            v-else-if="loadError && projects.length === 0"
            class="rounded-lg border border-red-200 bg-white p-10 text-center"
          >
            <span class="material-icons text-[40px] text-red-500">error</span>
            <h3 class="mt-3 text-xl font-bold">Could not load projects</h3>
            <p class="mx-auto mt-2 max-w-xl text-sm text-gray-500">
              {{ loadError }}
            </p>
            <button
              type="button"
              class="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gray-950 px-4 text-sm font-bold text-white transition hover:bg-gray-800"
              @click="refreshProjects"
            >
              <span class="material-icons text-[18px]">refresh</span>
              Try again
            </button>
          </div>

          <div
            v-else-if="filteredProjects.length === 0"
            class="rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center"
          >
            <span class="material-icons text-[40px] text-gray-400">search_off</span>
            <h3 class="mt-3 text-xl font-bold">No projects found</h3>
            <p class="mt-2 text-sm text-gray-500">
              Try another search or add a new project record.
            </p>
          </div>

          <div v-else class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article
              v-for="project in filteredProjects"
              :key="project.id"
              class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div class="relative aspect-[16/10] bg-gray-100">
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.address"
                  class="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div v-else class="flex h-full w-full items-center justify-center text-gray-400">
                  <span class="material-icons text-[42px]">image</span>
                </div>
                <div class="absolute left-3 top-3 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-gray-950 shadow-sm">
                  {{ galleryLength(project) }} images
                </div>
              </div>

              <div class="space-y-4 p-4">
                <div>
                  <p class="text-sm font-bold text-gray-500">{{ project.client || "No client" }}</p>
                  <h3 class="mt-1 line-clamp-2 text-xl font-bold leading-tight">
                    {{ project.address || "Untitled project" }}
                  </h3>
                  <p class="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                    {{ project.details || "No details yet." }}
                  </p>
                </div>

                <div class="flex flex-wrap items-center gap-2">
                  <NuxtLink
                    :to="`/projects/${project.id}`"
                    prefetch
                    class="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-300 px-3 text-sm font-bold transition hover:border-gray-950"
                    @focus="warmProjectDetail(project.id)"
                    @pointerenter="warmProjectDetail(project.id)"
                    @click="warmProjectDetail(project.id)"
                    @touchstart.passive="warmProjectDetail(project.id)"
                  >
                    <span class="material-icons text-[17px]">visibility</span>
                    View
                  </NuxtLink>
                  <button
                    type="button"
                    class="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-300 px-3 text-sm font-bold transition hover:border-gray-950"
                    @click="openEditForm(project)"
                  >
                    <span class="material-icons text-[17px]">edit</span>
                    Edit
                  </button>
                  <button
                    type="button"
                    class="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-red-200 text-red-700 transition hover:bg-red-50"
                    @click="openDeleteDialog(project)"
                    aria-label="Delete project"
                  >
                    <span class="material-icons text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </section>
    </main>

    <AppFooter />

    <div
      v-if="isFormOpen"
      class="fixed inset-0 z-50 overflow-y-auto bg-gray-950/60 px-4 py-6"
      role="dialog"
      aria-modal="true"
    >
      <div class="mx-auto max-w-5xl rounded-lg bg-white shadow-xl">
        <div class="flex items-center justify-between border-b border-gray-200 p-4 md:p-6">
          <div>
            <p class="text-sm font-medium text-gray-500">
              {{ formMode === "create" ? "Create" : "Update" }}
            </p>
            <h2 class="text-2xl font-bold">
              {{ formMode === "create" ? "New Project" : "Edit Project" }}
            </h2>
          </div>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 transition hover:border-gray-950"
            @click="closeForm"
            aria-label="Close form"
          >
            <span class="material-icons text-[20px]">close</span>
          </button>
        </div>

        <form class="grid gap-6 p-4 md:grid-cols-[1fr_360px] md:p-6" novalidate @submit.prevent="saveProject">
          <div class="space-y-4">
            <div
              v-if="formStatusMessage"
              class="flex items-start gap-3 rounded-md border p-3 text-sm"
              :class="
                formStatusType === 'error'
                  ? 'border-red-200 bg-red-50 text-red-800'
                  : 'border-gray-200 bg-[#f5f9fc] text-gray-700'
              "
            >
              <span class="material-icons text-[20px]">
                {{ formStatusType === "error" ? "error" : "info" }}
              </span>
                <p>{{ formStatusMessage }}</p>
            </div>

            <div
              v-if="isLoadingProjectDetail"
              class="flex items-center gap-3 rounded-md border border-gray-200 bg-[#f5f9fc] p-3 text-sm text-gray-700"
            >
              <span class="material-icons animate-spin text-[20px] text-gray-500">sync</span>
              <p>Loading full project details...</p>
            </div>

            <label class="block">
              <span class="mb-2 block text-sm font-bold text-gray-800">Client</span>
              <input
                v-model.trim="projectForm.client"
                type="text"
                class="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                :class="{ 'border-red-400 focus:border-red-500 focus:ring-red-500/10': formErrors.client }"
                :aria-invalid="formErrors.client"
                placeholder="Rances Residence"
              />
              <span v-if="formErrors.client" class="mt-2 block text-sm text-red-700">
                Client is required.
              </span>
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-bold text-gray-800">Address</span>
              <input
                v-model.trim="projectForm.address"
                type="text"
                class="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                :class="{ 'border-red-400 focus:border-red-500 focus:ring-red-500/10': formErrors.address }"
                :aria-invalid="formErrors.address"
                placeholder="Lucena City"
                required
              />
              <span v-if="formErrors.address" class="mt-2 block text-sm text-red-700">
                Address is required.
              </span>
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-bold text-gray-800">Details</span>
              <textarea
                v-model.trim="projectForm.details"
                rows="5"
                class="w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                :class="{ 'border-red-400 focus:border-red-500 focus:ring-red-500/10': formErrors.details }"
                :aria-invalid="formErrors.details"
                placeholder="Short project description"
              ></textarea>
              <span v-if="formErrors.details" class="mt-2 block text-sm text-red-700">
                Details are required.
              </span>
            </label>

            <div class="grid gap-4 md:grid-cols-2">
              <AdminProjectImageDropzone
                v-model="projectForm.image"
                label="Card / Thumbnail Image"
                :has-error="formErrors.image"
                @file-selected="handleSingleImageUpload($event, 'image')"
                @clear="clearSingleImage('image')"
              />

              <AdminProjectImageDropzone
                v-model="projectForm.hero"
                label="Cover Image"
                :has-error="formErrors.hero"
                @file-selected="handleSingleImageUpload($event, 'hero')"
                @clear="clearSingleImage('hero')"
              />
            </div>
            <div
              v-if="formErrors.image || formErrors.hero"
              class="grid gap-2 text-sm text-red-700 md:grid-cols-2"
            >
              <p v-if="formErrors.image">Card / Thumbnail Image is required.</p>
              <p v-if="formErrors.hero">Cover Image is required.</p>
            </div>

            <AdminProjectGalleryUploader
              v-model="galleryInput"
              :has-error="formErrors.gallery"
              @files-selected="handleGalleryUpload"
              @remove-image="removeGalleryImage"
            />
            <p v-if="formErrors.gallery" class="text-sm text-red-700">
              Gallery Images require at least one image.
            </p>
          </div>

          <aside class="space-y-4">
            <div class="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
              <div class="aspect-[16/10] bg-gray-100">
                <img
                  v-if="previewImage"
                  :src="previewImage"
                  :alt="projectForm.address || 'Project preview'"
                  class="h-full w-full object-cover"
                />
                <div v-else class="flex h-full w-full items-center justify-center text-gray-400">
                  <span class="material-icons text-[42px]">image</span>
                </div>
              </div>
              <div class="p-4">
                <p class="text-sm font-bold text-gray-500">
                  {{ projectForm.client || "Client" }}
                </p>
                <h3 class="mt-1 text-xl font-bold leading-tight">
                  {{ projectForm.address || "Project address" }}
                </h3>
                <p class="mt-2 text-sm leading-6 text-gray-600">
                  {{ projectForm.details || "Project details will appear here." }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2">
              <div
                v-for="(image, index) in galleryPreview.slice(0, 6)"
                :key="`${image}-${index}`"
                class="aspect-square overflow-hidden rounded-md bg-gray-100"
              >
                <img :src="image" alt="" class="h-full w-full object-cover" />
              </div>
            </div>

            <div class="flex gap-2 pt-2">
              <button
                type="button"
                class="h-12 flex-1 rounded-md border border-gray-300 bg-white px-4 text-sm font-bold transition hover:border-gray-950"
                @click="closeForm"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="h-12 flex-1 rounded-md bg-gray-950 px-4 text-sm font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                :disabled="isSaving || isLoadingProjectDetail"
              >
                {{ isSaving ? "Saving..." : formMode === "create" ? "Create" : "Save" }}
              </button>
            </div>
          </aside>
        </form>
      </div>
    </div>

    <div
      v-if="projectToDelete"
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-project-title"
      @click.self="closeDeleteDialog"
    >
      <div class="w-full max-w-md rounded-lg bg-white shadow-xl">
        <div class="flex items-start justify-between gap-4 border-b border-gray-200 p-5">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-700">
            <span class="material-icons text-[22px]">delete</span>
          </div>
          <div>
            <h2 id="delete-project-title" class="text-xl font-bold">Delete project</h2>
            <p class="mt-2 text-sm leading-6 text-gray-600">
              This action will remove the selected project from the admin list.
            </p>
          </div>
          <button
            type="button"
            class="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-300 transition hover:border-gray-950"
            @click="closeDeleteDialog"
            aria-label="Close delete confirmation"
          >
            <span class="material-icons text-[18px]">close</span>
          </button>
        </div>

        <div class="space-y-4 p-5">
          <div class="rounded-md bg-gray-50 p-4">
            <p class="text-sm font-bold text-gray-500">
              {{ projectToDelete.client || "No client" }}
            </p>
            <p class="mt-1 text-base font-bold text-gray-950">
              {{ projectToDelete.address || "Untitled project" }}
            </p>
          </div>

          <p class="text-sm leading-6 text-gray-600">
            Are you sure you want to delete this project?
          </p>
        </div>

        <div class="flex justify-end gap-2 border-t border-gray-200 p-5">
          <button
            type="button"
            class="h-11 rounded-md border border-gray-300 px-4 text-sm font-bold transition hover:border-gray-950"
            @click="closeDeleteDialog"
          >
            Cancel
          </button>
          <button
            type="button"
            class="h-11 rounded-md bg-red-700 px-4 text-sm font-bold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="isDeleting"
            @click="deleteProject"
          >
            {{ isDeleting ? "Deleting..." : "Delete project" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import {
  ADMIN_AUTH_SIGNED_OUT_EVENT,
  notifyAdminSignedOut,
} from "~/utils/adminAuthEvents";
import { getAdminSession } from "~/utils/adminSession";

definePageMeta({
  layout: false,
});

useHead({
  title: "Admin Projects | RV Rioflorido",
});

const emptyProjectForm = () => ({
  id: "",
  address: "",
  client: "",
  details: "",
  image: "",
  hero: "",
});

const createProjectId = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    const random = Math.floor(Math.random() * 16);
    const value = character === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

const getAdminAuthHeaders = async () => {
  const session = await getAdminSession(supabase, route);

  if (!session?.access_token) {
    projects.value = [];
    await navigateTo({
      path: "/admin/login",
      query: { redirect: route.fullPath },
      replace: true,
    });

    throw new Error("Your admin session has expired. Please sign in again.");
  }

  return {
    Authorization: `Bearer ${session.access_token}`,
  };
};

const projects = ref([]);
const searchQuery = ref("");
const clientFilter = ref("all");
const sortOrder = ref("newest");
const activeFilterDropdown = ref("");
const isFormOpen = ref(false);
const formMode = ref("create");
const galleryInput = ref("");
const projectToDelete = ref(null);
const statusMessage = ref("");
const statusType = ref("info");
const formStatusMessage = ref("");
const formStatusType = ref("info");
const formErrors = reactive({
  client: false,
  address: false,
  details: false,
  image: false,
  hero: false,
  gallery: false,
});
const adminEmail = ref("");
const isSaving = ref(false);
const isDeleting = ref(false);
const isRefreshing = ref(false);
const isLoadingProjectDetail = ref(false);
const loadError = ref("");
const uploadedObjectUrls = ref([]);
const galleryUploads = ref([]);
const selectedImageFiles = reactive({
  image: null,
  hero: null,
});
const projectForm = reactive(emptyProjectForm());
const supabase = useSupabaseClient();
const route = useRoute();
const {
  getProjectDetail,
  isProjectDetailComplete,
  prefetchProjectDetail,
  setProjectDetail,
  setProjectSummary,
} = useProjectDetailCache();

const pending = ref(true);

const resetFormErrors = () => {
  Object.keys(formErrors).forEach((key) => {
    formErrors[key] = false;
  });
};

const validateProjectForm = (payload) => {
  resetFormErrors();

  const requiredFields = [
    { key: "client", label: "Client", isValid: Boolean(payload.client.trim()) },
    { key: "address", label: "Address", isValid: Boolean(payload.address.trim()) },
    { key: "details", label: "Details", isValid: Boolean(payload.details.trim()) },
    {
      key: "image",
      label: "Card / Thumbnail Image",
      isValid: Boolean(payload.image.trim()),
    },
    { key: "hero", label: "Cover Image", isValid: Boolean(payload.hero.trim()) },
    {
      key: "gallery",
      label: "Gallery Images",
      isValid: payload.gallery.length > 0,
    },
  ];
  const missingFields = requiredFields.filter((field) => !field.isValid);

  missingFields.forEach((field) => {
    formErrors[field.key] = true;
  });

  if (!missingFields.length) {
    return true;
  }

  formStatusType.value = "error";
  formStatusMessage.value = `Please complete required fields: ${missingFields
    .map((field) => field.label)
    .join(", ")}.`;

  return false;
};

const mergeProjectIntoList = (project, { moveToFront = false } = {}) => {
  if (!project?.id) {
    return;
  }

  const projectId = String(project.id);
  const existingIndex = projects.value.findIndex(
    (item) => String(item.id) === projectId
  );
  const existingProject = existingIndex >= 0 ? projects.value[existingIndex] : {};
  const mergedProject = {
    ...existingProject,
    ...project,
    galleryCount: Array.isArray(project.gallery)
      ? project.gallery.length
      : project.galleryCount ?? existingProject.galleryCount ?? 0,
  };

  if (moveToFront) {
    projects.value = [
      mergedProject,
      ...projects.value.filter((item) => String(item.id) !== projectId),
    ];
  } else if (existingIndex >= 0) {
    projects.value = projects.value.map((item, index) =>
      index === existingIndex ? mergedProject : item
    );
  } else {
    projects.value = [mergedProject, ...projects.value];
  }

  setProjectSummary(projectId, mergedProject);
};

const refresh = async ({ showStatus = false } = {}) => {
  const shouldShowSkeleton = projects.value.length === 0;

  pending.value = shouldShowSkeleton;
  isRefreshing.value = !shouldShowSkeleton;
  loadError.value = "";

  try {
    const headers = await getAdminAuthHeaders();
    const newProjects = await $fetch(
      "/api/projects?summary=1&galleryCounts=1&editImages=1&admin=1",
      { headers }
    );

    projects.value = Array.isArray(newProjects) ? [...newProjects] : [];
    projects.value.forEach((project) => setProjectSummary(project.id, project));
    if (showStatus) {
      statusMessage.value = "Projects refreshed from the current API.";
      statusType.value = "info";
    }
  } catch (error) {
    loadError.value = getErrorMessage(error);
    statusMessage.value = `Could not load projects: ${loadError.value}`;
    statusType.value = "error";
  } finally {
    pending.value = false;
    isRefreshing.value = false;
  }
};

const clientOptions = computed(() => {
  const clients = projects.value
    .map((project) => project.client)
    .filter(Boolean)
    .map((client) => client.trim());

  return [...new Set(clients)].sort((a, b) => a.localeCompare(b));
});

const clientFilterOptions = computed(() => [
  {
    label: "All clients",
    value: "all",
    description: `${projects.value.length} projects`,
  },
  ...clientOptions.value.map((client) => ({
    label: client,
    value: client,
    description: `${projects.value.filter((project) => project.client === client).length} projects`,
  })),
]);

const sortOptions = [
  {
    label: "Newest first",
    value: "newest",
    description: "Latest records first",
  },
  {
    label: "Oldest first",
    value: "oldest",
    description: "Earliest records first",
  },
  {
    label: "Address A-Z",
    value: "address",
    description: "Sort by project address",
  },
  {
    label: "Client A-Z",
    value: "client",
    description: "Sort by client name",
  },
];

const galleryImageCount = computed(() =>
  projects.value.reduce((total, project) => total + galleryLength(project), 0)
);

const projectCreatedTime = (project) => {
  const createdAt = Date.parse(project?.createdAt || project?.created_at || "");

  return Number.isFinite(createdAt) ? createdAt : null;
};

const filteredProjects = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  const projectPositions = new Map(
    projects.value.map((project, index) => [String(project.id), index])
  );

  return [...projects.value]
    .filter((project) => {
      const matchesClient =
        clientFilter.value === "all" || project.client === clientFilter.value;
      const searchBody = [project.address, project.client, project.details, project.id]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesClient && (!query || searchBody.includes(query));
    })
    .sort((a, b) => {
      if (sortOrder.value === "oldest") {
        const createdA = projectCreatedTime(a);
        const createdB = projectCreatedTime(b);

        if (createdA !== null && createdB !== null && createdA !== createdB) {
          return createdA - createdB;
        }

        return (
          (projectPositions.get(String(b.id)) || 0) -
          (projectPositions.get(String(a.id)) || 0)
        );
      }

      if (sortOrder.value === "address") {
        return String(a.address || "").localeCompare(String(b.address || ""));
      }

      if (sortOrder.value === "client") {
        return String(a.client || "").localeCompare(String(b.client || ""));
      }

      const createdA = projectCreatedTime(a);
      const createdB = projectCreatedTime(b);

      if (createdA !== null && createdB !== null && createdA !== createdB) {
        return createdB - createdA;
      }

      return (
        (projectPositions.get(String(a.id)) || 0) -
        (projectPositions.get(String(b.id)) || 0)
      );
    });
});

const galleryPreview = computed(() =>
  galleryInput.value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean)
);

const previewImage = computed(() => projectForm.image || projectForm.hero || galleryPreview.value[0]);

const isLocalImageUrl = (imageUrl) => {
  const value = String(imageUrl || "");

  return value.startsWith("blob:") || value.startsWith("data:image/");
};

const revokeLocalImageUrl = (imageUrl) => {
  if (String(imageUrl || "").startsWith("blob:")) {
    URL.revokeObjectURL(imageUrl);
  }
};

const revokeUploadedObjectUrls = () => {
  uploadedObjectUrls.value.forEach((objectUrl) => revokeLocalImageUrl(objectUrl));
  uploadedObjectUrls.value = [];
};

const trackLocalImageUrl = (imageUrl) => {
  if (isLocalImageUrl(imageUrl) && !uploadedObjectUrls.value.includes(imageUrl)) {
    uploadedObjectUrls.value.push(imageUrl);
  }
};

watch(
  () => projectForm.client,
  (client) => {
    if (String(client || "").trim()) {
      formErrors.client = false;
    }
  }
);

watch(
  () => projectForm.address,
  (address) => {
    if (String(address || "").trim()) {
      formErrors.address = false;
    }
  }
);

watch(
  () => projectForm.details,
  (details) => {
    if (String(details || "").trim()) {
      formErrors.details = false;
    }
  }
);

watch(
  () => projectForm.image,
  (imageUrl) => {
    if (!isLocalImageUrl(imageUrl)) {
      selectedImageFiles.image = null;
    }

    if (String(imageUrl || "").trim()) {
      formErrors.image = false;
    }
  }
);

watch(
  () => projectForm.hero,
  (imageUrl) => {
    if (!isLocalImageUrl(imageUrl)) {
      selectedImageFiles.hero = null;
    }

    if (String(imageUrl || "").trim()) {
      formErrors.hero = false;
    }
  }
);

watch(galleryPreview, (images) => {
  const activeImages = new Set(images);

  if (images.length) {
    formErrors.gallery = false;
  }

  galleryUploads.value = galleryUploads.value.filter((upload) => {
    const isActive = activeImages.has(upload.previewUrl);

    if (!isActive) {
      revokeLocalImageUrl(upload.previewUrl);
    }

    return isActive;
  });
});

const createLocalImageUrl = (file) => URL.createObjectURL(file);

const uploadProjectImage = async (file, folder, headers) => {
  const projectId = projectForm.id.trim() || "new-project";
  const uploadFormData = new FormData();

  uploadFormData.append("projectId", projectId);
  uploadFormData.append("folder", folder);
  uploadFormData.append("file", file);

  let uploadedImage;

  try {
    uploadedImage = await $fetch("/api/project-images", {
      method: "POST",
      headers,
      body: uploadFormData,
    });
  } catch (error) {
    const fileName = file?.name || "selected image";

    throw new Error(`${fileName}: ${getErrorMessage(error)}`);
  }

  return uploadedImage.url;
};

const uploadPendingImages = async (payload, headers) => {
  if (selectedImageFiles.image) {
    payload.image = await uploadProjectImage(
      selectedImageFiles.image,
      "thumbnail",
      headers
    );
    projectForm.image = payload.image;
  }

  if (selectedImageFiles.hero) {
    payload.hero = await uploadProjectImage(selectedImageFiles.hero, "hero", headers);
    projectForm.hero = payload.hero;
  }

  if (galleryUploads.value.length) {
    const galleryUrlMap = new Map();

    for (const upload of galleryUploads.value) {
      galleryUrlMap.set(
        upload.previewUrl,
        await uploadProjectImage(upload.file, "gallery", headers)
      );
    }

    payload.gallery = payload.gallery.map((item) => ({
      image: galleryUrlMap.get(item.image) || item.image,
    }));
    galleryInput.value = payload.gallery.map((item) => item.image).join("\n");
  }
};

const handleSingleImageUpload = (upload, field) => {
  const file = upload?.file || upload;
  const previousPreviewUrl = upload?.previousPreviewUrl;

  if (!file) {
    return;
  }

  const previewUrl = upload?.previewUrl || createLocalImageUrl(file);

  if (!previewUrl) {
    return;
  }

  if (previousPreviewUrl && previousPreviewUrl !== previewUrl) {
    revokeLocalImageUrl(previousPreviewUrl);
  }

  trackLocalImageUrl(previewUrl);
  selectedImageFiles[field] = file;
  projectForm[field] = previewUrl;
};

const clearSingleImage = (field) => {
  revokeLocalImageUrl(projectForm[field]);
  selectedImageFiles[field] = null;
  projectForm[field] = "";
};

const handleGalleryUpload = (uploads) => {
  if (!uploads.length) {
    return;
  }

  const images = [...galleryPreview.value];

  uploads.forEach((upload) => {
    const file = upload?.file || upload;

    if (!file) {
      return;
    }

    const previewUrl = upload?.previewUrl || createLocalImageUrl(file);

    if (!previewUrl) {
      return;
    }

    trackLocalImageUrl(previewUrl);
    galleryUploads.value.push({ file, previewUrl });

    if (!images.includes(previewUrl)) {
      images.push(previewUrl);
    }
  });

  galleryInput.value = images.join("\n");
};

const removeGalleryImage = (index) => {
  const images = [...galleryPreview.value];
  const [removedImage] = images.splice(index, 1);

  if (removedImage) {
    revokeLocalImageUrl(removedImage);
    galleryUploads.value = galleryUploads.value.filter(
      (upload) => upload.previewUrl !== removedImage
    );
  }

  galleryInput.value = images.join("\n");
};

const galleryLength = (project) => {
  if (Number.isFinite(project?.galleryCount)) {
    return project.galleryCount;
  }

  if (!Array.isArray(project?.gallery)) {
    return 0;
  }

  return project.gallery.length;
};

const hasEditImages = (project) =>
  Boolean(project?.hero) || (Array.isArray(project?.gallery) && project.gallery.length > 0);

const warmProjectDetail = (projectId) => {
  if (!projectId) {
    return;
  }

  preloadRouteComponents(`/projects/${projectId}`);
  prefetchProjectDetail(projectId);
};

const resetProjectForm = () => {
  revokeUploadedObjectUrls();
  Object.assign(projectForm, emptyProjectForm());
  galleryInput.value = "";
  selectedImageFiles.image = null;
  selectedImageFiles.hero = null;
  galleryUploads.value = [];
  resetFormErrors();
};

const openCreateForm = () => {
  resetProjectForm();
  projectForm.id = createProjectId();
  formStatusMessage.value = "";
  formStatusType.value = "info";
  formMode.value = "create";
  isFormOpen.value = true;
};

const applyProjectToForm = (project, fallbackProject = {}) => {
  Object.assign(projectForm, {
    id: project?.id || fallbackProject?.id || "",
    address: project?.address || fallbackProject?.address || "",
    client: project?.client || fallbackProject?.client || "",
    details: project?.details || fallbackProject?.details || "",
    image: project?.image || fallbackProject?.image || "",
    hero: project?.hero || fallbackProject?.hero || "",
  });
  galleryInput.value = Array.isArray(project?.gallery)
    ? project.gallery.map((item) => item.image).filter(Boolean).join("\n")
    : Array.isArray(fallbackProject?.gallery)
      ? fallbackProject.gallery.map((item) => item.image).filter(Boolean).join("\n")
      : "";
};

const openEditForm = async (project) => {
  statusMessage.value = "";
  let fullProject = project;
  const cachedProject = getProjectDetail(project.id);

  if (isProjectDetailComplete(cachedProject)) {
    fullProject = cachedProject;
  }

  applyProjectToForm(fullProject, project);
  formStatusMessage.value = "";
  formStatusType.value = "info";
  formMode.value = "edit";
  isFormOpen.value = true;

  if (isProjectDetailComplete(fullProject) || hasEditImages(fullProject)) {
    return;
  }

  try {
    isLoadingProjectDetail.value = true;
    const headers = await getAdminAuthHeaders();

    fullProject = await $fetch(
      `/api/projects/${encodeURIComponent(project.id)}?admin=1`,
      { headers }
    );
    setProjectDetail(fullProject.id, fullProject);
    mergeProjectIntoList(fullProject);
    applyProjectToForm(fullProject, project);
  } catch (error) {
    formStatusType.value = "error";
    formStatusMessage.value = `Could not load full project details: ${getErrorMessage(error)}`;
  } finally {
    isLoadingProjectDetail.value = false;
  }
};

const closeForm = () => {
  isFormOpen.value = false;
  resetProjectForm();
};

const getErrorMessage = (error) =>
  error?.data?.statusMessage || error?.statusMessage || error?.message || "Please try again.";

const saveProject = async () => {
  const payload = {
    ...projectForm,
    gallery: galleryPreview.value.map((image) => ({ image })),
  };

  if (!payload.id.trim()) {
    formStatusType.value = "error";
    formStatusMessage.value = "Project ID is required.";
    return;
  }

  if (!validateProjectForm(payload)) {
    return;
  }

  try {
    isSaving.value = true;
    statusMessage.value = "Uploading images and saving project...";
    statusType.value = "info";
    formStatusType.value = "info";
    formStatusMessage.value = "Uploading images and saving project...";
    const headers = await getAdminAuthHeaders();
    await uploadPendingImages(payload, headers);

    const savedProject =
      formMode.value === "create"
        ? await $fetch("/api/projects", {
            method: "POST",
            headers,
            body: payload,
          })
        : await $fetch(`/api/projects/${encodeURIComponent(payload.id)}`, {
            method: "PUT",
            headers,
            body: payload,
          });

    if (formMode.value === "create") {
      sortOrder.value = "newest";
      statusMessage.value = "Project created and saved to Database.";
      statusType.value = "success";
    } else {
      statusMessage.value = "Project updated and saved to Supabase.";
      statusType.value = "success";
    }

    setProjectDetail(savedProject.id, savedProject);
    mergeProjectIntoList(savedProject, { moveToFront: formMode.value === "create" });
    clearNuxtData("project-summaries");
    closeForm();
  } catch (error) {
    const message = `Could not save project: ${getErrorMessage(error)}`;
    statusMessage.value = message;
    statusType.value = "error";
    formStatusType.value = "error";
    formStatusMessage.value = message;
  } finally {
    isSaving.value = false;
  }
};

const openDeleteDialog = (project) => {
  projectToDelete.value = project;
};

const closeDeleteDialog = () => {
  projectToDelete.value = null;
};

const deleteProject = async () => {
  if (!projectToDelete.value) {
    return;
  }

  try {
    isDeleting.value = true;
    statusMessage.value = "Deleting project images and database record...";
    statusType.value = "info";
    const headers = await getAdminAuthHeaders();

    await $fetch(`/api/projects/${encodeURIComponent(projectToDelete.value.id)}`, {
      method: "DELETE",
      headers,
    });

    projects.value = projects.value.filter((project) => project.id !== projectToDelete.value.id);
    clearNuxtData("project-summaries");
    statusMessage.value = "Project deleted from Database and Storage.";
    statusType.value = "success";
    closeDeleteDialog();
  } catch (error) {
    statusMessage.value = `Could not delete project: ${getErrorMessage(error)}`;
    statusType.value = "error";
  } finally {
    isDeleting.value = false;
  }
};

const resetFilters = () => {
  searchQuery.value = "";
  clientFilter.value = "all";
  sortOrder.value = "newest";
};

const refreshProjects = async () => {
  await refresh({ showStatus: true });
};

const redirectIfSignedOut = async () => {
  const session = await getAdminSession(supabase, route);

  if (!session?.access_token) {
    projects.value = [];
    await navigateTo("/admin/login", { replace: true });
  }
};

const handleAdminSignedOut = () => {
  projects.value = [];
  navigateTo("/admin/login", { replace: true });
};

const handlePageShow = (event) => {
  if (event.persisted) {
    redirectIfSignedOut();
  }
};

onMounted(async () => {
  const session = await getAdminSession(supabase, route);

  adminEmail.value = session?.user?.email || "";

  await refresh();

  window.addEventListener(ADMIN_AUTH_SIGNED_OUT_EVENT, handleAdminSignedOut);
  window.addEventListener("pageshow", handlePageShow);
});

onBeforeUnmount(() => {
  window.removeEventListener(ADMIN_AUTH_SIGNED_OUT_EVENT, handleAdminSignedOut);
  window.removeEventListener("pageshow", handlePageShow);
  revokeUploadedObjectUrls();
});
</script>
