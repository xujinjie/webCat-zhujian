Component({
        properties: {
                //列表的颜色
                backgroundColor: {
                        type: String,
                        value: "#fff",
                        observer(newVal){
                               if(!newVal){
                                       this.setData({
                                               backgroundColor: "#fff"  
                                       })
                               }
                        }
                },
                height: {
                        type: [Number,String],
                        value: 80,
                        observer(newVal) {
                                if (!newVal) {
                                        this.setData({
                                                height: "80"
                                        })
                                }
                        }
                },
                //左边是否使用字体图标
                icon:{
                        type: Boolean,
                        value: false
                },
                iconData: {
                        type: Object,
                        observer(newVal) {
                                if (newVal) {
                                      if(!newVal.color){
                                              newVal.color = "#333"
                                      }
                                      if(!newVal.size){
                                              newVal.size = 40
                                      }
                                }
                                this.setData({
                                        iconData: newVal
                                })
                        }
                },
                img: {
                        type: Boolean,
                        value: false
                },
                //左边是否使用图片图标
                imgData: {
                        type: Object,
                        observer(newVal){
                                if(!newVal.width){
                                        newVal.width = 40
                                }
                                if (!newVal.height){
                                        newVal.height = 40
                                }
                                this.setData({
                                        imgData: newVal,
                                })
                        }
                },

                //右端的箭头
                arrow: {
                        type: Boolean,
                        value: false
                },

                arrowData: {
                        type: Object,
                        value: {
                                size: 40,
                                color: "rgba(0, 0, 0, .3)",
                                type: "jiantouyou"
                        } ,
                        observer(newVal) {
                                if (!newVal) {
                                        this.setData({
                                                arrowData: {
                                                        size: 40,
                                                        color: "rgba(0, 0, 0, .3)",
                                                        type: "jiantouyou"
                                                }
                                        })
                                }else{          
                                        if (!newVal.color) {
                                                newVal.color = "#333"
                                        }
                                        if (!newVal.size) {
                                                newVal.size = 40
                                        }
                                        
                                        this.setData({
                                                arrowData: newVal
                                        })
                                }
                        }
                },
                dot: {
                        type: Object,
                        value: {
                                text: 0,
                                backgroundColor: "#f40",
                                color: "#fff"
                        },
                        observer(newVal){
                                if(newVal){
                                        if (!newVal.color){
                                                newVal.color = "#fff"
                                        }
                                        if (!newVal.backgroundColor) {
                                                newVal.backgroundColor = "#f40"
                                        }
                                }

                                this.setData({
                                        dot: newVal
                                })
                        }
                },
                //标题
                title: {
                        type: String
                },

                //标题下方的描述
                detail: {
                        type: String
                },
                //左边的描述
                desc: {
                        type: String
                },
                //边框
                border: {
                        type: Boolean,
                        value: false
                },
                borderData: {
                        type: Object,
                       value: {
                               top: 0,
                               left: 0,
                               right: 0,
                               bottom: 0,
                               type: "none",
                               color: "none",
                               size: 0
                       }
                }
        },
        methods: {
                onClick(event) {
                        let detail = event.detail
                        let option = {}
                        this.triggerEvent('click', detail, option)
                }
        }
})