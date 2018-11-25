
Component({

  properties: {
    type: {
      type: String,
      value: "simple"
    },
    buttons: {
      type: Array
    } 
  },


  data: {
    isShow: false
  },
  ready() {
    this._init()
  },
  methods: {
    _init() {
      let sysMsg = wx.getSystemInfoSync()
      let width = sysMsg.windowWidth
      let height = sysMsg.windowHeight
      this.setData({
        width,
        height
      })
    },
    showDecision({title = "是否删除", confirmText = "是", cancelText="否"}) {
      return new Promise((resolve, reject) => {
        this.setData({
          isShow: true,
          animated: "animated fadeInUp",
          markAnimated: "animated fadeIn",
          title,
          confirmText,
          cancelText,
          resolve,
          reject
        })
      })
    },
    hideDecision() {
      this.setData({
        animated: "animated fadeOutDown",
        markAnimated: "animated fadeOut"
      })
      setTimeout(()=>{
        this.setData({
          isShow: false          
        })
      },500)
    },
    buttonTap(e){
      let type = e.target.dataset.type || e.currentTarget.dataset.type
      if (type == "confirm"){
        this.data.resolve({type})
      }
      else{
        this.data.reject({type})
      }
    }
  }
})
