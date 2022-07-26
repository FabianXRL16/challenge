<template>
  <div class="row">
    <item 
      v-for="n in 20"
      :key="n"
    />
    <div class="mt-2">
      <div class="spinner"></div>
      <a href="" class="btnMoreData">ver mas</a>
    </div>
  </div>
</template>

<script>
import item from "@/components/itemComponent.vue";

export default {
  name: "ListComponent",
  components: {
    item,
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.btnMoreData {
  color: transparent;
}
.spinner {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid #DC3545;
  border-left-color: transparent;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: spinner-animation .5s linear infinite;
}
@keyframes spinner-animation {
  0% { 
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
