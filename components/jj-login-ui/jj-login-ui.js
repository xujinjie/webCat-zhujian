// plugin/components/jj-login-ui/jj-login-ui.js
Component({

  properties: {

  },

  data: {

  },

  methods: {
    phoneInput(e){
      this.data.phoneNum = e.detail.value
    },
    passwordInput(e){
      this.data.password = e.detail.value
    },
    buttonTap(e){
      let phoneNumber = this.data.phoneNum 
      let password = this.data.password
   
      this.triggerEvent('submit', {
        value: {
          phoneNumber,
          password
        }
      })
    },
    forgetPassWord(e){
      this.triggerEvent('forgetPassWord', e)
    },
    doRegistered(e){
      this.triggerEvent('doRegistered', e)
    }
  }
})
