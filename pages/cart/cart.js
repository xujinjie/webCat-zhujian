// pages/cart/cart.js
Page({
      data: {
            activeIndex: null,
            totalPrice: 0,
            totalCount: 0,
            isAllSelect: false,
            isDelete: false,
            selfStyle: {
                  "border-radius": "10rpx",
                  "margin-bottom": "30rpx"
            },
            cart: [{
                        value: "off",
                        detail: "商品一",
                        src: "/public/imgs/iphone.jpg",
                        price: 10.00,
                        count: 1
                  },
                  {
                        value: "off",
                        detail: "商品二",
                        src: "/public/imgs/iphone.jpg",
                        price: 20.00,
                        count: 2
                  },
                  {
                        value: "off",
                        detail: "商品三",
                        src: "/public/imgs/iphone.jpg",
                        price: 30.00,
                        count: 1
                  },
                  {
                        value: "off",
                        detail: "商品四",
                        src: "/public/imgs/iphone.jpg",
                        price: 40.00,
                        count: 1
                  },
                  {
                        value: "off",
                        detail: "商品五",
                        src: "/public/imgs/iphone.jpg",
                        price: 50.00,
                        count: 1
                  }
            ]
      },

      init() {
            let {
                  cart
            } = this.data;
            let totalPrice = 0,
                  totalCount = 0,
                  isAllSelect = false,
                  isSelectLen = 0;

            cart.forEach((item, index) => {
                  if (!item['isSelect']) {
                        item['isSelect'] = false;
                  } else {
                        isSelectLen += 1;
                        totalPrice += Number(item['price']) * 1000 * Number(item['count']) / 1000;
                        totalCount += Number(item['count']);
                  }

                  if (item['value'] != "on" || item['value'] != "off") {
                        item['value'] = "off";
                  }
            });

            if (isSelectLen == cart.length) {
                  isAllSelect = true;
            }

            this.setData({
                  cart,
                  totalCount,
                  totalPrice,
                  isAllSelect
            })
      },

      changeItemSelect(e) {
            let {
                  index
            } = e.currentTarget.dataset;
            let {
                  cart
            } = this.data;
            cart[index]['isSelect'] = true;
            this.setData({
                  cart
            }, () => {
                  this.init()
            });
      },


      selectAll() {
            let {
                  cart,
                  isAllSelect
            } = this.data;
            cart.forEach((item, index) => {
                  if (isAllSelect) {
                        item['isSelect'] = false;
                  } else {
                        item['isSelect'] = true;
                  }
            });
            this.setData({
                  cart,
                  isAllSelect: !isAllSelect
            }, () => {
                  this.init()
            })
      },

      deleteItem(e) {
            let {
                  index
            } = e.currentTarget.dataset;
            let {
                  cart
            } = this.data;
            cart.splice(index, 1);
            this.setData({
                  isDelete: true,
                  cart
            }, () => {
                  this.init();
                  this.setData({
                        isDelete: false,
                        activeIndex: null
                  })
            })
      },

      swiperChange(e) {
            let {
                  index
            } = e.currentTarget.dataset;
            let {
                  cart
            } = this.data;
            let {
                  value
            } = e.detail;
            if (value == "on") {
                  if (this.data.activeIndex || this.data.activeIndex == 0) {
                        cart[this.data.activeIndex]["value"] = 'off';
                  }
                  cart[index]["value"] = "on";
                  this.data.activeIndex = index;
            } else {
                  cart[index]["value"] = "off";
                  this.data.activeIndex = null;
            }

            this.setData({
                  cart
            })
      },

      onLoad(options) {
            this.init()
      },

      onReady() {

      },

      onShow() {

      },

      onHide() {

      },

      onUnload() {
            let {
                  cart,
                  activeIndex
            } = this.data;
            if (activeIndex || activeIndex == 0) {
                  cart[activeIndex]["value"] = "off";
            }
      },

      onPullDownRefresh() {

      },
      onReachBottom() {

      },
      onShareAppMessage() {

      }
})