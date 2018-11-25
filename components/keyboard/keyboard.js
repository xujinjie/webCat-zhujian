
Component({

  properties: {
    isRandom: {
      type: Boolean,
      value: true
    },
    keys: {
      type: Number,
      value: 6
    },
    cancelText: {
      type: String,
      value: "取消"
    },
    titleText: {
      type: String,
      value: "密码输入"
    },
    inputText: {
      type: String,
      value: '输入数字密码'
    },
    deleteText: {
      type: String,
      value: "x"
    },
    isShow: {
      type: Boolean,
      value: false,
      observer(newval){
        if(newval){
          this.setData({
            animated: "fadeInUp"
          })
        }
        else{
          this.setData({
            animated: "fadeOutDown"
          })
          setTimeout(() => {
            this.setData({
              tapValue: null,
              value: "",
              isShow: false,
              animated: null
            })
          }, 500)
        }
      }
    },
    ablenull: {
      type: Boolean,
      value: false
    }
  },

  data: {
    tapValue: null,
    value: "",
    animated: null
  },
  ready() {
    this._init()
  },
  methods: {
    _init() {
      let sysMsg = wx.getSystemInfoSync()
      let width = sysMsg.windowWidth
      let height = sysMsg.windowHeight
      let isRandom = this.data.isRandom
      let numsData = this.numberSort(isRandom)
      this.setData({
        width,
        height,
        numsData,
        animated: "fadeInUp"
      })
      
    },

    addPassword(e) {
      let tapValue = e.currentTarget.dataset.value
      let value = this.data.value
      this.setData({
        tapValue
      })
      setTimeout(() => {
        this.setData({
          tapValue: null
        })
      }, 150)

      if (value.length >= this.data.keys) {
        return
      }
      value = `${value}${tapValue}`
      this.setData({
        value
      })
    
      if(value.length==this.data.keys){
        this.triggerEvent("confirm",{value})
      }
      
    },
    ablenull(e) {
      let value = this.data.value
      this.triggerEvent("confirm", { value })
    },
    isDelete() {
      let value = this.data.value
      let len = value.len
      value = value.slice(0, -1)
      this.setData({
        value
      })
    },
    clearAll() {
      this.setData({
        value: ""
      })
    },
    isCancel(e){
      this.setData({
        animated: "fadeOutDown"
      })
      setTimeout(()=>{
        this.setData({
          tapValue: null,
          value: "",
          isShow: false,
          animated: null
        })
        this.triggerEvent("cancel", e)
      },500)
    },
    numberSort(isRandom = false) {
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      const len = arr.length
      if (isRandom) {
        const floor = Math.floor
        const random = Math.random
        let i, j, temp, n = floor(len / 2) + 1
        while (n--) {
          i = floor(random() * len)
          j = floor(random() * len)
          if (i !== j) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
          }
        }
      }
      let topNums = []
      for (let i = 0; i < 3; i++) {
        topNums.push(arr.slice(i * 3, (i + 1) * 3))
      }
      let bottomNum = arr[len - 1]
      return { topNums, bottomNum }
    },

    showKeyBoard() {
      this.setData({
        isShow: true,
        animated: "fadeInUp"
      })
    },
    hideKeyBoard() {
      this.setData({
        animated: "fadeOutDown"
      })
      setTimeout(() => {
        this.setData({
          tapValue: null,
          value: "",
          isShow: false,
          animated: null
        })
      }, 500)
    }
  }
})
