const styleHandle = require("../../utils/styleHandle.js").styleHandle
Component({

  properties: {
    selfFixed: {
      type: [String,Object],
      value: {
        bottom: "100rpx",
        right: "20rpx"
      }
    },
    navItem: {
      type: Array
    }
  },

  data: {
    showList: false
  },

  ready(){
    this._init()
  },
  methods: {
    _init(){
      let _selfFixed = styleHandle(this.data.selfFixed)
      this.setData({
        _selfFixed,
      })
     
    },
    toggle(){
      let showList = this.data.showList
      if (showList){
        showList = false
      }
      else{
        showList = true
      }
      this.setData({
        showList,
        canAnimated: true
      })
    },
    navItemTap(e){
      let index = e.currentTarget.dataset.index
      let data = this.data.navItem[index]
      this.triggerEvent("itemTap",{index,data})
      this.toggle()
    }
  }
})
