<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useCanvasParticleStore } from '../../stores/FrontPage/particle'
import { useCanvasFontStore } from '../../stores/FrontPage/font'
const storeFont = useCanvasFontStore()
const storeParticle = useCanvasParticleStore()

onMounted(() => {
    //文字特效
    storeFont.drawText()
    storeFont.clearDraw()
    //粒子特效
    storeParticle.createCtx('canvas')
    storeParticle.clearDraw()
    storeParticle.init()
    storeParticle.draw()
    storeParticle.particlesMove()
    //監聽
    window.addEventListener('mousemove', (e) => {
        storeParticle.mouse.x = e.x
        storeParticle.mouse.y = e.y
        // console.log(mouse.x, mouse.y);
    })
    window.addEventListener('mouseout', () => {
        storeParticle.mouse.x = undefined
        storeParticle.mouse.y = undefined
    })
    storeParticle.clearundefinedTimer =
        setInterval(() => {
            storeParticle.mouse.x = undefined
            storeParticle.mouse.y = undefined
        }, 1000)
    // 監聽畫面變化
    window.addEventListener("resize", storeParticle.Listener);
    // window.addEventListener("resize", storeFont.Listener);
})
onUnmounted(() => {
    window.removeEventListener("resize",storeParticle.Listener)
})
</script>
<template>
    <canvas id="canvas"></canvas>
    <canvas id="text"></canvas>
</template>
<style lang="scss" scoped>
#canvas {
    position: absolute;
    background-color: black;
    overflow: hidden;
}

#text {
    position: absolute;
    z-index: 1;
}
</style>