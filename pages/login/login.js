const app = getApp();
Page({
    data: {
        phone: "",
        password: null,
        code: null,

        codeText: "获取验证码",
        canSend: false,

        //忘记密码的页面路径
        forgetPassword: "forgetPassword",
        registered: "registered",
        
        //logo图片路劲路径
        logo: app.urlConfig.imgUrl.logo,
        

        loginType: 0,  //登录方式 0是密码登录 1是短信登录方式

        phoneFocus: true,

        //
        isPassword: true,

        isPasswordIcon: "miwen"
    },

    phoneInput(e){
        this.setData({
            phone: e.detail.value
        })
    },

    deletePhone(){
        this.setData({
            phone: ""
        })
    },

    passwordInput(e){
        this.setData({
            password: e.detail.value
        })
    },

    //密码的可见控制
    changeIsPassword(){
        let {isPassword} = this.data;
        let isPasswordIcon = "miwen";

        if(isPassword){
            isPasswordIcon = "yanjing";
        }

        this.setData({
            isPassword: !isPassword,
            isPasswordIcon
        })
    },

    //跳转
    toUrl(e){
        app.toInnerUrl(e);
    },

    changeLoginType(){
        let {loginType} = this.data;
        if(loginType == 0){
            loginType = 1;
            app.setTitle("验证码登录");
        }
        else{
            loginType = 0;
            app.setTitle("密码登录");
        }
        this.setData({
            loginType
        })
    },

    codeInput(e){
        this.setData({
            code: e.detail.value
        })
    },

    changeCodeText(){
        if (this.data.phone.length == 11 && Number(this.data.codeText).toString() == "NaN" ){
            this.data.canSend = true;
        }
        else{
            this.data.canSend = false;
        }

        if (this.data.canSend){
            this.data.canSend = false;
            this.setData({
                codeText: 60
            },()=>{
                this.sendCodeTimer = setInterval(() => {

                    if (this.data.codeText == 0) {
                        clearInterval(this.sendCodeTimer);
                        let phoneLen = this.data.phone.length;
                        
                        if (phoneLen == 11) {
                            this.data.canSend = true;
                        }
                        else{
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
        else{
            
            if(this.data.phone == "" || this.data.phone.length != 11){
                app.showToast({title: "请填写正确手机号码"});
            }
            else{
                app.showToast({ title: "请稍后再试" });
            }
        }
    },

    fromSubmit(e){
        let {phone,code,password,loginType} = this.data;

        if (!app.isPhone(phone)){
            app.showToast({"title": "手机格式错误"})
            return;
        }

        let data = {
            phone
        };

        if(loginType == 0){
            if (!password){
                app.showToast({ "title": "请输入密码" })
                return;
            }
            data['password'] = password;
        }else{
            if(!code || code.length != 6){
                app.showToast({ "title": "验证码格式错误" })
                return;
            }
            data['code'] = code;
        }

        console.log(data)
    },
    
    onLoad() {
        
    },

    onReady() {

    },

    onUnload() {
        clearInterval(this.sendCodeTimer);
    },
});