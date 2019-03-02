var onSTATE = Symbol('on');
var offSTATE = Symbol('off');
const app = getApp();
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    relations: {
        '../swiper-out-group/swiper-out-group': {
            type: 'parent' // 关联的目标节点应为子节点
        },
        linked(target) {

        },
        unlinked(target) {

        }
    },
    properties: {
        //控制滑块的滑动与否
        value: {
            type: String,
            value: 'off',
            observer(val) {
                if (this.data.isDelete) {
                    this.setData({
                        _ts: ""
                    }, () => {
                        this.data.selfValue = this.getSymbolFromState(val);
                        this.updateOffset(this.data.selfValue);
                    })
                } else {
                    this.data.selfValue = this.getSymbolFromState(val);
                    this.updateOffset(this.data.selfValue);
                }
            }
        },
        //必填，用于控制宽度不同，和动画的有无得属性，删除是才变为true，然后变为false
        isDelete: {
            type: Boolean,
            value: false,
            observer(val) {
                //设置宽度
                this.data.selfValue = this.getSymbolFromState(this.properties.value);
                this.updateOffset(this.data.selfValue);
                if (!val) {
                    this.setData({
                        _ts: "transition: transform .5s cubic-bezier(0,.83,.39,1.36)"
                    })
                }
            }
        },
        disabled: {
            type: Boolean,
            value: false
        },
        width: {
            type: [String, Number],
            value: 60,
            observer(val) {
                let width = 60
                if (val) {
                    width = val
                }
                this.setData({
                    width
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
        },
        selfStyle: {
            type: [String,Object],
            value: ""
        }
    },

    data: {
        _begin: {
            pageX: null,
            pageY: null
        },
        _end: {
            pageX: null,
            pageY: null
        },
        _translate: 0,
        selfValue: offSTATE,
        canChange: true
    },
    ready() {
        this._init()
        this.data.selfValue = this.getSymbolFromState(this.properties.value);
        this.updateOffset(this.data.selfValue);
    },
    methods: {
        _init() {
            let {
                width,
                limitX,
                limitY,
                selfStyle
            } = this.data
            if (!width) {
                width = 60
            }
            if (!limitX) {
                limitX = 40
            }

            if (!limitY) {
                limitY = 20
            }

            let _selfStyle = app.styleHandle(selfStyle);
            
            this.setData({
                width,
                limitX,
                limitY,
                _ts: "transition: transform .5s cubic-bezier(0,.83,.39,1.36)",
                _selfStyle
            })
        },
        on() {
            this.data.selfValue = this.getSymbolFromState('on');
            this.updateOffset(this.data.selfValue);
        },
        off() {
            this.data.selfValue = this.getSymbolFromState('off');
            this.updateOffset(this.data.selfValue);
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
                this.data.canChange = false
                return
            }


            var _translate = pageX - this.data._begin.pageX
            let _end = {
                pageX,
                pageY
            }
            // 右滑
            if (_translate > 0) {

                if (this.data.selfValue === onSTATE) {
                    if (_translate > this.data.width) {
                        _translate = 0
                    } else {
                        _translate = -(this.data.width - _translate)
                    }
                } else {
                    _translate = 0
                    this.data.canChange = false
                }
            }

            // 左滑
            else {
                if (this.data.selfValue === offSTATE) {

                    if (_translate < -this.data.width) {
                        _translate = -this.data.width
                    }
                } else {
                    _translate = -this.data.width
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

                if (this.data.selfValue === onSTATE) {
                    _translate = -this.data.width
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
                    },
                    canChange: this.data.canChange
                })
                return
            }
            if (!this.data.disabled) {
                let _translate = this.data._translate
                if (this.data._end.pageX) {
                    if (this.data.selfValue === onSTATE) {
                        if (this.data._begin.pageX <= this.data._end.pageX) {
                            if (Math.abs(this.data._begin.pageX - this.data._end.pageX) < this.data.limitX) {
                                _translate = -this.data.width
                            } else {
                                _translate = 0
                                this.data.selfValue = offSTATE
                                this.triggerEvent("change", {
                                    value: this.getStateFromSymbol(this.data.selfValue)
                                })
                            }
                        } else {
                            _translate = -this.data.width
                        }
                    } else {
                        if (this.data._begin.pageX >= this.data._end.pageX) {
                            if (Math.abs(this.data._begin.pageX - this.data._end.pageX) < this.data.limitX) {
                                _translate = 0
                                this.data.selfValue = offSTATE

                            } else {
                                this.data.selfValue = onSTATE
                                _translate = -this.data.width
                                this.triggerEvent("change", {
                                    value: this.getStateFromSymbol(this.data.selfValue)
                                })
                            }
                        } else {
                            _translate = 0
                            this.data.selfValue = offSTATE
                        }
                    }
                } else {
                    if (this.data.selfValue === onSTATE) {
                        this.data.selfValue = offSTATE
                        _translate = 0
                        this.triggerEvent("change", {
                            value: this.getStateFromSymbol(this.data.selfValue)
                        })
                    }
                    //点击
                    else {
                        this.triggerEvent('click', {})
                        this.setData({
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
            }

        },

        getStateFromSymbol(sbl) {
            return sbl.toString().split('(')[1].split(')')[0];
        },

        getSymbolFromState(str) {
            return str === 'on' ? onSTATE : offSTATE;
        },

        updateOffset(sbl) {
            this.setData({
                _translate: this.getStateFromSymbol(sbl) === 'on' ? -this.data.width : 0
            });
        },
    }

})