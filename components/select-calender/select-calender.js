const app = getApp();

const getCurrentMonthData = app.getCurrentMonthData;

Component({
    properties: {
        limit: {
            type: Number,
            value: 3,
        },
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
            observer() {
                this._init()
            }
        },
        type: {
            type: String,
            value: "checkbox", //radio,checkbox
            observer(newV) {
                if (newV == "radio") {
                    this.setData({
                        endSelect: {}
                    })
                }
            }
        },
        max: {
            type: Number,
            value: 15,
            observer(newV, oldV) {
                if (newV < oldV) {
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
        endSelect: {}
    },

    attached() {
        this._init()
    },
    ready() {},
    methods: {
        _init() {
            this.isLoading = false;
            const date = new Date();

            let afterCount = Number(this.data.afterCount);

            let beforeCount = Number(this.data.beforeCount);

            let monthData = [];

            let month1 = date.getMonth() + 1 - 1;
            let year1 = date.getFullYear();

            for (let i = 0; i < beforeCount; i++) {
                let tempMonth = getCurrentMonthData(year1, month1, false)
              
                if (month1 == 1) {
                    month1 = 12
                    year1 -= 1
                } else {
                    month1 -= 1
                }
                monthData.unshift(tempMonth)
            }
            let month2 = date.getMonth() + 1;
            let year2 = date.getFullYear();
            for (let i = 0; i < afterCount + 1; i++) {
                let tempMonth = getCurrentMonthData(year2, month2, false)

                if (month2 == 12) {
                    month2 = 1
                    year2 += 1
                } else {
                    month2 += 1
                }
                monthData.push(tempMonth)
            }
            let beginSelect = {
                month: date.getMonth() + 1,
                times: new Date(`${date.getFullYear()}-${app.formatNumber(date.getMonth() + 1)}-${app.formatNumber(date.getDate())}`).getTime(),
                year: date.getFullYear(),
                day: date.getDate()
            }

            this.setData({
                monthData,
                beginSelect
            })



        },
        dayItemTap(e) {
            let {
                disabled,
                day,
                month,
                year,
                times
            } = e.currentTarget.dataset;
            let {
                beginSelect,
                endSelect,
                type,
                max
            } = this.data;
            max = Number(max);
            if (!disabled) {
                // console.log(type)
                if (type == "radio") {
                    beginSelect = {
                        day,
                        month,
                        year,
                        times
                    }
                    this.triggerEvent("complete", {
                        from: beginSelect,
                        type: "radio"
                    })
                } else {

                    if (beginSelect.times) {
                       
                        if (times <= beginSelect.times) {
                            
                            beginSelect = {
                                day,
                                month,
                                year,
                                times
                            }
                            endSelect = {}
                        } else {
                            if (endSelect.times) {
                                beginSelect = {
                                    day,
                                    month,
                                    year,
                                    times
                                }
                                endSelect = {}
                            } else {
                                endSelect = {
                                    day,
                                    month,
                                    year,
                                    times
                                }
                                let count = this.calcDayCount(beginSelect, endSelect);
                                if (count > max) {
                                    this.triggerEvent("max", {
                                        count
                                    })
                                    endSelect = {}
                                } else {
                                    this.triggerEvent("complete", {
                                        from: beginSelect,
                                        to: endSelect,
                                        count,
                                        type: this.data.type
                                    })
                                }
                            }
                        }
                    } else {
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
                })
            }
        },

        calcDayCount(begin, end) {
            let sDate1 = Number(begin.times);
            let sDate2 = Number(end.times);

            return Math.ceil(Math.abs((sDate2 - sDate1)) / (24 * 3600 * 1000)) + 1;

        },

        scrolltoupper(e){
            let {monthData, limit} = this.data;
            if(this.isLoading){
                return false;
            }
            this.isLoading = true;

            let year = Number(monthData[0].currentYear);
            let month = Number(monthData[0].currentMonth) - 1;
    
            for (let i = 0; i < limit; i++) {
                let tempMonth = getCurrentMonthData(year, month, false)

                if (month == 1) {
                    month = 12
                    year -= 1
                } else {
                    month -= 1
                }
                monthData.unshift(tempMonth)
            }
            
            this.setData({
                monthData
            },()=>{
                this.isLoading = false;
            })
        },
        scrolltolower(e){
            let { monthData, limit } = this.data;
            if (this.isLoading) {
                return false;
            }
            this.isLoading = true;

            let year = Number(monthData[monthData.length - 1].currentYear);
            let month = Number(monthData[monthData.length - 1].currentMonth) + 1;

            for (let i = 0; i < limit; i++) {
                let tempMonth = getCurrentMonthData(year, month, false)

                if (month == 12) {
                    month = 1
                    year += 1
                } else {
                    month += 1
                }
                monthData.push(tempMonth)
            }

            this.setData({
                monthData
            }, () => {
                this.isLoading = false;
            })

        }
    }
})