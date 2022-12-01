import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSliderStore = defineStore('slider', {
    state: () => {
        return {
          isIndex:ref(false)
        }
    },
    actions: {

    }
})