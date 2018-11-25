let toptips = require("../../components/componentsAPI.js").toptips

Page({


        data: {
                toptipsData: toptips
        },
        showTopTips() {
                this.setData({
                        title: "显示",
                        autoClose: false
                })
                let $toptips = this.selectComponent('.toptips')
                $toptips.openTips()
        },
        hideTopTips() {
                let $toptips = this.selectComponent('.toptips')
                $toptips.closeTips()
        },
        hideautoClose() {
                this.setData({
                        title: "自动关闭",
                        autoClose: true
                })
                let $toptips = this.selectComponent('.toptips')
                $toptips.openTips()
        }
})