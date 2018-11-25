
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    scrollTop: {
      type: Number,
      observer() {
        this.setFixed()
      }
    }
  },

  data: {
    isFixed: false,
    positionTop: null
  },
  ready(){
   
  },
  methods: {
    _init(){
      var query = wx.createSelectorQuery().in(this)
      
      query.select('.my-sticky').boundingClientRect((res) => {
        this.setData({
          positionTop: res.top
        })
      }).exec()
    },

    setFixed(){
      let isFixed
      if (this.data.positionTop<this.data.scrollTop){
        isFixed = true
      }
      else{
        isFixed = false
      }
      this.setData({
        isFixed
      })
      this.triggerEvent("isfiexd", { isFixed })
    },
    
    handleTap(){
      wx.pageScrollTo({
        scrollTop: this.data.positionTop
      })
    }
  }
})
