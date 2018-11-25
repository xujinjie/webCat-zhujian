Promise.prototype.finally = function (callback) {
        let P = this.constructor
        return this.then(
                value => P.resolve(callback()).then(() => value),
                reason => P.resolve(callback()).then(() => { throw reason })
        )
}

Component({

        properties: {
             
        },


        data: {
                isShow: false,
                animatied: ""
        },
        ready() {
                
        },
        methods: {
                showModal({ 
                        direction = "horizontal",
                        title = "",
                        content = "",
                        showConfirm = true, 
                        showCancel = true,
                        confirmText = "确定",
                        cancelText= "取消",
                        cancelColor = "#333",
                        confirmColor = "#3cc51f",
                        buttons = [],
                        userInfo = false
                }){
                        let that = this
                        let sysMsg = wx.getSystemInfoSync()
                        let height = sysMsg.windowHeight
                        let width = sysMsg.windowWidth
                        let _buttons = Object.assign([],buttons)
                        return new Promise((resolve,reject)=>{
                                if (userInfo){
                                        let tempArr =[{
                                                text: cancelText,
                                                color: cancelColor,
                                                type: "cancel"
                                        },{
                                                text: confirmText,
                                                color: confirmColor,
                                                type: "confirm"
                                        }]

                                        _buttons = tempArr
                                }
                                else{
                                        if(_buttons.length){
                                                if(showCancel){
                                                        _buttons.push({
                                                                text: cancelText,
                                                                color: cancelColor,
                                                                type: "cancel"
                                                        })
                                                }
                                        }else{
                  
                                                if(showCancel){
                                                        // console.log(_buttons)
                                                        _buttons.push({
                                                                text: cancelText,
                                                                color: cancelColor,
                                                                type: "cancel"
                                                        })
                                                }
                                                if (showConfirm) {
                                                        _buttons.push({
                                                                text: confirmText,
                                                                color: confirmColor,
                                                                type: "confirm"
                                                        })
                                                }
                                        }
                                }
                                
                                that.setData({
                                        userInfo,
                                        direction,
                                        title,
                                        content,
                                        showConfirm,
                                        confirmText,
                                        showCancel,
                                        confirmText,
                                        cancelColor,
                                        confirmColor,
                                        buttons: _buttons,
                                        resolve,
                                        reject,
                                        isShow: true,
                                        animatied: "animated-slow fadeIn",
                                        height,
                                        width
                                })
                        })

                },
                buttonTap(e) {
                        let btnType = e.target.dataset.type
                        // console.log(e)
                        if (btnType == "cancel") {
                                this.data.reject({
                                        type: btnType,
                                        errMsg: "点击取消"
                                })
                        } else {
                                this.data.resolve({
                                        type: btnType
                                })
                        }

                        this.hideModal()
                },


                hideModal() {
                        this.setData({
                                animatied: "animated fadeOut"
                        })
                        setTimeout(() => {
                                this.setData({
                                        isShow: false,
                                        animatied: ""
                                })
                        }, 200)
                },

                _getuserinfo(e){
                        let btnType = e.target.dataset.type
                        console.log(e)
                        if(e.detail.rawData){
                                e.detail.rawData = JSON.parse(e.detail.rawData)
                                this.data.resolve({
                                        type: btnType,
                                        data: e.detail.rawData
                                })
                        }
                        else{
                                if(e.detail.errMsg){
                                        this.data.reject({
                                                type: btnType,
                                                data: null,
                                                errMsg: "拒接获取"
                                        })
                                }
                                else{
                                        this.data.reject({
                                                type: btnType,
                                                data: null,
                                                errMsg: "获取失败"
                                        })
                                }
                        }

                        this.hideModal()
                }
        }
})