// plugin/components/jj-registered/jj-registered.js
let _showToast = require("../../tool/tool.js")._showToast
Component({

  properties: {
    verifyMsg: {
      type: String,
      value: "发送验证码"
    },
    buttonValue: {
      type: Number,
      value: "注册"
    },
    userNameReg: {
      type: String,
      value: "^[A-Za-z][A-Za-z0-9]{4,10}$"
    },
    phoneReg: {
      type: String,
      value: '^[1][3,4,5,7,8][0-9]{9}$'
    },
    passwordReg: {
      type: String,
      value: "^[A-Z][A-Za-z0-9.!@#$%^&*]{6,16}$"
    },
    codeTime: {
      type: Number,
      value: 60
    },
    codeLen: {
      type: Number,
      value: 6
    },
    sendCodeUrl: {
      type: String,
      value: "https://www.mirai.site"
    },
    sendCodeMethod: {
      type: String,
      value: "post"
    },
    topTipsText: {
      type: String,
      observer(){
        let $topTips = this.selectComponent(".topTips")
        $topTips.openTips()
      }
    }
  },

  data: {
    isSendCode: false
  },

  methods: {
    userNameInput(e) {
      this.data.userName = e.detail.value
    },

    phoneInput(e) {
      this.data.phoneNumber = e.detail.value
    },

    passwordInput(e) {
      this.data.password = e.detail.value
    },

    verifyPassword(e) {
      this.data.verifyPassword = e.detail.value
    },

    verifyCode(e) {
      this.data.verifyCode = e.detail.value
    },

    buttonTap(e) {
      let userName = this.data.userName
      let phoneNumber = this.data.phoneNumber
      let password = this.data.password
      let verifyCode = this.data.verifyCode
      let verifyPassword = this.data.verifyPassword

      let userNameReg = new RegExp(this.data.userNameReg)
 
      if (!userName||!userNameReg.test(userName)) {
        this.setData({
          topTipsText: "用户名格式错误"
        })
        return
      }

      let phoneReg = new RegExp(this.data.phoneReg)
      if (!phoneNumber||!phoneReg.test(phoneNumber)) {
        this.setData({
          topTipsText: "手机格式错误"
        })
        return        
      }


      let passwordReg = new RegExp(this.data.passwordReg)
      if (!password||!passwordReg.test(password)) {
        this.setData({
          topTipsText: "密码格式错误"
        })
        return  
      }

      if (password !== verifyPassword) {
        this.setData({
          topTipsText: "两次密码不匹配"
        })
        return
      }

      let value = {
        userName,
        phoneNumber,
        password,
        verifyCode
      }
      this.triggerEvent('submit', { value })
    },

    sendMessage() {
      let that = this
      let phoneNumber = this.data.phoneNumber
      let phoneReg = new RegExp(this.data.phoneReg)

      if (!phoneReg.test(phoneNumber)) {
        this.setData({
          topTipsText: "手机格式错误"
        })
        return 
      }

      wx.request({
        url: this.data.sendCodeUrl,
        method: this.data.sendCodeMethod,
        data: {
          phoneNumber
        },
        success(res) {
          //console.log(res)

          //点击button后60秒后才能再次发送验证码
          that.setData({
            isSendCode: true
          })
          let time = that.data.codeTime
          let timer = setInterval(() => {
            that.setData({
              verifyMsg: `${time}s`
            })
            time -= 1
            if (!time) {
              clearInterval(timer)
              that.setData({
                verifyMsg: '从新发送',
                isSendCode: false
              })
            }
          }, 1000)

        },
        fail(err) {
          console.log(err)
        }
      })

    }

  },



 

})
