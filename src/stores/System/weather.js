import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { getGovment } from '../../http/api/govment'
export const useWeatherStore = defineStore('weather', {
    state: () => {
        return {
            block: {
                nowTime: false,
                country: false,
                location: false,
                tempList: [
                    // [時間,溫度,說明],
                ],
            }
        }
    },
    actions: {
        //現在時間 
        setNowTime() {
            let elNowTime = document.querySelector('.nowTime');
            this.block.nowTime = new Date().toLocaleString()
            elNowTime.innerHTML = `現在時間${this.block.nowTime}`;
        },
        //地點
        setLocation() {
            let elLocation = document.querySelector('.location');
            elLocation.innerHTML = `所在位置 ${this.block.country} ${this.block.location}`;
        },
        //
        setData(res) {
            this.block.country = res.data.records.locations[0].locationsName
            this.block.location = res.data.records.locations[0].location[0].locationName
            let temp = res.data.records.locations[0].location[0].weatherElement[3].time
            //console.log(temp);
            temp.forEach((item, key) => {
                // console.log(item.dataTime,item.elementValue[0].value,item.elementValue[0].measures);
                // console.log(this.block.tempList);
                this.block.tempList.push([
                    item.dataTime,
                    item.elementValue[0].value,
                    item.elementValue[0].measures,
                    res.data.records.locations[0].location[0].weatherElement[6].time[key].elementValue[0].value
                ])
            });
            // console.log(this.block.tempList);
        },
        createEl(className){
            let el = document.createElement('div');
            el.classList.add(className);
            return el;
        },
        setTempList() {
            let elTempList = document.querySelector('.tempList');
            this.block.tempList.forEach((item, key) => {
                let elTemp = this.createEl('temp')
                let elTime = this.createEl('time')
                let elC = this.createEl('centigrade')
                let elD = this.createEl('description')
                // //
                let count = (25 -item[1])+Math.random()*50
                elTemp.style.backgroundColor = `rgba(107, ${count}, 25)`
                elTemp.style.borderColor = `rgba(107, ${count}, 25)`
                elTemp.style.color = '#fff'
                elC.style.marginLeft = '80%'
                elTime.innerText = item[0];
                elC.innerText = item[1]+item[2] 
                elD.innerText = item[3];
                // //
                elTemp.appendChild(elTime);
                elTemp.appendChild(elD);
                elTemp.appendChild(elC);
                elTempList.appendChild(elTemp);
            })
        },
        async axiosWeather(){
            await axios('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-84EDB16B-47D4-45F9-A113-B9C24F7F4E65&limit=10&locationName=%E9%AB%98%E9%9B%84%E5%B8%82')
            .then(res => {
                this.setData(res)
                this.setLocation()
                this.setData(res)
                this.setTempList()
            })
        },
        async init(){
            await getGovment()
        }
    }
})