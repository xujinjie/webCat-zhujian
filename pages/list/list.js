let listAPIData = require("../../components/componentsAPI.js").list
Page({
        data: {
                listAPIData,
                listData: [
                        {
                                title: "列表一" //标题
                        },
                        {
                                title: "列表二", //标题
                                height: 80
                                                                
                        }, 
                        {
                                title: "列表三", //标题
                                backgroundColor: "#fff",
                                height: 120
                        }, 

                        {
                                title: "列表四", //标题
                                detail: "描述"      
                        }, 
                        {
                                title: "列表四", //标题
                                desc: "左边描述"
                        }, 
                        {
                                title: "列表四", //标题
                                desc: "左边描述",
                                arrow: true,
                        }, 
                        {
                                title: "列表⑤", //标题
                                desc: "左边描述",
                                arrow: true,
                                arrowData: {
                                        size: 28,
                                        color: "rgba(0, 0, 0, .3)",
                                        type: "jiantouyou"
                                }
                        }, 
                        {
                                title: "列表6", //标题
                                desc: "左边描述",
                                arrow: true,
                                arrowData: {
                                        size: 28,
                                        color: "red",
                                        type: "jiantouyou"
                                }
                        }, 
                        {
                                title: "列表7", //标题
                                desc: "左边描述",
                                arrow: true,
                                arrowData: {
                                        size: 40,
                                        color: "red",
                                        type: "jiantouyou"
                                },
                                icon: true,
                                iconData: {
                                        type: "loading1",
                                        size: 40,
                                        color: "#333"
                                }
                        }, 

                        {
                                title: "列表8", //标题
                                desc: "左边描述",
                                arrow: true,
                                arrowData: {
                                        size: 40,
                                        color: "red",
                                        type: "jiantouyou"
                                },
                                icon: true,
                                iconData: {
                                        type: "more"
                                }
                        }, 

                        {
                                title: "列表9", //标题
                                detail: "描述",
                                arrow: true,
                                arrowData: {
                                        size: 40,
                                        color: "#333",
                                        type: "jiantouyou"
                                },
                                icon: true,
                                iconData: {
                                        type: "warn"
                                }
                        }, 

                        {
                                title: "列表10", //标题
                                desc: "描述",
                                arrow: true,
                                arrowData: {
                                        size: 40,
                                        color: "#333",
                                        type: "jiantouyou"
                                },
                                icon: true,
                                iconData: {
                                        type: "more"
                                },
                                img: true,
                                imgData: {
                                        src: "../../public/imgs/cart.png"
                                }
                        }, 
                        {
                                title: "列表11", //标题
                                // desc: "描述",
                                detail: "描述",
                                arrow: true,
                                arrowData: {
                                        size: 40,
                                        color: "#333",
                                        type: "jiantouyou"
                                },
                                icon: true,
                                iconData: {
                                        type: "more"
                                },
                                img: true,
                                imgData: {
                                        src: "../../public/imgs/cart.png"
                                },
                                dot: {
                                        text: 1
                                }
                        }, 
                        {
                                title: "列表11", //标题
                                // desc: "描述",
                                // detail: "描述",
                                arrow: true,
                                arrowData: {
                                        size: 40,
                                        color: "#333",
                                        type: "jiantouyou"
                                },
                                icon: true,
                                iconData: {
                                        type: "more"
                                },
                                img: true,
                                imgData: {
                                        src: "../../public/imgs/cart.png"
                                },
                                dot: {
                                        text: 1
                                }
                        }, 
                ]
        },

})