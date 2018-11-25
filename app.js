App({
        onLaunch() {
                
        },


        globalData: {
                userInfo: null
        },
        getSysMsg() {
                let that = this
                wx.getSystemInfo({
                        success(res) {
                                that.globalData.windowWidth = res.windowWidth
                                that.globalData.windowHeight = res.windowHeight
                        }
                })
        }
})