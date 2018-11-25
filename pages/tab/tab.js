let tab = require("../../components/componentsAPI.js").tab

Page({


  data: {
    tabAPIData: tab,
    tabNavData: [
      {
        label: "标签一",
        value: 0,
        icon: "wodefankui",
        src: ""
      },
      {
        label: "标签二",
        value: 0,
        icon: "gouwuche",
        src: ""
      },
      {
        label: "标签三",
        value: 0,
        icon: "search",
        src: ""
      },
      {
        label: "标签四",
        value: 0,
        icon: "naozhong",
        src: "",

      },
      {
        label: "标签五",
        value: 0,
        icon: "shijian",
        src: "",
      },
      {
        label: "标签五标签五",
        value: 0,
        icon: "shouhuodizhi",
        src: "",
      },
      {
        label: "标签五标签五标签五标签五",
        value: 0,
        icon: "wodedingdan",
        src: "",
      }
    ]
  },
  selectChange(e){
    wx.showToast({
      title: "index: " + e.detail.index,
    })
  }
})