<script setup>
import SystemHeader from '../../components/System/systemHeader.vue'
import SystemLeft from '../../components/System/systemLeft.vue'
import SystemRight from '../../components/System/systemRight.vue'
import { useSliderStore } from '../../stores/System/slider'
const store = useSliderStore()
</script>
<template>
    <div class="system-container">
        <div class="system-left" :class="{ systemLeftSlider: store.isIndex }">
            <SystemLeft></SystemLeft>
        </div>
        <div class="system-right" :class="{ systemRightSlider: store.isIndex }">
            <SystemHeader class="system-right-header"></SystemHeader>
            <SystemRight class="system-right-main"></SystemRight>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../../assets/styles/system/home.scss';
</style>