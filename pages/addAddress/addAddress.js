const app = getApp();
import {city} from "../../utils/address.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: {},
        addressTips: "选择地址",
        city: city,
        selectComplete: false
    },

    selectAddress(){
        let $cascader = this.selectComponent('.cascader');
        $cascader.show();
        this.setData({
            selectComplete: false
        })
    },

    //选择地址改变的事件
    selectChange(e){
        // console.log(e);
    },

    //选择地址完成的事件
    selectComplete(e){
        console.log(e)
    },

    //选择地址点击取消事件
    selectCancel(e){
        // console.log(e)
    },

    //选择地址点击确定事件
    selectConfirm(e){
        let { complete, data} = e.detail;
        if(complete){
            this._address = data;
            let {address} = this.data;
            address = Object.assign(address, {province: data[0].label,city: data[1].label,district: data[2].label});

            this.setData({
                address
            })
        }
        else{
            app.showToast({"title": "请选择"})
        }
    },

    switchChange(e){
        let {address} = this.data;
        address['isDefault'] = e.detail.value;
        this.setData({
            address
        })
    },

    nameInput(e){
        let { address } = this.data;
        address['name'] = e.detail.value;
        this.setData({
            address
        })
    },
    phoneInput(e){
        let { address } = this.data;
        address['phone'] = e.detail.value;
        this.setData({
            address
        })
    },
    detailInput(e){
        let {address} = this.data;
        address['detail'] = e.detail.value;
        this.setData({
            address
        })
    },

    //确定点击事件
    formSubmit(e){
        // console.log(e)
        // console.log(this)
        let { address } = this.data;
        let { name, phone, isDefault, detail, city} = address;
        
        if(!name){
            app.showToast({title: '用户名不能为空'});
            return ;
        }

        if (!app.isPhone(phone)){
            app.showToast({ title: '手机格式错误' });
            return ;
        }

        if (!city){
            app.showToast({ title: '请选择地址' });
            return;
        }
        
        if(!detail){
            app.showToast({ title: '请填写详细地址' });
            return ;
        }

        let _address = Object.assign({}, address);
        //修改
        if(this.options["index"]){
            app.globalData.address[this.options["index"]] = _address;
        }
        //添加
        else{
            if(isDefault){
                if (app.globalData.address.length){
                    app.globalData.address[0].isDefault = false;
                }
            }
            app.globalData.address.unshift(_address) ;
        }

        app.back();
        
    },

    onLoad(options) {
        if (options['type'] == "edit"){
            app.setTitle("修改地址")
            this.setData({
                address: Object.assign({}, app.globalData.address[options['index']])
            })
        }
        else{
            app.setTitle("添加地址")
        }
    },

    onReady(options) {
        
    },

    onShow(options) {
        
    },

    onHide() {

    },

    onUnload() {
        
    },

    onPullDownRefresh() {

    },

    onReachBottom() {

    },

    onShareAppMessage() {

    }
})