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
                        color = "#333",
                        activeColor = "#fff",
                        backgroundColor = "#fff",
                        activeBackgroundColor = "#6e4340",
                        iconType = "wancheng",
                        right = true,
                        span = 4,
                        options = [],
                        key = "",
                }){
                        //处理选项
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
                                }
                        })

                        let container = direction
                        if(simple){
                                container = "simple"
                                span = 4
                        }
                        console.log(options)
                        console.log(listHeight)
                        this.setData({
                                simple,
                                container,
                                direction,
                                listHeight,
                                type,
                                color,
                                activeColor,
                                activeColor,
                                backgroundColor,
                                activeBackgroundColor,
                                iconType,
                                right,
                                span,
                                options,
                                key
                        })
                }
        }
})