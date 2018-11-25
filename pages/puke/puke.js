// pages/puke/puke.js
Page({

  data: {
    firstFlipped: false,
    lastFlipped: false,
    firstIndex: null,
    lastIndex: null,
    pukeArr: [
      {
        id: 1,
        src: "./img/heitaoyi.png"
      },
      {
        id: 2,
        src: "./img/heitaoer.png"
      },
      {
        id: 3,
        src: "./img/dawang.png"
      },
      {
        id: 4,
        src: "./img/heitaoq.png"
      },
      {
        id: 5,
        src: "./img/heitaosan.png"
      },
      {
        id: 6,
        src: "./img/heitaosi.png"
      },
      {
        id: 7,
        src: "./img/heitaowu.png"
      },
      {
        id: 8,
        src: "./img/heitaok.png"
      },
    ]
  },
  onReady(){
    this._init()
  },
  pukeTap(e) {
    let firstFlipped = this.data.firstFlipped
    let lastFlipped = this.data.lastFlipped

    let firstIndex = this.data.firstIndex
    let lastIndex = this.data.lastIndex

    let index = e.currentTarget.dataset.index

    if (firstFlipped) {
      if (lastFlipped) {
        firstFlipped = true
        lastFlipped = false
        firstIndex = index
        lastIndex = null
      }
      else{
        lastFlipped = true
        lastIndex = index
        let listArr = this.data.listArr
        let firstId = listArr[firstIndex].id
        let lastId = listArr[lastIndex].id
        if(firstId == lastId){
          listArr[firstIndex].success = true
          listArr[lastIndex].success = true

            this.setData({
              listArr
            })

        }

      }
    }
    else{
      firstFlipped = true
      firstIndex = index
    }

    this.setData({
      firstIndex,
      firstFlipped,
      lastIndex,
      lastFlipped
    })
  },
  _init(){
    let pukeArr = this.data.pukeArr
    let listArr = [...pukeArr, ...pukeArr]
    this.shuffle(listArr)
    this.setData({
      listArr
    })
  },
  //打乱数组
  shuffle(arr) {
    let i = arr.length;
    while(i) {
      let j = Math.floor(Math.random() * i--);
      console.log(j);
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
})