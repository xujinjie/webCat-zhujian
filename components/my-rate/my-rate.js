
Component({

  properties: {
    type: {
      type: String,
      value: "smile"
    },
    max: {
      type: Number,
      value: 5
    },
    size: {
      type: Number,
      value: 40
    },
    initColor: {
      type: String,
      value: "#C9D4E0"
    },
    goodColor: {
      type: String,
      value: "#F7BA2A"
    },
    badColor: {
      type: String,
      value: "#99A9BF"
    },
    mark: {
      type: Number,
      value: 2
    },
    disable: {
      type: Boolean,
      value: false
    },
    rateValue: {
      type: Number,
      value: null
    },
    showText: {
      type: Boolean,
      value: false
    },
    showScore: {
      type: Boolean,
      value: false
    },
    justifyContent: {
      type: String,
      value: "center"
    }
  },
  data: {
    iconData: null
  },
  ready() {
    this._init()
  },
  methods: {
    iconTap(e) {
      if (!this.data.disable) {
        let max = this.data.max
        let index = e.target.dataset.index
        let mark = this.data.mark
        let text = ""
        switch (index){
          case 0:
            text = "非常不满意"
            break
          case 1:
            text = "不满意"
            break
          case 2:
            text = "不满意"
            break
          case 3:
            text = "一般"
            break
          case 4:
            text = "非常满意"
            break
        }
 
        let obj = {}
        if (this.data.type == "smile") {
          if (index > mark) {
            for (let i = 0; i < max; i++) {
              let temp = {}
              if (i <= index) {
                temp.color = this.data.goodColor
                temp.iconType = "smile"
                obj[i] = temp

              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "meh"
                obj[i] = temp
              }
            }
          }
          if (index == mark) {
            for (let i = 0; i < max; i++) {
              let temp = {}
              if (i <= index) {
                temp.color = this.data.goodColor
                temp.iconType = "meh"
                obj[i] = temp
              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "meh"
                obj[i] = temp
              }
            }
          }

          if (index < mark) {
            for (let i = 0; i < max; i++) {
              let temp = {}
              if (i <= index) {
                temp.color = this.data.badColor
                temp.iconType = "frown"
                obj[i] = temp
              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "meh"
                obj[i] = temp
              }
            }
          }
        }
        else if (this.data.type == "star") {
          if (index >= mark) {
            for (let i = 0; i < max; i++) {
              let temp = {}
              if (i <= index) {
                temp.color = this.data.goodColor
                temp.iconType = "star"
                obj[i] = temp
              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "star1"
                obj[i] = temp
              }
            }
          }
          else {
            for (let i = 0; i < max; i++) {
              let temp = {}
              if (i <= index) {
                temp.color = this.data.badColor
                temp.iconType = "star"
                obj[i] = temp
              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "star1"
                obj[i] = temp
              }
            }
          }
        }
        this.setData({
          iconData: obj,
          text,
          score: index+1
        })
        this.triggerEvent("change", { value: index + 1 })
      }
    },
    _init() {
      let max = this.data.max
      let isDisable = this.data.disable
      let rateValue = Math.round(this.data.rateValue) - 1
      let mark = this.data.mark
      let obj = {}
      for (let i = 0; i < max; i++) {
        let temp = {}
        if (this.data.type == "smile") {
          if (isDisable) {
            if (rateValue > mark) {
              if (i <= rateValue) {
                temp.color = this.data.goodColor
                temp.iconType = "smile"
                obj[i] = temp
              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "meh"
                obj[i] = temp
              }
            }
            else if (rateValue == mark) {
              if (i <= rateValue) {
                temp.color = this.data.goodColor
                temp.iconType = "meh"
                obj[i] = temp
              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "meh"
                obj[i] = temp
              }
            }
            else {
              if (i <= rateValue) {
                temp.color = this.data.badColor
                temp.iconType = "frown"
                obj[i] = temp
              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "meh"
                obj[i] = temp
              }
            }
          }
          else {
            temp.color = this.data.initColor
            temp.iconType = "meh"
            obj[i] = temp
          }
        }
        else if (this.data.type == "star") {

          if (isDisable) {
            if (rateValue >= mark) {

              let temp = {}
              if (i <= rateValue) {
                temp.color = this.data.goodColor
                temp.iconType = "star"
                obj[i] = temp
              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "star1"
                obj[i] = temp
              }

            }
            else {

              let temp = {}
              if (i <= rateValue) {
                temp.color = this.data.badColor
                temp.iconType = "star"
                obj[i] = temp
              }
              else {
                temp.color = this.data.initColor
                temp.iconType = "star1"
                obj[i] = temp
              }

            }
          }
          else {
            let temp = {}
            temp.color = this.data.initColor
            temp.iconType = "star1"
            obj[i] = temp
          }
        }
      }


      this.setData({
        iconData: obj,
        text: "请评分",
        score: "请评"
      })
    }
  }
})

module.exports = {
  "参数": {
    type: "评分的图标，有smile，star。",
    max: "图标的数量，默认5",
    size: "图标的大小,默认40rpx",
    initColor: "图标默认的颜色",
    goodColor: "评价高颜色",
    badColor: "评分低的颜色",
    mark: "评分高低的分界线",
    rateValue: "分数",
    disable: "只读",
    justifyContent: "垂直对齐方式",
    showScore: "显示分数",
    showText: "显示文字提醒"
  },
  "函数": {
    change: "评分改变是触发"
  }
}