<script setup>
import { Expand } from "@element-plus/icons"
import { ref } from "vue";
import { useSliderStore } from '../../stores/System/slider'
const store = useSliderStore()
//console.log(store.isCollapse);
const handelExpand = () => {
    store.handleMenu()
}
</script>
<template>
   <div class="container">
        <el-icon @click="handelExpand" class="expand">
            <Expand />
        </el-icon>
    </div>
</template>
<style lang="scss" scoped>
.container {
height: 80px;
background-color: black;
}
</style>