<template>
  <div>
    <p ref="test">test</p>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const test = ref()
    onMounted(() => {
      gsap.to(test.value, {
        yPercent: 20,
        repeat: -1
      })
    })
    return {
      test
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/MainStyle';
</style>
