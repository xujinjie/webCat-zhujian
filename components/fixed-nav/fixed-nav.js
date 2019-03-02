const app = getApp();
const styleHandle = app.styleHandle;
Component({

    properties: {
        selfFixed: {
            type: [String, Object],
            value: {
                bottom: "100rpx",
                right: "20rpx"
            }
        },
        navItem: {
            type: Array
        }
    },

    data: {
        showList: false
    },

    ready() {
        this._init()
    },
    methods: {
        _init() {
            let _selfFixed = styleHandle(this.data.selfFixed);
            let itemWidth = parseInt(this.data.navItem.length * 70);
            this.setData({
                _selfFixed,
                itemWidth
            })

        },
        toggle() {
            let {showList} = this.data;
            if (showList) {
                showList = false
            } else {
                showList = true
            }
            this.setData({
                showList,
                canAnimated: true
            })
        },
        navItemTap(e) {
            let {index} = e.currentTarget.dataset;
            let data = this.data.navItem[index]
            this.triggerEvent("itemTap", {
                index,
                data
            })
            this.toggle()
        }
    }
})