const getCurrentMonthData = require("../../tool/tool.js").getCurrentMonthData
Component({
  properties: {
    monthCount: {
      type: Number,
      value: 6
    },
    selectType: {
      type: String,
      value: "checkbox"  //radio,checkbox
    },
    max: {
      type: Number,
      value: 15
    }
  },
  data: {
    eWeekText: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    cWeekText: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    monthDay: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    monthData: [],
    firstTap: {},
    lastTap: {}
  },

  attached(){
    this._init()
  },
  ready(){
  },
  methods: {
    _init(){
      const date = new Date()
      let currentMonth = date.getMonth() + 1
      let currentYear = date.getFullYear()
      let monthCount = this.data.monthCount
      let monthData = []
      for (let i = 0; i < monthCount;i++){
        if (currentMonth>12){
          currentYear++
          currentMonth=1
        }
        monthData.push(getCurrentMonthData(currentYear, currentMonth,false))
        currentMonth++
      }
     this.setData({
       monthData
     })
  
    },
    daysItemTap(e){
      let monthData = this.data.monthData

      //在在monthData里的currentMonthData里的位置
      let dayindex = e.target.dataset.dayindex

      //在monthData的位置
      let monthindex = e.target.dataset.monthindex

      //点击的年份
      let year = e.target.dataset.year

      //点击的月份
      let month = e.target.dataset.month

      let selectType = this.data.selectType

      let firstTap = this.data.firstTap

      let lastTap = this.data.lastTap

      if (selectType == "checkbox"){
        if (!Object.keys(firstTap).length){
          firstTap = {
            monthIndex: monthindex,
            dayIndex: dayindex
          }
        }
        else{
          if (!Object.keys(lastTap).length){
            let beginYear = monthData[firstTap.monthIndex].currentYear
            let beginMonth = monthData[firstTap.monthIndex].currentMonth
            let beginDay = monthData[firstTap.monthIndex].currentMonthData[firstTap.dayIndex]
            let endDay = monthData[monthindex].currentMonthData[dayindex]

            if (monthindex == firstTap.monthIndex && dayindex > firstTap.dayIndex){
              let dayCount = endDay - beginDay + 1
              //需要更改
              if(dayCount>this.data.max){
                wx.showToast({
                  title: '选择天数超过最大限定值',
                  icon: "none"
                })
                return
              }
              lastTap = {
                monthIndex: monthindex,
                dayIndex: dayindex
              }
              this.triggerEvent("select",
                {
                  beginYear,
                  beginMonth,
                  beginDay,
                  endYear: beginYear,
                  endMonth: beginMonth,
                  endDay,
                  dayCount
                }
              )
            }

            else if (monthindex > firstTap.monthIndex){
              let endYear = year
              let endMonth = month
              let beginCurrentDays = monthData[firstTap.monthIndex].currentDays
              let dayCount = beginCurrentDays - beginDay + endDay + 1
 
              //需要更改
              if (dayCount > this.data.max) {
                wx.showToast({
                  title: '选择天数超过最大限定值',
                  icon: "none"
                })
                return
              }
              lastTap = {
                monthIndex: monthindex,
                dayIndex: dayindex
              }
              this.triggerEvent("select",
                {
                  beginYear,
                  beginMonth,
                  beginDay,
                  endYear: beginYear,
                  endMonth: beginMonth,
                  endDay,
                  dayCount
                }
              )
            }
            else{ 
              firstTap = {
                monthIndex: monthindex,
                dayIndex: dayindex
              }
              lastTap = {}
            }
          }
          else{
            firstTap = {
              monthIndex: monthindex,
              dayIndex: dayindex
            }
            lastTap= {}
          }
        }
      }
      else{
        firstTap = {
          monthIndex: monthindex,
          dayIndex: dayindex
        }
        lastTap = {}
        this.triggerEvent("select",
        {
          year: year,
          month: month,
          day: monthData[monthindex].currentMonthData[dayindex]
        }
        )
      }

      this.setData({
        firstTap,
        lastTap
      })
    }
  }
})
