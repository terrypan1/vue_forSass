<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { useSlotStore } from '../../stores/System/slot'
const store = useSlotStore()
const $result1 = ref('');
const $result2 = ref('');
const $result3 = ref('')
let timer = ref('')
let $endResult = ref('')
let isDisable = ref(false)
const btnST = () => {
    timer = setInterval(() => {
        $result1.value[0].innerHTML = store.items[Math.floor(Math.random() * store.items.length)]
        $result2.value[0].innerHTML = store.items[Math.floor(Math.random() * store.items.length)]
        $result3.value[0].innerHTML = store.items[Math.floor(Math.random() * store.items.length)]
    }, 50)
    isDisable.value = true
}
const btnEnd = () => {
    clearInterval(timer)
    checkResult()
}
const checkResult = () => {
    if ($result1.value[0] === $result1.value[1] && $result1.value[1] === $result1.value[2]) {
        $endResult.value.innerHTML = '贏了'
    } else {
        $endResult.value.innerHTML = '輸了'
    }
}
const btnAg = () => {
    location.reload()
}
store.getItem()
onMounted(() => {

})
onUnmounted(() => {
    store.endItem()
})
</script>
<template>
    <div class="flex-slot">
        <div class="slot-container">
            <div v-for="(todo, index) in store.result1" :key="index" class="result1" ref="$result1">{{ todo }}</div>
            <div v-for="(todo, index) in store.result2" :key="index" class="result2" ref="$result2">{{ todo }}</div>
            <div v-for="(todo, index) in store.result3" :key="index" class="result3" ref="$result3">{{ todo }}</div>
            <button class="btnSt" @click="btnST" :disabled="isDisable">開始</button>
            <button class="btnEd" @click="btnEnd">結束</button>
            <div class="endResult" ref="$endResult">結果</div>
            <button class="btnAg"  @click="btnAg">再一次</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.slot-container {
    background-image: url('../../assets/Whiskey.jpg');
    background-size: contain;
} 
@import '../../assets/styles/system/slot.scss';
</style>