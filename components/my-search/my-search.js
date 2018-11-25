// components/searchComponent/searchComponent.js
Component({

  properties: {
    searchBgc: {
      type: String,
      value: ""
    },
    placeholder:{
      type: String,
      value: "输入商品名字搜索"
    }
  },


  data: {

  },


  methods: {
    handleTap(e){
      this.triggerEvent('searchtap',e);
    }
  }
})
