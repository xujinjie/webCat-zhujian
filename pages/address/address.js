let addressAPIData = require("../../components/componentsAPI.js").address
Page({


  data: {
    addressAPIData,
    address: [
      {
        name: "1",
        phone: 18218523021,
        address: {
          city: "清远市",
          district: "清新区",
          nation: "中国",
          province: "广东省",
          street: "府前路",
          street_number: "府前路42号",
          detail: ""
        },
        isDefault: true
      },
      {
        name: "2",
        phone: 18218523022,
        address: {
          city: "清远市",
          district: "清新区",
          nation: "中国",
          province: "广东省",
          street: "府前路",
          street_number: "府前路42号",
          detail: ""
        },
        isDefault: false
      },
      {
        name: "3",
        phone: 18218523023,
        address: {
          city: "清远市",
          district: "清新区",
          nation: "中国",
          province: "广东省",
          street: "府前路",
          street_number: "府前路42号",
          detail: ""
        },
        isDefault: false
      },
      {
        name: "4",
        phone: 18218523023,
        address: {
          city: "清远市",
          district: "清新区",
          nation: "中国",
          province: "广东省",
          street: "府前路",
          street_number: "府前路42号",
          detail: ""
        },
        isDefault: false
      },
      {
        name: "5",
        phone: 18218523023,
        address: {
          city: "清远市",
          district: "清新区",
          nation: "中国",
          province: "广东省",
          street: "府前路",
          street_number: "府前路42号",
          detail: ""
        },
        isDefault: false
      }
    ]
  },

  handleTap(e) {
    wx.showToast({
      title: e.detail.type,
      icon: "none"
    })
  },
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})