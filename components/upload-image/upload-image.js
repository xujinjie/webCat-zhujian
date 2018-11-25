Component({

        properties: {
                maxLength: {
                        type: Number,
                        value: 12
                },
                imageMode: {
                        type: String,
                        value: "aspectFill" //
                }
        },

        data: {
                imageArr: [],
                showImage: false,
                iamgeIndex: null,
                direction: "horizontal", //horizontal,vertical
                directionControlText: "横屏查看"
        },
      
        ready() {
                let that = this
                const query = wx.createSelectorQuery().in(this)
                query.select('.image-item').boundingClientRect(function (res) {
                        that.setData({
                               itemHeight: res.width
                       })
                }).exec()
                this._init()
        },
        methods: {
                _init() {
                        let sysMsg = wx.getSystemInfoSync()
                        this.setData({
                                windowHeight: sysMsg.windowHeight,
                                windowWidth: sysMsg.windowWidth
                        })
                },
                selectImage() {
                        let maxLength = this.data.maxLength
                        let imageArr = this.data.imageArr
                        let imageArrLength = imageArr.length
                        if (imageArrLength) {
                                maxLength = maxLength - imageArrLength
                        }
                        wx.chooseImage({
                                count: maxLength,
                                success: (res) => {
                                        if (res.tempFilePaths.length) {

                                                imageArr = [...imageArr, ...res.tempFilePaths]

                                                this.setData({
                                                        imageArr
                                                })

                                                this.triggerEvent("change", {
                                                        tempFilePaths: imageArr
                                                })
                                        }
                                },
                        })
                },
         /*
                //小图查看，变大图
                iamgeTap(e) {
                        let index = e.currentTarget.dataset.index
                        this.setData({
                                iamgeIndex: index,
                                showImage: true
                        })
                },
                //图片touchstart
                showImageTapStart(e) {
                        let startClientX = e.touches[0].clientX
                        let startClientY = e.touches[0].clientY
                        this.setData({
                                startClientX,
                                startClientY,
                                tapMsg: e
                        })
                },
                //图片touchmove
                showImageMove(e) {
                        let endClientX = e.touches[0].clientX
                        let endClientY = e.touches[0].clientY
                        this.setData({
                                endClientX,
                                endClientY
                        })
                },
                //图片touchend
                showImageEnd() {
                        let direction = this.data.direction
                        let iamgeIndex = this.data.iamgeIndex
                        let imageLen = this.data.imageArr.length

                        if (direction == "horizontal") {
                                let endClientX = this.data.endClientX
                                let startClientX = this.data.startClientX
                                if (endClientX) {
                                        if (startClientX > endClientX) {
                                                iamgeIndex++
                                        }
                                        if (startClientX < endClientX) {
                                                iamgeIndex--
                                        }
                                        if (iamgeIndex + 1 > imageLen) {
                                                iamgeIndex = 0
                                        }
                                        if (iamgeIndex < 0) {
                                                iamgeIndex = imageLen - 1
                                        }

                                        this.setData({
                                                iamgeIndex,
                                                endClientX: null
                                        })
                                } else {
                                        this.showImageTap(this.data.tapMsg)
                                }
                        }

                        if (direction == "vertical") {
                                let startClientY = this.data.startClientY
                                let endClientY = this.data.endClientY
                                if (endClientY) {
                                        if (startClientY > endClientY) {
                                                iamgeIndex++
                                        }
                                        if (startClientY < endClientY) {
                                                iamgeIndex--
                                        }
                                        if (iamgeIndex < 0) {
                                                iamgeIndex = imageLen
                                        }
                                        if (iamgeIndex + 1 > imageLen) {
                                                iamgeIndex = 0
                                        }
                                        this.setData({
                                                iamgeIndex,
                                                endClientY: null
                                        })
                                } else {
                                        this.showImageTap(this.data.tapMsg)
                                }
                        }
                },

                //图片变小
                showImageTap(e) {
                        this.setData({
                                showImage: false
                        })
                },

                //横屏或者竖屏查看
                directionControl() {
                        let direction = this.data.direction
                        let text = ""
                        if (direction == "horizontal") {
                                direction = "vertical"
                                text = "还原"
                        } else {
                                direction = "horizontal"
                                text = "横屏查看"
                        }
                        this.setData({
                                direction,
                                directionControlText: text
                        })
                },
        */
                deleteImage(e) {
                        let index = e.currentTarget.dataset.index
                        let imageArr = this.data.imageArr
                        imageArr.splice(index, 1)
                        this.setData({
                                imageArr
                        })
                        this.triggerEvent("change", {
                                tempFilePaths: imageArr
                        })
                },

                _previewImage(e){
                        // console.log(e)
                        let that = this
                        let index = e.currentTarget.dataset.index
                         wx.previewImage({
                                 urls: that.data.imageArr,
                                 current: that.data.imageArr[index]
                         })
                }
        }
})