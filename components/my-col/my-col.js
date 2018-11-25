Component({
  options: {
    multipleSlots: true 
  },
  properties: {
    span: {
      type: Number,
      value: 24
    },
    offset: {
      type: Number
    }
  },
  relations: {
    '../my-row/my-row': {
      type: 'parent'
    }
  },

  data: {

  },
  attached(){

  },
  ready(){
    this._init()
  },
  methods: {
    _init(){
      let parentNode = this.getRelationNodes("../my-row/my-row")
      let span = this.data.span
      let gutter = parentNode[0].data.gutter
      gutter = gutter+"rpx"
      let offset = this.data.offset
      if(offset){
        span += offset
      }
      if(span>24){
        span = 24
      }
      offset = 100/24*offset
      let bottom = parentNode[0].data.bottom
      this.setData({
        gutter,
        bottom,
        offset,
        span
      })
    }
  },
})
