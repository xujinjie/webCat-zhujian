Component({

        properties: {
                title: {
                        type: String,
                        value: ""
                },
                type: {
                        type: String,
                        value: "warning"
                },
                center: {
                        type: Boolean,
                        value: false
                },
                autoClose: {
                        type: Boolean,
                        value: true
                },
                closeTime: {
                        type: [Number, String],
                        value: 2500
                }
        },


        data: {
                isShow: false
        },
        methods: {
                closeTips(closeTime = 0) {
                        if (this.data.isShow) {
                                let timer1 = setTimeout(() => {
                                        this.setData({
                                                animated: "fadeOutUp"
                                        })
                                }, closeTime)
                                setTimeout(() => {
                                        this.setData({
                                                isShow: false
                                        })
                                        clearTimeout(timer1)
                                }, closeTime + 700)
                        }
                },
                openTips() {
                        if (!this.data.isShow) {
                                let autoClose = this.data.autoClose
                                let closeTime = this.data.closeTime
                                this.setData({
                                        isShow: true,
                                        animated: "fadeInDown"
                                })
                                if (autoClose) {
                                        this.closeTips(closeTime)
                                }
                        }
                }
        }
})