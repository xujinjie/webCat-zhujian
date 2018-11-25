// components/steps/steps.js
Component({

  properties: {
    direction: {
      type: String,
      value: "horizontal" //horizontal,vertical
    },
    space: {
      type: [Number,String],
      observer(newVal){
          this._init()          
      }
    },
    steps: {
      type: Array
    },
    center: {
      type: Boolean,
      value: true
    },
    type: {
      type: String,
      value: "normal" //icon,normal
    },
    
    textType: {
      type: String,
      value: "is-inline" //文本的方向 有is-inline和is-block
    }
  },


  data: {
    stepStyle: null
  },
  ready(){
    this._init()
  },
  methods: {
    _init(){
      let space = this.data.space
      let direction = this.data.direction
      let stepStyle = this.data.stepStyle
      let center = this.data.center
      let len = this.data.steps.length
      //处理容器的距离
      if(space){
        space = space.toString()
        let pxIndex = space.indexOf("px")
        if (direction == "vertical"){
          
          if(pxIndex == -1){
            stepStyle = `height: ${space}rpx`
          }
          else{
            stepStyle = `height: ${space}`
          }
        }
        else if (direction == "horizontal"){
          if (pxIndex == -1){
            stepStyle = `width: ${space}rpx`            
          }
          else{
            stepStyle = `width: ${space}`            
          }         
        }
      }
      else{
  
          let pencent = 100/len + "%"
          stepStyle = `flex-basis: ${pencent}`

      }
      this.setData({
        stepStyle
      })
    } 
  }
})
