<template>
  <b-modal id="modal" centered hide-footer>
    <template #modal-title>
      Hola
    </template>
    <b-form class="d-flex flex-column align-items-center p-4 text-center gap">
      <input-custom @actionInput="send" v-model="newData.name" :prepend="'Nombre'" />
      <input-custom
        @actionInput="send"
        v-model="newData.description"
        :prepend="'Description'"
      />
      <input-custom @actionInput="send" v-model="newData.url" :prepend="'Img (Url)'" />
      <b-form-datepicker v-model="newData.date" locale="es"></b-form-datepicker>
      <b-button class="mt-3" block @click="send" :variant="'info'"
        >Guardar
      </b-button>
    </b-form>
  </b-modal>
</template>

<script>
import inputCustom from "@/components/custom/inputCustom.vue";
export default {
  name: "Modal",
  components: {
    inputCustom,
  },
  data() {
    return { 
        newData: {}
    };
  },
  methods: {
    send() {
        console.log("send")
        this.$bvModal.hide("modal");
    }
  },
};
</script>

<style scoped>
.gap {
  gap: 20px;
}
</style>