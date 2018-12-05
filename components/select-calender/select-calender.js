const getCurrentMonthData = require("../../tool/tool.js").getCurrentMonthData
Component({
        properties: {
                afterCount: {
                        type: Number,
                        value: 6,
                        observer() {
                                this._init()
                        }
                },
                beforeCount: {
                        type: Number,
                        value: 2,
                        observer(){
                                this._init()
                        }
                },
                type: {
                        type: String,
                        value: "checkbox", //radio,checkbox
                        observer(newV){
                                if (newV == "radio"){
                                        this.setData({
                                                endSelect: {}
                                        })
                                }
                        }
                },
                max: {
                        type: Number,
                        value: 15,
                        observer(newV,oldV) {
                                if(newV<oldV){
                                        this.setData({
                                                endSelect: {}
                                        })
                                }
                        }
                }
        },
        data: {
                eWeekText: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
                cWeekText: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                monthDay: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                monthData: [],
                //保存选择的开始的year,month,day
                beginSelect: {},
                //保存结束的year,month,day
                endSelect: {},
        },

        attached() {
                this._init()
        },
        ready() {},
        methods: {
                _init() {
                        const date = new Date()

                        let afterCount = Number(this.data.afterCount)

                        let beforeCount = Number(this.data.beforeCount)

                        let monthData = []
                       
                        let month1 = date.getMonth() + 1 - 1
                        let year1 = date.getFullYear()

                       for(let i=0;i<beforeCount;i++){
                               let tempMonth = getCurrentMonthData(year1, month1,false)
                               tempMonth.currentMonthData.forEach((el,index)=>{
                                       if(el != " "){
                                               tempMonth.currentMonthData[index] = {
                                                       value: el,
                                                       times: new Date(`${tempMonth.currentYear}-${tempMonth.currentMonth}-${el > 9 ? el : "0" + el}`).getTime()
                                               }
                                       }
                               })
                               if (month1 == 1){
                                       month1 = 12
                                       year1 -= 1 
                               }
                               else{
                                       month1 -= 1
                               }
                               monthData.unshift(tempMonth)
                       }
                        let month2 = date.getMonth() + 1 
                        let year2 = date.getFullYear()
                        for (let i = 0; i < afterCount+1; i++) {
                                let tempMonth = getCurrentMonthData(year2, month2, false)
                                tempMonth.currentMonthData.forEach((el, index) => {
                                        if (el != " ") {
                                                tempMonth.currentMonthData[index] = {
                                                        value: el,
                                                        times: new Date(`${tempMonth.currentYear}-${tempMonth.currentMonth}-${el>9?el:"0" + el}`).getTime()
                                                }
                                        }
                                })
                                if (month2 == 12) {
                                        month2 = 1
                                        year2 += 1
                                }
                                else {
                                        month2 += 1
                                }
                                monthData.push(tempMonth)
                        }
                        let beginSelect = {
                                month: date.getMonth() + 1,
                                times: new Date(`${date.getFullYear()}-${date.getMonth() + 1 > 9 ? date.getMonth() + 1:"0"+(date.getMonth()+1)}-${date.getDate()>9?date.getDate():"0"+date.getDate()}`).getTime(),
                                year: date.getFullYear(),
                                day: date.getDate() 
                        }
                        // console.log(beginSelect)
                        this.setData({
                                monthData,
                                beginSelect
                        })

                   

                },
                dayItemTap(e){
                        let { disabled, day, month, year, times } = e.currentTarget.dataset
                        let { beginSelect,endSelect,type,max} = this.data
                        max = Number(max)
                        if(!disabled){
                                // console.log(type)
                              if(type == "radio"){
                                      beginSelect = {
                                              day,
                                              month,
                                              year,
                                              times
                                      }
                                      this.triggerEvent("complete",{
                                              from: beginSelect,
                                              type: "radio"
                                      })
                              }
                              else{
                                     
                                      if (beginSelect.times){
                                        //       console.log(3)
                                              if(times<=beginSelect.times){
                                                //       console.log(4)
                                                      beginSelect = {
                                                              day,
                                                              month,
                                                              year,
                                                              times
                                                      }
                                                      endSelect = {}
                                              }
                                              else{
                                                      
                                                      if (endSelect.times) {
                                                        //       console.log(5)
                                                              beginSelect = {
                                                                      day,
                                                                      month,
                                                                      year,
                                                                      times
                                                              }
                                                              endSelect = {}
                                                      }
                                                      else {
                                                        //       console.log(6)
                                                                endSelect = {
                                                                        day,
                                                                        month,
                                                                        year,
                                                                        times
                                                                }

                                                              let count = this.calcDayCount(beginSelect, endSelect)
                                                        //       console.log(count)
                                                              if(count>max){
                                                                      this.triggerEvent("max", {
                                                                              count
                                                                      })
                                                                      endSelect = {}
                                                              }
                                                              else{
                                                                //       console.log(count)
                                                                      this.triggerEvent("complete", {
                                                                              from: beginSelect,
                                                                              to: endSelect,
                                                                              count,
                                                                              type: this.data.type
                                                                      })
                                                              }
                                                      }
                                              }
                                      }
                                      else{
                                        //       console.log(2)
                                              beginSelect = {
                                                      day,
                                                      month,
                                                      year,
                                                      times
                                              }
                                              endSelect = {}
                                      }
                              }

                              this.setData({
                                      beginSelect,
                                      endSelect
                              },()=>{
                                //       console.log(this.data.beginSelect)
                                //       console.log(this.data.endSelect)
                              })
                        }
                },
                calcDayCount(begin, end) {
                        let sDate1 = Number(begin.times)
                        let sDate2 = Number(end.times)
                        // console.log(Math.abs((sDate2 - sDate1)) / (24 * 3600 * 1000))
                        return Math.ceil(Math.abs((sDate2 - sDate1)) / (24 * 3600 * 1000))+1
                }
        }
})