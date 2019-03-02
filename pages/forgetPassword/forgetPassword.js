const app = getApp();
Page({

    data: {
        phone: "",
        password: null,
        repassword: null,


        code: null,

        codeText: "获取验证码",
        canSend: false,

        //logo图片路劲路径
        logo: app.urlConfig.imgUrl.logo,

        phoneFocus: true,

        isPassword: true,
        isRePassword: true,

        isPasswordIcon: "miwen",
        isRePasswordIcon: "miwen"
    },

    codeInput(e) {
        this.setData({
            code: e.detail.value
        })
    },

    phoneInput(e) {
        this.setData({
            phone: e.detail.value
        })
    },

    passwordInput(e){
        this.setData({
            password: e.detail.value
        })
    },

    repasswordInput(e){
        this.setData({
            repassword: e.detail.value
        })
    },

    changeIcon(){
        let { isPassword } = this.data;
        let isPasswordIcon = "miwen";

        if (isPassword) {
            isPasswordIcon = "yanjing";
        }

        this.setData({
            isPassword: !isPassword,
            isPasswordIcon
        })
    },

    changereIcon(){
        let { isRePassword } = this.data;
        let isRePasswordIcon = "miwen";

        if (isRePassword) {
            isRePasswordIcon = "yanjing";
        }

        this.setData({
            isRePassword: !isRePassword,
            isRePasswordIcon
        })
    },

    deletePhone() {
        this.setData({
            phone: ""
        })
    },

    codeInput(e) {
        this.setData({
            code: e.detail.value
        })
    },

    changeCodeText() {
        if (this.data.phone.length == 11 && Number(this.data.codeText).toString() == "NaN") {
            this.data.canSend = true;
        }
        else {
            this.data.canSend = false;
        }

        if (this.data.canSend) {
            this.data.canSend = false;
            this.setData({
                codeText: 60
            }, () => {
                this.sendCodeTimer = setInterval(() => {

                    if (this.data.codeText == 0) {
                        clearInterval(this.sendCodeTimer);
                        let phoneLen = this.data.phone.length;

                        if (phoneLen == 11) {
                            this.data.canSend = true;
                        }
                        else {
                            this.data.canSend = false;
                        }

                        this.setData({
                            codeText: "重新获取"
                        })
                    }
                    else {
                        this.data.codeText -= 1;
                        this.setData({
                            codeText: this.data.codeText
                        })
                    }
                }, 1000)
            })

        }
        else {

            if (this.data.phone == "" || this.data.phone.length != 11) {
                app.showToast({ title: "请填写正确手机号码" });
            }
            else {
                app.showToast({ title: "请稍后再试" });
            }
        }
    },

    fromSubmit(e) {
        let { phone, code, password, type, repassword} = this.data;

        if (!app.isPhone(phone)) {
            app.showToast({ "title": "手机格式错误" })
            return;
        }

        if (!repassword) {
            app.showToast({ "title": "请输入新密码" })
            return;
        }

        let data = {
            phone,
            repassword
        };

        if (type == 0) {
            if (!password) {
                app.showToast({ "title": "请输入旧密码" })
                return;
            }

            
            data['password'] = password;
            

        } else {
            if (!code || code.length != 6) {
                app.showToast({ "title": "验证码格式错误" })
                return;
            }
            data['code'] = code;
        }

        console.log(data)
    },


 
    onLoad (options) {
        let type = 1;
        if(options && options['type'] == 0){
            type = 0;
        }

        this.setData({
            type
        })
    },


    onReady() {

    },

    onShow() {

    },


    onHide() {

    },


    onUnload() {
        clearInterval(this.sendCodeTimer);
    }
})