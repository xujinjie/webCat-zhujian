let rateAPIData = require("../../components/componentsAPI.js").rate
Page({

  data: {
    rateAPIData
  },
  rateChange(e){
    wx.showToast({
      title: '分数：' + e.detail.value,
      icon:"none"
    })
  }
})