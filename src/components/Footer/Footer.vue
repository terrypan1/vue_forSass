<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Right, Back } from "@element-plus/icons"
const router = useRouter()
const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
const backTop = () => {
    let timer =
        setInterval(() => {
            document.documentElement.scrollTop -= 10
            if (document.documentElement.scrollTop <= 0) {
                // console.log('停了')
                clearInterval(timer)
            }
        }, 10)
}
const isLeft = ref(false);
const isMiddle = ref(false)
const isRight = ref(false)
const isReverse = ref(false)
const isReverseBack = ref(false)
const isBack = ref(false)
const sliderRight = () => {
    isRight.value = false
    isMiddle.value = !isMiddle.value
    isLeft.value = !isLeft.value
    isReverseBack.value = !isReverseBack.value
}
const sliderMiddle = () => {
    isRight.value = false
    isLeft.value = false
    isMiddle.value = !isMiddle.value
    isReverse.value = !isReverse.value
    isBack.value = !isBack.value
}
onMounted(() => {

})
</script>
<template>
    <div class="foot-container">
        <div class="anchor-header">
            <span @click="backTop">Back Top</span>
        </div>
        <div class="footer-main" :class="{ moveLeft: isLeft, moveMiddle: isMiddle, moveright: isRight }">
            <div class="main-header">
                <div class="main-header-title">
                    <span class="titleFont">JS</span>
                    <div class="titlebg1"></div>
                    <div class="titlebg2"></div>
                </div>
            </div>
            <div class="main-container">
                <div class="slot">
                    <div class="box">
                        <div class="box-header">
                            <RouterLink to="/system/slot" class="box-title">Slot Game</RouterLink>
                        </div>
                        <div class="box-main">
                            <div class="box-mainLeft">
                                <ul class="font">
                                    <li>#JS</li>
                                    <li>#RANDOM</li>
                                </ul>
                            </div>
                            <div class="box-mainRight">
                                <img class="mainRight-Img" src="../../assets/slot.png" alt="">
                                <img class="Phone" src="../../assets/slotPhone.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="game">
                    <div class="box">
                        <div class="box-header">
                            <RouterLink to="/system/game" class="box-title">Slot Game</RouterLink>
                        </div>
                        <div class="box-main">
                            <div class="box-mainLeft">
                                <ul class="font">
                                    <li>#JS</li>
                                    <li>#ARRAY</li>
                                </ul>
                            </div>
                            <div class="box-mainRight">
                                <img class="mainRight-Img" src="../../assets/game.png" alt="">
                                <img class="Phone" src="../../assets/gamePhone.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="weather">
                    <div class="box mr">
                        <div class="box-header">
                            <RouterLink to="/system/weather" class="box-title">Slot Weather</RouterLink>
                        </div>
                        <div class="box-main">
                            <div class="box-mainLeft">
                                <ul class="font">
                                    <li>#JS</li>
                                    <li>#AXIOS</li>
                                </ul>
                            </div>
                            <div class="box-mainRight">
                                <img class="mainRight-Img" src="../../assets/weather.png" alt="">
                                <img class="Phone" src="../../assets/weatherPhone.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scrollAll">
            <el-row :gutter="10">
                <el-col :span="8" :offset="10" class="scroll" @click="sliderMiddle">
                    <div>
                        <span class="scroll-message">Scroll</span>
                    </div>
                    <div>
                        <el-icon class="scroll-icon" :class="{ reverse: isReverse }">
                            <Right />
                        </el-icon>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div @click="sliderRight">
                        <el-icon class="scroll-icon scroll-iconRight" v-if="isBack"
                            :class="{ reverseBack: isReverseBack }">
                            <Right />
                        </el-icon>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="scss">
@import '../../assets/styles/footer.scss';
</style>