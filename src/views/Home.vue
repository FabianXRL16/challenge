<template>
  <div class="home p-4" style="margin-top: 70px">
    <list-component :characters="characters" />
    <btn-custom
      class="btn-float"
      @actionBtn="addCharacter"
      :variant="'primary'"
      v-b-modal.modal
      :size="'lg'"
    >
      <template slot="icon">
        <b-icon-plus />
      </template>
    </btn-custom>
  </div>
</template>

<script>
import btnCustom from '@/components/custom/btnCustom.vue'
import listComponent from '@/components/listComponent.vue'
export default {
  name: 'Home',
  components: {
    listComponent,
    btnCustom,
  },
  data() {
    return {
      characters: [],
    }
  },
  created() {
    this.characters = this.$store.state.characters
  },
  methods: {
    addCharacter() {
      this.$store.dispatch('characterUpgradeType', true)
    },
  },
}
</script>

<style scoped>
.btn-float {
  position: fixed;
  bottom: 40px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
