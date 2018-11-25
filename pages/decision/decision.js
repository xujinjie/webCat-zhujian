let decisionAPIData = require("../../components/componentsAPI.js").decision

Page({

  data: {
    decisionAPIData,
    buttons: [{
      text: '现金支付',
      type: 'cash'
    }, {
      text: '微信支付',
      color: '#3CC51F',
      type: 'wechat'
    }],
  },
  showDeCision() {
    let $decision = this.selectComponent('.decision')
    $decision.showDecision({}).then((res) => {
      wx.showToast({
        title: res.type,
        icon: "none"
      })
    }, (err) => {
      wx.showToast({
        title: err.type,
        icon: "none"
      })
    })
  },
  moren(){
    let $decision = this.selectComponent('.moren')
    $decision.showDecision({}).then((res) => {
      wx.showToast({
        title: res.type,
        icon: "none"
      })
    }, (err) => {
      wx.showToast({
        title: err.type,
        icon: "none"
      })
    })
  }
})