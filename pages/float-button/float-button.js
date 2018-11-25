let floatbuttonAPIData = require("../../components/componentsAPI.js").floatButton

Page({

  data: {
    floatbuttonAPIData,
    floatButonOptions:
    [
      {
        value: 1,
        iconType: "wodedingdan",
        text: "我的订单",
      },
      {
        value: 2,
        iconType: "mail",
        text: "邮件"
      },
      {
        value: 3,
        iconType: "fenlei",
        text: "分类"
      },
      {
        value: 4,
        iconType: "erweima",
        text: "二维码"
      },
      {
        value: 5,
        iconType: "daishouhuo",
        text: "待收货"
      },
      {
        value: 6,
        iconType: "liebiao",
        text: "列表"
      }
    ],
  },
  floatButtonTap(e){
    wx.showToast({
      title: "index: " + e.detail.index,
    })
  },
  setCanMove(){
    this.setData({
      moveable: true
    })
  }
})