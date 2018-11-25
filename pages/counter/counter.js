let counterAPIData = require("../../components/componentsAPI.js").counter

Page({

  data: {
    counterAPIData
  },

  counterChange(e){
    let currentCount = e.detail.currentCount
    this.setData({
      currentCount
    })
  }
})