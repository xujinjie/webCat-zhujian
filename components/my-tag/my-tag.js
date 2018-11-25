
Component({
  properties: {
    type: {
      type: String,
      value: "normal"
    },
    color: {
      type: String
    },
    hit: {
      type: Boolean,
      value: false
    },
    closable: {
      type: Boolean,
      value: false
    },
    round: {
      type: Boolean,
      value: false
    },
    roundSize: {
      type: Number,
      value: 0
    },
    size: {
      type: Number,
      value: 60
    },
    animitedable: {
      type: Boolean,
      value: true
    },
    title: {
      type: [Number, String]
    },
    selectable: {
      type: Boolean,
      value: false
    },
    span: {
      type: Number
    }
  },

  data: {
    bili: null,
    iconColor: null,
    isHide: false,
    isSelect: false,
    sameWidth: null,
    animate: false
  },
  attached() {
    this._init()
  },
  ready(){

  },
  methods: {
    _init() {
      let bili = 750 / wx.getSystemInfoSync().screenWidth
      let iconColor = null
      let percent = 100/this.data.span + "%"
      switch (this.data.type) {
        case "normal":
          iconColor = "#889EFF"
          break
        case "success":
          iconColor = "#67C23A"
          break
        case "info":
          iconColor = "#909399"
          break
        case "warning":
          iconColor = "#E6A23C"
          break
        case "danger":
          iconColor = "#F56C6C"
          break
      }
      this.setData({
        bili,
        iconColor,
        percent
      })
    },
    hideTag() {
      let selectable = this.data.selectable
      let closable = this.data.closable
      if (selectable) {
        let title = this.data.title
        let isSelect = this.data.isSelect
        if(isSelect){
          this.setData({
            color: "",
            isSelect: false
          })
          this.triggerEvent("select", { value: this.data.title,isSelect: false })
        }
        else{
          if(this.data.selectType){
            this.setData({
              color: "",
              isSelect: true
            })
          }
          else{
            this.setData({
              color: "#606266",
              isSelect: true
            })
          }
          this.triggerEvent("select", { value: this.data.title, isSelect: true})
        }
      }
      else {
        if (closable){
          if (this.data.animitedable){
            this.setData({
              animate: true
            })
            setTimeout(() => {
              this.setData({
                isHide: true,
                animate: false
              })
            }, 600)
          } 
          else{
            this.setData({
              isHide: true
            })
          }
          this.triggerEvent("close", { value: this.data.title, isClose: true })
        }
      }
    }
  }
})

module.exports = {
  "参数": {
    title: "string 标签的内容",
    size: "number 标签的大小",
    round: "boolean 是否圆角 配合 round-size使用",
    roundSize: "Number 圆角的像素 rpx 配合round使用，默认为0",
    closable: "是否显示关闭按钮",
    color: "标签的背景颜色",
    type: "标签的类型，有 normal，success，info，warning，danger"
  }
}