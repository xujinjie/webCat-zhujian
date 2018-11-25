const app = getApp()
Page({
  data: {
    //多规格选择后保存的数组
    sortSelectList: [],

    //活动轮播不同的参数
    storeAtivitySwiper: {
      autoplay: true,
      vertical: true,
      circular: true,
      interval: 2000
    },

    //商店信息
    shopMsg: {
      name: "名字",
      post: "欢迎光临，欢迎光临，欢迎光临，欢迎光临，欢迎光临，欢迎光临，欢迎光临，欢迎光临",
      avatar: "https://www.mirai.site/wx765c79a164bf5da6.o6zAJs_mpZUWhc-WLU6gvaFNgQSk.78BaT1UdTAxbe1530331181053cd88c88e7763ad4316.jpg",
      cover: "https://www.mirai.site/wx765c79a164bf5da6.o6zAJs_mpZUWhc-WLU6gvaFNgQSk.78BaT1UdTAxbe1530331181053cd88c88e7763ad4316.jpg",
      activity: [
        {
          text: "满20减10，满10减一",
          flag: "满减"
        },
        {
          text: "首单减15",
          flag: "首单"
        },
        {
          text: "单品优惠",
          flag: "优惠"
        },
        {
          text: "单品优惠",
          flag: "优惠"
        },
        {
          text: "单品优惠",
          flag: "优惠"
        },
        {
          text: "单品优惠",
          flag: "优惠"
        },
        {
          text: "单品优惠",
          flag: "优惠"
        },
        {
          text: "单品优惠",
          flag: "优惠"
        },
        {
          text: "单品优惠",
          flag: "优惠"
        },
        {
          text: "单品优惠",
          flag: "优惠"
        }
      ]
    },
    /*
    navTopStyle: {
      'border-bottom': '1px solid rgba(231, 231, 231, 0.6)', 
      'background-color': '#fff' 
    },
    */
    //左边scroll-view 激活的下标
    leftIndex: 0,

    //选择的总数量
    totalCount: 0,
    //总价格
    totalPrice: 0,
    //结算最低金额
    minPrice: 15,
    //是否能结算
    accountable: false,

    //popup自定义fiexd的值
    selfFixed: {
      left: 0,
      bottom: "45px"
    },

    //popup的字
    cartSelectText: "已选商品",

    //popup清空的字
    clearCartText: "清空",

    tabIndex: 0,

    tabArr: ["点餐", "评价", "商家"],

    //选择的商品
    selectGoodList: [],

    //推荐商品的id,由外面导入
    customizeList: [{
      shopid: 5,
      label: "dazhe",
      categoryName: "折扣",
      recommendID: [1]
    }, {
      shopid: 4,
      label: "recommend", //右边商品展示跳转的选择器id的值
      categoryName: "推荐", //分类名字
      recommendID: [2, 11, 8, 9, 13, 12, 1]
    }],


    //模拟数据
    categoryList: [{
      shopid: 1,
      label: "zhushi", //右边商品展示跳转的选择器id的值
      categoryName: "主食", //分类名字
      icon: {
        type: "", //图标的type
        size: "", //图标的大小
        color: "" //图标的颜色
      },
      //用于右边的商品的展示
      goodsList: [{
          goodID: 1,
          title: "珍珠粉", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/1.webp", //图片的地址
          situation: {
            count: 3, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 7.5, //打几折
            desc: "每单限1份优惠" //详情
          },

          price: {
            afterPrice: 3, //打折后的售价
            beforePrice: 2 //打折前的售价
          }
        },
        {
          goodID: 2,
          title: "米饭", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/2.webp", //图片的地址
          situation: {
            count: 3, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: "", //打几折
            desc: "" //详情
          },
          sort: [{
              title: "规格",
              kind: [{
                  value: "大份",
                  price: 3
                },
                {
                  value: "小份",
                  price: 2
                },
                {
                  value: "中份",
                  price: 1
                },
                {
                  value: "特大",
                  price: 5
                }
              ]
            },

            {
              title: "温度",
              kind: [{
                  value: "冰",
                },
                {
                  value: "热"
                }
              ]
            },

            {
              title: "口味",
              kind: [{
                  value: "甜",
                },
                {
                  value: "辣"
                }
              ]
            },

          ],
          price: {
            afterPrice: 1, //打折后的售价
          }
        },
        {
          goodID: 3,
          title: "面饼", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/3.webp", //图片的地址
          situation: {
            count: 3, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: "", //打几折
            desc: "" //详情
          },
          sort: [{
              title: "规格",
              kind: [{
                  value: "大份",
                  price: 3
                },
                {
                  value: "小份",
                  price: 2
                },
                {
                  value: "小份",
                  price: 1
                },
                {
                  value: "特大",
                  price: 5
                }
              ]
            },

            {
              title: "温度",
              kind: [{
                  value: "冰",
                },
                {
                  value: "热"
                }
              ]
            },

            {
              title: "口味",
              kind: [{
                  value: "甜",
                },
                {
                  value: "辣"
                }
              ]
            },

          ],
          price: {
            afterPrice: 4, //打折后的售价
          }
        },
        {
          goodID: 4,
          title: "红薯粉", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/4.webp", //图片的地址
          situation: {
            count: 3, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: "", //打几折
            desc: "" //详情
          },
          price: {
            afterPrice: 7, //打折后的售价
          }
        },
        {
          goodID: 5,
          title: "特制酸辣粉", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/5.webp", //图片的地址
          situation: {
            count: 3, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 7.5, //打几折
            desc: "每单限1份优惠" //详情
          },
          price: {
            afterPrice: 12, //打折后的售价
            beforePrice: 15 //打折前的售价
          }
        }
      ]
    }, {
      shopid: 2,
      label: "sushi", //右边商品展示跳转的选择器id的值
      categoryName: "素食", //分类名字
      icon: {
        type: "", //图标的type
        size: "", //图标的大小
        color: "" //图标的颜色
      },
      //用于右边的商品的展示
      goodsList: [{
          goodID: 6,
          title: "木耳", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/6.webp", //图片的地址
          situation: {
            count: 5, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 7, //打几折
            desc: "每单限1份优惠" //详情
          },
          price: {
            afterPrice: 2, //打折后的售价
            beforePrice: 3 //打折前的售价
          }
        },
        {
          goodID: 7,
          title: "西蓝花", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/7.webp", //图片的地址
          situation: {
            count: 23, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 8, //打几折
            desc: "每单限1份优惠" //详情
          },
          price: {
            afterPrice: 5, //打折后的售价
            beforePrice: 7 //打折前的售价
          }
        },
        {
          goodID: 8,
          title: "莲藕", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/8.webp", //图片的地址
          situation: {
            count: 88, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 6, //打几折
            desc: "每单限1份优惠" //详情
          },
          price: {
            afterPrice: 7, //打折后的售价
            beforePrice: 9 //打折前的售价
          }
        },
        {
          goodID: 9,
          title: "冬瓜", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/9.webp", //图片的地址
          situation: {
            count: 22, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 1, //打几折
            desc: "每单限1份优惠" //详情
          },
          price: {
            afterPrice: 1, //打折后的售价
            beforePrice: 2 //打折前的售价
          }
        },
        {
          goodID: 10,
          title: "香菜", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/10.webp", //图片的地址
          situation: {
            count: 234, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 8, //打几折
            desc: "每单限1份优惠" //详情
          },
          price: {
            afterPrice: 4, //打折后的售价
            beforePrice: 6 //打折前的售价
          }
        }
      ]
    }, {
      shopid: 3,
      label: "huncai", //右边商品展示跳转的选择器id的值
      categoryName: "荤菜", //分类名字
      icon: {
        type: "loading", //图标的type
        size: 28, //图标的大小
        color: "" //图标的颜色
      },
      //用于右边的商品的展示
      goodsList: [{
          goodID: 11,
          title: "骨肉相连", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/11.webp", //图片的地址
          situation: {
            count: 12, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 1, //打几折
            desc: "每单限1份优惠" //详情
          },
          price: {
            afterPrice: 2, //打折后的售价
            beforePrice: 3 //打折前的售价
          }
        },
        {
          goodID: 12,
          title: "鸡柳", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/12.webp", //图片的地址
          situation: {
            count: 23, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 8, //打几折
            desc: "每单限1份优惠" //详情
          },
          price: {
            afterPrice: 5, //打折后的售价
            beforePrice: 7 //打折前的售价
          }
        },
        {
          goodID: 13,
          title: "鱼蛋", //商品的名字
          introduction: "", //商品的介绍
          src: "https://www.mirai.site/13.webp", //图片的地址
          situation: {
            count: 88, //销售的数量
            rate: 100 //好评率
          },
          activity: {
            discount: 6, //打几折
            desc: "每单限1份优惠" //详情
          },
          price: {
            afterPrice: 7, //打折后的售价
            beforePrice: 9 //打折前的售价
          }
        },

      ]
    }]
  },


  onLoad(options) {

  },


  onReady() {
    this._init()
    this.getHeight().then(res => {
      this.setData({
        labelHeight: res
      })
    })
  },


  _init() {
    let that = this
    let categoryList = this.data.categoryList

    let showCategoryList = []

    let customizeList = this.data.customizeList

    categoryList.forEach((el, index) => {

      el.goodsList.forEach((el2, inx) => {
        el2.index = index
        el2.inx = inx
      })
    })

    showCategoryList.push(...categoryList)

    customizeList.forEach((el, index) => {
      if (el.recommendID) {
        let goodsList = []
        el.recommendID.forEach((el2, index2) => {
          categoryList.forEach((el3, index3) => {
            el3.goodsList.forEach((el4, index4) => {
              if (el2 == el4.goodID) {
                goodsList.push(el4)
              }
            })
          })
        })
        el.goodsList = goodsList
        showCategoryList.unshift(el)
      } else {
        showCategoryList.unshift(el)
      }
    })

    this.setData({
      showCategoryList,
      categoryList
    },()=>{
      wx.getStorage({
        key: 'order',
        success(res) {
          res.data.selectGoodList.forEach((el)=>{
            if (!categoryList[el.index].goodsList[el.inx].selectCount){
              categoryList[el.index].goodsList[el.inx].selectCount = 0
            }
            categoryList[el.index].goodsList[el.inx].selectCount += el.count
          })
          that.setData({
            selectGoodList: res.data.selectGoodList,
            categoryList
          },()=>{
            that.totalPrice()
          })
        },
      })
    })

    
  },

  //点击左边的分类，让右边的滑动到相应的分类位置
  changeClassify(e) {
    let index = e.currentTarget.dataset.index
    let label = this.data.showCategoryList[index].label
    this.data.isTapChangeScroll = true

    this.setData({
      scrollIntoView: label,
      leftIndex: index
    })
    let timer = setTimeout(() => {
      this.data.isTapChangeScroll = false
      clearTimeout(timer)
    }, 1000)
  },

  //多规格选择变更时触发
  selectChange(e) {

    let index = e.currentTarget.dataset.index
    let sortSelectList = this.data.sortSelectList
    sortSelectList[index] = e.detail.value[0]
    let selectDisabled = this.data.selectDisabled
    let selectText = ''
    let count = 0

    for (let i = 0; i < sortSelectList.length; i++) {
      if (!sortSelectList[i]) {
        count++
      } else {
        if (i < sortSelectList.length - 1) {
          selectText += sortSelectList[i].value + " / "
        } else {
          selectText += sortSelectList[i].value
        }
      }
    }

    if (!count && sortSelectList.length == this.data.goodMsg.sort.length) {
      selectDisabled = false
    }

    this.setData({
      sortSelectList,
      selectText,
      selectDisabled
    })
  },

  //点击选好了button触发
  selectFinish(e) {
    let categoryList = this.data.categoryList

    let selectGoodList = this.data.selectGoodList

    let goodMsg = this.data.goodMsg

    //选择的数组参数
    let sortSelectList = this.data.sortSelectList

    let whichcounter = `counter-${goodMsg.index}-${goodMsg.inx}`

    let $counter = this.selectComponent("." + whichcounter)

    let isIn = false
    let isHave = false


    let tempObj = {
      goodID: goodMsg.goodID,
      title: goodMsg.title,
      index: goodMsg.index,
      inx: goodMsg.inx,
      sort: sortSelectList,
      count: 1,
      label: categoryList[goodMsg.index].label,      
      price: {
        afterPrice: sortSelectList[0].price
      }
    }

    let selectCount
    selectGoodList.forEach((el, selectIndex) => {
      if (goodMsg.goodID == el.goodID) {
        isHave = true
        selectCount = 0
        sortSelectList.forEach((el, index1) => {
          if (sortSelectList[index1].value == selectGoodList[selectIndex].sort[index1].value) {
            selectCount++
          }
        })

        console.log("selectCount:"+selectCount)
        console.log("lenght:"+categoryList[goodMsg.index].goodsList[goodMsg.inx].sort.length)

        if (selectCount == categoryList[goodMsg.index].goodsList[goodMsg.inx].sort.length) {
          isIn = true
          selectGoodList[selectIndex].count++
          categoryList[goodMsg.index].goodsList[goodMsg.inx].selectCount += 1
          $counter.add(categoryList[goodMsg.index].goodsList[goodMsg.inx].selectCount)
        }


      }
    })

    if (!isIn && isHave) {
      selectGoodList.push(tempObj)
      categoryList[goodMsg.index].goodsList[goodMsg.inx].selectCount += 1
      $counter.add(categoryList[goodMsg.index].goodsList[goodMsg.inx].selectCount)

    }

    if (!isIn && !isHave) {
      $counter.add(1)
      categoryList[goodMsg.index].goodsList[goodMsg.inx].selectCount = 1
      selectGoodList.push(tempObj)
    }

    this.setData({
      categoryList,
      selectGoodList
    }, () => {
      let $sort = this.selectComponent(".show-sort")
      $sort.hidePopup()
      this.totalPrice()
    })

  },

  //点击添加按钮
  addTap(e) {
    let categoryList = this.data.categoryList
    let index = e.currentTarget.dataset.index
    let inx = e.currentTarget.dataset.inx
    let goodMsg = categoryList[index].goodsList[inx]
    //判断是否是多规格选择的商品，是的话就弹出选择的popup，否就直接添加
    if (goodMsg.sort) {
      this.setData({
        goodMsg,
        selectDisabled: true,
        selectText: "",
        sortSelectList: []
      }, () => {
        let $sort = this.selectComponent(".show-sort")
        $sort.showPopup()
        let $select = this.selectAllComponents(".select")
        $select.forEach((el) => {
          el.clearSelect()
        })
      })


    } else {
      this.add(e)
    }
  },

  //普通商品的添加，在addTap函数里调用
  add(e) {

    let categoryList = this.data.categoryList
    let selectGoodList = this.data.selectGoodList

    let whichcounter = e.currentTarget.dataset.whichcounter
    let index = e.currentTarget.dataset.index
    let inx = e.currentTarget.dataset.inx

    let $counter = this.selectComponent(`.${whichcounter}`)

    let goodMsg = categoryList[index].goodsList[inx]

    $counter.add(e.detail.count)

    categoryList[index].goodsList[inx].selectCount = e.detail.count

    this.setData({
      categoryList
    })


    let isIn = false

    selectGoodList.forEach((el, selectIndex) => {
      if (goodMsg.goodID == el.goodID) {

        isIn = true

        selectGoodList[selectIndex].count = e.detail.count


      }
    })

    if (!isIn) {
      let tempObj = {
        goodID: goodMsg.goodID,
        count: e.detail.count,
        title: goodMsg.title,
        price: goodMsg.price,
        index: goodMsg.index,
        inx: goodMsg.inx,
        label: categoryList[goodMsg.index].label
      }
      selectGoodList.push(tempObj)

    }


    this.setData({
      selectGoodList
    },()=>{
      this.totalPrice()
    })

    
  },


  //减少按钮
  subTap(e) {
    let disabled = e.currentTarget.dataset.disabled
    if (disabled == "true") {
      let that = this
      wx.showModal({
        title: '提示',
        content: '多规格的商品请到购物车取消',
        showCancel: false
      })
    } else {
      let categoryList = this.data.categoryList
      let selectGoodList = this.data.selectGoodList

      let whichcounter = e.currentTarget.dataset.whichcounter
      let index = e.currentTarget.dataset.index
      let inx = e.currentTarget.dataset.inx
      let $counter = this.selectComponent(`.${whichcounter}`)

      $counter.sub(e.detail.count)

      categoryList[index].goodsList[inx].selectCount = e.detail.count

      this.setData({
        categoryList
      })

      let goodMsg = categoryList[index].goodsList[inx]


      selectGoodList.forEach((el, selectIndex) => {
        if (goodMsg.goodID == el.goodID) {
          if (e.detail.count == 0) {
            selectGoodList.splice(selectIndex, 1)
          } else {
            selectGoodList[selectIndex].count = e.detail.count
          }
        }
      })


      this.setData({
        selectGoodList
      },()=>{
        this.totalPrice()
      })
      
    }

  },

  aboutAdd(e){
    let selectIndex = e.currentTarget.dataset.selectindex
    let categoryList = this.data.categoryList
    let selectGoodList = this.data.selectGoodList
    let whichcounter = e.currentTarget.dataset.whichcounter
    let $counter = this.selectComponent(`.${whichcounter}`)
    let goodMsg = selectGoodList[selectIndex]
    categoryList[goodMsg.index].goodsList[goodMsg.inx].selectCount += 1
    selectGoodList[selectIndex].count += 1
    $counter.add(selectGoodList[selectIndex].count)
    this.setData({
      categoryList,
      selectGoodList
    }, () => {
      this.totalPrice()
    })
  },

  aboutSub(e) {
    let selectIndex = e.currentTarget.dataset.selectindex
    let categoryList = this.data.categoryList
    let selectGoodList = this.data.selectGoodList
    let whichcounter = e.currentTarget.dataset.whichcounter
    let goodMsg = selectGoodList[selectIndex]

    if (goodMsg.sort) {

    
      categoryList[goodMsg.index].goodsList[goodMsg.inx].selectCount -= 1

      let $counter = this.selectComponent(`.${whichcounter}`)

      selectGoodList[selectIndex].count -= 1

     
      if (selectGoodList[selectIndex].count == 0) {
        selectGoodList.splice(selectIndex, 1)
        $counter.sub(0)
      }
      else{
        $counter.sub(selectGoodList[selectIndex].count)
      }

      this.setData({
        categoryList,
        selectGoodList
      },()=>{
        this.totalPrice()
      })
    } else {
      this.subTap(e)
    }
  },

  //计算总价格和总数量（需要优化，减少遍历）
  totalPrice() {
    let selectGoodList = this.data.selectGoodList
    let showCategoryList = this.data.showCategoryList
  
    let totalCount = 0
    let totalPrice = 0

    selectGoodList.forEach((el1, index1) => {
      totalCount += el1.count
      totalPrice += el1.price.afterPrice * el1.count
    })

    showCategoryList.forEach((el1,index1)=>{
      showCategoryList[index1].dotCount = 0
      selectGoodList.forEach((el, index) => {
        if(el1.label == el.label){
          showCategoryList[index1].dotCount += el.count
        }
      })
    })

    
    let accountable = this.data.accountable
    if (totalPrice >= this.data.minPrice) {
      accountable = true
    } else {
      accountable = false
    }


    this.setData({
      selectGoodList,
      totalCount,
      totalPrice,
      accountable,
      showCategoryList
    })

  },

  //显示购物车popup
  showSelectGood() {
    if (this.data.selectGoodList.length) {
      let $popup = this.selectComponent('.show-goods')
      let showCartPopup = this.data.showCartPopup
      if (showCartPopup) {
        $popup.hidePopup()
        showCartPopup = false
      } else {
        $popup.showPopup()
        showCartPopup = true
      }
      this.setData({
        showCartPopup
      })
    }
  },

  //清空购物车
  clearCart() {
    let selectGoodList = this.data.selectGoodList
    let categoryList = this.data.categoryList


    selectGoodList.forEach((el) => {
      categoryList[el.index].goodsList[el.inx].selectCount = 0
    })


    this.setData({
      selectGoodList: [],
      categoryList,
    })
    this.totalPrice()
  },

  listScroll(e) {
    if (!this.data.isTapChangeScroll) {
      let labelHeight = this.data.labelHeight
      let scrollTop = e.detail.scrollTop
      if (labelHeight.length) {

        labelHeight.forEach((el, index) => {
          if (scrollTop < labelHeight[0]) {
            this.setData({
              leftIndex: 0
            })

          }
          if (scrollTop > labelHeight[index] && scrollTop < labelHeight[index + 1]) {

            this.setData({
              leftIndex: index + 1
            })

          }

        })
      }
    }
  },

  getHeight() {
    return new Promise((resolve, reject) => {
      let query = wx.createSelectorQuery().in(this)

      query.selectAll(".left-view").boundingClientRect((res) => {
        let labelHeight = []
        res.forEach((el, index) => {
          if (index == 0) {
            labelHeight.push(res[index].height)
          } else {
            labelHeight.push(res[index].height + labelHeight[index - 1])
          }
        })
        resolve(labelHeight)
      }).exec()
    })

  },

  tabTap(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      tabIndex: index
    })
  },

  showDetailmModal() {
    let $detailModal = this.selectComponent(".desc-modal")
    $detailModal.toggle()
  },

  showActivity() {
    let $popup = this.selectComponent('.show-activity')
    $popup.showPopup()
  },

  goAccount(){
    let accountable = this.data.accountable
    if (accountable){
      app.globalData.orderMsg = {
        shopMsg: this.data.shopMsg,
        selectGoodList: this.data.selectGoodList
      }
      
      wx.setStorage({
        key: 'order',
        data: app.globalData.orderMsg,
        success(){
          wx.navigateTo({
            url: '../account/account'
          })
        }
      })

    }
  }
})