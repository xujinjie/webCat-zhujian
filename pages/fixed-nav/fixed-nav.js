// pages/fixed-nav/fixed-nav.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //导航的数据
        navItem: [{
                label: "index",
                icon: {
                    type: "my_fill_light",
                    size: 55,
                    color: "#fff"
                }
            },
            {
                label: "cart",
                icon: {
                    type: "cart",
                    size: 55,
                    color: "#fff"
                }
            },
            {
                label: "home",
                icon: {
                    type: "home_fill_light",
                    size: 55,
                    color: "#fff"
                }
            },
            {
                label: "select-calender",
                icon: {
                    type: "rili",
                    size: 55,
                    color: "#fff"
                }
            }
        ],
    },





    navItemTap(e) {
        wx.navigateTo({
            url: `/pages/${e.detail.data.label}/${e.detail.data.label}`,
        })
    }
})