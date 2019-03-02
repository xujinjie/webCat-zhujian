// plugin/components/my-collapse-item/my-collapse-item.js
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        title: {
            type: String,
            value: ""
        },
        border: {
            type: String
        },
        name: {
            type: [String, Number],
            value: ""
        },
        rightIcon: {
            type: String
        },
        margin: {
            type: String
        }
    },
    relations: {
        '../my-collapse/my-collapse': {
            type: 'parent' // 关联的目标节点应为子节点
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        itemHeight: 0,
        isHide: true,
        contentHeight: 0,
        arrowAnimationData: {},
        transitionTime: ".3s"
    },
    ready() {
        this._init()
    },
    /**
     * 组件的方法列表
     */
    methods: {
        _init() {
            let that = this
            const selectQuery = wx.createSelectorQuery()
            selectQuery.in(this).select('.content').boundingClientRect((res) => {
                that.setData({
                    contentHeight: res.height
                })
            }).exec()
        },
        doSomeThing() {
            let data = this.getRelationNodes('../my-collapse/my-collapse')[0].data
            let nodes = data.childrens
            let accordion = data.accordion
            let len = nodes.length
            var animation = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            })

            var index = null
            for (let i = 0; i < len; i++) {
                let name = nodes[i].data.name
                if (name == this.data.name) {
                    index = i
                }
            }
            if (accordion) {
                if (nodes[index].data.itemHeight > 0) {
                    animation.rotate(0).step()
                    nodes[index].setData({
                        transitionTime: ".3s",
                        arrowAnimationData: animation.export(),
                        itemHeight: 0,
                        isHide: true
                    })
                } else {
                    animation.rotate(90).step()
                    nodes[index].setData({
                        transitionTime: ".3s",
                        arrowAnimationData: animation.export(),
                        itemHeight: nodes[index].data.contentHeight,
                        isHide: false
                    })
                }
                for (let j = 0; j < len; j++) {
                    if (j != index) {
                        if (nodes[j].data.itemHeight > 0) {
                            animation.rotate(0).step()
                            nodes[j].setData({
                                transitionTime: ".3s",
                                arrowAnimationData: animation.export(),
                                itemHeight: 0,
                                isHide: true
                            })
                        }
                    }
                }
            } else {

                if (nodes[index].data.itemHeight > 0) {
                    animation.rotate(0).step()
                    nodes[index].setData({
                        transitionTime: ".3s",
                        arrowAnimationData: animation.export(),
                        itemHeight: 0,
                        isHide: true
                    })
                } else {
                    animation.rotate(90).step()
                    nodes[index].setData({
                        transitionTime: ".3s",
                        arrowAnimationData: animation.export(),
                        itemHeight: nodes[index].data.contentHeight,
                        isHide: false
                    })
                }
            }
        }
    }
})