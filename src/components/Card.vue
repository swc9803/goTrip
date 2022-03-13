<template>
  <div>
    <div ref="cardScrollEl" class="cardWrap">
      <div class="cardFlex">
        <div v-for="card in topCards" :key="card.id" class="card" :ref="cardTopRef">
          <div class="front" />
          <img :src="card.pictureUrl">
        </div>
      </div>
      <div class="cardFlex">
        <div v-for="card in bottomCards" :key="card.id" class="card" :ref="cardBottomRef">
          <div class="front" />
          <img :src="card.pictureUrl">
        </div>
      </div>
    </div>
    <!-- 배열 2개 딜러가 카드 나눠주듯 rotate주면서 날아가기 -->
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  setup () {
    const cardScrollEl = ref()
    const cardTopArray = ref([])
    const cardTopRef = (el) => cardTopArray.value.push(el)
    const topCards = ref(
      [
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') }
      ])
    const cardBottomArray = ref([])
    const cardBottomRef = (el) => cardBottomArray.value.push(el)
    const bottomCards = ref(
      [
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') }
      ])
    onMounted(() => {
      const h = innerHeight / 2.5
      const cardStagger = gsap.timeline()
      ScrollTrigger.create({
        animation: cardStagger,
        trigger: cardScrollEl.value,
        start: '-40% top'
      })
      cardStagger.to(cardTopArray.value, {
        rotate: 180,
        xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
        yPercent: h,
        stagger: 0.7
      })
      cardStagger.to(cardBottomArray.value, {
        rotate: 180,
        xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
        yPercent: -h,
        stagger: 0.7,
        delay: 0.35
      }, '<')
      cardStagger.to([cardTopArray.value, cardBottomArray.value], {
        delay: 1,
        rotateY: -180,
        zIndex: 0,
        duration: 0.7,
        onStart () {
          gsap.to('.front', {
            duration: 0.7,
            rotateY: -180,
            zIndex: 0
          })
        }
      }, '>')
    })
    return {
      cardScrollEl,
      cardTopArray,
      cardTopRef,
      topCards,
      cardBottomArray,
      cardBottomRef,
      bottomCards
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/MainStyle';
$count: 6;
$randomColor: rgb(random(255),random(255),random(255));

div {
  .cardWrap {
    position: relative;
    height: 80vh;
    .cardFlex {
      display: flex;
      justify-content: center;
      perspective: 3000px;
      .card {
        position: absolute;
        width: 8vw;
        height: 6vw;
        overflow: hidden;
        .front {
          position: absolute;
          width: 100%;
          height: 100%;
          $random-color: rgb(random(255),random(255),random(255));
          background: linear-gradient(45deg, $random-color 50%, darken($random-color, 40%) 140%);
          z-index: 1;
        }
        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

</style>
