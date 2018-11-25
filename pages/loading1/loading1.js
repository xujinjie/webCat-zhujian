let loading1APIData = require("../../components/componentsAPI.js").loading1

Page({

        data: {
                loading1APIData
        },
        showMyLoading() {
                let $loading = this.selectComponent('#my-loading')
              
                $loading.show({
                        title: "错误",
                        icon: "cuowu"
                })
                setTimeout(() => {
                        $loading.hide()
                }, 2000)
        },
        showMyLoading1() {
                let $loading = this.selectComponent('#my-loading')

                $loading.show({
                        title: "完成",
                        icon: "xuanzhong"
                })


                setTimeout(() => {
                        $loading.hide()
                }, 2000)
        },

        showMyLoading2() {
                let $loading = this.selectComponent('#my-loading')

                $loading.show({
                        title: "加载中",
                        icon: "Loading"
                })


                setTimeout(() => {
                        $loading.hide()
                }, 2000)
        },
})