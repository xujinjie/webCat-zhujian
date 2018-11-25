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
                        simple: true,
                        direction: "col",
                        listHeight: 80,
                        type : "radio",
                        color: "#333",
                        activeColor: "#fff",
                        backgroundColor: "#fff",
                        activeBackgroundColor: "#f70",
                        iconType: "wancheng",
                        right: true,
                        span: 4,
                        options: [{
                                value: "广州",
                                id: 0,
                                isSelect: false,
                                disabled: false
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
        }
})