<script setup>
import { Expand } from "@element-plus/icons"
import { useSliderStore } from '../../stores/System/slider'
const store = useSliderStore()
//console.log(store.isCollapse);
const handelExpand = () => {
    store.handleMenu()
}
</script>
<template>
   <div class="systemHeader-container">
        <el-icon @click="handelExpand" class="expand">
            <Expand />
        </el-icon>
    </div>
</template>
<style lang="scss" scoped>
.systemHeader-container {
display: flex;
background-color: black;
}
</style>