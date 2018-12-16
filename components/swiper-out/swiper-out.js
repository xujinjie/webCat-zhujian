// components/swpier-out-item/swpier-out-item.js
Component({
        options: {
                multipleSlots: true // 在组件定义时的选项中启用多slot支持
        },
        relations: {
                '../swiper-out-group/swiper-out-group': {
                        type: 'parent' // 关联的目标节点应为子节点
                },
                linked(target) {
                        // console.log(target)
                },
                unlinked(target) {
                        // console.log(target)
                }
        },
        properties: {
                name: {
                        type: [Number,String],
                },
                disabled: {
                        type: Boolean,
                        value: false
                },
                open: {
                        type: Boolean,
                        value: false,
                        observer(val) {
                                if (val) {
                                        this.open()
                                } else {
                                        this.close()
                                }
                        }
                },
                selfDot: {
                        type: Boolean,
                        value: false,
                },
                dots: {
                        type: Array,
                        value: [{
                                text: "删除",
                                color: "#fff",
                                backgroundColor: "#09bb07",
                                width: 60,
                                type: "del",
                                icon: {}
                        }, {
                                text: "确定",
                                color: "blue",
                                backgroundColor: "#09bb07",
                                width: 60,
                                type: "sure",
                                icon: {
                                        type: "",
                                        size: "",
                                        color: ""
                                }
                        }],
                        observer(val) {
                                let _val = [{
                                        text: "删除",
                                        color: "#fff",
                                        backgroundColor: "#09bb07",
                                        width: 60,
                                        type: "del",
                                        icon: {}
                                }, {
                                        text: "确定",
                                        color: "blue",
                                        backgroundColor: "#09bb07",
                                        width: 60,
                                        type: "sure",
                                        icon: {
                                                type: "",
                                                size: "",
                                                color: ""
                                        }
                                }]
                                if ((typeof val) == "object") {
                                        if (val.length > 0) {
                                                _val = val
                                        }
                                }
                                this.setData({
                                        dots: _val
                                })
                        }
                },
                limitX: {
                        type: Number,
                        value: 40
                },
                limitY: {
                        type: Number,
                        value: 20
                }
        },
        data: {
                _height: null,
                _begin: {
                        pageX: null,
                        pageY: null
                },
                _end: {
                        pageX: null,
                        pageY: null
                },
                _dotWidth: null,
                _translate: 0,
                active: false,
                canChange: true
        },
        ready() {
                this._init()
                // let data = this.getRelationNodes('../swiper-out-group/swiper-out-group')[0].data
        },
        methods: {
                _init() {
                        let that = this
                        const query = wx.createSelectorQuery().in(this)
                        query.select(`.content`).boundingClientRect(function(res) {
                                console.log(res.height)
                                that.setData({
                                        _height: res.height
                                })
                        }).exec()

                        query.select(`.dots`).boundingClientRect(function (res2) {
                                let _translate = 0
                                let active = false
                                if (that.data.open) {
                                        _translate = res2.width
                                        active = true
                                }
                                that.setData({
                                        _dotWidth: res2.width,
                                        _translate: -_translate,
                                        active
                                }, () => {
                                        setTimeout(() => {
                                                that.setData({
                                                        _ts: "transition: all .3s"
                                                })
                                        }, 300)
                                })
                        }).exec()
                },

                touchStartHandler(e) {
                        if (!this.data.disabled) {
                                this.setData({
                                        _begin: {
                                                pageX: e.changedTouches[0].pageX,
                                                pageY: e.changedTouches[0].pageY
                                        }
                                })
                        }

                },

                touchMoveHandler(e) {
                        // console.log(e)
                        if (this.data.disabled) {
                                return
                        }

                        if (!this.data.canChange) {
                                return
                        }

                        let pageX = e.changedTouches[0].pageX
                        let pageY = e.changedTouches[0].pageY
                        let _limitY = Math.abs(pageY - Number(this.data._begin.pageY))


                        if (_limitY > this.data.limitY) {
                                // console.log(1)
                                this.data.canChange = false
                                return
                        }

                        // console.log(this.data.active)

                        var _translate = pageX - this.data._begin.pageX
                        let _end = {
                                pageX,
                                pageY
                        }
                        // 右滑
                        if (_translate > 0) {
                                if (this.data.active) {
                                        // console.log(_translate)
                                        if (_translate > this.data._dotWidth) {
                                                _translate = 0
                                        } else {
                                                _translate = -(this.data._dotWidth - _translate)
                                        }
                                } else {
                                        _translate = 0
                                        this.data.canChange = false
                                }
                        }

                        // 左滑
                        else {
                                if (!this.data.active) {
                                        if (_translate < -this.data._dotWidth) {
                                                _translate = -this.data._dotWidth
                                        }
                                } else {
                                        _translate = -this.data._dotWidth
                                        this.data.canChange = false
                                }
                        }

                        this.setData({
                                _end,
                                _translate
                        })




                },

                touchEndHandler(e) {
                        if (!this.data.canChange) {
                                this.data.canChange = true
                                let _translate = this.data._translate
                                if (this.data.active) {
                                        _translate = -this.data._dotWidth
                                } else {
                                        _translate = 0
                                }
                                this.setData({
                                        _translate,
                                        _end: {
                                                pageX: null,
                                                pageY: null
                                        },
                                        _begin: {
                                                pageX: null,
                                                pageY: null
                                        }
                                })
                                return
                        }
                        if (!this.data.disabled) {
                                let active = this.data.active
                                let _translate = this.data._translate

                                if (this.data._end.pageX) {
                                        if (active) {
                                                if (this.data._begin.pageX <= this.data._end.pageX) {
                                                        if (Math.abs(this.data._begin.pageX - this.data._end.pageX) < this.data.limitX) {
                                                                active = true
                                                                _translate = -this.data._dotWidth

                                                        } else {
                                                                _translate = 0
                                                                active = false
                                                        }
                                                } else {
                                                        active = true
                                                        _translate = -this.data._dotWidth
                                                }
                                        } else {
                                                if (this.data._begin.pageX >= this.data._end.pageX) {
                                                        if (Math.abs(this.data._begin.pageX - this.data._end.pageX) < this.data.limitX) {
                                                                _translate = 0
                                                                active = false
                                                        } else {
                                                                active = true
                                                                _translate = -this.data._dotWidth
                                                        }
                                                } else {
                                                        _translate = 0
                                                        active = false
                                                }
                                        }
                                } else {
                                        if (active) {
                                                active = false
                                                _translate = 0
                                        }
                                        //点击
                                        else {
                                                this.triggerEvent('click', {})
                                                return 
                                        }
                                }
                                this.data.active = active
                                this.setData({

                                        _translate,
                                        _end: {
                                                pageX: null,
                                                pageY: null
                                        },
                                        _begin: {
                                                pageX: null,
                                                pageY: null
                                        }
                                })
                                this.triggerEvent("change", {
                                        active: this.data.active
                                })
                        }

                },

                dotTap(e) {
                        // console.log(e)
                        let inx = e.currentTarget.dataset.inx
                        let dot = this.data.dots[inx]
                        // console.log(dot)
                        this.triggerEvent("dottap", {
                                data: dot,
                                inx
                        })
                },

                open() {
                        this.data.active = true
                        this.data.canChange = true
                        this.setData({
                                _translate: -this.data._dotWidth
                        })
                },
                close() {
                        this.data.active = false
                        this.data.canChange = true
                        this.setData({
                                _translate: 0
                        })
                },
        }

})