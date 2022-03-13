<template>
  <div>
    <div ref="cardScrollEl" class="cardWrap">
      <div class="cardFlex">
        <div v-for="card in topCards" :key="card.id"
          @click="focusTopPhoto(card.id)"
          class="card" :ref="cardTopRef"
        >
          <div class="front" />
          <img :src="card.pictureUrl">
        </div>
      </div>
      <div class="cardFlex">
        <div v-for="card in bottomCards" :key="card.id"
          @click="focusBottomPhoto(card.id)"
          class="card" :ref="cardBottomRef"
        >
          <div class="front" />
          <img :src="card.pictureUrl">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  setup () {
    const h = innerHeight / 2.5
    const cardScrollEl = ref()
    const cardTopArray = ref([])
    const cardTopRef = (el) => cardTopArray.value.push(el)
    const topCards = ref(
      [
        { pictureUrl: require('@/assets/dd.png'), id: 1 },
        { pictureUrl: require('@/assets/dd.png'), id: 2 },
        { pictureUrl: require('@/assets/dd.png'), id: 3 },
        { pictureUrl: require('@/assets/dd.png'), id: 4 },
        { pictureUrl: require('@/assets/dd.png'), id: 5 },
        { pictureUrl: require('@/assets/dd.png'), id: 6 }
      ])
    const cardBottomArray = ref([])
    const cardBottomRef = (el) => cardBottomArray.value.push(el)
    const bottomCards = ref(
      [
        { pictureUrl: require('@/assets/dd.png'), id: 1 },
        { pictureUrl: require('@/assets/dd.png'), id: 2 },
        { pictureUrl: require('@/assets/dd.png'), id: 3 },
        { pictureUrl: require('@/assets/dd.png'), id: 4 },
        { pictureUrl: require('@/assets/dd.png'), id: 5 },
        { pictureUrl: require('@/assets/dd.png'), id: 6 }
      ])
    onMounted(() => {
      const cardStagger = gsap.timeline()
      ScrollTrigger.create({
        animation: cardStagger,
        trigger: cardScrollEl.value,
        start: '-70% top'
      })
      cardStagger.to(cardTopArray.value, {
        rotate: 180,
        xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
        yPercent: -h,
        stagger: 0.7
      })
      cardStagger.to(cardBottomArray.value, {
        rotate: 180,
        xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
        yPercent: h,
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
        },
        onComplete () {
          cardScrollEl.value.style.pointerEvents = 'auto'
        }
      }, '>')
    })
    const focusTopPhoto = (cardId) => {
      // if (cardId - 1의 yPercent가 0이 아니면 실행 ) {}
      gsap.to(cardTopArray.value, {
        xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
        yPercent: -h
      })
      gsap.to(cardBottomArray.value, {
        xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
        yPercent: h
      })
      gsap.to(cardTopArray.value[cardId - 1], {
        xPercent: 0,
        yPercent: 0
      })
    }
    const focusBottomPhoto = (cardId) => {
      gsap.to(cardTopArray.value, {
        xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
        yPercent: -h
      })
      gsap.to(cardBottomArray.value, {
        xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
        yPercent: h
      })
      gsap.to(cardBottomArray.value[cardId - 1], {
        xPercent: 0,
        yPercent: 0
      })
    }
    return {
      cardScrollEl,
      cardTopArray,
      cardTopRef,
      topCards,
      cardBottomArray,
      cardBottomRef,
      bottomCards,
      focusTopPhoto,
      focusBottomPhoto
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
    top: 20%;
    height: 80vh;
    pointer-events: none;
    .cardFlex {
      position: relative;
      display: flex;
      justify-content: center;
      perspective: 3000px;
      .card {
        position: absolute;
        width: 8vw;
        height: 6vw;
        overflow: hidden;
        border-radius: 1rem;
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
          cursor: pointer;
        }
      }
    }
  }
}

</style>
