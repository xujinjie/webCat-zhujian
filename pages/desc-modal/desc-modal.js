let descModal = require("../../components/componentsAPI.js").descModal
Page({

  data: {
    descModal
  },


  buttonTap(){
    let $detailModal = this.selectComponent(".desc-modal")
    $detailModal.toggle()
  },
  showDetailmModal(){
    let $detailModal = this.selectComponent(".desc-modal")
    $detailModal.toggle()
  }
})