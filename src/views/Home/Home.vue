<script setup>
import Resume from '../../components/Resume/Resume.vue'
import Content from '../../components/Content/Content.vue'
import WorkExperience from '../../components/WorkExperience/WorkExperience.vue'
import Footer from '../../components/Footer/Footer.vue'
import { onMounted, ref, onUnmounted } from 'vue'
//
const isContent = ref(false)
const isworkExperience = ref(false)
let loading = false
//function
const scrollHandle = () => {
    //console.log('滾了');
    const scrollHeight = document.body.scrollHeight;
    const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const distance = scrollHeight - scrollTop - clientHeight
    // console.log(distance)
    if(distance>900) {
        loading = true
    }
    if (distance < 1942) {
        isContent.value = true
    }
    if (loading===true && distance < 625) {
        isworkExperience.value = true
    }
}
const resize = ()=>{
    console.log(window.innerWidth);
    if(window.innerWidth<993){
        isContent.value = true
        isworkExperience.value = true
        // console.log('動了');
    }
}
onMounted(() => {
    window.addEventListener("scroll", scrollHandle)
    //監聽螢幕變化
    window.addEventListener("resize", resize);
})
onUnmounted(() => {
    window.removeEventListener("scroll", scrollHandle)
    window.removeEventListener("scroll", resize)
})
</script>

<template>
    <Resume></Resume>
    <Transition name="content">
        <Content v-if="isContent" class="content"></Content>
    </Transition>
    <Transition name="workExperience">
        <WorkExperience v-if="isworkExperience"></WorkExperience>
    </Transition>
    <Footer></Footer>
</template>

<style lang="scss">
@import '../../assets/styles/home.scss';
</style>