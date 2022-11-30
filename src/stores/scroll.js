import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
    state: () => {
        return {
            nameScroll: ref(true),

        }
    },
    actions: {
        scrollHandle() {
            console.log('滾了');
            const scrollHeight = document.body.scrollHeight;
            const scrollTop =
                document.body.scrollTop || document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const distance = scrollHeight - scrollTop - clientHeight
            console.log(distance)
        },
    }
})