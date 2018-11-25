
Component({
  properties: {
    selfStyle: {
      type: String
    },
    options: {
      type: Array,
      value: []
    },
    delayStep: {
      type: Number,
      value: 0.05
    },
    moveable: {
      type: Boolean,
      value: false
    },
    buttonColor: {
      type: String,
      value: "#ff5777"
    },
    buttonIconColor: {
      type: String,
      value: "#fff"
    },
    buttonSize: {
      type: Number,
      value: 50
    },
    buttonIconSize: {
      type: Number,
      value: 60
    }
  },


  data: {
    bottom: 10,
    right: 10,
    showIcon: false,
    mainButtonAnimated: null,
    innerOptions: []
  },
  ready() {
    this._init()
  },
  methods: {
    _init() {
      let sysMsg = wx.getSystemInfoSync()
      this.sysMsg = sysMsg
      let windowWidth = sysMsg.windowWidth
      let windowHeight = sysMsg.windowHeight
      let delayStep = this.data.delayStep
      let innerOptions = this.data.options
      let delayTime = 0
      innerOptions.forEach((el)=>{
        el.delay = delayTime
        delayTime += delayStep
      })
      this.setData({
        windowWidth,
        windowHeight,
        innerOptions
      })
    },
    
    //可以动代码(开始时很流畅，后面就一卡一卡的)
    buttonTapMove(e){
      let moveable = this.data.moveable
      if(moveable){
        let touches = e.touches[0]
        let clientX = touches.clientX + 25
        let clientY = touches.clientY + 25
        let windowWidth = this.sysMsg.windowWidth
        let windowHeight = this.sysMsg.windowHeight
        let bottom = windowHeight - clientY
        let right = windowWidth - clientX
        if (bottom < 0) {
          bottom = 0
        }
        if (right < 0) {
          right = 0
        }
        if (bottom + 50 > windowHeight) {
          bottom = windowHeight - 50
        }
        if (right + 50 > windowWidth) {
          right = windowWidth - 50
        }

        this.setData({
          bottom,
          right,
        })
      }
    },
  
    //打开icon面板
    toggleMainButton() {
      this.setData({
        showIcon: true,
        mainButtonAnimated: "animatedRotate",
        itemAnimated: "fadeInUpBig"
      })
    },

    closeIcon(){
      let len = this.data.options.length
      let time = len*0.05*1000
      
      this.setData({
        mainButtonAnimated: "animatedRotate2",
        itemAnimated: "fadeOutDownBig"
      })
      setTimeout(()=>{
        this.setData({
          showIcon: false
        })
      }, time)
    },
    iconItemTap(e){
      let index = e.currentTarget.dataset.index
      let options = this.data.options
      delete options[index].delay
      this.triggerEvent("itemtap",{value: options[index],index})
    }
  }
})
