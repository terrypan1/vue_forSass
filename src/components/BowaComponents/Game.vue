<script setup>
import { ref, onMounted, getCurrentInstance, onUnmounted } from 'vue'
import { useGameStore } from '../../stores/System/game'

const store = useGameStore()
onMounted(() => {
    store.blockInit()
    store.blockRender()
    store.boxCreate()
    store.boxRender()
    store.boxMove()
    store.playerCreate()
    store.playerRender()
    store.boxListener()
    //監聽
    store.block.elListMove = document.querySelectorAll('.worldBlock')
    for (let i = 0; i < store.block.xy.length; i++) {
        store.block.elListMove[i].addEventListener('click', function (e) {
            store.player.elList.style.top = e.target.style.top
            store.player.elList.style.left = e.target.style.left
        })
    }
})

</script>
<template>
    <div class="world" id="world">
    </div>
</template>
<style>
.world {
    position: relative;
    margin: auto;
    width: 500px;
    height: 500px;
    background-color: #ccc;
}

.worldBlock {
    position: absolute;
    width: 50px;
    height: 50px;
    background-image: url('../../assets/Bowa/ground0.jpg');
    background-size: contain;

    background-color: block;
    border: 1px solid black;
}

.worldBox {
    position: absolute;
    width: 50px;
    height: 50px;
    background-image: url('../../assets/Bowa/treasureChest.png');
    background-size: contain; 
    z-index: 1;
    transition: all .5s;
    animation: scale 2s infinite;
}

.worldPlayer {
    position: absolute;
    z-index: 2;
    background: url(../../assets/Bowa/wa.png) no-repeat;
    background-size: cover;
    animation: scale 2s infinite;
}

@keyframes scale {
    0% {
        transform: scaleX(0.9) scaleY(1.2);
    }

    100% {
        transform: scaleX(1) scaleY(1);
    }
}
</style>