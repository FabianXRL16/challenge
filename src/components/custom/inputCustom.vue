<template>
  <b-input-group :prepend="prepend" class="mr-sm-2" type="text">
    <b-form-input v-model="inputModel" @keyup.enter="keyUpCustom" />
  </b-input-group>
</template>

<script>
export default {
  name: 'inputCustom',
  props: {
    value: {
      type: String,
    },
    prepend: {
      type: String,
      defaul: '',
    },
  },
  computed: {
    inputModel: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
  methods: {
    keyUpCustom() {
      this.$emit('actionInput')
    },
  },
}
</script>
