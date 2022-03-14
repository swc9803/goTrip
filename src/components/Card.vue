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
    const h = innerHeight
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
      if (matchMedia('(max-width: 850px)').matches) {
        const cardStagger = gsap.timeline()
        ScrollTrigger.create({
          animation: cardStagger,
          trigger: cardScrollEl.value,
          start: '-70% top'
        })
        cardStagger.to(cardTopArray.value, {
          rotate: 180,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: -h / 1.2,
          stagger: 0.7
        })
        cardStagger.to(cardBottomArray.value, {
          rotate: 180,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: h / 1.2,
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
      } else {
        const cardStagger = gsap.timeline()
        ScrollTrigger.create({
          animation: cardStagger,
          trigger: cardScrollEl.value,
          start: '-70% top'
        })
        cardStagger.to(cardTopArray.value, {
          rotate: 180,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: -h / 3,
          stagger: 0.7
        })
        cardStagger.to(cardBottomArray.value, {
          rotate: 180,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: h / 3,
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
      }
    })
    const focusTopPhoto = (cardId) => {
      // if (cardId - 1의 yPercent가 0이 아니면 실행 ) {}
      if (matchMedia('(max-width: 850px)').matches) {
        gsap.to(cardTopArray.value, {
          scale: 1,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: -h / 1.2
        })
        gsap.to(cardBottomArray.value, {
          scale: 1,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: h / 1.2
        })
        gsap.to(cardTopArray.value[cardId - 1], {
          scale: 8,
          xPercent: 0,
          yPercent: 0
        })
      } else {
        gsap.to(cardTopArray.value, {
          scale: 1,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: -h / 3
        })
        gsap.to(cardBottomArray.value, {
          scale: 1,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: h / 3
        })
        gsap.to(cardTopArray.value[cardId - 1], {
          scale: 5,
          xPercent: 0,
          yPercent: 0
        })
      }
    }
    const focusBottomPhoto = (cardId) => {
      if (matchMedia('(max-width: 850px)').matches) {
        gsap.to(cardTopArray.value, {
          scale: 1,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: -h / 1.2
        })
        gsap.to(cardBottomArray.value, {
          scale: 1,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: h / 1.2
        })
        gsap.to(cardBottomArray.value[cardId - 1], {
          scale: 8,
          xPercent: 0,
          yPercent: 0
        })
      } else {
        gsap.to(cardTopArray.value, {
          scale: 1,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: -h / 3
        })
        gsap.to(cardBottomArray.value, {
          scale: 1,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: h / 3
        })
        gsap.to(cardBottomArray.value[cardId - 1], {
          scale: 5,
          xPercent: 0,
          yPercent: 0
        })
      }
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
      perspective: 600px;
      .card {
        position: absolute;
        width: 9vw;
        height: 6vw;
        overflow: hidden;
        border-radius: 0.5rem;
        @for $i from 1 through $count {
          &:nth-child(#{$i}) {
            .front {
              background: linear-gradient(45deg, rgb(random(255),random(255),random(255)) 50%, lighten(rgb(random(255),random(255),random(255)), 30%) 140%);
            }
          }
        }
        .front {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        img {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          width: 100%;
          cursor: pointer;
          object-fit: cover;
          // vertical-align: bottom;
          display: block;
        }
      }
    }
  }
}
@media screen and (max-width: 700px) {
  div {
    .cardWrap {
      .cardFlex {
        .card {
          width: 12vw;
          height: 9vw;
        }
      }
    }
  }
}
</style>
