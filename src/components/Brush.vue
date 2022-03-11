<template>
  <span>
    <svg class="open" ref="door" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1013 1736">
      <path ref="top" fill="#fff" d="M20 20h973v91H20z"/>
      <path ref="right" fill="#fff" d="M896 20h97v1696h-97z"/>
      <path ref="bottom" fill="#fff" d="M20 1625h973v91H20z"/>
      <path ref="left" fill="#fff" d="M20 20h97v1696H20z"/>
      <path @click="goToDoor" class="clickDoor" ref="clickDoor" fill="#FFF06B" d="M117 111h779v1514H117z"/>
    </svg>

    <svg class="open" ref="doorFrame" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 973 1696">
      <path ref="openDoor" fill="#14151F" d="M97 104h784v1489H97z"/>
      <circle ref="handle" cx="261.5" cy="847.5" r="52.5" fill="#fff"/>
      <path ref="dooor" fill="#5A6100" d="M25 104h73v1489H25z"/>
    </svg>

    <svg @click="drawing" class="brush" ref="brush" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 720 1035">
      <path fill="url(#brush0_linear_12_20)" d="M634.64 40.43a19.24 19.24 0 0 1 32.51 20.51L370.62 577.28l-74.39-46.79L634.64 40.43Z"/>
      <path fill="url(#brush1_linear_12_20)" d="M288.79 525.81c39.82 13.87 59.5 26.24 89.27 56.15l-131.89 193.2-74.4-46.78L288.8 525.8Z"/>
      <path fill="url(#brush2_linear_12_20)" fill-opacity=".9" d="m179.48 733.22 59.25 37.26-25.4 89.92-8.83 22.6-12.42 26.99a30 30 0 0 1-5.5 8.11L174.34 931a30 30 0 0 1-7.61 5.8l-16.24 8.67-17.64 8.86c-1.56.78-3.2 1.43-4.87 1.93l-18.99 5.67-38.51 10.58-38.8 7.15a1 1 0 0 1-.96-1.6l28.62-35.29a30 30 0 0 0 6.7-18.9V896.5L67 876l2.82-16.53a30 30 0 0 1 2.3-7.46L79 837l8.31-13.8a30 30 0 0 1 4.91-6.14l87.26-83.84Z"/>
      <g filter="url(#brush0_f_12_20)">
        <path fill="#fff" d="m293.68 556.13 10.6 6.25-98.14 166.58-10.6-6.25z"/>
      </g>
      <path fill="#474747" d="M177.95 717.72 253.1 765l-6.94 10.17-74.4-46.78 6.18-10.66Z"/>
      <g filter="url(#brush1_f_12_20)">
        <path fill="#fff" d="M182.56 724.57c12.31 3.5 18.33 7.03 27.2 16.02l-3.72 6.3c-8.73-9.29-14.72-12.75-27.2-16.02l3.72-6.3Z"/>
      </g>
      <path fill="gray" d="M288.8 525.81c39.75 13.28 59.27 25.6 89.26 56.15l-7.01 10.12-88.36-55.57 6.1-10.7Z"/>
      <g filter="url(#brush2_f_12_20)">
        <path fill="#fff" d="M305.24 539.48c12.31 3.5 18.33 7.02 27.19 16.01l-3.71 6.3c-8.73-9.28-14.73-12.75-27.2-16.01l3.72-6.3Z"/>
      </g>
      <defs>
        <filter id="brush0_f_12_20" width="124.74" height="188.83" x="187.54" y="548.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_12_20" stdDeviation="4"/>
        </filter>
        <filter id="brush1_f_12_20" width="46.9" height="38.32" x="170.85" y="716.57" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_12_20" stdDeviation="4"/>
        </filter>
        <filter id="brush2_f_12_20" width="46.9" height="38.32" x="293.53" y="531.48" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur result="effect1_foregroundBlur_12_20" stdDeviation="4"/>
        </filter>
        <linearGradient id="brush0_linear_12_20" x1="459.98" x2="499.63" y1="270.12" y2="349.04" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CC962E"/>
          <stop offset="1" stop-color="#E7B554"/>
        </linearGradient>
        <linearGradient id="brush1_linear_12_20" x1="228.91" x2="318.18" y1="621.03" y2="677.18" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C4C4C4"/>
          <stop offset="1" stop-color="#ABABAB"/>
        </linearGradient>
        <linearGradient id="brush2_linear_12_20" x1="86.32" x2="150.62" y1="806.48" y2="932.05" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32C41B"/>
          <stop offset=".31" stop-color="#D61818"/>
          <stop offset=".69" stop-color="#1D64CE"/>
          <stop offset="1" stop-color="#CEDB3E"/>
        </linearGradient>
      </defs>
    </svg>
  </span>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
