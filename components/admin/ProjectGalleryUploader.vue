<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between gap-3">
      <span class="block text-sm font-bold text-gray-800">Gallery Images</span>
      <span class="text-xs font-bold text-gray-500">{{ images.length }} images</span>
    </div>

    <label
      class="group flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-5 py-8 text-center transition hover:border-gray-950 hover:bg-white"
      :class="{
        'border-gray-950 bg-white': isDragging,
        'border-red-400 bg-red-50': hasError,
      }"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="handleDrop"
    >
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        multiple
        class="sr-only"
        @change="handleFileChange"
      />
      <span
        class="material-icons flex h-14 w-14 items-center justify-center rounded-full bg-white text-[30px] text-gray-500 shadow-sm transition group-hover:text-gray-950"
      >
        add_photo_alternate
      </span>
      <p class="mt-4 text-sm font-bold text-gray-950">Drop gallery photos or browse</p>
      <p class="mt-1 max-w-sm text-xs leading-5 text-gray-500">
        Select multiple images and review them locally before saving the project.
      </p>
    </label>

    <div v-if="images.length" class="grid grid-cols-2 gap-3 sm:grid-cols-3">
      <figure
        v-for="(image, index) in images"
        :key="`${image}-${index}`"
        class="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
      >
        <img :src="image" alt="" class="h-full w-full object-cover" />
        <button
          type="button"
          class="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/90 text-gray-950 opacity-100 shadow-sm transition hover:bg-white sm:opacity-0 sm:group-hover:opacity-100"
          @click="$emit('remove-image', index)"
          aria-label="Remove gallery image"
        >
          <span class="material-icons text-[17px]">close</span>
        </button>
      </figure>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  hasError: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "files-selected", "remove-image"]);
const fileInput = ref(null);
const isDragging = ref(false);

const images = computed(() =>
  props.modelValue
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean)
);

const createPreviewUrl = (file) => URL.createObjectURL(file);

const emitImageFiles = (files) => {
  const imageFiles = Array.from(files || [])
    .filter((item) => item.type?.startsWith("image/"))
    .map((file) => ({
      file,
      previewUrl: createPreviewUrl(file),
    }));

  if (imageFiles.length) {
    emit(
      "update:modelValue",
      [props.modelValue.trim(), ...imageFiles.map((item) => item.previewUrl)]
        .filter(Boolean)
        .join("\n")
    );
    emit("files-selected", imageFiles);
  }
};

const handleFileChange = (event) => {
  emitImageFiles(event.target.files);
  event.target.value = "";
};

const handleDrop = (event) => {
  isDragging.value = false;
  emitImageFiles(event.dataTransfer?.files);
  fileInput.value.value = "";
};
</script>
