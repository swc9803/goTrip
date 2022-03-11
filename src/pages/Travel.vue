<template>
  <Scenery />
  <div class="contents">
    dd
  </div>
</template>

<script>
import Scenery from '@/components/Scenery'
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  components: {
    Scenery
  },
  setup () {
    onMounted(() => {
      scrollTo(0, 0)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/MainStyle';
.contents {
  position: relative;
  transform: translate(0, 100%);
  top: 100%;
  width: 100%;
  height: 100vh;

}
</style>
