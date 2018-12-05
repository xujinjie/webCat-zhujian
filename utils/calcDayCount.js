function calcDayCount(begin, end) {
        let sDate1 = Date.parse(`${begin.year}-${begin.month}-${begin.day}`);
        let sDate2 = Date.parse(`${end.year}-${end.month}-${end.day}`);
        return Math.ceil(Math.abs((sDate2 - sDate1)) / (24 * 3600 * 1000))
}


module.exports = {
        calcDayCount
}