<template>
  <b-navbar toggle="lg" type="dark" variant="danger" class="fixed-top">
    <b-container>
      <b-navbar-brand>Marvel</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item>
          <input-custom
            @actionInput="searchCharacter"
            v-model="valueInput" 
            :prepend="'Buscar'"
          />
        </b-nav-item>
        <b-nav-item>
          <btn-custom 
            @actionBtn="addCharacter" 
            :variant="'light'" 
            v-b-modal.modal>
            <template slot="icon">
              <b-icon-plus />
            </template>
          </btn-custom>
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
import btnCustom from "@/components/custom/btnCustom.vue"
import inputCustom from "@/components/custom/inputCustom.vue"

export default {
  name: "navCustom",
  components: {
    btnCustom,
    inputCustom
  },
  data() {
    return {
      valueInput: "",
    }
  },
  methods: {
    searchCharacter() {
      console.log("search");
    },
    addCharacter() {
      this.$store.dispatch("characterUpgradeType", true);
    },
  }
}
</script>