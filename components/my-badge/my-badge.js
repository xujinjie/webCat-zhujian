// plugin/components/my-badge/my-badge.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: [String,Number],
      observer() {
        this.maxValue()
      }
    },
    max: {
      type: Number,
      value: 99
    },
    //小红点
    isDot: {
      type: Boolean,
      value: false
    },
    selfStyle: {
      type: String
    }
  },

  data: {

  },
  ready(){
    this._init()
  },
  methods: {
    _init(){
      this.maxValue()
    },
    maxValue(){
      let max = this.data.max
      let value = this.data.value

        if (!this.data.isDot) {
          let temp = typeof value
          if (temp == "number") {
            if (value > max) {
              this.setData({
                value: max + "+"
              })
            }
          }
        }
    

    }
  }
})
