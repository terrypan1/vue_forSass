<script setup>
import Swiper from './Swiper.vue'
</script>
<template>
    <div class="container">
        <div class="resume-header">
            <div class="resume-header-link">
                <RouterLink to="/system/person">登陸</RouterLink>
                <RouterLink to="/system/person">技能</RouterLink>
                <RouterLink to="/system/person">工作經歷</RouterLink>
                <RouterLink to="/system/person">Vue</RouterLink>
            </div>
        </div>
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
</template>
<style lang="scss">
@import '../../assets/styles/resume.scss';
</style>

