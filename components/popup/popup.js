Component({

    properties: {
        direction: {
            type: String,
            value: "right"
        },
        selfFixed: {
            type: [String, Object]
        },
        zIndex: {
            type: Number
        }
    },
    data: {
        animated: "",
        rootAnimated: "",
        isShow: false
    },
    ready() {
        this._init()
    },
    methods: {
        _init() {
            let sysMsg = wx.getSystemInfoSync()
            let width = sysMsg.windowWidth
            let height = sysMsg.windowHeight
            let selfFixed = this.data.selfFixed
            let str = ""
            if (selfFixed) {
                if ((typeof selfFixed).toLocaleLowerCase() == "object") {
                    let keysArr = Object.keys(selfFixed)
                    keysArr.forEach((el) => {
                        str += `${el}:${selfFixed[el]};`
                    })
                }
            }

            this.setData({
                width,
                height,
                selfFixed: str
            })
        },
        showPopup() {
            let direction = this.data.direction.toLocaleLowerCase()
            let animated = ""
            if (direction == "bottom") {
                animated = "animated fadeInUp"
            }
            if (direction == "top") {
                animated = "animated fadeInDown"
            }
            if (direction == "left") {
                animated = "animated fadeInLeft"
            }
            if (direction == "right") {
                animated = "animated fadeInRight"
            }
            this.setData({
                isShow: true,
                animated,
                rootAnimated: "animated fadeIn"
            })
        },
        hidePopup() {
            let direction = this.data.direction.toLocaleLowerCase()
            let animated = ""
            if (direction == "bottom") {
                animated = "animated fadeOutDown"
            }
            if (direction == "top") {
                animated = "animated fadeOutUp"
            }
            if (direction == "left") {
                animated = "animated fadeOutLeft"
            }
            if (direction == "right") {
                animated = "animated fadeOutRight"
            }
            this.setData({
                animated,
                rootAnimated: "animated fadeOut"
            })
            setTimeout(() => {
                this.setData({
                    isShow: false,
                    animated: "",
                    rootAnimated: ""
                })
            }, 500)
        }
    }
})