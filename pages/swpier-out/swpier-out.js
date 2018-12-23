// pages/swpier-out/swpier-out.js
let swiperOutAPIData = require("../../components/componentsAPI.js").swiperOut

Page({

        /**
         * 页面的初始数据
         */
        data: {
                el: "undefined",
                swiperItem: [{
                        disabled: false,
                        value: "off",
                        height: 90,
                        width: 120
                }, {
                        disabled: false,
                        value: "off",
                        height: 80,
                        width: 60
                }, {
                        disabled: false,
                        value: "off",
                        height: 70,
                        width: 60,
                }],

                swiperItem2: [{
                        disabled: false,
                        value: "off",
                        height: 90,
                        width: 120
                }, {
                        disabled: false,
                        value: "off",
                        height: 80,
                        width: 60
                }, {
                        disabled: false,
                        value: "off",
                        height: 70,
                        width: 60,
                }],
                el2: "undefined",

                swiperItem3: [{
                        disabled: false,
                        value: "off",
                        height: 90,
                        width: 120
                }, {
                        disabled: false,
                        value: "off",
                        height: 80,
                        width: 60
                }, {
                        disabled: false,
                        value: "off",
                        height: 70,
                        width: 60,
                }],
                el3: "undefined",

        },
        onLoad(){
                this.setData({
                        swiperOutAPIData
                })
        },
        /*
        swiperChange(e) {
                var index = e.currentTarget.dataset.index;
                let {swiperItem,el} = this.data
                if (el == "undefined"){
                        swiperItem[index].value = e.detail.value
                        el = index
                        this.setData({
                                swiperItem,
                                el
                        })
                }
                else{
                        if(el != index){
                                swiperItem[el].value = "off"
                                swiperItem[index].value = e.detail.value
                                el = index
                        }
                        else{
                                swiperItem[index].value = e.detail.value
                        }

                        this.setData({
                                swiperItem,
                                el
                        })
                }
        },
        */

        swiperChange(e){
                var index = e.currentTarget.dataset.index;
                let { swiperItem, el } = this.data
                swiperItem[index].value = e.detail.value
                this.setData({
                        swiperItem
                })
        },


        itemClick(e) {
                wx.showToast({
                        title: `click: ${e.currentTarget.dataset.index}`,
                        icon: "none"
                })
        },

        deleteItem(e) {
                var index = e.currentTarget.dataset.index;
                this.data.swiperItem.splice(index, 1);
                this.setData({
                        swiperItem: this.data.swiperItem
                });
        },



        swiperChange2(e) {
                var index = e.currentTarget.dataset.index;
                let {swiperItem2,el2} = this.data
                if (el2 == "undefined"){
                        swiperItem2[index].value = e.detail.value
                        el2 = index
                        this.setData({
                                swiperItem2,
                                el2
                        })
                }
                else{
                        if(el2 != index){
                                swiperItem2[el2].value = "off"
                                swiperItem2[index].value = e.detail.value
                                el2 = index
                        }
                        else{
                                swiperItem2[index].value = e.detail.value
                        }

                        this.setData({
                                swiperItem2,
                                el2
                        })
                }
        },

        deleteItem2(e) {
                var index = e.currentTarget.dataset.index;
                this.data.swiperItem2.splice(index, 1);
                this.setData({
                        swiperItem2: this.data.swiperItem2
                });
        },

        swiperChange3(e) {
                var index = e.currentTarget.dataset.index;
                let { swiperItem3, el3 } = this.data
                if (el3 == "undefined") {
                        swiperItem3[index].value = e.detail.value
                        el3 = index
                        this.setData({
                                swiperItem3,
                                el3
                        })
                }
                else {
                        if (el3 != index) {
                                swiperItem3[el3].value = "off"
                                swiperItem3[index].value = e.detail.value
                                el3 = index
                        }
                        else {
                                swiperItem3[index].value = e.detail.value
                        }

                        this.setData({
                                swiperItem3,
                                el3
                        })
                }
        },

        deleteItem3(e) {
                var index = e.currentTarget.dataset.index;
                this.data.swiperItem3.splice(index, 1);
                this.setData({
                        swiperItem3: this.data.swiperItem3
                });
        },
})