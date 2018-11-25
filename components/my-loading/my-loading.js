export default Component({
        properties: {
                type: {
                        type: String,
                        value: 'normal'
                },
                image: {
                        type: String
                },
                slip: {
                        type: String
                }
        },

        data: {
                isShow: false
        },
        attached(){
                let that = this
                wx.getSystemInfo({
                        success(res) {
                                // console.log(res)
                                that.setData({
                                        height: res.windowHeight,
                                        width: res.windowWidth
                                })
                        },
                })
        },
        methods: {
                show() {
                        this.setData({
                                isShow: true
                        })
                },
                hide() {
                        this.setData({
                                isShow: false
                        })
                }
        }
})