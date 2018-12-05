let selectCalenderAPIData = require("../../components/componentsAPI.js").selectCalender

Page({


        data: {
                selectCalenderAPIData,
                max: 15,
                type: "radio"
        },

        onLoad(options) {
        },

        onReady() {},

        onShow() {},

        onHide() {},


        onUnload() {},


        onPullDownRefresh() {},


        onReachBottom() {},


        onShareAppMessage() {},


        calenderChange(e) {
                // console.log(e)
                if(e.detail.type == "radio"){
                        wx.showToast({
                                title: `${e.detail.from.year}-${e.detail.from.month}-${e.detail.from.day}`,
                                icon: "none"
                        })
                }
                else{
                        wx.showToast({
                                title: `选择了${e.detail.count}天`,
                                icon: "none"
                        })
                }
        },

        calenderMax(e){
                wx.showToast({
                        title: `超出了最大值`,
                        icon: "none"
                })
        },


        changeMax(){
                let max = 15
                if(this.data.max == 15){
                        max = 200
                }
                this.setData({
                        max
                })
        },
        changeRadio(){
                this.setData({
                        type: "radio"
                })
        },

        changeCheckbox(){
                this.setData({
                        type: "checkbox"
                })
        },
})