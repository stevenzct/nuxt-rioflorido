<template>
  <div class="relative">
    <button
      type="button"
      class="flex h-12 w-full items-center justify-between gap-3 rounded-md border border-gray-300 bg-white px-3 text-left text-sm outline-none transition hover:border-gray-950 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
      :aria-expanded="isOpen"
      @click="toggleDropdown"
      @keydown.escape="closeDropdown"
    >
      <span class="flex min-w-0 items-center gap-3">
        <span
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-600"
          aria-hidden="true"
        >
          <span class="material-icons block text-[18px] leading-none">{{ icon }}</span>
        </span>
        <span class="min-w-0">
          <span class="block truncate font-bold text-gray-950">{{ selectedOption.label }}</span>
          <span v-if="selectedOption.description" class="block truncate text-xs text-gray-500">
            {{ selectedOption.description }}
          </span>
        </span>
      </span>
      <span
        class="material-icons shrink-0 text-[20px] text-gray-500 transition"
        :class="{ 'rotate-180': isOpen }"
      >
        expand_more
      </span>
    </button>

    <div
      v-if="isOpen"
      class="absolute z-20 mt-2 max-h-72 w-full overflow-y-auto rounded-md border border-gray-200 bg-white p-1 shadow-lg"
    >
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        class="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left text-sm transition hover:bg-gray-50"
        :class="option.value === modelValue ? 'bg-gray-950 text-white hover:bg-gray-900' : 'text-gray-700'"
        @click="selectOption(option.value)"
      >
        <span class="min-w-0">
          <span class="block truncate font-bold">{{ option.label }}</span>
          <span
            v-if="option.description"
            class="block truncate text-xs"
            :class="option.value === modelValue ? 'text-white/70' : 'text-gray-500'"
          >
            {{ option.description }}
          </span>
        </span>
        <span v-if="option.value === modelValue" class="material-icons text-[18px]">check</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";

const props = defineProps({
  activeDropdown: {
    type: String,
    default: "",
  },
  dropdownId: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "tune",
  },
  modelValue: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "update:activeDropdown"]);
const isOpen = computed(() => props.activeDropdown === props.dropdownId);

const selectedOption = computed(
  () =>
    props.options.find((option) => option.value === props.modelValue) ||
    props.options[0] || { label: "Select", value: "" }
);

const selectOption = (value) => {
  emit("update:modelValue", value);
  closeDropdown();
};

const toggleDropdown = () => {
  emit("update:activeDropdown", isOpen.value ? "" : props.dropdownId);
};

const closeDropdown = () => {
  if (isOpen.value) {
    emit("update:activeDropdown", "");
  }
};

watch(
  () => props.options,
  () => {
    closeDropdown();
  }
);
</script>
