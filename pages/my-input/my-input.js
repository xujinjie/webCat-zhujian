let inputAPIData = require("../../components/componentsAPI.js").input

Page({

        data: {
                inputAPIData
        },
        inputFocus() {
                wx.showToast({
                        title: '触发focus',
                        icon: "none"
                })
        },
        inputInput() {
                wx.showToast({
                        title: '触发input',
                        icon: "none"
                })
        },
        inputblur() {
                wx.showToast({
                        title: '触发blur',
                        icon: "none"
                })
        },
        inputconfirm() {
                wx.showToast({
                        title: '触发confirm',
                        icon: "none"
                })
        },
})