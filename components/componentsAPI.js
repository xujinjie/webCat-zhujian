module.exports = {
        row: {
                "attributes": [{
                                title: "gutter",
                                desc: "栅格间隔",
                                type: "Number",
                                value: 0
                        },
                        {
                                title: "bottom",
                                desc: "margin-bottom的大小",
                                type: "Number",
                                value: 0
                        }
                ],
                "method": [{
                        title: "none",
                        desc: "none",
                        type: "none",
                }]
        },
        col: {
                "attributes": [{
                                title: "span",
                                desc: "占据栅格的多少分，一共分为24格",
                                type: "Number",
                                value: 24
                        },
                        {
                                title: "offset",
                                desc: "栅格左侧的间隔格数",
                                type: "Number",
                                value: 0
                        }
                ],
                "method": [{
                        title: "none",
                        desc: "none",
                        type: "none",
                }]
        },

        list: {
                "attributes": [{
                                title: "backgroundColor",
                                desc: "背景色",
                                type: "String",
                                value: "#fff"
                        },
                        {
                                title: "height",
                                desc: "高度,单位rpx",
                                type: "[String,Number]",
                                value: "80"
                        },
                        {
                                title: "icon",
                                desc: "左边是否使用icon",
                                type: "Boolean",
                                value: "false"
                        },
                        {
                                title: "iconData",
                                desc: "icon为true时生效",
                                type: "Object",
                                value: `value: {
                                        color: "#333",
                                        size: 28
                                 }`
                        },
                        {
                                title: "img",
                                desc: "左边是否使用图片",
                                type: "Boolean",
                                value: "false"
                        },
                        {
                                title: "imgData",
                                desc: "Object",
                                type: "Boolean",
                                value: `{
                                        width: 24,
                                        height: 24
                                }`
                        },
                        {
                                title: "arrow",
                                desc: "左边的箭头图标",
                                type: "Boolean",
                                value: "true"
                        },
                        {
                                title: "arrowData",
                                desc: "左边的箭头图标数据",
                                type: "Object",
                                value: `{
                                        size: 28,
                                        color: "rgba(0, 0, 0, .3)",
                                        type: "jiantouyou"
                                } `
                        },
                        {
                                title: "title",
                                desc: "标题",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "desc",
                                desc: "左边的描述",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "detail",
                                desc: "标题下方的描述",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "border",
                                desc: "是否有边框",
                                type: "Boolean",
                                value: "false"
                        },
                        {
                                title: "borderData",
                                desc: "边框的data",
                                type: "Object",
                                value: `{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "none",
                                        size: 0,
                                        type: "none"
                                 }`
                        },
                        {
                                title: "dot",
                                desc: "dot",
                                type: "Object",
                                value: `{
                                text: 0,
                                backgroundColor: "#f40",
                                color: "#fff"
                        }`
                        },
                ],
                "method": [{
                        title: "click",
                        desc: "点击",
                        type: "triggerEvent",
                }]
        },


        uploadImage: {
                "attributes": [{
                                title: "maxLength",
                                desc: "上传图片的最大张数",
                                type: "Number",
                                value: 12
                        },
                        {
                                title: "imageMode",
                                desc: "小图片的剪切方式",
                                type: "String",
                                value: "aspectFill"
                        }
                ],
                "method": [{
                        title: "change",
                        desc: "选择生改变是触发，返回一个数组",
                        type: "triggerEvent",
                }]
        },

        myAlert: {
                "attributes": [{
                                title: "title",
                                desc: "提示信息",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "type",
                                desc: "提示类型(success，info，warning，error)",
                                type: "String",
                                value: "warning"
                        },
                        {
                                title: "closable",
                                desc: "是否显示关闭按钮",
                                type: "Boolean",
                                value: "true"
                        },
                        {
                                title: "center",
                                desc: "文本是否居中",
                                type: "Boolean",
                                value: "false"
                        },
                        {
                                title: "autoClose",
                                desc: "是否自动关闭",
                                type: "Boolean",
                                value: "false"
                        },
                        {
                                title: "closeTime",
                                desc: "自动关闭的时间",
                                type: "[Number,String]",
                                value: "2500, 单位毫秒"
                        },
                        {
                                title: "backgroundColor",
                                desc: "背景色",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "textColor",
                                desc: "字体颜色",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "iconColor",
                                desc: "图标颜色",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "isClose",
                                desc: "初始的状态",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "move",
                                desc: "初始的状态",
                                type: "Boolean",
                                value: false
                        },
                ],
                "method": [{
                                title: "hide",
                                desc: "关闭alert",
                                type: "innerEvent",
                        },
                        {
                                title: "show",
                                desc: "显示alert",
                                type: "innerEvent",
                        },
                        {
                                title: "close",
                                desc: "alert关闭时触发",
                                type: "triggerEvent",
                        },
                        {
                                title: "open",
                                desc: "alert显示时触发",
                                type: "triggerEvent",
                        }
                ]
        },

        toptips: {
                "attributes": [{
                                title: "title",
                                desc: "提示信息",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "type",
                                desc: "提示类型(success，info，warning，error)",
                                type: "String",
                                value: "warning"
                        },
                        {
                                title: "center",
                                desc: "文本是否居中",
                                type: "Boolean",
                                value: "false"
                        },
                        {
                                title: "autoClose",
                                desc: "是否自动关闭",
                                type: "Boolean",
                                value: "false"
                        },
                        {
                                title: "closeTime",
                                desc: "自动关闭的时间",
                                type: "[Number,String]",
                                value: "2500, 单位毫秒"
                        }
                ],
                "method": [{
                                title: "closeTips",
                                desc: "关闭tops",
                                type: "innerEvent",
                        },
                        {
                                title: "openTips",
                                desc: "关闭tops",
                                type: "innerEvent",
                        }
                ]
        },

        //还没改
        tab: {
                "attributes": [{
                                title: "data",
                                desc: "tab的数据",
                                type: "Array",
                                value: 0
                        },
                        {
                                title: "active",
                                desc: "当前激活的下标",
                                type: "Number",
                                value: 0
                        }
                ],
                "method": [{
                        title: "change",
                        desc: "选择改变是触发",
                        type: "triggerEvent",
                }]
        },

        //还没改
        cascader: {
                "attributes": [{
                        title: "options",
                        desc: "数据，子元素用children标注",
                        type: "Array",
                        value: ""
                }],
                "method": [{
                        title: "showCascader",
                        desc: "显示选择的界面，是个promise函数，要选择完毕才resolve中返回数据，没有reject",
                        type: "innerEvent",
                }]
        },

        //还没改
        popup: {
                "attributes": [{
                                title: "direction",
                                desc: "出现的方向,内容使用slot插入，无名插槽",
                                type: "String",
                                value: "right(right,left,top,bottom)"
                        },

                ],
                "method": [{
                                title: "showPopup",
                                desc: "显示popup",
                                type: "innerEvent",
                        },
                        {
                                title: "hidePopup",
                                desc: "隐藏popup",
                                type: "innerEvent",
                        }
                ]
        },

        //暂时不用改
        keyboard: {
                "attributes": [{
                                title: "isRandom",
                                desc: "数组排序是否随机",
                                type: "Boolean",
                                value: true
                        },
                        {
                                title: "keys",
                                desc: "最大长度",
                                type: "Number",
                                value: 6
                        },
                        {
                                title: "cancelText",
                                desc: "取消按钮的文本",
                                type: "String",
                                value: "取消"
                        },
                        {
                                title: "titleText",
                                desc: "键盘上的提示",
                                type: "String",
                                value: "密码输入"
                        },
                        {
                                title: "inputText",
                                desc: "密码框上的提示",
                                type: "String",
                                value: "'输入数字密码'"
                        },
                        {
                                title: "deleteText",
                                desc: "删除框的提示",
                                type: "String",
                                value: "x"
                        },
                        {
                                title: "isShow",
                                desc: "是否显示键盘，用来通过数据控制显示隐藏",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "ablenull",
                                desc: "允许为空，显示提交按钮",
                                type: "Boolean",
                                value: false
                        },
                ],
                "method": [{
                                title: "confirm",
                                desc: "密码输入完毕或者点击提交时触发",
                                type: "triggerEvent",
                        },
                        {
                                title: "showKeyBoard",
                                desc: "显示键盘",
                                type: "innerEvent",
                        },
                        {
                                title: "hideKeyBoard",
                                desc: "隐藏键盘",
                                type: "innerEvent",
                        },
                        {
                                title: "clearAll",
                                desc: "清除去不输入",
                                type: "innerEvent",
                        }
                ]
        },


        decision: {
                "attributes": [{
                                title: "type",
                                desc: "决策器的类型",
                                type: "String",
                                value: "simple(simple,button)"
                        },
                        {
                                title: "buttons",
                                desc: "type为button是可用，",
                                type: "Array",
                                value: ""
                        }
                ],
                "method": [{
                                title: "showDecision",
                                desc: "显示decision，对象参数， title：标题。默认值为：是否删除。confirmText：确认按钮。默认值：是。cancelText：取消按钮。默认值：否。回调resolve默认是确定按钮，在button模式下返回buttons里的参数type，reject为取消按钮的点击回调",
                                type: "innerEvent",
                        },
                        {
                                title: "hideDecision",
                                desc: "隐藏decision",
                                type: "innerEvent",
                        }
                ]
        },

        floatButton: {
                "attributes": [{
                                title: "selfStyle",
                                desc: "自定义样式",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "options",
                                desc: "列表的数据",
                                type: "Array",
                                value: ""
                        },
                        {
                                title: "delayStep",
                                desc: "延时的step",
                                type: "Array",
                                value: ""
                        },
                        {
                                title: "moveable",
                                desc: "按钮是否可以移动",
                                type: "Array",
                                value: ""
                        },
                        {
                                title: "buttonColor",
                                desc: "按钮的颜色",
                                type: "String",
                                value: "#ff5777"
                        },
                        {
                                title: "buttonIconColor",
                                desc: "icon的颜色",
                                type: "String",
                                value: "#fff"
                        },
                        {
                                title: "buttonSize",
                                desc: "按钮的大小",
                                type: "Number",
                                value: 50
                        },
                        {
                                title: "buttonIconSize",
                                desc: "icon的大小",
                                type: "Number",
                                value: 60
                        },
                ],
                "method": [{
                        title: "itemtap",
                        desc: "弹框的点击事件，返回item的index",
                        type: "triggerEvent",
                }]
        },

        //gaile
        loading1: {
                "attributes": [{
                                title: "icon",
                                desc: "图标(complete,close,loading)",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "title",
                                desc: "标题",
                                type: "String",
                                value: ""
                        }
                ],
                "method": [{
                                title: "show",
                                desc: "显示loading,对象参数，默认是{ title, icon='loading'}",
                                type: "innerEvent",
                        },
                        {
                                title: "hide",
                                desc: "隐藏loading",
                                type: "innerEvent",
                        }
                ]
        },

        //gaile
        loading2: {
                "attributes": [{
                                title: "image",
                                desc: "外侧图片",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "slip",
                                desc: "内侧图片",
                                type: "String",
                                value: ""
                        }
                ],
                "method": [{
                                title: "show",
                                desc: "显示loading",
                                type: "innerEvent",
                        },
                        {
                                title: "hide",
                                desc: "隐藏loading",
                                type: "innerEvent",
                        }
                ]
        },

        //bugaile
        progress: {
                "attributes": [{
                                title: "percentage",
                                desc: "百分比",
                                type: "Number",
                                value: 0
                        },
                        {
                                title: "type",
                                desc: "进度条的类型，有line和circle",
                                type: "String",
                                value: "line"
                        },
                        {
                                title: "strokeWidth",
                                desc: "进度条宽度,单位是rpx",
                                type: "Number",
                                value: 16
                        },
                        {
                                title: "paddingLeft",
                                desc: "paddingLeft",
                                type: "Number",
                                value: 20
                        },
                        {
                                title: "paddingRight",
                                desc: "paddingRight",
                                type: "Number",
                                value: 20
                        },
                        {
                                title: "textInside",
                                desc: "进度条显示文字内置在进度条内（只在 type= line 时可用）",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "color",
                                desc: "进度条背景色",
                                type: "String",
                                value: "#13CE66"
                        },
                        {
                                title: "width",
                                desc: "环形进度条画布宽度（只在 type=circle 时可用）,单位是rpx",
                                type: "Number",
                                value: 333
                        },
                        {
                                title: "showText",
                                desc: "是否显示进度条文字内容",
                                type: "Number",
                                value: 333
                        },
                ],
                "method": [{
                        title: "change",
                        desc: "百分比在变化是触发",
                        type: "triggerEvent",
                }]
        },
        
        //buxianggai
        tag: {
                "attributes": [{
                                title: "title",
                                desc: "标签的内容",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "type",
                                desc: "标签的类型，有 normal，success，info，warning，danger",
                                type: "String",
                                value: "normal"
                        },
                        {
                                title: "color",
                                desc: "标签的背景颜色",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "hit",
                                desc: "是否显示边框",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "closable",
                                desc: "是否可以关闭",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "round",
                                desc: "是否圆角 配合 round-size使用",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "roundSize",
                                desc: "圆角的像素 rpx 配合round使用，默认为0",
                                type: "Number",
                                value: 0
                        },
                        {
                                title: "size",
                                desc: "标签的大小",
                                type: "Number",
                                value: 60
                        },
                        {
                                title: "selectable",
                                desc: "是否可选择,选择优先级比关闭优先级高",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "span",
                                desc: "tag等分分配，一行的个数等于span",
                                type: "Number",
                                value: 0
                        },
                ],
                "method": [{
                                title: "select",
                                desc: "可选择时选择触发",
                                type: "triggerEvent",
                        },
                        {
                                title: "close",
                                desc: "关闭时触发",
                                type: "triggerEvent",
                        }
                ]
        },

        //不用改
        elip: {
                "attributes": [{
                                title: "text",
                                desc: "内容",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "line",
                                desc: "行数",
                                type: "Number",
                                value: 2
                        },
                        {
                                title: "showIcon",
                                desc: "是否显示图标",
                                type: "Boolean",
                                value: true
                        },
                        {
                                title: "openable",
                                desc: "是否可以打开",
                                type: "Boolean",
                                value: true
                        },
                        {
                                title: "isSlot",
                                desc: "内容是否已slot插入，插槽父元素要使用text标签，因为line-clamp没有继承性",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "iconDirection",
                                desc: "icon的方向，有bottom和right两项",
                                type: "String",
                                value: "bottom"
                        }
                ],
                "method": [{
                        title: "none",
                        desc: "none",
                        type: "none",
                }]
        },

        //有空再改
        steps: {
                "attributes": [{
                                title: "direction",
                                desc: "步骤条的方向，选项有horizontal,vertical",
                                type: "String",
                                value: "horizontal"
                        },
                        {
                                title: "space",
                                desc: "指定space步骤条的间隔为space，没指定则是响应式,在设置space时，center要为true",
                                type: "[Number,String]",
                                value: ""
                        },
                        {
                                title: "type",
                                desc: "步骤条的样式分类，选项有icon,normal",
                                type: "String",
                                value: "normal"
                        },
                        {
                                title: "center",
                                desc: "步骤条是否居中，仅在direction==vertical有用",
                                type: "Boolean",
                                value: "true"
                        },
                        {
                                title: "steps",
                                desc: "步骤条的数据",
                                type: "Array",
                                value: ""
                        },
                        {
                                title: "textType",
                                desc: "文本的方向 有is-inline和is-block，仅在direction==horizontal有用",
                                type: "String",
                                value: "is-inline"
                        },
                ],
                "method": [{
                        title: "none",
                        desc: "通过控制传入的数据控制步骤条",
                        type: `数据的例子：
              {
                done: false,
                current: false,
                text: '步骤四',
                desc: '10.04'
              }
              done控制是否完成，
              current控制正在等待的步骤`,
                }]
        },

        //有空再改
        swiper: {
                "attributes": [{
                                title: "previousMargin",
                                desc: "前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值,官方",
                                type: "String",
                                value: "0px"
                        },
                        {
                                title: "previousMargin",
                                desc: "前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值,官方",
                                type: "String",
                                value: "0px"
                        },
                        {
                                title: "nextMargin",
                                desc: "后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值,官方",
                                type: "String",
                                value: "0px"
                        },
                        {
                                title: "current",
                                desc: "当前所在滑块的 index,官方",
                                type: "Number",
                                value: "0"
                        },
                        {
                                title: "vertical",
                                desc: "轮播图是否纵向,官方",
                                type: "Boolean",
                                value: "false"
                        },
                        {
                                title: "indicatorDots",
                                desc: "指示器,同官方",
                                type: "Boolean",
                                value: "false"
                        },
                        {
                                title: "autoplay",
                                desc: "自动切换,同官方",
                                type: "Boolean",
                                value: "true"
                        },
                        {
                                title: "interval",
                                desc: "切换时间,官方",
                                type: "[Number,String]",
                                value: "3000"
                        },
                        {
                                title: "duration",
                                desc: "过渡时间,官方",
                                type: "[Number,String]",
                                value: "1000"
                        },
                        {
                                title: "circular",
                                desc: "是否采用衔接滑动,官方",
                                type: "Boolean",
                                value: "true"
                        },
                        {
                                title: "indicatorActiveColor",
                                desc: "当前选中的指示点颜色,官方",
                                type: "String",
                                value: "#000"
                        },
                        {
                                title: "indicatorColor",
                                desc: "指示点颜色,官方",
                                type: "String",
                                value: "rgba(0,0,0,.3)"
                        },
                        {
                                title: "count",
                                desc: "同时显示的滑块数量,官方",
                                type: "[Number,String]",
                                value: "1"
                        },
                        {
                                title: "src",
                                desc: "图片的地址数组",
                                type: "Array",
                                value: "[]"
                        },
                        {
                                title: "imageMode",
                                desc: "图片的切割类型",
                                type: "String",
                                value: "aspectFill"
                        },

                        {
                                title: "wiperHeight",
                                desc: "轮播图的高度,单位rpx",
                                type: "[Number,String]",
                                value: "400"
                        },
                        {
                                title: "selfDots",
                                desc: "使用内置dots，不使用官方的dots，如果设置了indicatorDots,则不起效果",
                                type: "Boolean",
                                value: "false"
                        },
                ],
                "method": [{
                                title: "swipertap",
                                desc: "轮播图当前图片被点击触发",
                                type: "triggerEvent",
                        },
                        {
                                title: "indexChange",
                                desc: "当前index发生变化",
                                type: "triggerEvent",
                        },
                        {
                                title: "animationfinish",
                                desc: "动画结束时会触发 animationfinish 事件",
                                type: "triggerEvent",
                        },
                        {
                                title: "animationfinish",
                                desc: "动画结束时会触发 animationfinish 事件",
                                type: "triggerEvent",
                        },
                ]
        },

        //有空再改
        sticky: {
                "attributes": [{
                        title: "scrollTop",
                        desc: "通过监听onPageScroll函数，改变scrollTop",
                        type: "Number",
                        value: ""
                }],
                "method": [{
                        title: "_init",
                        desc: "在pageonReady里调用_init(),初始化sticky的初始高度",
                        type: "innerEvent",
                }]
        },

        //首要目标
        select: {
                "attributes": [{}],
                "method": [{
                        title: "change",
                        desc: "选择改变时触发",
                        type: "triggerEvent",
                },{
                        title: "create",
                        desc: `创建选择的组件
                                参数有： 
                                {
                                        simple: Boolean, （默认fasle等级最高,true时direction，span，icon，right，失效。）
                                        direction: String, (默认col col,row),
                                        listHeight: Number,(选项的高度 默认80 单位rpx)
                                        type: String, (radio 单选，checkboxd 多选)
                                        right: Boolean,
                                        span: Number, 一行几个
                                        options: array 选项
                                        key: 选项展示的文本的key
                                        icon: 图标 {normal,active,size}
                                }`,
                        type: "innerEvent",
                 }]
        },

         //有空再改
        rate: {
                "attributes": [{
                                title: "type",
                                desc: "评分图标的类型，有smile和star",
                                type: "String",
                                value: "smile"
                        },
                        {
                                title: "max",
                                desc: "最大个数",
                                type: "Number",
                                value: 5
                        },
                        {
                                title: "size",
                                desc: "图标的大小",
                                type: "Number",
                                value: 40
                        },
                        {
                                title: "initColor",
                                desc: "初始颜色",
                                type: "String",
                                value: "#C9D4E0"
                        },
                        {
                                title: "goodColor",
                                desc: "评分高时的颜色",
                                type: "String",
                                value: "#F7BA2A"
                        },
                        {
                                title: "badColor",
                                desc: "评分低时的颜色",
                                type: "String",
                                value: "#99A9BF"
                        },
                        {
                                title: "mark",
                                desc: "评分高低的分界线,是index",
                                type: "Number",
                                value: 2
                        },
                        {
                                title: "disable",
                                desc: "能否评分",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "rateValue",
                                desc: "评分",
                                type: "Number",
                                value: ""
                        },
                        {
                                title: "showText",
                                desc: "显示评分评价",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "showScore",
                                desc: "显示评分",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "justifyContent",
                                desc: "垂直对齐方式",
                                type: "String",
                                value: "center"
                        },
                ],
                "method": [{
                        title: "change",
                        desc: "评分改变是触发",
                        type: "triggerEvent",
                }]
        },

        // 不想改
        badge: {
                "attributes": [{
                                title: "isDot",
                                desc: "显示小点",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "selfStyle",
                                desc: "自定义样式",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "max",
                                desc: "上标显示最大值",
                                type: "Number",
                                value: 99
                        },
                        {
                                title: "value",
                                desc: "上标的值",
                                type: "[String,Number]",
                                value: ""
                        }
                ],
                "method": [{
                        title: "none",
                        desc: "none",
                        type: "none",
                }]
        },

        // 改了一点
        divider: {
                "attributes": [{
                                title: "icon",
                                desc: "使用图标，图标的名字",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "textColor",
                                desc: "内容的颜色",
                                type: "String",
                                value: "#409EFF"
                        },
                        {
                                title: "title",
                                desc: "分隔符的内容",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "lineColor",
                                desc: "分隔线的颜色",
                                type: "String",
                                value: "red"
                        },
                        {
                                title: "padding",
                                desc: "间隔,单位rpx",
                                type: "Number",
                                value: 10
                        },
                        {
                                title: "size",
                                desc: "内容的字体大小,单位rpx",
                                type: "Number",
                                value: 24
                        },
                ],
                "method": [{
                        title: "none",
                        desc: "none",
                        type: "none",
                }]
        },


        counter: {
                "attributes": [{
                                title: "color",
                                desc: "图标颜色",
                                type: "String",
                                value: '#ff5777'
                        },
                        {
                                title: "number",
                                desc: "当前的值",
                                type: "[Number, String]",
                                value: '#ff5777'
                        },
                        {
                                title: "max",
                                desc: "最大值",
                                type: "[Number, String]",
                                value: 99
                        },
                        {
                                title: "min",
                                desc: "最小值",
                                type: "[Number, String]",
                                value: 0
                        },
                        {
                                title: "disabled",
                                desc: "不能点击",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "step",
                                desc: "间隔",
                                type: "Number",
                                value: 1
                        },
                ],
                "method": [{
                        title: "change",
                        desc: "number改变是触发",
                        type: "triggerEvent",
                }]
        },

        // 改了
        input: {
                "attributes": [{
                                title: "title",
                                desc: "左边的标题",
                                type: "[String, Number]",
                                value: ""
                        },
                        {
                                title: "src",
                                desc: "左边使用src做图标",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "icon",
                                desc: "左边使用icon图标",
                                type: "Obj",
                                value: `{
                                        type: iconType,
                                        size: iconSize (40),
                                        color: "#333"
                                }`
                        },
                        {
                                title: "right",
                                desc: "输入框是否居右显示",
                                type: "Boolean",
                                value: ""
                        },
                        {
                                title: "mode",
                                desc: "输入框的模式选择，可选值：wrapped，有边框包裹, normal，只有下边框，none，无边框",
                                type: "String",
                                value: "wrapped"
                        },
                        {
                                title: "borderColor",
                                desc: "边框颜色",
                                type: "String",
                                value: "#e5e5e5"
                        },
                        {
                                title: "deleteIcon",
                                desc: "是否显示删除右边按钮",
                                type: "Boolean",
                                value: true
                        },
                        {
                                title: "value",
                                desc: "输入框的内容",
                                type: "String",
                                value: ""
                        },

                        {
                                title: "focus",
                                desc: "获取焦点",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "type",
                                desc: "input 的类型",
                                type: "String",
                                value: "text"
                        },
                        {
                                title: "password",
                                desc: "是否是密码类型",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "placeholder",
                                desc: "输入框为空时占位符",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "placeholderStyle",
                                desc: "指定 placeholder 的样式",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "disabled",
                                desc: "是否禁用",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "maxlength",
                                desc: "最大输入长度，设置为 -1 的时候不限制最大长度",
                                type: "Number",
                                value: 140
                        },
                        {
                                title: "cursorSpacing",
                                desc: "指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离",
                                type: "Number",
                                value: 0
                        },
                        {
                                title: "confirmType",
                                desc: "设置键盘右下角按钮的文字",
                                type: "String",
                                value: "done"
                        },
                        {
                                title: "confirmHold",
                                desc: "点击键盘右下角按钮时是否保持键盘不收起",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "cursor",
                                desc: "指定focus时的光标位置",
                                type: "Number",
                                value: ""
                        },
                        {
                                title: "selectionStart",
                                desc: "光标起始位置，自动聚集时有效，需与selection-end搭配使用",
                                type: "Number",
                                value: -1
                        },
                        {
                                title: "selectionEnd",
                                desc: "光标起始位置，自动聚集时有效，需与selection-end搭配使用",
                                type: "Number",
                                value: -1
                        },
                        {
                                title: "adjustPosition",
                                desc: "键盘弹起时，是否自动上推页面",
                                type: "Boolean",
                                value: true
                        }
                ],
                "method": [{
                                title: "input",
                                desc: "键盘输入时触发",
                                type: "triggerEvent",
                        },
                        {
                                title: "focus",
                                desc: "输入框聚焦时触发",
                                type: "triggerEvent",
                        },
                        {
                                title: "blur",
                                desc: "输入框失去焦点时触发",
                                type: "triggerEvent",
                        },
                        {
                                title: "confirm",
                                desc: "点击完成按钮时触发",
                                type: "triggerEvent",
                        }
                ]
        },


        collapse: {
                "attributes": [{
                        title: "accordion",
                        desc: "是否手风琴效果",
                        type: "Boolean",
                        value: true
                }],
                "method": [{
                        title: "none",
                        desc: "none",
                        type: "none",
                }]
        },

        collapseItem: {
                "attributes": [{
                                title: "title",
                                desc: "标题",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "border",
                                desc: "边框",
                                type: "String",
                                value: "bottom"
                        },
                        {
                                title: "name",
                                desc: "item唯一的标志,必填项",
                                type: "[String, Number]",
                                value: ""
                        }
                ],
                "method": [{
                        title: "none",
                        desc: "none",
                        type: "none",
                }]
        },

        login: {
                "method": [{
                                title: "submit",
                                desc: "点击提交按钮触发",
                                type: "triggerEvent",
                        },
                        {
                                title: "forgetPassWord",
                                desc: "点击忘记密码按钮触发",
                                type: "triggerEvent",
                        },
                        {
                                title: "doRegistered",
                                desc: "点击注册按钮触发",
                                type: "triggerEvent",
                        }
                ]
        },


        dialog: {
                "attributes": [
                        {
                                title: "",
                                desc: "属性全部都放到了showModal方法里作为参数传递",
                                type: "使用then finally 执行",
                                value: "取消按钮为reject 其他为resolve，返回type和data"
                        }
                        ,{
                                title: "direction",
                                desc: "按钮的排列方向",
                                type: "String",
                                value: "horizontal"
                        },
                        {
                                title: "title",
                                desc: "提示信息",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "content",
                                desc: "内容",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "showConfirm",
                                desc: "是否显示确认按钮",
                                type: "Boolean",
                                value: "true"
                        },
                        {
                                title: "showCancel",
                                desc: "是否显示取消按钮",
                                type: "Boolean",
                                value: "true"
                        },
                        {
                                title: "confirmText",
                                desc: "确认按钮的文字",
                                type: "String",
                                value: "确定"
                        },
                        {
                                title: "cancelText",
                                desc: "取消按钮的文字",
                                type: "String",
                                value: "取消"
                        },
                        {
                                title: "cancelColor",
                                desc: "取消按钮的文字颜色",
                                type: "String",
                                value: "#333"
                        },
                        {
                                title: "confirmColor",
                                desc: "确认按钮的文字颜色",
                                type: "String",
                                value: "#3cc51f"
                        },
                        {
                                title: "buttons",
                                desc: `按钮数组，
               数据格式：{
                text: '微信支付',
                color: '#3CC51F',
                type: 'wechat'
              }`,
                                type: "String",
                                value: ""
                        },
                        {
                                title: "userInfo",
                                desc: "获取用户信息",
                                type: "Boolean",
                                value: false
                        },
                ],
                "method": [{
                                title: "showModal",
                                desc: "显示模态窗，返回promise函数,取消调用reject，其他调用resolve,返回对应的type",
                                type: "innerEvent",
                        },
                        {
                                title: "_hideModel",
                                desc: "隐藏模态窗",
                                type: "innerEvent",
                        }
                ]
        },

        goods: {
                "attributes": [{
                                title: "title",
                                desc: "标题",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "titleStyle",
                                desc: "标题自定义样式",
                                type: "String",
                                value: ""
                        },
                        {
                                title: "isTitleSlot",
                                desc: "标题是否是插槽",
                                type: "Boolean",
                                value: false
                        },
                        {
                                title: "listBackGroundColor",
                                desc: "标题的背景颜色",
                                type: "String",
                                value: "#fff"
                        },
                        {
                                title: "goodsMessage",
                                desc: "商品的信息",
                                type: "Array",
                                value: `
              {
                  goodsID: id,
                  src: 图片地址,
                  price: 价格,
                  introdution: "描述"
              }`
                        },
                        {
                                title: "rowImageMode",
                                desc: "单行列表的图片的裁剪的样式",
                                type: "String",
                                value: "aspectFit"
                        },
                        {
                                title: "mode",
                                desc: "商品的布置，row为一行一个，column为一行两个",
                                type: "String",
                                value: "row"
                        },
                        {
                                title: "columnImageMode",
                                desc: "column列表的图片的裁剪的样式",
                                type: "String",
                                value: "aspectFit"
                        },
                ],
                "method": [{
                                title: "innertap",
                                desc: "点击",
                                type: "triggerEvent",
                        },
                        {
                                title: "more",
                                desc: "点击...触发",
                                type: "triggerEvent",
                        }
                ]
        },


        selectCalender: {
                "attributes": [{
                                title: "monthCount",
                                desc: "月份的数量",
                                type: "Number",
                                value: 6
                        },
                        {
                                title: "selectType",
                                desc: "选择的类型radio,checkbox",
                                type: "String",
                                value: "checkbox"
                        },
                        {
                                title: "max",
                                desc: "双选是选择的最大天数",
                                type: "Number",
                                value: 15
                        }
                ],
                "method": [{
                        title: "select",
                        desc: `选择完成后返回的数据，可以从e.detail中获得
        单选返回的数据形式：
            {
              year: "选择的年份", 
              month: "选择的月份",
              day: "选择的日期"
            }
        多选返回的数据形式： 
            {
              beginYear: "开始的年份",
              beginMonth: "开始的月份",
              beginDay:"开始的日期",
              endYear: "结束的年份",
              endMonth: "结束的月份",
              endDay: "结束的日期",
              dayCount: "选择的总天数"
            }`,
                        type: "triggerEvent",
                }]
        },
        
        address: {
                "attributes": [{
                        title: "address",
                        desc: "地址的数据",
                        type: "Array",
                        value: []
                }],
                "method": [{
                                title: "setDefault",
                                desc: "设置默认地址",
                                type: "triggerEvent",
                        },
                        {
                                title: "edit",
                                desc: "编辑地址",
                                type: "triggerEvent",
                        },
                        {
                                title: "delete",
                                desc: "删除地址",
                                type: "triggerEvent",
                        },
                        {
                                title: "add",
                                desc: "添加地址",
                                type: "triggerEvent",
                        },
                ]
        },

        descModal: {
                "attributes": [{
                        title: "none",
                        desc: "none",
                        type: "none",
                        value: "none"
                }],
                "method": [{
                                title: "show",
                                desc: "显示modal",
                                type: "innerEvent",
                        },
                        {
                                title: "hide",
                                desc: "隐藏modal",
                                type: "innerEvent",
                        },
                        {
                                title: "toggle",
                                desc: "显示或隐藏modal",
                                type: "innerEvent",
                        },
                ]
        },



        test: {
                "attributes": [{
                        title: "title",
                        desc: "标题",
                        type: "String",
                        value: ""
                }],
                "method": [{
                        title: "none",
                        desc: "通过控制传入的数据控制步骤条",
                        type: "triggerEvent",
                }]
        }
}