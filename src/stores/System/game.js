import { defineStore } from 'pinia'
import treasureChestOpen from '@/assets/Bowa/treasureChestOpen.png'
export const useGameStore = defineStore('game', {
    state: () => {
        return {
            block: {
                el: false,
                elList: [],
                x: 0,
                y: 0,
                xy: [],
                elListMove:false
            },
            box: {
                x: 0,
                y: 0,
                el: false,
                elList: [],
                width: 50,
                height: 50,
                elListMove: false,
                elListOpen: false,
            },
            player: {
                x: 0,
                y: 0,
                el: false,
                elList: [],
                speed: 50,
                width: 50,
                height: 50,
            }
        }
    },
    actions: {
        random(i) {
            return Math.floor(Math.random() * i)//i-1
        },
        blockInit() {
            for (let i = 0; i <= 9; i++) {
                for (let j = 0; j <= 9; j++) {
                    this.block.x = i * 50
                    this.block.y = j * 50
                    this.block.xy.push([this.block.x, this.block.y])
                }
            }
        },
        blockRender() {
            for (let i = 0; i < this.block.xy.length; i++) {
                this.block.el = document.createElement('div')
                this.block.el.classList.add('worldBlock')
                this.block.elList[i] = this.block.el
                this.block.elList[i].style.top = this.block.xy[i][0] + 'px'
                this.block.elList[i].style.left = this.block.xy[i][1] + 'px'
                // this.block.elList[i].style.background = 'url(../../assets/Bowa/ground0.jpg) no-repeat'
                // this.block.elList[i].style.backgroundSize = 'contain'
                document.querySelector('.world').appendChild(this.block.elList[i])
            }
        },
        boxCreate() {
            this.box.el = document.createElement('div');
            this.box.el.classList.add('worldBox')
            this.box.elList = this.box.el
            this.box.elList.style.width = this.box.el.width + 'px'
            this.box.elList.style.height = this.box.el.height + 'px'
        },
        boxRender() {
            this.box.x = this.random(10) * 50;
            this.box.y = this.random(10) * 50;
            this.box.elList.style.top = this.box.y + 'px'
            this.box.elList.style.left = this.box.x + 'px'
            // this.box.elList.style.background = 'url(src/assets/Bowa/treasureChest.png) no-repeat'
            // this.box.elList.style.backgroundSize = 'cover'
            //console.log(this.box.elList);
            document.querySelector('.worldBlock').appendChild(this.box.elList)
        },
        boxMove() {
            setInterval(() => {
                let randomXY = this.random(4)
                if (randomXY === 0) {
                    this.box.elList.style.left = this.box.x + 'px'
                    this.box.x += 50
                    if (this.box.x >= 500) {
                        this.box.x = 0
                    }
                } else if (randomXY === 1) {
                    this.box.elList.style.left = this.box.x + 'px'
                    this.box.x -= 50
                    if (this.box.x <= -50) {
                        this.box.x = 450
                    }
                } else if (randomXY === 2) {
                    this.box.elList.style.top = this.box.y + 'px'
                    this.box.y += 50
                    if (this.box.y >= 500) {
                        this.box.y = 0
                    }
                } else if (randomXY === 3) {
                    this.box.elList.style.top = this.box.y + 'px'
                    this.box.y -= 50
                    if (this.box.y <= -50) {
                        this.box.y = 450
                    }
                }
                if (this.box.elList.style.top === this.player.elList.style.top && this.box.elList.style.left === this.player.elList.style.left) {
                    // console.log('碰到了');
                    this.box.elListMove.style.background = `url(${treasureChestOpen}) no-repeat`
                    this.box.elListMove.style.backgroundSize = 'cover'
                    this.box.elListOpen = true;
                    this.boxCollision()
                }
            },1000)
        },
        boxCollision() {
            if (this.box.elListOpen === true) {
                setTimeout(() => {
                    // console.log('兩秒後重新生成');
                    this.box.elList.remove()
                    this.box.elListOpen = false;
                    this.boxCreate()
                    this.boxRender()
                    this.boxListener()
                }, 1000)
            }
        },
        boxListener(){
            this.box.elListMove = document.querySelector('.worldBox')
            this.box.elListMove.addEventListener('click',this.boxListener)  
        },
        playerCreate() {
            this.player.el = document.createElement('div')
            this.player.el.classList.add('worldPlayer')
            this.player.elList = this.player.el
            this.player.elList.style.width = this.player.width + 'px'
            this.player.elList.style.height = this.player.height + 'px'
        },
        playerRender() {
            this.player.elList.style.top = this.player.x + 'px'
            this.player.elList.style.left = this.player.y + 'px'
            document.querySelector('.world').appendChild(this.player.elList)
        }

    }
})
