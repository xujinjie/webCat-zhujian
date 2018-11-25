const app = getApp()
Page({

 
  data: {
  
  },

 
  onLoad(options) {
    this._init()
  },

  onReady () {
  
  },


  onShow () {
  
  },


  onHide() {
  
  },


  onUnload() {
  
  },

 
  onPullDownRefresh() {
  
  },


  onReachBottom() {
  
  },

 
  onShareAppMessage() {
  
  },
  _init(){
    let orderGoods = app.globalData.orderMsg.selectGoodList
    let totalCount = 0
    let totalPrice = 0
    orderGoods.forEach((el,index)=>{
      totalPrice += el.price.afterPrice * el.count
      totalCount += el.count
    })
    this.setData({
      orderMsg: app.globalData.orderMsg,
      totalPrice,
      totalCount
    })
  },

  formSubmit(e){
    let formId = e.detail.formId
    let openid = wx.getStorageSync("openid")
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const start = Date.now()

    let random = Number.parseInt(Math.random() * 10000)
    wx.request({
      url: 'https://www.mirai.site/WabCat/sendTemplate2',
      method: "post",
      data: {
        openid,
        accountGood: app.globalData.orderMsg,
        form_id: formId,
        totalPrice: this.data.totalPrice,
        now: `${year}/${month}/${day}`,
        orderid: `${year}${month}${day}${start}${random}`
      },
      success(res){
        console.log(res)
      }
    })
    
  }

})