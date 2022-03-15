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
        { pictureUrl: require('@/assets/scenery01.jpg'), id: 1 },
        { pictureUrl: require('@/assets/scenery02.jpg'), id: 2 },
        { pictureUrl: require('@/assets/scenery03.jpg'), id: 3 },
        { pictureUrl: require('@/assets/scenery04.jpg'), id: 4 },
        { pictureUrl: require('@/assets/scenery05.jpg'), id: 5 },
        { pictureUrl: require('@/assets/scenery06.jpg'), id: 6 }
      ])
    const cardBottomArray = ref([])
    const cardBottomRef = (el) => cardBottomArray.value.push(el)
    const bottomCards = ref(
      [
        { pictureUrl: require('@/assets/scenery07.jpg'), id: 1 },
        { pictureUrl: require('@/assets/scenery08.jpg'), id: 2 },
        { pictureUrl: require('@/assets/scenery09.jpg'), id: 3 },
        { pictureUrl: require('@/assets/scenery10.jpg'), id: 4 },
        { pictureUrl: require('@/assets/scenery11.jpg'), id: 5 },
        { pictureUrl: require('@/assets/scenery12.jpg'), id: 6 }
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
          stagger: -0.7
        })
        cardStagger.to(cardBottomArray.value, {
          rotate: 180,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: h / 1.2,
          stagger: -0.7,
          delay: 0.35
        }, '<')
        cardStagger.to([cardTopArray.value, cardBottomArray.value], {
          delay: 1,
          rotateX: -180,
          zIndex: 0,
          duration: 0.7,
          onStart () {
            gsap.to('.front', {
              duration: 0.7,
              rotateX: -180,
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
          stagger: -0.7
        })
        cardStagger.to(cardBottomArray.value, {
          rotate: 180,
          xPercent: gsap.utils.wrap([-350, -210, -70, 70, 210, 350]),
          yPercent: h / 3,
          stagger: -0.7,
          delay: 0.35
        }, '<')
        cardStagger.to([cardTopArray.value, cardBottomArray.value], {
          delay: 1,
          rotateX: -180,
          zIndex: 0,
          duration: 0.7,
          onStart () {
            gsap.to('.front', {
              duration: 0.7,
              rotateX: -180,
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
$imgCount: 6;

div {
  .cardWrap {
    position: relative;
    top: 20%;
    height: 80vh;
    pointer-events: none;
    .cardFlex {
      position: relative;
      top: 50%;
      display: flex;
      justify-content: center;
      perspective: 600px;
      @for $j from 1 through 2 {
        &:nth-child(#{$j}) {
          .card {
            @for $i from 1 through $imgCount {
              &:nth-child(#{$i}) {
                .front {
                  background: linear-gradient(45deg, rgb(random(255),random(255),random(255)) 50%, lighten(rgb(random(255),random(255),random(255)), 30%) 140%);
                }
              }
            }
          }
        }
      }
      .card {
        position: absolute;
        width: 9vw;
        height: 6vw;
        overflow: hidden;
        border-radius: 0.5rem;
        .front {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        img {
          position: absolute;
          display: block;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          width: 100%;
          cursor: pointer;
          object-fit: cover;
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
