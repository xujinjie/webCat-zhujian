// plugin/components/my-goods-list/my-goods-list.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    //标题
    title: {
      type: String,
      value: ""
    },
    //标题自定义样式
    titleStyle: {
      type: String,
      value: ""
    },
    //标题是否是插槽
    isTitleSlot: {
      type: Boolean,
      value: false
    },
    //标题的背景颜色
    listBackGroundColor:{
      type: String,
      value: "#fff"
    },
    //商品的信息
    goodsMessage: {
      type: Array,
      value: []
    },
    //单行列表的图片的裁剪的样式
    rowImageMode: {
      type: String,
      value: "aspectFit"
    },
    //商品的布置，row为一行一个，column为一行两个
    mode: {
      type: String,
      value: "row"
    },
     //column列表的图片的裁剪的样式
    columnImageMode: {
      type: String,
      value: "aspectFit"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowCollect: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMoreTap(e){
      let index = e.target.dataset.index || e.currentTarget.dataset.index
      let goodsDetail = this.data.goodsMessage[index]
      this.triggerEvent('more', {
        e,
        goodsDetail
      });
    },
    getDetail(e){
      let index = e.target.dataset.index || e.currentTarget.dataset.index
      let goodsDetail = this.data.goodsMessage[index]
      this.triggerEvent('innertap', {
        e,
        goodsDetail
      });
    },
    showCollect(e){
      console.log(e)
    }
  }
})
