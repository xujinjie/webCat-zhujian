
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    data: {
      type: Array
    },
    active: {
      type: Number,
      value: 0
    },
    animated: {
      type: Boolean,
      value: false
    }
  },

  data: {
    scrollLeft: 0
  },
  ready(){
    this._init()
  },
  methods: {
    _init(){
      let sysMsg = wx.getSystemInfoSync()
      this.setData({
        windowWidth: sysMsg.windowWidth,
        windowHeight: sysMsg.windowHeight
      })
    },
    tabItemTap(e){
      let windowWidth = this.data.windowWidth/2
      let index = e.currentTarget.dataset.index
      let offsetLeft = e.target.offsetLeft
      let scrollLeft = 0
      scrollLeft = offsetLeft - windowWidth
      this.setData({
        active: index,
        scrollLeft
      })
      this.triggerEvent("change",{index,data:this.data[index]})
    }
  }
})
