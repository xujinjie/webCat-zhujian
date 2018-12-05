// pages/calender/calender.js
Page({


        data: {
                max: 15,
                type: "radio"
        },

        onLoad(options) {
                //console.log("onload")
        },

        onReady() {
                //console.log("onReady")  
        },

        onShow() {
                //console.log("onShow")  
        },


        onHide() {
                //console.log("onHide")  
        },

        onUnload() {
                //console.log("onUnload")  
        },


        onPullDownRefresh() {

        },


        onReachBottom() {

        },


        onShareAppMessage() {

        },

        complete(e){
                
                if (e.detail.type == "radio") {
                        wx.showToast({
                                title: `${e.detail.year}-${e.detail.month}-${e.detail.day}`,
                                icon: "none"
                        })
                }
                else {
                        wx.showToast({
                                title: `选择了${e.detail.count}天`,
                                icon: "none"
                        })
                }
        },

        max(e){
                wx.showToast({
                        title: '超出范围',
                        icon: "none"
                })
        },

        changeMax(){
                let max = 15
                if (this.data.max == 15) {
                        max = 200
                }
                this.setData({
                        max
                })
        },

        changeType() {
                let type = "radio"
                if (this.data.type == type) {
                        type = "checkbox"
                }
                this.setData({
                        type
                })
        }
})