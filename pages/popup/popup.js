let popupAPIData = require("../../components/componentsAPI.js").popup
Page({


  data: {
    popupAPIData,
    direction: "right"
  },
  showPopup(e){
    this.setData({
      direction: e.target.dataset.direction
    })
    let $popup = this.selectComponent('.popup')
    $popup.showPopup()
  }
})