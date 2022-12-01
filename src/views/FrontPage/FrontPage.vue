<script setup>
import { onMounted } from 'vue';
import FontPage from '../../components/FontPage/FontPage.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
onMounted(()=>{
    setTimeout(()=>{
        router.push('/home')
    },8000)
}) 
</script>
<template>
<FontPage class="fontPage"></FontPage>
</template>
<style lang="scss" scoped>

</style>