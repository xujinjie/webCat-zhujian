let tab = require("../../components/componentsAPI.js").tab

Page({


        data: {
                tabAPIData: tab,
                tabNavData: [{
                                label: "标签一",
                                value: 0,
                                icon: {
                                        type: "wodefankui",
                                        color: "blue"
                                }
                        },
                        {
                                label: "标签二",
                                value: 0,
                                icon: {
                                        type: "gouwuche",
                                },
                                src: ""
                        },
                        {
                                label: "标签三",
                                value: 0,
                                icon: {
                                        type: "search",
                                },

                                src: ""
                        },
                        {
                                label: "标签四",
                                value: 0,

                                icon: {
                                        type: "naozhong",
                                },
                                src: "",

                        },
                        {
                                label: "标签五",
                                value: 0,
                                icon: {
                                        type: "shijian",
                                },
                                src: "",
                        },
                        {
                                label: "标签五标签五",
                                value: 0,
                                icon: {
                                        type: "shouhuodizhi",
                                },
                                src: "",
                        },
                        {
                                label: "标签五标签五标签五标签五",
                                value: 0,
                                icon: {
                                        type: "wodedingdan",
                                },
                                src: "",
                        }
                ],

                tabNavData2: [{
                                label: "标签一",
                                icon: {
                                        type: "wodefankui",
                                        color: "blue"
                                }
                        },
                        {
                                label: "标签二",
                                icon: {
                                        type: "gouwuche",
                                },
                        },
                        {
                                label: "标签三",
                                icon: {
                                        type: "loading",
                                }
                        },
                        {
                                label: "标签四",
                                icon: {
                                        type: "naozhong",
                                },
        
                        },
                ],
        },
        selectChange(e) {
                wx.showToast({
                        title: "index: " + e.detail.index,
                })
        }
})