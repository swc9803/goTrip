<template>
  <div class="contents">
    <div class="cardFlex">
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
    <div class="cardFlex">
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
  height: 100vh;
  display: flex;
  justify-content: space-around;
  .cardFlex {
    perspective: 3000px;
    .card {
      position: relative;
      margin: 1em;
      width: 300px;
      height: 200px;
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
