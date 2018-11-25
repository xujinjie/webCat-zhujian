let swiperAPIData = require("../../components/componentsAPI.js").swiper

Page({

  data: {
    swiperAPIData,
    src: ["https://www.mirai.site/wx765c79a164bf5da6.o6zAJs_mpZUWhc-WLU6gvaFNgQSk.78BaT1UdTAxbe1530331181053cd88c88e7763ad4316.jpg", "https://www.mirai.site/wx765c79a164bf5da6.o6zAJs_mpZUWhc-WLU6gvaFNgQSk.nciv6tICXnKmc124a0221a7941d07b344474df4aa05f.jpg","https://www.mirai.site/wx765c79a164bf5da6.o6zAJs_mpZUWhc-WLU6gvaFNgQSk.RlyQVo3asa4rff8bed58c652360fda2d302b7bc5c7bf.jpg"]
  },
  swipertap(e){
    wx.showToast({
      title: "index：" + e.detail.index,
      icon: "none"
    })
  }
})