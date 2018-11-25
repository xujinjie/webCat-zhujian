let selectAPIData = require("../../components/componentsAPI.js").select

Page({

        data: {
                selectAPIData,
                selectData: [{
                                value: "广州",
                                id: 0
                        },
                        {
                                value: "深圳",
                                id: 1
                        },
                        {
                                value: "北京",
                                id: 2
                        },
                        {
                                value: "珠海",
                                id: 3
                        }
                ],
                title: "默认",
                options: {
                        // simple: true,
                        direction: "col",
                        listHeight: 80,
                        type: "checkbox", //checkbox,radio
                        // color: "#333",
                        // activeColor: "#fff",
                        // iconType: "wancheng",
                        icon: {
                                normal: "none",
                                active: "wancheng",
                                size: "40"
                        },
                        right: true,
                        span: 4,
                        options: [{
                                value: "广州广州广州广州",
                                id: 0,
                                isSelect: false,
                                disabled: false,
                                desc: "描述"
                        },
                        {
                                value: "深圳",
                                id: 1,
                                isSelect: false,
                                disabled: false
                                
                        },
                        {
                                value: "北京",
                                id: 2,
                                isSelect: false,
                                disabled: true
                        },
                        {
                                value: "珠海",
                                id: 3,
                                isSelect: false,
                                disabled: false,
                                desc: "描述"
                        },
                                {
                                        value: "珠海",
                                        id: 3,
                                        isSelect: false,
                                        disabled: false
                                },
                                {
                                        value: "珠海",
                                        id: 3,
                                        isSelect: false,
                                        disabled: false
                                }
                        ]
                }
        },
        onLoad(){
                this.$select = this.selectComponent(".select")
                this.$select.create(this.data.options)
        },
        selectChange(e){
                console.log(e)
        }
})