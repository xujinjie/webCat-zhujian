let goodsAPIData = require("../../components/componentsAPI.js").goods
Page({


  data: {
    goodsAPIData,
    goodsMessage: [
      {
        goodsID: 1,
        src: "https://www.mirai.site/wx765c79a164bf5da6.o6zAJs_mpZUWhc-WLU6gvaFNgQSk.78BaT1UdTAxbe1530331181053cd88c88e7763ad4316.jpg",
        price: 100,
        introdution: "哈哈哈哈哈哈"
      },
      {
        goodsID: 2,
        src: "https://www.mirai.site/wx765c79a164bf5da6.o6zAJs_mpZUWhc-WLU6gvaFNgQSk.nciv6tICXnKmc124a0221a7941d07b344474df4aa05f.jpg",
        price: 101,
        introdution: "哈哈哈哈哈哈"
      },
      {
        goodsID: 3,
        src: "https://www.mirai.site/wx765c79a164bf5da6.o6zAJs_mpZUWhc-WLU6gvaFNgQSk.RlyQVo3asa4rff8bed58c652360fda2d302b7bc5c7bf.jpg",
        price: 102,
        introdution: "哈哈哈哈哈哈"
      },
      {
        goodsID: 4,
        src: "",
        price: 103,
        introdution: "哈哈哈哈哈哈"
      },
      {
        goodsID: 5,
        src: "",
        price: 104,
        introdution: "哈哈哈哈哈哈"
      }
    ],
    mode: "column"
  },

  changeMode(){
    let mode = this.data.mode
    if(mode=="row"){
      mode = "column"
    }
    else{
      mode = "row"
    }
    this.setData({
      mode
    })
  },
  innertap(e){
    wx.showToast({
      title: '商品id：' + e.detail.goodsDetail.goodsID,
    })
  },
  more(e){
    wx.showToast({
      title: '点击了more',
      icon: "none"
    })
  }
})