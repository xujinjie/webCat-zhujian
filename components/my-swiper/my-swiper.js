// components/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //指示器
    indicatorDots: {
      type: Boolean,
      value: false
    },
    //自动切换
    autoplay: {
      type: Boolean,
      value: true
    },
    interval: {
      type: [Number,String],
      value: 3000
    },
    duration: {
      type: [Number, String],
      value: 1000
    },
    circular: {
      type: Boolean,
      value: true
    },
    indicatorActiveColor: {
      type: String,
      value: "#000"
    },
    indicatorColor: {
      type: String,
      value: "rgba(0,0,0,.3)"
    },
    wiperHeight: {
      type: [Number,String],
      value: 400
    },
    src: {
      type: Array,
      value: []
    },
    imageMode: {
      type: String,
      value: "aspectFill"
    },
    vertical: {
      type: Boolean,
      value: false
    },
    count: {
      type: [Number,String],
      value: 1
    },
    nextMargin: {
      type: String,
      value: "0px"
    },
    previousMargin: {
      type: String,
      value: "0px"
    },
    current: {
      type: Number,
      value: 0
    },
    selfDots: {
      type: Boolean,
      value: false
    }
  },


  data: {
    theIndex: 0
  },
  ready(){
   
      this.setData({
        theIndex: this.data.current
      })

  },
  methods: {
    onSwiperTap(e){
      let index = e.target.dataset.index
      let detail = e.detail
      this.triggerEvent('swipertap', {
        e,
        index
      });
    },
    indexChange(e){
      let index = e.detail.current
      this.setData({
        theIndex: index
      })
      this.triggerEvent('indexChange', e);
    },
    handleAnimationfinish(e){
      this.triggerEvent('animationfinish', e);
    },
    dotsTap(e){
      let index = e.currentTarget.dataset.index
      this.setData({
        autoplay: false,
        current: index
      })
      setTimeout(()=>{
        this.setData({
          autoplay: true
        })
      },2000)
    }
  }
})
