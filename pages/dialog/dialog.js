let dialogAPIData = require("../../components/componentsAPI.js").dialog

Page({


        data: {
                dialogAPIData,
                buttons: [{
                        text: '现金支付',
                        type: 'cash'
                }, {
                        text: '微信支付',
                        color: '#3CC51F',
                        type: 'wechat'
                }],
        },
        onLoad(){
                this.$dialogTest = this.selectComponent('.dialog6')
        },
        showDialog(){
                this.$dialogTest.showModal({
                        title: "标题",
                        centent: "内容"
                }).then(res=>{
                        wx.showToast({
                                title: res.type
                        })
                        console.log(1)
                },err=>{
                        wx.showToast({
                                title: err.type
                        })
                        console.log(2)
                }).finally(()=>{
                        console.log(3)
                })
        },
        showDialog1(){
                this.$dialogTest.showModal({
                        title: "标题",
                        centent: "内容",
                        showCancel: false
                }).then(res => {
                        wx.showToast({
                                title: res.type
                        })
                        console.log(1)
                }, err => {
                        wx.showToast({
                                title: err.type
                        })
                        console.log(2)
                }).finally(() => {
                        console.log(3)
                })
        },

        showDialog2(){
                this.$dialogTest.showModal({
                        title: "标题",
                        centent: "内容",
                        showConfirm: false
                }).then(res => {
                        wx.showToast({
                                title: res.type
                        })
                        console.log(1)
                }, err => {
                        wx.showToast({
                                title: err.type
                        })
                        console.log(2)
                }).finally(() => {
                        console.log(3)
                })
        },
        showDialog3() {
                let that = this 
                this.$dialogTest.showModal({
                        title: "标题",
                        centent: "内容",
                        showConfirm: false,
                        buttons: that.data.buttons
                }).then(res => {
                        
                        wx.showToast({
                                title: res.type
                        })
                        console.log(1)
                }, err => {
                        wx.showToast({
                                title: err.type
                        })
                        console.log(2)
                }).finally(() => {
                        console.log(that.data.buttons)
                })
        },
        
        showDialog6(){
                this.$dialogTest.showModal({
                        title: "标题",
                        content: "内容",
                        userInfo: true
                }).then(res=>{
                        wx.showToast({
                                title: res.data.nickName
                        })
                },err=>{
                        wx.showToast({
                                title: err.errMsg
                        })
                }).finally(()=>{
                        console.log(1)
                })
        }
})