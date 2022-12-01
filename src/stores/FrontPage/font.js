import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCanvasFontStore = defineStore('canvasFont', {
    state: () => {
        return {
            cl: false,
            ctx: false,
            clText: false,
            ctxText: false,
            ctxTimer: '',
            isShow: ref(true)
        }
    },
    actions: {
        drawText() {
            let fontList = ["wel|", "wel", "welcome |", "welcome ", "welcome to|", "welcome to", "welcome to my|", "welcome to my", "welcome to my Portfolio"] //welcome to my Portfolio
            this.clText = document.getElementById('text')
            this.ctxText = this.clText.getContext('2d')
            //設定寬高
            this.ctxText.canvas.width = window.innerWidth 
            this.ctxText.canvas.height = window.innerHeight 
            this.ctxText.font = '50px Microsoft YaHei'
            this.ctxText.fillStyle = '#fff'

            let index = 0
            this.ctxTimer = setInterval(() => {
                let poitionX = window.innerWidth/5
                let poitionY = window.innerHeight/2
                
                // console.log(poitionX,poitionY);
                // console.log(window.innerWidth);
                if (window.innerWidth < 650) {
                    poitionX = window.innerWidth/14
                    // poitionY = 200
                    console.log('執行了');
                    this.ctxText.font = '28px Microsoft YaHei'
                }
                else if(window.innerWidth < 768){
                    console.log('執行了');
                    poitionX = window.innerWidth/8
                    this.ctxText.font = '35px Microsoft YaHei'
                    console.log(poitionY);
                }
                this.ctxText.clearRect(0, 0, this.ctxText.canvas.width, this.ctxText.canvas.height)
                this.ctxText.fillStyle = '#fff'
                this.ctxText.fillText(`${fontList[index]}`, poitionX, poitionY)
                index++
                if (index > 8) {
                    index = 0
                }
            }, 500)
        },
        clearDraw() {
            setTimeout(() => {
                //console.log('執行了');
                clearInterval(this.ctxTimer)
            }, 8000)
        },
        Listener(){
            this.ctxText.canvas.width = window.innerWidth
            this.ctxText.canvas.height = window.innerHeight 
        }
    }
})