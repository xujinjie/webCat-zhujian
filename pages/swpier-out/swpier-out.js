// pages/swpier-out/swpier-out.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                swiperItem: [{
                        disabled: false,
                        open: false,
                        selfDot: false,
                        text: "默认的右边",
                        test: [1,2,3,4,5,6,7]
                }, {
                        disabled: false,
                        open: false,
                        selfDot: false,
                        text: "自定义的1",
                                test: [1, 2, 3, 4],
                        dots: [{
                                text: "删除",
                                type: "del",
                                color: "#fff",
                                backgroundColor: "blue",
                                width: 60,
                                icon: {}
                        }]
                }, {
                        disabled: false,
                        open: false,
                        selfDot: false,
                                test: [1, 2, 3, 4, 5],
                        text: "自定义的2",
                        dots: [{
                                text: "确定",
                                type: "sure",
                                color: "#fff",
                                backgroundColor: "yellow",
                                width: 60,
                                icon: {}
                        }]
                }],
        },

        dottap(e) {
                let {index} = e.currentTarget.dataset
                let data = e.detail.data
                let swiperItem = this.data.swiperItem
                if (data.type == "del"){
                        swiperItem.splice(index,1)
                       this.data.activeIndex  = "undefined"
                       console.log(swiperItem)
                        this.setData({
                                swiperItem
                        })
                }
                else{
                   wx.showToast({
                           title: `${data.text}`,
                           icon: "none"
                   })
                }
        },

        swiperChange(e) {
                     
        },

        itemClick(e) {
                wx.showToast({
                        title: `click: ${e.currentTarget.dataset.index}`,
                        icon: "none"
                })
        },
})