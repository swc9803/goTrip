<template>
  <Scenery />
  <div class="contents">
    <Card />
  </div>
</template>

<script>
import Scenery from '@/components/Scenery'
import Card from '@/components/Card'
import { onMounted } from 'vue'
export default {
  components: {
    Scenery,
    Card
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
