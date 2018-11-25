let keyboardAPIData = require("../../components/componentsAPI.js").keyboard
Page({

  data: {
    keyboardAPIData,
    ablenull: false
  },
  showKeyboard() {
    let $keyboard = this.selectComponent('.keyboard')
    $keyboard.showKeyBoard()
  },
  showKeyboard2(){
    this.setData({
      ablenull: true
    })
    let $keyboard = this.selectComponent('.keyboard')
    $keyboard.showKeyBoard()
  },
  keyboardconfirm(e) {
    let $keyboard = this.selectComponent('.keyboard')
    wx.showLoading({
      title: "输入为："+e.detail.value,
    })
    setTimeout(() => {
      wx.hideLoading()
      $keyboard.hideKeyBoard()
    }, 2000)
  },
})