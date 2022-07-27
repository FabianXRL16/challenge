<template>
  <b-button :variant="variant" :block="block" @click="search">
    <slot name="icon" />
    {{ text }}
  </b-button>
</template>

<script>
export default {
  name: 'btnCustom',
  props: {
    text: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'dark',
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    search() {
      this.$emit('actionBtn')
    },
  },
}
</script>
