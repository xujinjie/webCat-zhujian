//是否是闰年
const isLeapYear = (year) => {
    year = Number(year)
    return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)
}

//获取一个月的数据
const getCurrentMonthData = (currentYear, currentMonth, isPush = true) => {
    //isPush控制是否把多的空格用上个月和下个月的日期填满，默认填满
    let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    //判断是否是闰年
    if (isLeapYear(currentYear)) {
        monthDay[1] = 29
    }

    //当前月的1号的下标
    if (currentMonth < 10) {
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
        if (isPush) {
            for (let j = 1; j <= 35 - currentDays; j++) {
                currentMonthData.push(j)
            }
        }
    } else {
        for (let i = 0; i < dayOneIndex; i++) {
            if (isPush) {
                currentMonthData.unshift(previousDays - i)
            } else {
                currentMonthData.unshift(" ")
            }
        }
        for (let j = 1; j <= currentDays; j++) {
            currentMonthData.push(j)
        }
        if (isPush) {
            for (let k = 1; k <= 42 - (dayOneIndex + currentDays); k++) {
                currentMonthData.push(k)
            }
        }
    }
    let tempObj = {
        currentMonthData, //当前月份的数据
        dayOneIndex, //当前月份第一天的下标
        currentDays, //当前月份的总天数
        currentYear, //当前的年份
        currentMonth, //当前的月份
        activeIndex //当前月份的日期在currentMonthData的下标
    }
    // console.log(tempObj)
    return tempObj

}

