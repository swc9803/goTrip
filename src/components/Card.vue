<template>
  <div>
    <!-- <div ref="cardScrollEl" class="ScrollEl" /> -->
    <div ref="cardScrollEl" class="cardWrap">
      <div class="cardFlex">
        <div v-for="card in firstCards" :key="card.id" class="card" :ref="cardFirstRef">
          <img :src="card.pictureUrl">
        </div>
      </div>
      <div class="cardFlex">
        <div v-for="card in secondCards" :key="card.id" class="card" :ref="cardSecondRef">
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
    const cardScrollEl = ref()
    const cardFirstArray = ref([])
    const cardFirstRef = (el) => cardFirstArray.value.push(el)
    const firstCards = ref(
      [
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') },
        { pictureUrl: require('@/assets/dd.png') }
      ])
    const cardSecondArray = ref([])
    const cardSecondRef = (el) => cardSecondArray.value.push(el)
    const secondCards = ref(
      [
        { pictureUrl: require('@/assets/ss.png') },
        { pictureUrl: require('@/assets/ss.png') },
        { pictureUrl: require('@/assets/ss.png') }
      ])
    onMounted(() => {
      gsap.set([cardFirstArray.value, cardSecondArray.value], {
        xPercent: -100,
        yPercent: -100,
        opacity: 0,
        scale: 0.5
      })

      const cardStagger = gsap.timeline()
      ScrollTrigger.create({
        animation: cardStagger,
        trigger: cardScrollEl.value,
        start: '-20% top'
      })
      cardStagger.to(cardFirstArray.value, {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.5,
        duration: 0.5
      })
      cardStagger.to(cardSecondArray.value, {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.5,
        duration: 0.5,
        delay: 0.25
      }, '<')
    })
    return {
      cardScrollEl,
      cardFirstArray,
      cardFirstRef,
      firstCards,
      cardSecondArray,
      cardSecondRef,
      secondCards
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/MainStyle';
div {
  .cardWrap {
    position: relative;
    transform: translate(-50%);
    left: 50%;
    max-width: 60rem;
    display: flex;
    justify-content: space-around;
    .cardFlex {
      .card {
        width: 340px;
        height: 255px;
        margin: 2px;
        overflow: hidden;
        img {
          width: 100%;
          height: 230px;
          overflow: hidden;
          object-fit: cover;
          border-radius: 1rem;
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  div {
    .cardWrap {
      .cardFlex {
        .card {
          width: 200px;
          height: 150px;
          img {
            height: 130px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  div {
    .cardWrap {
      .cardFlex {
        .card {
          width: 140px;
          height: 105px;
          img {
            height: 90px;
          }
        }
      }
    }
  }
}
</style>
