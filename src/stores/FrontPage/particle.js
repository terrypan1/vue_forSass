import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCanvasParticleStore = defineStore('canvasParticle', {
    state: () => {
        return {
            clParticle: false,
            ctxParticle: false,
            maxSize: 40,
            minSize: 0,
            particles: [],
            clearDrawTimer:false,
            clearundefinedTimer:false,
            mouse: {
                x: null,
                y: null,
                radius: 60
            },
            colors: [
                'white',
                'rgba(255,255,255,0.3)',
                'rgba(173,216,320,0.8)',
                'rgba(211,211,211,0.8)',
            ]
        }
    },
    actions: {
        createCtx(idName) {
            this.cl = document.getElementById(idName)
            this.ctx = this.cl.getContext('2d')
            this.ctx.canvas.width = window.innerWidth
            this.ctx.canvas.height = window.innerHeight
        },
        init() {
            this.particles = []
            for (let i = 0; i < 1000; i++) {
                let size = 50
                this.particles[i] = {
                    x: (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2),
                    y: (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2),
                    directionX: (Math.random() * 0.2) - 0.1,
                    directionY: (Math.random() * 0.2) - 0.1,
                    size: 10,
                    color: this.colors[Math.floor(Math.random() * this.colors.length)]
                }
                //console.log(this.particles[i]);
            }
        },
        draw() {
            for (let i = 0; i < 1000; i++) {
                this.ctx.beginPath()
                this.ctx.arc(this.particles[i].x, this.particles[i].y, this.particles[i].size, 0, Math.PI * 2, false)
                this.ctx.fillStyle = this.particles[i].color
                this.ctx.fill()
            }
        },
        particlesMove() {
            for (let i = 0; i < 1000; i++) {
                if (this.mouse.x - this.particles[i].x < this.mouse.radius && this.mouse.x - this.particles[i].x > -this.mouse.radius &&
                    this.mouse.y - this.particles[i].y < this.mouse.radius && this.mouse.y - this.particles[i].y > -this.mouse.radius) {
                    if (this.particles[i].size < this.maxSize) {
                        this.particles[i].size += 1
                    }
                }
                else if (this.particles[i].size > this.minSize) {
                    this.particles[i].size -= 1
                }
                this.particles[i].x += this.particles[i].directionX
                this.particles[i].y += this.particles[i].directionY
                if (this.mouse.x === null || this.mouse.y === null) {
                    this.particles[i].size = 0
                }
            }
        },
        clearDraw() {
            this.clearDrawTimer = setInterval(() => {
                //清除畫布
                this.ctx.clearRect(0, 0, this.cl.width, this.cl.height)
                this.particlesMove()
                this.draw()
            }, 10)
        },
        Listener(){
            this.ctx.canvas.width = window.innerWidth
            this.ctx.canvas.height = window.innerHeight 
        }
        
    }
})