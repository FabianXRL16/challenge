<template>
  <div class="content__list row">
    <item
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
    <div class="mt-2">
      <div v-if="$store.state.isLoading" class="spinner"></div>
      <a
        href=""
        class="btnMoreData"
        v-if="$store.state.isLoading"
        @click="moreData"
        >ver mas</a
      >
    </div>
  </div>
</template>

<script>
import item from '@/components/itemComponent.vue'

export default {
  name: 'ListComponent',
  components: {
    item,
  },
  props: {
    characters: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrolling)
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrolling)
  },
  methods: {
    scrolling(event) {
      let heightList = event.target.scrollingElement.scrollHeight
      let heightScroll = event.target.scrollingElement.scrollTop
      let heightViewPort = event.target.scrollingElement.clientHeight

      if (heightScroll + heightViewPort >= heightList - 5) {
        this.$store.dispatch("nextPage");
        this.getData();
      }
    },
    moreData() {
      this.$store.dispatch('nextPage')
    },
    getData: function () {
      this.$store.dispatch('getCharacters')
    },
  },
}
</script>

<style scoped>
.content__list {
  overflow-y: auto;
}
.btnMoreData {
  color: transparent;
}
.spinner {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid #dc3545;
  border-left-color: transparent;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: spinner-animation 0.5s linear infinite;
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
