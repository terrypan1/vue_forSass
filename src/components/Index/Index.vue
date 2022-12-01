<script setup>
import Swiper from '../Resume/Swiper.vue'
</script>
<template>
    <div class="container">
        <!-- <div class="resume-header">
            <div class="resume-header-link">
                <RouterLink to="/system/index">登陸</RouterLink>
                <RouterLink to="/layout/slot">技能</RouterLink>
                <RouterLink to="/layout/weather">工作經歷</RouterLink>
                <RouterLink to="/layout/game">Vue</RouterLink>
            </div>
        </div> -->
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


@media only screen and (max-width:768px) {
    $root-font-size: 10px;
    html {
        font-size: $root-font-size;
    }
    .resume-main {
        flex-direction: column-reverse;
    }

}

@media only screen and (min-width:769px) {
    $root-font-size: 10px;

    html {
        font-size: $root-font-size;
    }
    .resume-main {
        flex-direction: column-reverse;
     }
     .container {
        margin-bottom: 100px;
     }
}

@media only screen and (min-width:992px) {
    $root-font-size: 12px;

    html {
        font-size: $root-font-size;
    }
    .resume-main {
        flex-direction: row;
     }
}

.container {
    width: 100%;
    height: pxToRem(350px);
    overflow: hidden;
    @include flex-box-colum();

    .resume-header {
        flex: 1;
        position: fix;
    }

    .resume-main {
        width: 100%;
        flex: 8;
    }
}

.resume-header {
    @include flex-box-row();

    &-link>a {
        color: black;
        padding: pxToRem(20px);
        font-size: pxToRem(20px);
        font-weight: 700;
    }

}

.resume-main {
    display: flex;
    &-message {
        @include flex-box-colum();
        flex: 1;
        color: black;
        font-weight: 700;
        h5 {
            font-size: pxToRem(30px) ;
        }
        span {
            font-size: pxToRem(16px) ;
        }
    }

    &-footer {
        flex: 1;
        @include flex-box-colum();
    }
}
</style>