Promise.prototype.finally = function(callback) {
    let P = this.constructor
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => {
            throw reason
        })
    )
};


import {
    sysApi
} from "./sysApi.js";

import {
    myTool
} from "./myTool.js";

let parms = {
    onLaunch() {
        //获取地址，在地址管理里使用，不能删除
        this.globalData.address = this.getItemSync("address") || [];
        this.update();
    },

    onShow() {

    },

    onHide() {

    },

    onError() {

    },

    onPageNotFound() {

    },

    globalData: {
        userInfo: null
    },

    serverConfig: {
        base: "",

        apiUrl: {
            login: "",
        }
    },

    urlConfig: {
        needLoginUrl: {
            
        },

        otherUrl: {
            /** 地址列表
             */
            "address": "/pages/address/address",

            /** 添加和修改地址
             * type=add                        添加地址;
             * type=edit index=修改的index      修改地址;
             */

            'addAddress': "/pages/addAddress/addAddress",

            /** 修改密码
             * type=0   已知密码，通过密码修改
             * type=1   不知密码，通过短信修改
             */
            "forgetPassword": "/pages/forgetPassword/forgetPassword",

            /** 注册
             */
            "registered": "/pages/registered/registered",

            /**购物车
             */
            "cart": "/pages/cart/cart"
        },

        imgUrl: {
            logo: "/public/imgs/cart.png"
        },

    },

    toInnerUrl(e){
        let { url, type,options } = e.currentTarget.dataset;
        
        if (this.urlConfig.needLoginUrl[url]){
            //需要登陆的页面
            //判断是否登录了
            if(true){
                this.showToast({ title: '需要登陆' });
                return;
            }
            else{
                url = this.urlConfig.needLoginUrl[url]
            }
        }
        else{
            //不需要登陆的页面
            url = this.urlConfig.otherUrl[url]
        }

        if(options){
            let str = "";
            for(let key in options){
                str += `${key}=${options[key]}&`;
            }
            let str2 = str.slice(0, str.length - 1);
            url += "?" + str2
        }
        
        // wx.navigateTo()
        if(type == "n"){
            wx.navigateTo({
                url,
            })
        }

        // wx.redirectTo()
        if(type == "r"){
            wx.redirectTo({
                url
            })
        }

        // wx.switchTab();
        if(type == "s"){
            wx.switchTab({
                url,
            })
        }
    }
};


parms = Object.assign(parms, sysApi, myTool);

App(parms);