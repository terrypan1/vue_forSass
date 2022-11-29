<script setup>
import { ref, onMounted, getCurrentInstance, watchEffect } from 'vue'
import img1 from '../../assets/Swiper/swiper1.png'
import img2 from '../../assets/Swiper/swiper2.png'
import img3 from '../../assets/Swiper/swiper3.png'
import img4 from '../../assets/Swiper/swiper4.png'
import img5 from '../../assets/Swiper/swiper5.png'
const { proxy, ctx } = getCurrentInstance()
const _this = ctx
const imgList = ref([
    img1, img2, img3, img4, img5
])
const index = ref(0)
const clearTime = ref(null)
// let imgWidth = ref(800)
// let imgHeight = ref(800)
const go = () => {
    _this.clearTime = setInterval(() => {
        index.value++
        if (index.value === imgList.value.length) {
            index.value = 0
        }
    }, 3000)
}
const clear = () => {
    clearInterval(_this.clearTime)
}
const upPage = () => {
    index.value--
    if (index.value < 0) {
        index.value = imgList.value.length - 1
    }
}
const nextPage = () => {
    index.value++
    if (index.value > imgList.value.length - 1) {
        index.value = 0
    }
}
onMounted(() => {
    window.addEventListener('resize', () => {
        // console.log(window.innerWidth/5);
        // imgWidth.value = window.innerWidth/5
        // imgHeight.value = window.innerHeight/5
        // console.log(imgWidth.value);
    })
    go()
})
</script>
<template>
    <div class="slide-content">
        <div class="slide-view" @mouseenter="clear" @mouseleave="go">
            <img v-for="(imgSrc, item) in imgList" :key="item" alt="" :src="imgSrc" width="700" v-show="item == index">
        </div>
        <div class="up-page" @click="upPage"></div>
        <div class="next-page" @click="nextPage"></div>
        <ul class="slide-index">
            <li v-for="(v, i) in imgList" :key="i" :class="index === i ? 'active' : ''">
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.slide-content {
    position: relative;
    // width: 100%;
    margin: 50px auto;
    overflow: hidden;
    border-radius: 5px;

    img {
        width: pxToRem(500px);
    }

    ul {
        display: flex;
    }

    li {
        position: relative;
        list-style: none;
        margin-left: 5px;
        bottom: 40px;
        left: 40%;
        width: 15px;
        height: 15px;
        background-color: #fff;
        border-radius: 50%;
    }
}





.active {
    background-color: #333;
}

.up-page,
.next-page {
    position: absolute;
    top: 40%;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
}

.up-page {
    left: 1%;
}

.next-page {
    right: 1%;
}

@media (max-width: 768px) {}

@media (min-width: 769px) {}

@media (min-width: 992px) {}
</style>