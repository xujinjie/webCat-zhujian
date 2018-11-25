let selectCalenderAPIData = require("../../components/componentsAPI.js").selectCalender

Page({


  data: {
    selectCalenderAPIData
  },

  onLoad (options) {},

  onReady () {},

  onShow () {},

  onHide () {},


  onUnload () {},


  onPullDownRefresh () {},

 
  onReachBottom () {},


  onShareAppMessage () {},


  calenderSelect(e){
    wx.showToast({
      title: `选择了${e.detail.dayCount}天`,
      icon: "none"
    })
  }
})