export default {
  setup (props, { emit }) {
    const router = useRouter(); const brush = ref(); const door = ref()
    const top = ref(); const right = ref(); const bottom = ref()
    const left = ref(); const openDoor = ref(); const handle = ref()
    const dooor = ref(); const doorFrame = ref(); const clickDoor = ref()

    const drawing = () => {
      brush.value.style.pointerEvents = 'none'
      doorFrame.value.style.opacity = 1
      door.value.style.opacity = 1
      gsap.set([top.value, right.value, bottom.value, left.value], { opacity: 1 })
      gsap.to(brush.value, { xPercent: 160, duration: 1 })
      gsap.to(top.value, { scaleX: 1, duration: 1 }, '<')
      gsap.to(brush.value, { rotate: 90, duration: 0.3 }, '>')
      gsap.to(brush.value, { xPercent: 170, yPercent: 60, duration: 0.3 }, '<')
      gsap.to(brush.value, { yPercent: 255, duration: 1 }, '>')
      gsap.to(right.value, { scaleY: 1, duration: 1 }, '<')
      gsap.to(brush.value, { rotate: 180, duration: 0.3 }, '>')
      gsap.to(brush.value, { xPercent: 80, yPercent: 270, duration: 0.3 }, '<')
      gsap.to(brush.value, { xPercent: -78, duration: 1 }, '>')
      gsap.from(bottom.value, { scaleX: 0, transformOrigin: 'right', duration: 1 }, '<')
      gsap.to(brush.value, { rotate: 0, duration: 0.3 }, '>')
      gsap.to(brush.value, { xPercent: 0, yPercent: 190, duration: 0.3 }, '<')
      gsap.to(brush.value, { yPercent: 0, duration: 1 }, '>')
      gsap.from(left.value, { scaleY: 0, transformOrigin: 'bottom', duration: 1 }, '<')
      gsap.to(brush.value, { xPercent: 40, yPercent: 95, duration: 1 }, '>')
      gsap.to(handle.value, { opacity: 1, duration: 0.2 }, '>')
      gsap.to(brush.value, { xPercent: 150, yPercent: -80, opacity: 0, duration: 1 }, '>')
      gsap.to(openDoor.value, {
        fill: '#353900',
        duration: 1,
        onComplete () {
          setTimeout(() => {
            clickDoor.value.style.pointerEvents = 'auto'
          }, 1000)
        }
      }, '>')
      gsap.to(doorFrame.value, {
        rotateY: -45,
        transformOrigin: 'right',
        duration: 0.7,
        onComplete () {
          doorFrame.value.style.pointerEvents = 'none'
        }
      }, '>')
      gsap.to(dooor.value, {
        scaleX: 1.2,
        transformOrigin: 'right',
        duration: 0.7
      }, '<')
    }

    const goToDoor = () => {
      emit('scaleDoor')
      clickDoor.value.style.pointerEvents = 'none'
      gsap.to(doorFrame.value, {
        xPercent: -18,
        rotateY: -130,
        transformOrigin: 'right',
        duration: 3
      })
      setTimeout(() => {
        router.push({
          name: 'Scenery'
        })
      }, 5000)
    }

    onMounted(() => {
      gsap.set(brush.value, { left: '54.5%', top: '8%' })
      gsap.set(door.value, { left: '55%', top: '25%' })
      gsap.set(doorFrame.value, { left: '55%', top: '25%' })
      gsap.set(top.value, { scaleX: 0, yPercent: -3 })
      gsap.set(right.value, { scaleY: 0 })
      gsap.set([bottom.value, left.value, handle.value], { opacity: 0 })
      gsap.set(dooor.value, { scaleX: 0, xPercent: 100 })
    })
    return {
      brush,
      door,
      top,
      right,
      bottom,
      left,
      openDoor,
      handle,
      doorFrame,
      clickDoor,
      dooor,
      drawing,
      goToDoor
    }
  }
}
</script>
<style lang="scss" scoped>
span {
  svg {
    position: absolute;
  }
  .open {
    height: 40%;
    opacity: 0;
  }
  .brush {
    height: 20%;
    cursor: pointer;
  }
  .open,
  .clickDoor {
    pointer-events: none;
    cursor: pointer;
  }
}
</style>
