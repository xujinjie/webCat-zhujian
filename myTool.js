const myTool = {

//  常用正则
    /**
     * 固话
     */
    isTelPhone(str) {
        let myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
        if (myreg.test(str)) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * 手机正则
     */
    isPhone(str) {
        let myreg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
        if (myreg.test(str)) {
            return true
        } else {
            return false
        }
    },

    /**
     * isEqual 判断两个对象是否键值对应相等
     */
    isEqual(a, b) {
        //如果a和b本来就全等
        if (a === b) {
            //判断是否为0和-0
            return a !== 0 || 1 / a === 1 / b;
        }
        //判断是否为null和undefined
        if (a == null || b == null) {
            return a === b;
        }
        //接下来判断a和b的数据类型
        var classNameA = toString.call(a),
            classNameB = toString.call(b);
        //如果数据类型不相等，则返回false
        if (classNameA !== classNameB) {
            return false;
        }
        //如果数据类型相等，再根据不同数据类型分别判断
        switch (classNameA) {
            case '[object RegExp]':
            case '[object String]':
                //进行字符串转换比较
                return '' + a === '' + b;
            case '[object Number]':
                //进行数字转换比较,判断是否为NaN
                if (+a !== +a) {
                    return +b !== +b;
                }
                //判断是否为0或-0
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
        }
        //如果是对象类型
        if (classNameA == '[object Object]') {
            //获取a和b的属性长度
            var propsA = Object.getOwnPropertyNames(a),
                propsB = Object.getOwnPropertyNames(b);
            if (propsA.length != propsB.length) {
                return false;
            }
            for (var i = 0; i < propsA.length; i++) {
                var propName = propsA[i];
                //如果对应属性对应值不相等，则返回false
                if (a[propName] !== b[propName]) {
                    return false;
                }
            }
            return true;
        }
        //如果是数组类型
        if (classNameA == '[object Array]') {
            if (a.toString() == b.toString()) {
                return true;
            }
            return false;
        }
    },

    isEmail(email) {
        const myreg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        // /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/
        if (myreg.test(email)) {
            return true
        } else {
            return false
        }
    },

    isChinese(str) {
        const myreg = /[u4e00-u9fa5]/;
        if (myreg.test(str)) {
            return true
        } else {
            return false
        }
    },

    isPassWord(str) {

        const myreg = /^[a-zA-Z]\w{5,17}$/;

        if (myreg.test(str)) {
            return true
        } else {
            return false
        }
    },
//  常用正则

//  时间处理

    /**
     *      calcDayCount    计算时间
     *      formatTime      格式化时间
     *      formatNumber    格式化数字 
     *      isLeapYear      是否是闰年
     *      _formatTime     处理时间 返回过去时间相对于现在的时间的字符串
     */

    formatTime({
        date = new Date(),
        q = '-',
        t = ':'
    } = {
        date: new Date(),
        q: '-',
        t: ':'
    }) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return [year, month, day].map(this.formatNumber).join(q) + ' ' + [hour, minute, second].map(this.formatNumber).join(t)
    },


    formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    },

    calcDayCount(begin, end) {
        let sDate1 = Date.parse(`${begin.year}-${begin.month}-${begin.day}`);
        let sDate2 = Date.parse(`${end.year}-${end.month}-${end.day}`);
        return Math.ceil(Math.abs((sDate2 - sDate1)) / (24 * 3600 * 1000))
    },

    //是否是闰年
    isLeapYear(year) {
        year = Number(year);
        return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)
    },

    //获取一个月的数据
    getCurrentMonthData(currentYear, currentMonth, isPush = true) {
        //isPush控制是否把多的空格用上个月和下个月的日期填满，默认填满
        let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        //判断是否是闰年
        if (this.isLeapYear(currentYear)) {
            monthDay[1] = 29;
        }

        //当前月的1号的下标

        let dayOneIndex = new Date(`${this.formatNumber(currentYear)}-${this.formatNumber(currentMonth)}-01`).getDay();

        let activeIndex = new Date().getDate() - 1;

        activeIndex += dayOneIndex;

        //当前月的天数
        let currentDays = monthDay[Number(currentMonth) - 1];

        //前一个月的的天数
        let previousDays = null;
        let previousMonth = null;
        let previousYear = null;

        if (Number(currentMonth) == 1) {
            previousDays = monthDay[11];

            previousYear = currentYear - 1;
            previousMonth = 12;

        } else {
            previousDays = monthDay[Number(currentMonth) - 2];
            previousYear = currentYear;
            previousMonth = Number(currentMonth) - 1;
        }
        //后一个月的天数
        let nextDays = null;
        let nextMonth = null;
        let nextYear = null;
        if (Number(currentMonth) == 12) {
            nextDays = monthDay[0];
            nextYear = currentYear + 1;
            nextMonth = 1;
        } else {
            nextDays = monthDay[Number(currentMonth)];
            nextYear = currentYear;
            nextMonth = Number(currentMonth) + 1;
        }

        //一个月的日历数据
        let currentMonthData = [];

        if (!dayOneIndex) {
            for (let i = 1; i <= currentDays; i++) {
                let temp = {
                    year: currentYear,
                    month: Number(currentMonth),
                    day: i,
                    times: new Date(`${this.formatNumber(currentYear)}-${this.formatNumber(currentMonth)}-${this.formatNumber(i)}`).getTime()
                }
                currentMonthData.push(temp)
            }
            if (isPush) {
                for (let j = 1; j <= 35 - currentDays; j++) {

                    let temp = {
                        year: nextYear,
                        month: Number(nextMonth),
                        day: j,
                        times: new Date(`${this.formatNumber(nextYear)}-${this.formatNumber(nextMonth)}-${this.formatNumber(j)}`).getTime()
                    }

                    currentMonthData.push(temp)
                }
            }
        } else {
            for (let i = 0; i < dayOneIndex; i++) {

                if (isPush) {
                    let temp = {
                        year: previousYear,
                        month: previousMonth,
                        day: previousDays - i,
                        times: new Date(`${this.formatNumber(previousYear)}-${this.formatNumber(previousMonth)}-${this.formatNumber((previousDays - i))}`).getTime()
                    }

                    currentMonthData.unshift(temp)
                } else {
                    currentMonthData.unshift("")
                }
            }

            for (let j = 1; j <= currentDays; j++) {
                let temp = {
                    year: currentYear,
                    month: Number(currentMonth),
                    day: j,
                    times: new Date(`${this.formatNumber(currentYear)}-${this.formatNumber(currentMonth)}-${this.formatNumber(j)}`).getTime()
                }
                currentMonthData.push(temp)
            }
            if (isPush) {
                for (let k = 1; k <= 42 - (dayOneIndex + currentDays); k++) {
                    let temp = {
                        year: nextYear,
                        month: nextMonth,
                        day: k,
                        times: new Date(`${this.formatNumber(nextYear)}-${this.formatNumber(nextMonth)}-${this.formatNumber(k)}`).getTime() || 0
                    }
                    currentMonthData.push(temp)
                }
            }
        }
        return {
            currentMonthData, //当前月份的数据
            dayOneIndex, //当前月份第一天的下标
            currentDays, //当前月份的总天数
            currentYear, //当前的年份
            currentMonth, //当前的月份
            activeIndex //当前月份的日期在currentMonthData的下标
        }

    },

    /**
     * 处理时间 返回过去时间相对于现在的时间的字符串
     * 
     * timestamp 过去的时间戳
     */
    _formatTime(timestamp) {

        //返回的字符串
        let str = ""
        //将过去的时间戳转换为date对象
        const date = new Date(Number(timestamp))

        //获取过去的时间整点数
        const beforeHours = hour

        //现在的date对象
        const now = new Date()

        //获取现在的时间整点数
        const nowHours = now.getHours()

        //现在的时间戳
        const nowtimestamp = now.getTime()


        const time = nowtimestamp - Number(timestamp)
        let year = date.getFullYear()
        let nowYear = now.getFullYear()
        let month = date.getMonth()
        let nowMonth = now.getMonth()
        let day = date.getDate()
        let nowDay = now.getDate()
        let hour = date.getHours()
        let minutes = date.getMinutes()


        if (time < 60000) {
            str = "刚刚"
        } else if (time >= 60000 && time < 3600000) {

            str = `${Math.floor(time / 60000)} 分钟前`
        } else if (year == nowYear && month == nowMonth && nowDay == day) {
            str = `${now.getHours() - hour} 小时前`
        } else if (year == nowYear && month == nowMonth && nowDay - day == 1) {
            str = `昨天 ${formatNumber(hour)}:${formatNumber(minutes)}`
        } else if (year == nowYear && month == nowMonth && nowDay - day > 1) {
            str = `${formatNumber(month + 1)}-${formatNumber(day)} ${formatNumber(hour)}:${formatNumber(minutes)}`
        } else if (year == nowYear && month < nowMonth) {
            str = `${formatNumber(month + 1)}-${day}`
        } else {
            str = `${year} ${formatNumber(month + 1)}-${formatNumber(day)} ${formatNumber(hour)}:${formatNumber(minutes)}`
        }
        //console.log(str)
        return str
    },

//  时间处理

//  数组处理

//打乱数组
    shuffle(arr) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--)[arr[j], arr[i]] = [arr[i], arr[j]]
        }
    },
//数组处理

//  样式处理
    styleHandle(selfStyle) {
        if (selfStyle) {
            let str = ''
            if ((typeof selfStyle).toLocaleLowerCase() == "object") {
                let keysArr = Object.keys(selfStyle)
                keysArr.forEach((el) => {
                    str += `${el}:${selfStyle[el]};`
                })
            }
            return str
        } else {
            return selfStyle
        }
    }
//  样式处理

}

export {
    myTool
}