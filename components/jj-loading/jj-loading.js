export default Component({

        properties: {
                icon: {
                        type: String, //complete,close,loading
                },
                title: {
                        type: String
                }
        },
        data: {
                isShow: false
        },
        attached() {
                this._init()
        },
        methods: {
                _init() {
                        let width = wx.getSystemInfoSync().windowWidth
                        let height = wx.getSystemInfoSync().windowHeight
                        this.setData({
                                width,
                                height
                        })
                },
                show({icon = "loading1",title = null}){
                        this.setData({
                                icon,
                                title,
                                isShow: true
                        })
                },

                hide(){
                        this.setData({
                                isShow: false
                        })
                }
        }
})