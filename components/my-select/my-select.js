// plugin/components/my-select/my-select.js
Component({
        /**
         * 组件的属性列表
         */
        properties: {
                
        },

        data: {
               
        },
        attached() {
              this.selectData = {}  
        },

        methods: {
                
                /**
                 *  diretion: "col(列),row（行）"
                 *  type = "radio" 选择的模式，多选checkbox和单选radio,
                 * activeColor: 选择后的文本和选择框的样式颜色
                 */
                create({
                        simple = false,
                        direction = "col", 
                        listHeight = 80,
                        type = "radio",
                        // color = "#333",
                        // activeColor = "#fff",
                        // iconType = "wancheng",
                        right = true,
                        span = 4,
                        options = [],
                        key = "",
                        icon
                }){
                        //处理选项
                        let isSelect = false 
                        options.forEach((el,index)=>{
                                if ((typeof el)=="object"){
                                       if(key){
                                               if(options[index][key] || options[index][key] == 0){
                                                       options[index]["showValue"] = options[index][key]
                                               }
                                       }
                                       else{
                                               if(options[index]["value"]){
                                                       options[index]["showValue"] = options[index]["value"]
                                               }
                                       }

                                        //当单选时,options里的元素的isSelect设为多个了，默认第一个的isselect为true，后面的都为false
                                        if (type == "radio"){
                                                if (isSelect) {
                                                        options[index].isSelect = false
                                                }   
                                                if(el.isSelect){
                                                        this.selectData[index] = el
                                                        isSelect = true
                                                } 

                                        }

                                        
                                }
                        })

                        let container = direction
                        if(simple){
                                container = "simple"
                                span = 4
                        }

                        //没有指定icon时
                        if(!icon.normal){
                                if (type == "radio"){
                                        icon.normal = "round"
                                        icon.active = "roundcheckfill",
                                        size = "35"
                                }
                                else{
                                        icon.normal = "square"
                                        icon.active = "squarecheckfill",
                                        size = "35"
                                }
                        }
                  

                        this.setData({
                                simple,
                                container,
                                direction,
                                listHeight,
                                type,
                                // color,
                                // activeColor,
                                // iconType,
                                right,
                                span,
                                options,
                                key,
                                icon,
                        })
                },


                selectHandle(e) {
                        let {options,type} = this.data
                        let {disabled,index}= e.currentTarget.dataset
                        if(!disabled){
                                if (type == "radio") {
                                        for (let key in this.selectData) {
                                                if (key) {
                                                        options[key].isSelect = false
                                                }
                                        }

                                        this.selectData = {}
                                        options[index].isSelect = true
                                        this.selectData[index] = options[index]
                                }
                                else{
                                        if (this.selectData[index]){
                                                if(this.selectData[index].isSelect){
                                                        options[index].isSelect = false
                                                        delete this.selectData[index]
                                                }
                                        }
                                        else{
                                                options[index].isSelect = true
                                                this.selectData[index] = options[index]
                                        }
                                      
                                }
                                this.setData({
                                        options
                                })    
                                // console.log(this.selectData)
                                let data = []
                               for(let key in this.selectData){
                                       data.push(this.selectData[key])
                               }
                                this.triggerEvent("change", data)    
                        }
                        
                }
        },


})