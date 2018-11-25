
Component({
  properties: {
    options: {
      type: Array
    }
  },
  data: {
    selectOptions: [],
    current: 0
  },
  ready(){
    this._init()
  },
  methods: {
    _init(){
      //console.log(this.data.options)
    },
    showCascader(){
      let $popup = this.selectComponent('.popup')
      $popup.showPopup()
      return new Promise((resolve,reject)=>{
        this.setData({
          resolve,
          reject
        })
      })
    },

    firstTap(e){
      let value = e.currentTarget.dataset.value
      let index = e.currentTarget.dataset.index
      let arr = []
      arr.push(this.data.options[index].label)
      this.setData({
        secondOptions: this.data.options[index].children,
        selectOptions: arr,
        firstIndex: index,
        thirdOptions: null
      })
    },
    secondTap(e){
      let firstIndex = this.data.firstIndex
      let value = e.currentTarget.dataset.value
      let index = e.currentTarget.dataset.index
      let selectOptions = this.data.selectOptions
      selectOptions[1] = this.data.secondOptions[index].label
      selectOptions = selectOptions.slice(0,2)
      if (!this.data.secondOptions[index].children) {

        let $popup = this.selectComponent('.popup')
        $popup.hidePopup()
        this.data.resolve({ value: selectOptions})
        return
      }

      this.setData({
        thirdOptions: this.data.secondOptions[index].children,
        selectOptions,
        current: 1,
        secondIndex: index,
        thirdIndex: null,
      })
    },
    thirdTap(e){
      let thirdOptions = this.data.thirdOptions
      let value = e.currentTarget.dataset.value
      let index = e.currentTarget.dataset.index
      let selectOptions = this.data.selectOptions
      selectOptions[2] = thirdOptions[index].label
      this.setData({
        thirdIndex: index
      })
      if (!this.data.thirdOptions[index].children) {
        let $popup = this.selectComponent('.popup')
        $popup.hidePopup()
        this.data.resolve({ value: selectOptions })
        return
      }

      this.setData({
        fourOptions: thirdOptions[index].children,
        selectOptions,
        current: 1,
      })
    },
    topNavTap(e){
      if(e.target.dataset.index==0){
        this.setData({
          current: 0,
          thirdIndex: null,
          secondIndex: null
        })
      }
    }
  }
})
