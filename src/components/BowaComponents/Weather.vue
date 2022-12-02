<script setup>
import { onMounted } from 'vue';
import axios from 'axios'
import { useWeatherStore } from '../../stores/System/weather'
const store = useWeatherStore()
//
onMounted(() => {
    store.setNowTime()
    store.axiosWeather()
})
</script>
<template>
    <div class="flex-weather">
        <div class="weather-container">
            <div class="nowTime"></div>
            <div class="location"></div>
            <div class="tempList"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../../assets/styles/system/weather.scss';
</style>