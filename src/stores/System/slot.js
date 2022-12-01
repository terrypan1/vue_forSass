import { defineStore } from 'pinia'
import { ref } from 'vue';



export const useSlotStore = defineStore('slot', {
    state: () => {
        return {
            result1: ref([]),
            result2: ref([]),
            result3: ref([]),
            items: ['白葡萄酒', '葡萄酒', '威士忌', '啤酒', '清酒'],
            result1El: ref(''),
            result2El: ref(''),
            result3El: ref(''),
        }
    },
    actions: {
        //隨機生成變數
        getItem() {
            this.result1.push(this.items[Math.floor(Math.random() * this.items.length)])
            this.result2.push(this.items[Math.floor(Math.random() * this.items.length)])
            this.result3.push(this.items[Math.floor(Math.random() * this.items.length)])
        },
        endItem() {
            this.result1 = []
            this.result2 = []
            this.result3 = []
        }
    }
})