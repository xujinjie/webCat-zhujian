// components/desc-modal/desc-modal.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },

  data: {
    showModal: false
  },

 
  methods: {
    show(){
      this.setData({
        showModal: true
      })
    },
    hide(){
      this.setData({
        showModal: false
      })
    },
    toggle(){
      this.setData({
        showModal: !this.data.showModal
      })
    }
  }
})
