<template>
  <div class="col-xs-1 col-sm-2 col-md-4 col-lg-3">
    <b-card
      :title="character.name"
      :img-src="character.url"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>
        {{ character.description }}
      </b-card-text>
      <btn-custom
        v-b-modal.modal
        @actionBtn="editCharacter"
        :text="'Editar'"
        :variant="'primary'"
      />
      <template #footer>
        <em>Fecha: {{ formatDate(character.date) }}</em>
      </template>
    </b-card>
  </div>
</template>

<script>
import btnCustom from '@/components/custom/btnCustom.vue'
export default {
  name: 'ItemComponent',
  components: {
    btnCustom,
  },
  props: {
    character: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    formatDate(newDate) {
      return new Date(newDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    },
    editCharacter() {
      this.$store.dispatch('characterUpgradeType', false)
      this.$store.dispatch('getSelectedIdCharacter', this.character.id)
    },
  },
}
</script>
