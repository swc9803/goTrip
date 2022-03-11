<template>
  <div class="container" ref="mainContainer">
    <transition name="textFade">
      <p v-show="pData">따분한 집콕 생활 지겨우신가요?</p>
    </transition>
    <svg ref="appear" class="appear" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 403">
      <path fill="#FAFF00" d="m346.33 46.8 16.55 16.55-92.54 92.55-16.56-16.55zM48.95 63.35 65.5 46.8l92.55 92.54-16.56 16.56zM194.19.51h23.41v130.88h-23.41zM194.19 272.12h23.41V403h-23.41zM253.78 263.4l16.55-16.55 92.55 92.54-16.55 16.56zM280.12 217.32V193.9H411v23.4zM0 217.32V193.9h130.88v23.4zM141.5 246.85l16.55 16.56-92.55 92.54-16.55-16.55z"/>
    </svg>
    <Brush v-show="brushData" class="draw"
      @scaleDoor="scaleDoor"
    />
    <div ref="restitution" />
  </div>
</template>

<script>
import Brush from '@/components/Brush'
import Matter from 'matter-js'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
gsap.registerPlugin(CustomEase)
export default {
  components: {
    Brush
  },
  setup () {
    const pData = ref(false)
    const brushData = ref(false)
    const restitution = ref()
    const mainContainer = ref()
    const appear = ref()
    const scaleDoor = () => {
      if (matchMedia('(max-width: 850px)').matches) {
        gsap.to(mainContainer.value, {
          scale: 10,
          transformOrigin: '66% 47%',
          ease: CustomEase.create('custom', 'M0,0,C0.5,0,0.836,0.047,0.88,0.073,0.975,0.13,0.9,0.23,1,1'),
          duration: 5
        })
      } else {
        gsap.to(mainContainer.value, {
          scale: 15,
          transformOrigin: '61% 47%',
          ease: CustomEase.create('custom', 'M0,0,C0.5,0,0.836,0.047,0.88,0.073,0.975,0.13,0.9,0.23,1,1'),
          duration: 5
        })
      }
    }
    onMounted(() => {
      gsap.set(appear.value, {
        scale: 3,
        left: '55.7%',
        top: '13%',
        opacity: 0
      })
      setTimeout(() => {
        pData.value = true
        setTimeout(() => {
          pData.value = false
        }, 2000)
      }, 4000)
      setTimeout(() => {
        brushData.value = true
        gsap.fromTo(appear.value, { opacity: 1 }, {
          scale: 5,
          opacity: 0
        })
      }, 7500)
      var Engine = Matter.Engine
      var Render = Matter.Render
      var Runner = Matter.Runner
      var MouseConstraint = Matter.MouseConstraint
      var Mouse = Matter.Mouse
      var Composite = Matter.Composite
      var Bodies = Matter.Bodies
      var wWidth = innerWidth
      var wHeight = innerHeight

      // create engine
      var engine = Engine.create()
      engine.world.gravity.y = 0.7
      var world = engine.world

      // create renderer
      var render = Render.create({
        element: restitution.value,
        engine: engine,
        options: {
          width: wWidth,
          height: wHeight,
          wireframes: false
        }
      })
      Render.run(render)
      var runner = Runner.create()
      Runner.run(runner, engine)
      var space = wWidth / 5
      Composite.add(world, [
        Bodies.rectangle(100 + 0, 150, 70, 70, { restitution: 0.95, render: { fillStyle: 'darkgray' } }),
        Bodies.rectangle(100 + space * 1, 150, 40, 40, { restitution: 0.95, angle: -Math.PI * 0.15, render: { fillStyle: 'darkgray' } }),
        Bodies.circle(100 + space * 1.5, 150, 15, { restitution: 0.95, render: { fillStyle: 'darkgray' } }),
        Bodies.rectangle(100 + space * 2, 150, 50, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: 'darkgray' } }),
        Bodies.rectangle(100 + space * 2.1, 150, 30, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: 'darkgray' } }),
        Bodies.polygon(100 + space * 2.4, 150, 3, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: 'darkgray' } }),
        Bodies.polygon(100 + space * 2.8, 150, 3, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: 'darkgray' } }),
        Bodies.polygon(100 + space * 2.6, 150, 6, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: 'darkgray' } }),
        Bodies.circle(100 + space * 3, 150, 25, { restitution: 0.95, render: { fillStyle: 'darkgray' } }),
        Bodies.circle(100 + space * 3.5, 150, 25, { restitution: 0.95, render: { fillStyle: 'darkgray' } }),
        Bodies.rectangle(100 + space * 4.2, 150, 180, 20, { restitution: 0.95, angle: -Math.PI * 0.25, render: { fillStyle: 'darkgray' } }),
        Bodies.rectangle(100 + space * 4, 170, 180, 20, { restitution: 0.95, angle: -Math.PI * 0.25, render: { fillStyle: 'darkgray' } }),
        // walls
        Bodies.rectangle(wWidth / 2, wHeight, wWidth - 50, 50, { isStatic: true, render: { fillStyle: '#333333' } }),
        Bodies.rectangle(wWidth, wHeight / 2, 50, wHeight, { isStatic: true, render: { fillStyle: '#333333' } }),
        Bodies.rectangle(0, wHeight / 2, 50, wHeight, { isStatic: true, render: { fillStyle: '#333333' } })
      ])
      // add mouse control
      var mouse = Mouse.create(render.canvas)
      var mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      })
      Composite.add(world, mouseConstraint)
      render.mouse = mouse
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: wWidth, y: wHeight }
      })
    })
    return {
      pData,
      brushData,
      appear,
      restitution,
      mainContainer,
      scaleDoor
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/MainStyle';

.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #14151f;
  .appear {
    position: absolute;
    pointer-events: none;
    height: 10%;
    z-index: 2;
  }
  p {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 4rem;
    color: white;
    pointer-events: none;
  }
}
.textFade-enter-from,
.textFade-leave-to {
  opacity: 0;
}
.textFade-enter-active,
.textFade-leave-active {
  transition: 1s ease
}
</style>
