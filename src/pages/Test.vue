<template>
  <div class="contents">
    <div class="cardFlex dd">
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
    </div>
    <div class="cardFlex ss">
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
      <div class="card">
        <div class="front" />
        <img src="@/assets/dd.png">
      </div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  setup () {
    const h = innerHeight / 2.25
    onMounted(() => {
      gsap.to('.dd', {
        // position: 'absolute',
        xPercent: 0,
        yPercent: h
      })
      gsap.to('.ss', {
        // position: 'absolute',
        xPercent: 0,
        yPercent: -h
      })
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/MainStyle';

$count: 3;
$random-color: rgb(random(255),random(255),random(255));
@for $i from 1 through $count {
  .contents {
    &:nth-child(#{$i}) {
      .cardFlex {
        .card {
          .front {
            background: linear-gradient(45deg, $random-color 50%, darken($random-color, 40%) 140%);
          }
        }
      }
    }
  }
}

.contents {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  justify-content: center;
  align-content: space-between;
  .cardFlex {
    display: flex;
    perspective: 3000px;
    .card {
      position: relative;
      margin: 1em;
      width: 9vw;
      height: 6vw;
      overflow: hidden;
      &:hover > img,
      &:hover > .front {
        transform: rotateY(-180deg);
        z-index: 0;
      }
      @mixin cardStyle {
        border-radius: 1rem;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: .7s ease;
      }
      .front {
        @include cardStyle;
        z-index: 1;
      }
      img {
        @include cardStyle;
      }
    }
  }
}
</style>
