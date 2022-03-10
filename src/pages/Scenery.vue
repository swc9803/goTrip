<template>
  <div class="container" ref="container">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 732 732">
      <circle cx="366" cy="366" r="366" fill="#FFF06B"/>
    </svg>
    <Scroll ref="scroll"/>
  </div>
</template>

<script>
import Scroll from '@/components/Scroll'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  components: {
    Scroll
  },
  setup () {
    const container = ref()
    const scroll = ref()
    onMounted(() => {
      scrollTo(0, 0)
      const pleaseScroll = gsap.timeline()
      ScrollTrigger.create({
        animation: pleaseScroll,
        trigger: container.value,
        start: 'top',
        markers: true
      })
      pleaseScroll.to(scroll.value, {
        opacity: 0
      })

      gsap.fromTo('.container', { scale: 30 }, {
        scale: 1,
        transformOrigin: '60% 50%',
        duration: 3
      })
    })
    return {
      container,
      scroll
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/MainStyle';
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  svg {
    position: absolute;
    transform: translate(-60%, -50%);
    left: 60%;
    top: 50%;
    height: 10vh;
  }
}
</style>
