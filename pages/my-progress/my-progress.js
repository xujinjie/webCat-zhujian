let progressAPIData = require("../../components/componentsAPI.js").progress
Page({

  data: {
    progressAPIData,
    percentage: 0,
  },
  testPropress() {
    var timer = setInterval(() => {
      let percentage = this.data.percentage
      percentage += 1

      if (percentage > 100) {
        clearInterval(timer)
      }
      else {
        this.setData({
          percentage
        })
      }
    }, 100)
  },
})