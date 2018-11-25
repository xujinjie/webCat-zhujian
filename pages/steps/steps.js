let stepsAPIData = require("../../components/componentsAPI.js").steps

Page({

  data: {
    stepsAPIData,
    steps: [
      {
        current: true,
        done: false,
        text: '步骤一',
        desc: '10.01'
      },
      {
        done: false,
        current: false,
        text: '步骤二',
        desc: '10.02'
      },
      {
        done: false,
        current: false,
        text: '步骤三',
        desc: '10.03'
      },
      {
        done: false,
        current: false,
        text: '步骤四',
        desc: '10.04'
      }
    ],
    type: "normal",
    direction: "horizontal",
    textType:"is-inline",
    center: true,
    space: null
  },
  setdirection(){
    let direction = this.data.direction
    if (direction == "horizontal"){
      direction = "vertical"
    }
    else{
      direction = "horizontal"
    }
    this.setData({
      direction
    })
  },
  settype(){
    let type = this.data.type
    if (type == "normal"){
      type = "icon"
    }
    else{
      type = "normal"
    }

    this.setData({
      type
    })
  },

  settextType(){
    let textType = this.data.textType
    if (textType == "is-inline"){
      textType = "is-block"
    }
    else{
      textType = "is-inline"
    }
    this.setData({
      textType
    })
  },

  setspace(){
    let space = this.data.space
    if (space) {
      space = null
    }
    else {
      space = 100
    }
    this.setData({
      space
    })
  },
  setcenter(){
    let center = this.data.center
    if(center){
      center = false
    }
    else{
      center = true
    }
    this.setData({
      center
    })
  },
  setDone(){
    let steps = this.data.steps
    let done = 0
    for(let i = 0;i<steps.length;i++){
      if(steps[i].current){
        steps[i].done = true
        steps[i].current = false
        if(i+1>=steps.length){
          steps[i].current = false
        }
        else{
          steps[i + 1].current = true 
        }
        break
      }
    }
    this.setData({
      steps
    })
  }
})