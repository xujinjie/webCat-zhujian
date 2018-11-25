// components/address/address.js
Component({

  properties: {
    address: {
      type: Array
    }
  },


  data: {

  },

  ready() {
    this._init()
  },
  methods: {
    _init() {
      var that = this
      wx.createSelectorQuery().in(this).select('.add-address').boundingClientRect((res) => {
        let addAddress = res.height
        wx.getSystemInfo({
          success(res) {
            that.setData({
              scrollHeight: res.windowHeight - addAddress + "px"
            })
          }
        })
      }).exec()
    },
    handleTap(e) {
      let index = e.currentTarget.dataset.index
      let tapType = e.currentTarget.dataset.type
      if (tapType == "setDefault") {
        let address = this.data.address
        address.forEach((el, inx) => {
          if (inx == index) {
            address[inx].isDefault = true
          } else {
            address[inx].isDefault = false
          }

          this.setData({
            address
          })
        })
        this.triggerEvent("setDefault", {
          index,
          type: tapType
        })
      }
      if (tapType == "edit") {
        this.triggerEvent("edit", {
          index,
          type: tapType
        })
      }
      if (tapType == "delete") {
        this.triggerEvent("delete", {
          index,
          type: tapType
        })
      }
      if (tapType == "add") {
        this.triggerEvent("add", {
          index: "none",
          type: tapType
        })
      }
    }
  }
})