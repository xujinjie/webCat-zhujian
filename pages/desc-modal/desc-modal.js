let descModal = require("../../components/componentsAPI.js").descModal;
Page({

    data: {
        descModal
    },

    onReady(){
        this.$detailModal = this.selectComponent(".desc-modal");
    },
    buttonTap() {
        this.$detailModal.show({
            mark: true
        })
    },

    markTap(e){
        wx.showToast({
            title: '点击了mark',
        })

        setTimeout(()=>{
            this.$detailModal.hide()
        },200)
    }
})