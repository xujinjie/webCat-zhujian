// plugin/components/my-elip/my-elip.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    text: {
      type: String
    },
    line: {
      type: Number,
      value: 2
    },
    showIcon: {
      type: Boolean,
      value: true
    },
    openable: {
      type: Boolean,
      value: true
    },
    isSlot: {
      type: Boolean,
      value: false
    },
    iconDirection: {
      type: String,
      value: "bottom"
    }
  },

  data: {
    tempLine: null,
    arrow: "jiantouxia"
  },
  attached() {
    this._init()
  },
  methods: {
    _init() {
      this.setData({
        tempLine: this.data.line
      })
    },
    elipTap() {
      if(this.data.openable){
        let tempLine = this.data.tempLine
        let arrow = this.data.arrow
        if (tempLine) {
          tempLine = null,
            arrow = "jiantoushang"
        }
        else {
          tempLine = this.data.line
          arrow = "jiantouxia"
        }
        this.setData({
          tempLine,
          arrow
        })
      }
    }
  }
})
