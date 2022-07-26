<template>
  <b-button :variant="variant"
    @click="search">
    <slot name="icon" />
    {{ text }}
  </b-button>
</template>

<script>
export default {
  name: "btnCustom",
  props: {
    text: {
        type: String,
        default: ""
    },
    variant: {
        type: String,
        default: "dark"
    }
  },
  methods: {
    search() {
      this.$emit("actionBtn");
    },
  },
};
</script>