<script setup>
import Swiper from '../../components/Resume/Swiper.vue'
</script>
<template>
    <div class="flex-container">
        <div class="container">
            <div class="resume-main">
                <div class="resume-main-message">
                    <h5>About Me</h5><br>
                    <span class="front">我是潘建宇(Pan CHIEN-YU)</span><br>
                    <span class="aboutMe">於2022年轉職前端，</span><br>
                    <span class="aboutMe">希望從事網頁工程師，</span><br>
                    <span class="aboutMe">目前多使用Vue3為主</span>
                </div>
                <div class="resume-main-footer">
                    <Swiper class="swiper"></Swiper>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss">
@import '../../assets/styles/system/person.scss'
</style>