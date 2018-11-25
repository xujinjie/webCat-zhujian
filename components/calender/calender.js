const getCurrentMonthData = require("../../tool/tool.js").getCurrentMonthData
 
 Component({
  data: {
    eWeekText: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    cWeekText: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    //当前月份 在初始化时获取
    currentMonth: null,
    //当前年份 在初始化时获取
    currentYear: null,
    //保存当前月份的数据 在初始化时获取
    currentMonthData: [],
    monthDay: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    //当前月的第一天的下标，用来渲染不是当前页的样式
    dayOneIndex: null,
    //当前月天数，和dayOneIndex一起用来渲染不是当前页的样式
    currentDays: null,
    //当月当天的index
    currentIndex: null,
    //被点击的下标
    activeIndex: null,
    activeYear: null,
    activeMonth: null
  },

  attached() {
    this._init()
  },

  ready() {

  },
  moved() {},
  detached() {},

  methods: {
    //初始化获取当前的月份和年份
    _init() {
      const date = new Date()
      let currentMonth = date.getMonth() + 1
      let currentYear = date.getFullYear()
      this.setData({
        currentMonth,
        currentYear,
        activeYear: currentYear,
        activeMonth: currentMonth
      })
      this.setData(this.getCurrentMonthData(currentYear, currentMonth))
    },


    //获取一个月的数据
    getCurrentMonthData,

    //上一个月
    previousMonth(){
      let currentMonth = this.data.currentMonth
      let currentYear = this.data.currentYear
      if (currentMonth==1){
        currentMonth = 12
        currentYear--
      }
      else{
        currentMonth--        
      }
      this.setData({
        currentMonth,
        currentYear
      },()=>{
        this.setData(this.getCurrentMonthData(currentYear, currentMonth))
      })
      
    },

    //下一个月
    nextMonth(){
      let currentMonth = this.data.currentMonth
      let currentYear = this.data.currentYear
      if (currentMonth == 12) {
        currentMonth = 1
        currentYear++
      }
      else {
        currentMonth++
      }
      this.setData({
        currentMonth,
        currentYear
      },()=>{
        this.setData(this.getCurrentMonthData(currentYear, currentMonth))
      })
    },

    daysTap(e){
      let dataObj = e.target.dataset
      let currentMonth = this.data.currentMonth
      let currentYear = this.data.currentYear
      this.setData({
        activeIndex: dataObj.index,
        activeYear: currentYear,
        activeMonth: currentMonth
      })
    },

    //是否是闰年
    isLeapYear(year) {
      year = Number(year)
      return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)
    },
  },
})


