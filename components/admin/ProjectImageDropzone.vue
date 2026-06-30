<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between gap-3">
      <span class="block text-sm font-bold text-gray-800">{{ label }}</span>
      <button
        v-if="modelValue"
        type="button"
        class="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 text-xs font-bold text-gray-950 transition hover:border-gray-950"
        @click="$emit('clear')"
      >
        <span class="material-icons text-[16px]">close</span>
        Remove
      </button>
    </div>

    <label
      class="group relative flex min-h-[220px] cursor-pointer flex-col overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-gray-950 hover:bg-white"
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
        class="sr-only"
        @change="handleFileChange"
      />

      <img
        v-if="modelValue"
        :src="modelValue"
        :alt="`${label} preview`"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div
        v-if="modelValue"
        class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/80 to-transparent p-4 pt-12"
      >
        <div class="flex items-center justify-between gap-3 text-white">
          <div class="min-w-0">
            <p class="text-sm font-bold">Image ready</p>
            <p class="text-xs text-white/80">Preview ready before saving</p>
          </div>
          <span class="material-icons shrink-0 text-[22px]">add_photo_alternate</span>
        </div>
      </div>

      <div
        v-else
        class="flex flex-1 flex-col items-center justify-center px-5 py-8 text-center"
      >
        <span
          class="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition group-hover:text-gray-950"
          aria-hidden="true"
        >
          <span class="material-icons block text-[30px] leading-none">cloud_upload</span>
        </span>
        <p class="mt-4 text-sm font-bold text-gray-950">Drop image here or browse</p>
        <p class="mt-1 max-w-xs text-xs leading-5 text-gray-500">
          Upload a JPG, PNG, or WebP image. A local preview appears before saving.
        </p>
      </div>
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  hasError: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "file-selected", "clear"]);
const fileInput = ref(null);
const isDragging = ref(false);

const createPreviewUrl = (file) => URL.createObjectURL(file);

const emitFirstImage = (files) => {
  const [file] = Array.from(files || []).filter((item) =>
    item.type?.startsWith("image/")
  );

  if (file) {
    const previousPreviewUrl = props.modelValue;
    const previewUrl = createPreviewUrl(file);

    emit("update:modelValue", previewUrl);
    emit("file-selected", {
      file,
      previewUrl,
      previousPreviewUrl,
    });
  }
};

const handleFileChange = (event) => {
  emitFirstImage(event.target.files);
  event.target.value = "";
};

const handleDrop = (event) => {
  isDragging.value = false;
  emitFirstImage(event.dataTransfer?.files);
  fileInput.value.value = "";
};
</script>
