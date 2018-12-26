<template>
  <div class="contentDiv9">
    <div class="box">
      <div v-for="imgLi in prizeList" :key="imgLi.picUrlDesc" ref="pice"
           :style="{'backgroundImage':'url('+imgLi.bgSrc+')'}">
        <img :src="imgLi.picUrlDesc"/>
      </div>
    </div>
  </div>
</template>

<script>
  import noSelect from '@/assets/lottery9/border.png'
  import isSelect from '@/assets/lottery9/borderSelect.png'
  export default {
    name: "turntable",
    data() {
      return {
        prizeList: [
          {prizeName: "奖品1",bgSrc: require('@/assets/lottery9/border.png'),picUrlDesc: require("@/assets/lottery9/11.jpg")},
          {prizeName: "奖品2", bgSrc: require('@/assets/lottery9/border.png'),picUrlDesc: require("@/assets/lottery9/12.jpg")},
          {prizeName: "奖品3",bgSrc: require('@/assets/lottery9/border.png'),picUrlDesc: require("@/assets/lottery9/13.jpg")},
          {prizeName: "奖品4",bgSrc: require('@/assets/lottery9/border.png'),picUrlDesc: require("@/assets/lottery9/14.jpg")},
          {prizeName: "抽奖按钮",bgSrc: require('@/assets/lottery9/border1.png'),picUrlDesc: require("@/assets/lottery9/prizeBtnIng.png")},
          {prizeName: "奖品5",bgSrc: require('@/assets/lottery9/border.png'), picUrlDesc: require("@/assets/lottery9/15.jpg")},
          {prizeName: "奖品6",bgSrc: require('@/assets/lottery9/border.png'), picUrlDesc: require("@/assets/lottery9/16.jpg")},
          {prizeName: "奖品7",bgSrc: require('@/assets/lottery9/border.png'), picUrlDesc: require("@/assets/lottery9/17.jpg")},
          {prizeName: "奖品8",bgSrc: require('@/assets/lottery9/border.png'), picUrlDesc: require("@/assets/lottery9/18.jpg")}],
        timer1: '',//控制快速旋转的定时器
        timer2: '',//控制慢速旋转的定时器
        prizeIndex: 0,//转动到的位置
        arrNum: [0, 1, 2, 5, 8, 7, 6, 3], // 定义转动的顺序
        stopIndex: '',//停止的位置
        clickFlage: true,//是否能点击进行抽奖
        prize: '',//奖品
      }
    },
    mounted() {
      this.drawPrize()
    },
    methods: {
      drawPrize() {
        this.$refs.pice[4].onclick = () => {
          if (this.clickFlage) {
            this.clickFlage = false;
            this.timer1 = setInterval(this.move, 100);
            setTimeout(() => {
              clearInterval(this.timer1);
              this.lowSpeed()//转一圈半之后降速
            }, 1400)
          }
        }
      },
      move() {
        if (this.prizeIndex === 0) {
          this.$refs.pice[this.arrNum[7]].style.backgroundImage = 'url(' + noSelect + ')';
          this.$refs.pice[this.arrNum[this.prizeIndex]].style.backgroundImage = 'url(' + isSelect + ')';
          this.prizeIndex++
        } else if (this.prizeIndex === 8) {
          this.prizeIndex = 0;
          this.$refs.pice[this.arrNum[7]].style.backgroundImage = 'url(' + noSelect + ')';
          this.$refs.pice[this.arrNum[this.prizeIndex]].style.backgroundImage = 'url(' + isSelect + ')';
          this.prizeIndex++
        } else {
          this.$refs.pice[this.arrNum[this.prizeIndex - 1]].style.backgroundImage = 'url(' + noSelect + ')';
          this.$refs.pice[this.arrNum[this.prizeIndex]].style.backgroundImage = 'url(' + isSelect + ')';
          this.prizeIndex++
        }
        if (this.stopIndex && this.prizeIndex == this.stopIndex) {
          clearInterval(this.timer1);
          clearInterval(this.timer2);
        }
      },
      lowSpeed() {
        clearInterval(this.timer1);
        this.clickFlage = false;
        this.timer2 = setInterval(this.move, 300);
        this.stopIndex = Math.floor(Math.random() * 8 + 1); // 产生1-8的随机数(奖品序号)
        if (this.prizeIndex === 4) {
          this.prizeIndex = this.prizeIndex + 1
        }
        console.log('prize--' + this.prizeIndex + 'stopIndex--' + this.stopIndex)
      },
    },
  }
</script>

<style lang="less" scoped>
  .contentDiv9 {
    position: relative;
    width: 35rem;
    height: 35rem;
    .box {
      margin: 0.95rem auto;
      width: 35rem;
      height: 35rem;
      padding: 0.35rem;
      background-color: red;
      border: 0.15rem solid transparent;
      border-radius: 0.2rem;
      box-sizing: border-box;
      position: relative;
      background: linear-gradient(white, white) padding-box,
      repeating-linear-gradient(45deg, #ff9508 0%, #ff9508 4.6%, #ffd800 0, #ffd800 10%) 0 / 8.5rem 8.5rem;
      div {
        background-size: 100%;
        float: left;
        width: 11rem;
        height: 11rem;
        margin-right: 0.25rem;
        margin-bottom: 0.25rem;
        position: relative;
        &:nth-child(3n) {
          margin-right: 0;
        }
        &:nth-child(7),
        &:nth-child(8),
        &:nth-child(9) {
          margin-bottom: 0;
        }
        box-sizing: border-box;
        img {
          width: 5rem;
          height: 5rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
</style>
