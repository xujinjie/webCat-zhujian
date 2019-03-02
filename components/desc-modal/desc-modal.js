// components/desc-modal/desc-modal.js
Component({
    options: {
        multipleSlots: true
    },
    properties: {

    },

    data: {
        showModal: false,
        _showModal: false,
        mark: false,
        deleteIcon: true
    },


    methods: {
        show({
            mark = false,
            deleteIcon = true
        } = {
            mark: false,
            deleteIcon: true
        }) {
            this.setData({
                showModal: true,
                _showModal: true,
                mark,
                deleteIcon
            })
        },
        hide() {
            this.setData({
                _showModal: false
            }, () => {
                setTimeout(() => {
                    this.setData({
                        showModal: false
                    })
                }, 200)
            })
        },
        markTap(e){
            this.triggerEvent("mark",e);
        }
    }
})