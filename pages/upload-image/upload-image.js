let uploadImage = require("../../components/componentsAPI.js").uploadImage
Page({


  data: {
    uploadImageData: uploadImage
  },

  uploadPicture(e){
    wx.showToast({
      title: `选择了${e.detail.tempFilePaths.length}`,
    })
  }
})