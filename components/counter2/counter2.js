Component({

        properties: {
                max: {
                        type: [Number, String],
                        value: 99
                },
                min: {
                        type: [Number,String]
                },
                count: {
                        type: Number,
                        value: 0,
                        observer(newVal) {
                                this._init()
                        }
                }
        },


        data: {
                isShowSub: false
        },
        ready() {
                this._init()
        },
        detached() {
                this.setData({
                        isShowSub: false
                })
        },
        methods: {
                _init() {
                        let count = this.data.count
                        if (count>0) {
                                this.setData({
                                        isShowSub: true
                                })
                        }
                        else{
                                setTimeout(()=>{
                                        this.setData({
                                                isShowSub: false
                                        })
                                },300)
                        }
                },

                countChange(e) {
                        let count = Number(this.data.count)
                        let value = e.currentTarget.dataset.value
                        // console.log(value)
                       if(value == "sub"){
                               if(count >0){
                                       count -= 1
                               }
                               else{
                                       count = 0
                               }
                       }

                       else{
                               if(count == 99){
                                       count = 99
                               }
                               else{
                                       count += 1
                               }
                       }

                        this.setData({
                                count
                        })
                       
                        this.triggerEvent("change", {
                                count,
                                touches: e.touches
                        })

                },
        }
})