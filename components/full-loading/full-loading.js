// components/full-loading/full-loading.js
Component({
        /**
         * 组件的属性列表
         */
        properties: {

        },

        /**
         * 组件的初始数据
         */
        data: {

        },

        ready(){
                let that = this
                wx.getSystemInfo({
                        success(res) {
                                that.setData({
                                        ww: res.windowWidth,
                                        wh: res.windowHeight
                                })
                        },
                })
        },
        methods: {

        }
})
