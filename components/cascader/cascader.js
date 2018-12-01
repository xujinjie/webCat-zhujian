Component({
        properties: {
                options: {
                        type: Array
                },
                key: {
                        type: String
                },
                title: {
                        type: String,
                        value: "标题"
                }
        },
        data: {
                selectOptions: [],
                current: 0,
                selectData: [],
                isComplete: false
        },
        ready() {
                this.$popup = this.selectComponent('.popup')
                this._init()
        },
        methods: {
                show() { 
                        this.$popup.showPopup() 
                },
                hide(){
                        this.$popup.hidePopup()                         
                },

                _init(){
                        let { options, selectOptions,key} = this.data
                        // console.log(options)
                        if(key){
                                options.forEach((el,index)=>{
                                        options[index]["label"] = options[index][key]
                                })
                        }

                        selectOptions.push(options)
                        this.setData({
                                selectOptions
                        })
                },

                selectItemTap(e){
                        let { p, c } = e.currentTarget.dataset
                        let { selectOptions, current, selectData, options, isComplete } = this.data
                        let tempObj = {}
                        for (let key in selectOptions[current][c]){
                                if(key != "list" && key!="isSelect"){
                                        tempObj[key] = selectOptions[current][c][key]
                                }
                        }
                        tempObj["index"] = c

                        if (selectOptions[current][c]["list"]){
                                // console.log(1)
                                if(isComplete){
                                        // console.log(2)
                                        isComplete = false
                                        selectOptions[current][selectData[current]["index"]]["isSelect"] = false
                                        selectOptions[current][c]["isSelect"] = true
                                        selectOptions.push(selectOptions[current][c]["list"])
                                        current += 1
                                }
                                else{
                                        // console.log(3) 
                                        isComplete = false                                        
                                        selectOptions[current][c]["isSelect"] = true
                                        selectOptions.push(selectOptions[current][c]["list"])
                                        current += 1       
                                        selectData.push(tempObj)                                           
                                }
                               
                        }
                        else{
                               
                               if(!isComplete){
                                //        console.log(5)
                                       isComplete = true
                                       selectOptions[current][c]["isSelect"] = true
                                       selectData.push(tempObj)
                               }
                               else{
                                //        console.log(6)
                                       selectOptions[current][selectData[current]["index"]]["isSelect"] = false
                                       selectOptions[current][c]["isSelect"] = true
                                       selectData[current] = tempObj
                               }

                                isComplete = true
                        }
                        
                        this.setData({
                                selectData,
                                current,
                                isComplete,
                                selectOptions
                        },()=>{
                                // console.log(this.data.selectData)
                                // console.log(this.data.selectOptions)
                                // console.log(this.data.isComplete)
                                // console.log(this.data.current)
                                this.triggerEvent("change", this.data.selectData)
                                if(isComplete){
                                        this.triggerEvent("complete",this.data.selectData)
                                }
                        })
                },

                tabsItemTap(e){
                        
                        let index = e.currentTarget.dataset.index
                        let { selectData, selectOptions, current} = this.data
                        let tempArr = []
                        let tempArr2 = []
                        selectOptions.forEach((el,inx)=>{
                                if(inx>=index){
                                        
                                        if (selectData[inx]){
                                                selectOptions[inx][selectData[inx]["index"]]["isSelect"] = false
                                        }
                                      
                                       
                                }
                                else{
                                        tempArr.push(selectOptions[inx])
                                        tempArr2.push(selectData[inx])
                                }
                        })

                        tempArr.push(selectOptions[index])
                        this.setData({
                                selectOptions: tempArr,
                                selectData: tempArr2,
                                current: index,
                                isComplete: false
                        },()=>{
                                this.triggerEvent("change", this.data.selectData)                                
                        })
                },
                cancel(){
                        this.hide()
                        this.triggerEvent("cancel",this.data.selectData)
                },

                confirm(){
                        this.hide()         
                        this.triggerEvent("confirm", this.data.selectData)
                },
                catchTouchMove (res) {
                        return false
                }
        }
})