<template>
  <div class="contents">
    <Card />
  </div>
</template>

<script>
import Card from '@/components/Card'
import { onMounted } from 'vue'
export default {
  components: {
    Card
  },
  setup () {
    onMounted(() => {

    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/MainStyle';
.contents {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
