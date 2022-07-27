<template>
  <b-navbar toggle="lg" type="dark" variant="danger" class="fixed-top">
    <b-container>
      <b-navbar-brand>Marvel</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item>
          <input-custom @actionInput="searchCharacter" v-model="valueInput" />
        </b-nav-item>
        <b-nav-item>
          <btn-custom
            @actionBtn="searchCharacter"
            :variant="'light'"
            :text="'Buscar'"
          />
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
import btnCustom from '@/components/custom/btnCustom.vue'
import inputCustom from '@/components/custom/inputCustom.vue'

export default {
  name: 'navCustom',
  components: {
    btnCustom,
    inputCustom,
  },
  data() {
    return {
      valueInput: '',
    }
  },
  methods: {
    searchCharacter() {
      this.$store.dispatch('resetCharacters')
      if (this.valueInput === '') {
        this.$store.dispatch('resetCharacters')
        this.$store.dispatch('getCharacters')
      } else {
        this.$store.dispatch('getSearchCharacterByName', this.valueInput)
        this.valueInput = ''
      }
    },
  },
}
</script>
