let loading2APIData = require("../../components/componentsAPI.js").loading2

Page({

        data: {
                loading2APIData
        },
        showLoading() {
                let $loading = this.selectComponent('.my-loading')
                $loading.show()
                setTimeout(() => {
                        $loading.hide()
                }, 4000)
        }
})