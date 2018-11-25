let myAlert = require("../../components/componentsAPI.js").myAlert
Page({


        data: {
                myAlertData: myAlert
        },
        closeAlert() {
                let $alert1 = this.selectComponent('.alert1')
                $alert1.hide()
        },
        showAlert() {
                let $alert1 = this.selectComponent('.alert1')
                $alert1.show()
        }
})