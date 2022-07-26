<template>
  <b-navbar toggle="lg" type="dark" variant="danger">
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
          <btn-custom @actionBtn="addCharacter" :variant="'light'" v-b-modal.modal>
            <template slot="icon">
              <b-icon-plus />
            </template>
          </btn-custom>
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<!-- <template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>Marvel</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <input-custom 
          @actionInput="searchCharacter"
          v-model="valueInput" 
          :prepend="'Buscar'"
        />
        <btn-custom @actionBtn="addCharacter" :variant="'light'" v-b-modal.modal>
          <template slot="icon">
            <b-icon-plus />
          </template>
        </btn-custom>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template> -->

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
      console.log("add");
    },
  }
}
</script>