Component({
    properties: {
        selectable: {
            type: Boolean,
            value: true
        },
        type: {
            type: String,
            value: "checkbox" //checkbox ,radio
        },
        isPush: {
            type: Boolean,
            value: true
        },
        beforeSelectable: {
            type: Boolean,
            value: false
        },
        max: {
            type: [Number, String],
            value: 15,
            observer(newV) {
                console.log(newV)
            }
        }
    },
    data: {
        eWeekText: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
        cWeekText: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        monthDay: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        //保存现在的year,month,day
        now: {},
        //保存选择的开始的year,month,day
        beginSelect: {},
        //保存结束的year,month,day
        endSelect: {},
        //保存当前展示的月份的数据
        current: null
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
            let now = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate()
            }
            this.setData({
                now,
                beginSelect: {
                    day: date.getDate(),
                    month: date.getMonth() + 1,
                    year: date.getFullYear(),
                }
            }, () => {
                let data = getCurrentMonthData(now.year, now.month, this.data.isPush)
                this.handleDate(data, true)
            })

        },

        handleDate(data, isInit = false) {
            let {
                selectable,
                type,
                beforeSelectable,
                now,
                beginSelect,
                endSelect
            } = this.data

            let endSelectNum = Number(`${endSelect.year}${endSelect.month > 9 ? endSelect.month : "0" + endSelect.month}${endSelect.day > 9 ? endSelect.day : "0" + endSelect.day}`)
            let beginSelectNum = Number(`${beginSelect.year}${beginSelect.month > 9 ? beginSelect.month : "0" + beginSelect.month}${beginSelect.day > 9 ? beginSelect.day : "0" + beginSelect.day}`)
            let current = []
            let currentMonthData = data.currentMonthData
            let nowNum = Number(`${now.year}${now.month > 9 ? now.month : "0" + now.month}01`)
            // console.log(nowNum)
            currentMonthData.forEach((el, index) => {

                let tempObj = {
                    isSelect: false,
                    disabled: false
                }
                if (isInit) {
                    tempObj["value"] = Number(el)
                } else {
                    tempObj["value"] = Number(el.value)
                }

                if (index >= data.dayOneIndex && index < (data.currentDays + data.dayOneIndex)) {
                    tempObj["year"] = Number(data.currentYear)
                    tempObj["month"] = Number(data.currentMonth)
                } else {
                    if (index < data.dayOneIndex) {
                        if (data.currentMonth == 1) {
                            tempObj["year"] = Number(data.currentYear) - 1
                            tempObj["month"] = 12
                        } else {
                            tempObj["year"] = Number(data.currentYear)
                            tempObj["month"] = Number(data.currentMonth) - 1
                        }
                    }
                    if (index >= (data.currentDays + data.dayOneIndex)) {
                        if (data.currentMonth == 12) {
                            tempObj["year"] = Number(data.currentYear) + 1
                            tempObj["month"] = 1
                        } else {
                            tempObj["year"] = Number(data.currentYear)
                            tempObj["month"] = Number(data.currentMonth) + 1
                        }
                    }
                }


                let tempNumber = Number(`${tempObj.year}${tempObj.month > 9 ? tempObj.month : "0" + tempObj.month}${tempObj.value > 9 ? tempObj.value : "0" + tempObj.value}`)

                if (beforeSelectable) {
                    if (index >= data.dayOneIndex && index < (data.currentDays + data.dayOneIndex)) {
                        tempObj["disabled"] = false
                    } else {
                        tempObj["disabled"] = true
                    }
                } else {
                    if (index >= data.dayOneIndex && index < (data.currentDays + data.dayOneIndex)) {
                        if (tempNumber >= nowNum) {
                            tempObj["disabled"] = false
                        } else {
                            tempObj["disabled"] = true
                        }
                    } else {
                        tempObj["disabled"] = true
                    }
                }

                if (selectable) {
                    if (type == "radio") {
                        if (tempObj.year == beginSelect.year && tempObj.month == beginSelect.month && tempObj.value == beginSelect.day && index >= data.dayOneIndex && index < (data.currentDays + data.dayOneIndex)) {
                            tempObj.isSelect = true
                        }
                    } else {
                        if (endSelect.year) {
                            if (index >= data.dayOneIndex && index < (data.currentDays + data.dayOneIndex)) {
                                if (tempNumber >= beginSelectNum && tempNumber <= endSelectNum) {
                                    tempObj["isSelect"] = true
                                    tempObj["class"] = "checkbox-disabled"
                                }

                                if (tempNumber == beginSelectNum) {
                                    tempObj["class"] = "is-checkbox-first-active"
                                }

                                if (tempNumber == endSelectNum) {
                                    tempObj["class"] = "is-checkbox-last-active"
                                }
                            }
                        } else {
                            if (tempObj.year == beginSelect.year && tempObj.month == beginSelect.month && tempObj.value == beginSelect.day && index >= data.dayOneIndex && index < (data.currentDays + data.dayOneIndex)) {
                                tempObj.isSelect = true
                            }
                        }
                    }
                } else {
                    if (index >= data.dayOneIndex && index < (data.currentDays + data.dayOneIndex) && data.currentYear == now.year && data.currentMonth == now.month && el == now.day) {
                        tempObj.isSelect = true
                    }
                }
                current.push(tempObj)
            })
            data.currentMonthData = current
            this.setData({
                current: data
            })
        },


        dayItemTap(e) {
            let {
                day,
                disabled,
                month,
                year,
                index
            } = e.currentTarget.dataset
            let {
                type
            } = this.data
            let beginSelect = this.data.beginSelect
            let endSelect = this.data.endSelect
            if (!disabled && this.data.selectable) {
                if (type == "radio") {
                    this.setData({
                        beginSelect: {
                            day: Number(day),
                            month: Number(month),
                            year: Number(year),
                        }
                    }, () => {
                        this.triggerEvent("complete", {
                            day: Number(day),
                            month: Number(month),
                            year: Number(year),
                            type: "radio"
                        })
                        this.handleDate(this.data.current)
                    })
                } else {
                    if (endSelect.year) {
                        beginSelect = {
                            day: Number(day),
                            month: Number(month),
                            year: Number(year),
                        }
                        endSelect = {}
                    } else {
                        let is_clear = false
                        if (year < beginSelect.year) {
                            is_clear = true
                        } else if (year == beginSelect.year) {
                            if (month == beginSelect.month) {
                                if (day <= beginSelect.day) {
                                    is_clear = true
                                }
                            } else if (month < beginSelect.month) {
                                is_clear = true
                            } else {
                                is_clear = false
                            }
                        } else {
                            is_clear = false
                        }

                        if (is_clear) {
                            endSelect = {}
                            beginSelect = {
                                day: Number(day),
                                month: Number(month),
                                year: Number(year),
                            }
                        } else {
                            endSelect = {
                                day: Number(day),
                                month: Number(month),
                                year: Number(year),
                            }
                        }
                    }
                    this.setData({
                        beginSelect,
                        endSelect
                    }, () => {
                        if (endSelect.year) {
                            let count = this.calcDayCount(this.data.beginSelect, this.data.endSelect)
                            let max = this.data.max
                            if (max) {
                                if (count > max) {
                                    this.setData({
                                        endSelect: {}
                                    }, () => {
                                        this.handleDate(this.data.current)
                                        this.triggerEvent("max", {
                                            from: beginSelect,
                                            count
                                        })
                                    })
                                } else {
                                    this.handleDate(this.data.current)
                                    this.triggerEvent("complete", {
                                        from: beginSelect,
                                        to: endSelect,
                                        count
                                    })
                                }
                            } else {
                                this.handleDate(this.data.current)
                                this.triggerEvent("complete", {
                                    from: beginSelect,
                                    to: endSelect,
                                    count
                                })
                            }
                        } else {
                            this.handleDate(this.data.current)
                        }

                    })
                }
            } else {
                this.triggerEvent("disabled", {
                    year,
                    month,
                    day
                })
            }

        },


        calcDayCount(begin, end) {
            let sDate1 = Date.parse(`${begin.year}-${begin.month > 9 ? begin.month : "0" + begin.month}-${begin.day > 9 ? begin.day : "0" + begin.day}`);

            let sDate2 = Date.parse(`${end.year}-${end.month > 9 ? end.month : "0" + end.month}-${end.day > 9 ? end.day : "0" + end.day}`);
            return Math.ceil(Math.abs((sDate2 - sDate1)) / (24 * 3600 * 1000)) + 1
        },


        previousYear() {
            let current = this.data.current
            let year = Number(current.currentYear) - 1
            let month = Number(current.currentMonth)
            let data = getCurrentMonthData(year, month, this.data.isPush)
            this.handleDate(data, true)
        },

        nextYear() {
            let current = this.data.current
            let year = Number(current.currentYear) + 1
            let month = Number(current.currentMonth)
            let data = getCurrentMonthData(year, month, this.data.isPush)
            this.handleDate(data, true)
        },

        previousMonth() {
            let current = this.data.current
            let year = Number(current.currentYear)
            let month = Number(current.currentMonth)
            if (month == 1) {
                year -= 1
                month = 12
            } else {
                month -= 1
            }
            let data = getCurrentMonthData(year, month, this.data.isPush)
            this.handleDate(data, true)
        },

        nextMonth() {
            let current = this.data.current
            let year = Number(current.currentYear)
            let month = Number(current.currentMonth)
            if (month == 12) {
                year += 1
                month = 1
            } else {
                month += 1
            }
            let data = getCurrentMonthData(year, month, this.data.isPush)
            this.handleDate(data, true)
        }
    },
})