Component({
        properties: {
                title: {
                        type: String
                },
                type: {
                        type: String,
                        value: "warning"
                },
                closable: {
                        type: Boolean,
                        value: true
                },
                center: {
                        type: Boolean,
                        value: false
                },
                autoClose: {
                        type: Boolean,
                        value: false,
                        observer(){
                                this._autoClose()
                        }
                },
                closeTime: {
                        type: [Number, String],
                        value: 2500
                },
                backgroundColor: {
                        type: String
                },
                textColor: {
                        type: String
                },
                iconColor: {
                        type: String
                },

                isClose: {
                        type: Boolean,
                        value: false
                },
                move: {
                        type: Boolean,
                        value: false
                }
        },
        data: {
                
        },
        ready() {
                this._init()
                this._autoClose()
        },
        methods: {
                _init(){
                        let textColor = this.data.textColor
                        let backgroundColor = this.data.backgroundColor
                        let styleStr = ""
                        if(textColor){
                                styleStr = `color: ${textColor};`
                        }
                        if(backgroundColor){
                                styleStr += `background-color: ${backgroundColor};`
                        }
                        this.setData({
                                styleStr
                        })

                        
                },
                _autoClose(){
                        let autoClose = this.data.autoClose
                        let time = parseInt(this.data.closeTime)
                        if (autoClose) {
                                setTimeout(() => {
                                        this.hide()
                                }, time)
                        }
                },

                show() {
                        this.setData({
                                isClose: true
                        })
                        let autoClose = this.data.autoClose
                        let time = parseInt(this.data.closeTime)
                        if (autoClose) {
                                setTimeout(() => {
                                        this.hide()
                                }, time)
                        }
                },
                hide(e) {
                        this.setData({
                                isClose: false
                        })
                        if (e) {
                                this.triggerEvent('close', e)
                        } else {
                                this.triggerEvent('close', {
                                        type: "autoClose"
                                })
                        }
                }
        }
})