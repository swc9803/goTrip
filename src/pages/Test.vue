<template>
  <div class="contents">
    <div class="card" />
    <div class="card" />
    <div class="card" />
    <div class="card" />
    <div class="card" />
  </div>
</template>
<script>
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  setup () {
    // const h = innerHeight / 2.25
    onMounted(() => {
      // gsap.to('.dd', {
      //   // position: 'absolute',
      //   xPercent: 0
      //   // yPercent: h
      // })
      // gsap.to('.ss', {
      //   // position: 'absolute',
      //   xPercent: 0
      //   // yPercent: -h
      // })
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/MainStyle';

$count: 6;
$randomColor: rgb(random(255),random(255),random(255));

.contents {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  justify-content: center;
  align-content: space-between;
  .card {
    width: 200px;
    height: 200px;
    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        background: linear-gradient(45deg, rgb(random(255),random(255),random(255)) 50%, darken(rgb(random(255),random(255),random(255)), 30%) 140%);
      }
    }
  }
}

</style>
