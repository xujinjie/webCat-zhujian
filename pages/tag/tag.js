let tagAPIData = require("../../components/componentsAPI.js").tag

Page({

  data: {
    tagAPIData,
    tag: ["标签一", "标签二", "我是标签", "我也是标签", "我还是标签啊", "标签一", "标签二", "我是标签"],
    selectData: {}
  },
  tagSelect(e) {
    let selectData = this.data.selectData
    let value = e.detail.value
    let isSelect = e.detail.isSelect
    if (isSelect) {
      selectData[value] = value
    }
    else {
      delete selectData[value]
    }
    this.setData({
      selectData
    })
  
    wx.showToast({
      title: '选择了' + Object.keys(this.data.selectData).length,
    })
  },
})