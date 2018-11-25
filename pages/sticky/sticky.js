let stickyAPIData = require("../../components/componentsAPI.js").sticky

Page({

  data: {
    stickyAPIData,
    scrollTop: 0
  },
  onReady(){
    let list1 = []
    for(let i=0;i<15;i++){
      list1.push("列表  " + i)
    }
    this.setData({
      list1
    })

    let $sticky = this.selectAllComponents(".sticky")
    $sticky.forEach((el)=>{
      el._init()
    })
    
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },

})