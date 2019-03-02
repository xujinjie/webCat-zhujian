const app = getApp();

Page({
    data: {
        //布局
        buju: [

            {
                title: "row&col    布局",
                arrow: true,
                value: "row"
            },
            {
                title: "list    列表",
                arrow: true,
                value: "list"
            },
            {
                title: "elip  文本断句",
                arrow: true,
                value: "elip"
            },
            {
                title: "divider  分隔符",
                arrow: true,
                value: "divider"
            },
        ],
        form: [{
                title: "input  输入框",
                arrow: true,
                value: "my-input"
            },
            {
                title: "cascader  级联选择器",
                arrow: true,
                value: "cascader"
            },
            {
                title: "keyboard  数字键盘",
                arrow: true,
                value: "keyboard"
            },
            {
                title: "float-button  浮动按钮",
                arrow: true,
                value: "float-button"
            },
            {
                title: "select  选择器",
                arrow: true,
                value: "select"
            },
        ],
        tips: [{
                title: "my-alert   提示",
                arrow: true,
                value: "my-alert"
            },
            {
                title: "top-tips  顶部提示",
                arrow: true,
                value: "top-tips"
            },
        ],
        motai: [{
                title: "popup  弹出层",
                arrow: true,
                value: "popup"
            },

            {
                title: "decision  决策器",
                arrow: true,
                value: "decision"
            },

            {
                title: "loading  提示(文本)",
                arrow: true,
                value: "loading1"
            },
            {
                title: "loading  提示(图片)",
                arrow: true,
                value: "loading2"
            },
            {
                title: " fullloading",
                arrow: true,
                value: "fullloading"
            },
            {
                title: "dialog  模态窗",
                arrow: true,
                value: "dialog"
            },
            {
                title: "desc-modal 详细框",
                arrow: true,
                value: "desc-modal"
            },
        ],
        qiehuan: [

            {
                title: "progress  进度条",
                arrow: true,
                value: "my-progress"
            },
            {
                title: "steps  步骤条",
                arrow: true,
                value: "steps"
            },
            {
                title: "swiper  轮播图",
                arrow: true,
                value: "swiper"
            },
            {
                title: "tab  tab页",
                arrow: true,
                value: "tab"
            },
        ],
        gongneng: [{
                title: "tag  标签",
                arrow: true,
                value: "tag"
            },

            {
                title: "sticky  吸顶器",
                arrow: true,
                value: "sticky"
            },

            {
                title: "rate  评分器",
                arrow: true,
                value: "rate"
            },
            {
                title: "badge  徽章",
                arrow: true,
                value: "badge"
            },

            {
                title: "counter  计数器",
                arrow: true,
                value: "counter"
            },
            {
                title: "counter   动画版计数器",
                arrow: true,
                value: "counter-two"
            },
            {
                title: "collapse  面板",
                arrow: true,
                value: "collapse"
            },
        ],
        other: [{
                title: "upload-image   上传图片",
                arrow: true,
                value: "upload-image"
            },
            {
                title: "login  登录ui组件",
                arrow: true,
                value: "my-login"
            },
            {
                title: "registered  注册ui组件",
                arrow: true,
                value: "jj-registered"
            },
            {
                title: "good-list  商品列表",
                arrow: true,
                value: "good-list"
            },
            {
                title: "地址管理",
                arrow: true,
                value: "address"
            },
            {
                title: "翻牌特效测试",
                arrow: true,
                value: "puke"
            },
            {
                title: "日历",
                arrow: true,
                value: "calender"
            },
            {
                title: "选择日历",
                arrow: true,
                value: "select-calender"
            },
            {
                title: "外卖店铺",
                arrow: true,
                value: "goods"
            },
            {
                title: "固定导航栏",
                arrow: true,
                value: "fixed-nav"
            },
            {
                title: "侧滑",
                arrow: true,
                value: "swpier-out"
            }
        ],

        component: [{
            title: "其他",
            list: [{
                    text: "地址管理",
                    icon: "coordinates_fill",
                    url: "../address/address"

                }, {
                    text: "日历",
                    icon: "rili",
                    url: "../calender/calender"
                }, {
                    text: "全屏日历",
                    icon: "rili2",
                    url: "../select-calender/select-calender"
                }, {
                    text: "上传图片",
                    icon: "rili2",
                    url: "../upload-image/upload-image"
                }, {
                    text: "翻牌特效测试",
                    icon: "rili2",
                    url: "../puke/puke"
                }, {
                    text: "数据为空",
                    icon: "rili2",
                    url: "../null/null"
                }, {
                    text: "固定导航栏",
                    icon: "rili2",
                    url: "/pages/fixed-nav/fixed-nav"
                },
                {
                    text: "登录",
                    icon: "rili2",
                    url: "/pages/login/login"
                },
                {
                    text: "购物车",
                    icon: "gouwuchefill",
                    url: "/pages/cart/cart"
                },
                {
                    text: "侧滑",
                    icon: "rili2",
                    url: "/pages/swpier-out/swpier-out"
                }
            ]
        }, {
            title: "交互",
            list: [{
                    text: "详细弹窗",
                    icon: "rili4",
                    url: "/pages/desc-modal/desc-modal"
                },
                {
                    text: "popup弹出层",
                    icon: "rili4",
                    url: "/pages/popup/popup"
                },
                {
                    text: "decision  决策器",
                    icon: "rili4",
                    url: "/pages/decision/decision"
                },
                {
                    text: "dialog  模态窗",
                    icon: "rili4",
                    url: "/pages/dialog/dialog"
                },
            ]
        }, {
            title: "布局",
            list: [{
                    text: "row$col布局",
                    icon: "rili4",
                    url: "/pages/row/row"
                },
                {
                    text: "list列表",
                    icon: "rili4",
                    url: "/pages/list/list"
                },
                {
                    text: "elip 文本断句",
                    icon: "rili4",
                    url: "/pages/elip/elip"
                },
                {
                    text: "divider 分隔符",
                    icon: "rili4",
                    url: "/pages/divider/divider"
                }
            ]
        }, {
            title: "提示",
            list: [{
                text: "top-tips",
                icon: "rili4",
                url: "/pages/top-tips/top-tips"
            }]
        }, {
            title: "切换",
            list: [{
                    text: "progress进度条",
                    icon: "rili4",
                    url: "/pages/my-progress/my-progress"
                },
                {
                    text: "steps步骤条",
                    icon: "rili4",
                    url: "/pages/steps/steps"
                },
                {
                    text: "swiper",
                    icon: "rili4",
                    url: "/pages/swiper/swiper"
                },
                {
                    text: "tab页",
                    icon: "rili4",
                    url: "/pages/tab/tab"
                }
            ]
        }, {
            title: "功能型",
            list: [{
                    text: "tag 标签",
                    icon: "rili4",
                    url: "/pages/tag/tag"
                },
                {
                    text: "sticky吸顶器",
                    icon: "rili4",
                    url: "/pages/sticky/sticky"
                },
                {
                    text: "rate评分器",
                    icon: "rili4",
                    url: "/pages/rate/rate"
                },
                {
                    text: "badge徽章",
                    icon: "rili4",
                    url: "/pages/badge/badge"
                },
                {
                    text: "counter计数器",
                    icon: "rili4",
                    url: "/pages/counter/counter"
                },
                {
                    text: "动画版计数器",
                    icon: "rili4",
                    url: "/pages/counter-two/counter-two"
                },
                {
                    text: "collapse面板",
                    icon: "rili4",
                    url: "/pages/collapse/collapse"
                }
            ]
        },{
            title: "form表单",
            list: [
                {
                    text: "input输入框",
                    icon: "rili4",
                    url: "/pages/my-input/my-input"
                },
                {
                    text: "cascader级联选择器",
                    icon: "rili4",
                    url: "/pages/cascader/cascader"
                },
                {
                    text: "keyboard数字键盘",
                    icon: "rili4",
                    url: "/pages/keyboard/keyboard"
                },
                {
                    text: "float-button浮动按钮",
                    icon: "rili4",
                    url: "/pages/float-button/float-button"
                },
                {
                    text: "select选择器",
                    icon: "rili4",
                    url: "/pages/select/select"
                },
            ]
        }]
    },
    onLoad(options) {
        // options = JSON.stringify(options)
    },

    onReady() {
        let testDeg = 0
        setInterval(() => {
            this.setData({
                testDeg
            })
            testDeg++
        }, 100)

    },

    lsitTap(e) {
        let {
            value
        } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../${value}/${value}`,
        })
    },

    toIcon() {
        wx.navigateTo({
            url: '../icon/icon',
        })
    },

    toDetail(e) {
        let {
            url
        } = e.currentTarget.dataset;
        wx.navigateTo({
            url
        })
    }
})