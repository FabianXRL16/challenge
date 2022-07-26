<template>
  <div class="home p-4" style="margin-top: 70px;">
    <list-component />
  </div>
</template>

<script>
import listComponent from "@/components/listComponent.vue";
export default {
  name: 'Home',
  components: {
    listComponent
  }
}
</script>
