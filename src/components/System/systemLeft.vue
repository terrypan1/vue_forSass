<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'
import { Sunrise, Menu as IconMenu, VideoPlay, Link, Expand, House, BrushFilled, UserFilled, User } from "@element-plus/icons";//解決element icon 無法出來的問題 

//
onMounted(() => {

})
</script>
<template>
    <div class="nav-container">
        <nav class="nav">
            <ul class="nav-brand">
                <li>
                    <el-icon class="nav-brand-icon">
                        <Expand />
                    </el-icon>
                    <span class="nav-messageHeader">個人簡介</span>
                </li>
            </ul>
            <ul class="nav-list">
                <li class="nav-link" >
                    <RouterLink to="/system/index">
                        <el-icon class="nav-icon">
                            <House />
                        </el-icon>
                        <span class="nav-message">首頁</span>
                    </RouterLink>
                </li>
                <li class="nav-link" >
                    <RouterLink to="/system/person">
                        <el-icon class="nav-icon">
                            <UserFilled />
                        </el-icon>
                        <span class="nav-message">個人介紹</span>
                    </RouterLink>
                </li>
                <li class="nav-link" >
                    <RouterLink to="/system/work">
                        <el-icon class="nav-icon">
                            <icon-menu />
                        </el-icon>
                        <span class="nav-message">工作經驗</span>
                    </RouterLink>
                </li>
                <li class="nav-link" >
                    <RouterLink to="/system/slot">
                        <el-icon class="nav-icon">
                            <BrushFilled />
                        </el-icon>
                        <span class="nav-message">SlotGame</span>
                    </RouterLink>
                </li>
                <li class="nav-link" >
                    <RouterLink to="/system/weather">
                        <el-icon class="nav-icon">
                            <Sunrise />
                        </el-icon>
                        <span class="nav-message">Weather</span>
                    </RouterLink>
                </li>
                <li class="nav-link" >
                    <RouterLink to="/system/game">
                        <el-icon class="nav-icon">
                            <VideoPlay />
                        </el-icon>
                        <span class="nav-message">BowaGame</span>
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
@import '../../assets/styles/system/systemLeft.scss';
</style>