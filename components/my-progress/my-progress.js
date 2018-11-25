
Component({

  properties: {
    //百分比
    percentage: {
      type: Number,
      value: 0,
      observer (newVal) {
        if (this.data.type =="line"){
            this.setData({
              percentage: newVal
            })
        }
        else{
          this.backgroundCircle()
          this.circleProgress(newVal)
          this.progressText(newVal)
        }
        this.triggerEvent("change",{value: newVal+"%"})
      }
    },
    //进度条类型
    type: {
      type: String,
      value: "line"
    },
    //进度条的宽度，单位 rpx
    strokeWidth: {
      type: Number,
      value: 16
    },
    paddingLeft: {
      type: Number,
      value: 20
    },
    paddingRight: {
      type: Number,
      value: 20
    },
    //进度条显示文字内置在进度条内（只在 type= line 时可用）
    textInside: {
      type: Boolean,
      value: false
    },
    //进度条背景色（会覆盖 status 状态颜色）
    color: {
      type: String,
      value: "#13CE66"
    },
    //环形进度条画布宽度（只在 type=circle 时可用）
    width: {
      type: Number,
      value: 333
    },
    //是否显示进度条文字内容
    showText: {
      type: Boolean,
      value: true
    }
  },
  ready() {
    this.rad = Math.PI * 2 / 100
    this.backgroundCircle()
    this.bili = 750 / wx.getSystemInfoSync().screenWidth
    this.centerX = this.data.width / 2 / this.bili
    this.centerY = this.data.width / 2 / this.bili
    this.backgroundCircle()
    this.circleProgress(this.data.percentage)
    this.progressText(this.data.percentage)

  },
  methods: {
    backgroundCircle() {
      this.ctx = wx.createCanvasContext('myCanvas', this)
      this.ctx.save()
      this.ctx.lineWidth = this.data.strokeWidth / 4
      this.ctx.beginPath()
      this.ctx.arc(this.centerX,this.centerX, this.centerX - this.data.strokeWidth/2/this.bili, 0, 2*Math.PI)
      this.ctx.setStrokeStyle("#e5e9f2")
      this.ctx.stroke()
      this.ctx.closePath()
      this.ctx.restore()
    },
    circleProgress(percentage){
      this.ctx.save()
      this.ctx.lineWidth = this.data.strokeWidth / 2 /this.bili
      this.ctx.beginPath()
      this.ctx.arc(this.centerX, this.centerX, this.centerX - this.data.strokeWidth / 2 / this.bili, -Math.PI / 2, -Math.PI / 2 + percentage * this.rad) 
      this.ctx.setStrokeStyle("red")
      this.ctx.stroke()
      this.ctx.closePath()
      this.ctx.restore()
    },
    progressText(percentage){
      this.ctx.save()
      this.ctx.setStrokeStyle("#000")
      this.ctx.setFontSize(20)
      this.ctx.beginPath()
      this.ctx.fillText(percentage + "%", this.centerX-17, this.centerY+10, 100)
      this.ctx.stroke()
      this.ctx.closePath()
      this.ctx.draw()
      this.ctx.restore()
    }
  }
})
