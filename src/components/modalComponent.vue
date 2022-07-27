<template>
  <b-modal id="modal" centered hide-footer>
    <template #modal-title>
      {{ title }}
    </template>
    <b-form class="d-flex flex-column align-items-center p-4 text-center gap">
      <input-custom
        @actionInput="send"
        v-model="name"
        :prepend="'Nombre'"
      />
      <input-custom
        @actionInput="send"
        v-model="description"
        :prepend="'Description'"
      />
      <input-custom
        v-if="this.$store.state.characterUpgradeType"
        @actionInput="send"
        v-model="url"
        :prepend="'Img (Url)'"
      />
      <!-- class="form-control" -->
      <!-- <b-form-file
        v-else
        v-model="newData.file"
        :state="Boolean(newData.file)"
        placeholder="Subir una Imagen"
      /> -->
      <input
        v-else
        type="file"
        id="imgLocal"
        @change="selectFile"
        accept="image/*"
      />
      <b-form-datepicker v-model="date" locale="es"></b-form-datepicker>
      <btn-custom @actionBtn="send" :text="'Guardar'" :variant="'info'" />
    </b-form>
  </b-modal>
</template>

<script>
import inputCustom from '@/components/custom/inputCustom.vue'
import btnCustom from '@/components/custom/btnCustom.vue'

import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'Modal',
  components: {
    inputCustom,
    btnCustom,
  },
  data() {
    return {
      name: null,
      date: null,
      description: null,
      url: null,
      regUrl:
        /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
    }
  },
  computed: {
    title() {
      if (this.$store.state.characterUpgradeType) {
        return 'Agregar'
      }
      return 'Editar'
    },
  },
  methods: {
    send() {
      if (
        this.name != null &&
        this.date != null &&
        this.description != null &&
        this.url != null
      ) {
        if (this.$store.state.characterUpgradeType) {
          if (this.valUrl(this.url)) {
            this.$store.dispatch('addCharacter', {
              name: this.name,
              date: this.date,
              description: this.description,
              url: this.url,
              id: uuidv4()
            })
          }
        } else {
          this.$store.dispatch('editCharacter', {
              name: this.name,
              date: this.date,
              description: this.description,
              url: this.url,
              id: this.$store.state.characters[this.$store.state.posOfSelectedCharacter].id
            })
        }
      }
      this.$bvModal.hide('modal')
      this.clearInputs() 
    },
    selectFile() {
      let image = document.querySelector('#imgLocal')
      this.url = URL.createObjectURL(image.files[0])
    },
    valUrl(url) {
      return this.regUrl.test(url)
    },
    clearInputs() {
      this.name = null
      this.date = null
      this.description = null
      this.url = null
      this.id = null
    },
  },
}
</script>

<style scoped>
.gap {
  gap: 20px;
}
</style>
