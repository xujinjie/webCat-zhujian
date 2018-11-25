const _showToast = (title) => {
  wx.showToast({
    title: title,
    icon: "none"
  })
  setTimeout(() => {
    wx.hideToast()
  }, 1500)
}

//打乱数组
let _shuffle = (arr)=> {
  let i = arr.length
  while (i) {
    let j = Math.floor(Math.random() * i--)
    [arr[j], arr[i]] = [arr[i], arr[j]]
  }
}

//是否是闰年
const isLeapYear = (year)=> {
  year = Number(year)
  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)
}

//获取一个月的数据
const getCurrentMonthData = (currentYear, currentMonth,isPush=true)=> {
  //isPush控制是否把多的空格用上个月和下个月的日期填满，默认填满
  let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  //判断是否是闰年
  if (isLeapYear(currentYear)) {
    monthDay[1] = 29
  }

  //当前月的1号的下标
  if (currentMonth<10){
    currentMonth = "0" + currentMonth
  }

  let dayOneIndex = new Date(`${currentYear}-${currentMonth}-01`).getDay()

  let activeIndex = new Date().getDate() - 1
 
    activeIndex += dayOneIndex
 
  //当前月的天数
  let currentDays = monthDay[currentMonth - 1]
  //前一个月的的天数
  let previousDays = null
  if (currentMonth == 1) {
    previousDays = monthDay[11]
  } else {
    previousDays = monthDay[currentMonth - 2]
  }
  //后一个月的天数
  let nextDays = null
  if (currentMonth == 12) {
    nextDays = monthDay[0]
  } else {
    nextDays = monthDay[currentMonth]
  }

  //一个月的日历数据
  let currentMonthData = []

  if (!dayOneIndex) {
    for (let i = 1; i <= currentDays; i++) {
      currentMonthData.push(i)
    }
    if(isPush){
      for (let j = 1; j <= 35 - currentDays; j++) {
        currentMonthData.push(j)
      }
    }
  } 
  else {
    for (let i = 0; i < dayOneIndex; i++) {
      if(isPush){
        currentMonthData.unshift(previousDays - i)
      }
      else{
        currentMonthData.unshift(" ")        
      }
    }
    for (let j = 1; j <= currentDays; j++) {
      currentMonthData.push(j)
    }
    if(isPush){
      for (let k = 1; k <= 42 - (dayOneIndex + currentDays); k++) {
        currentMonthData.push(k)
      }
    }
  }
  let tempObj = {
    currentMonthData, //当前月份的数据
    dayOneIndex,      //当前月份第一天的下标
    currentDays,      //当前月份的总天数
    currentYear,      //当前的年份
    currentMonth,     //当前的月份
    activeIndex        //当前月份的日期在currentMonthData的下标
  }
  console.log(tempObj)
  return tempObj
  
}

module.exports = {
  _showToast,  //官方的showToast
  _shuffle,    //打乱数组
  isLeapYear,          //是否是闰年,返回Boolean
  getCurrentMonthData,  //获取一个月的数据，返回一个对象，对象属性有当前月份的数据currentMonthData，当前月份第一天的下标dayOneIndex，当前月份的总天数currentDays，当前的年份currentYear，当前的月份currentMonth，当前月份的日期，例如7月五日，返回的 4,activeIndex
}
