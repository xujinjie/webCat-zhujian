
Component({
        options: {
                multipleSlots: true // 在组件定义时的选项中启用多slot支持
        },
        properties: {
                options: {
                        type: Array,
                        value: [] // {label: "",icon: {},url: ""}
                },
                full: {
                        type: Boolean,
                        value: false
                },
                height: {
                        type: [String, Number],
                        value: 90
                },
                activeColor: {
                        type: "String",
                        value: "#09bb07"
                },
                current: {
                        type: Number,
                        value: 0
                },
                lineColor: {
                        type: String,
                        value: "#09bb07"
                }
        },

        data: {
                scrollLeft: 0
        },
        ready() {
                this._init()
        },
        methods: {
                _init(){
                        let that = this
                        let current = this.data.current
                
                        const query = wx.createSelectorQuery().in(this)
                        query.select(`.scroll_con`).boundingClientRect(function (res) {
                                let scrollWidth = res.width
                                that.getItemWidth(current).then(res1 => {
                                        // console.log(res)
                                        let lineLeft = res1.left
                                        
                                        // if (current > 0) {
                                        //         lineLeft += 15
                                        // }
                                        let scrollLeft = 0
                                        if (lineLeft > scrollWidth/2) {
                                                scrollLeft = lineLeft - scrollWidth / 2
                                        }       
                                        that.setData({
                                                lineWidth: res1.width,
                                                lineLeft,
                                                scrollWidth,
                                                scrollLeft
                                        })
                                })
                        }).exec()
                },

                getItemWidth(current) {
                        return new Promise((reslove)=>{
                                const query = wx.createSelectorQuery().in(this)
                                query.select(`.tab_box${current}`).boundingClientRect(function (res) {
                                        // console.log(res)
                                        reslove(res)
                                }).exec()
                        })
                },

                tabItemTap(e){
                        // console.log(e)
                        let that = this                        
                        let scrollWidth = this.data.scrollWidth
                        let index = e.currentTarget.dataset.index
                        let offsetLeft = e.currentTarget.offsetLeft
                        
                        this.getItemWidth(index).then(res=>{
                                // console.log(res)
                                let scrollLeft = 0
                                if (offsetLeft > scrollWidth / 2){
                                        scrollLeft = offsetLeft - scrollWidth / 2
                                }

                                that.setData({
                                        lineWidth: res.width,
                                        lineLeft: offsetLeft,
                                        current: index,
                                        scrollLeft
                                })
                                that.triggerEvent('change', {index,data: that.data.options[index]})
                        })
                }
        }
})