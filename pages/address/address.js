const app = getApp();
Page({
    data: {
        isDelete: false,

        // address里的键的key
        phoneKey: null,
        nameKey: null,
        provinceKey: null,
        cityKey: null,
        districtKey: null,
        detailKey: null,

        // address里的键的key

        //当前激活的index值
        activeIndex: null,

    },
    onLoad(options){
        
    },

    onShow(){
        let {address} = app.globalData;
        address.forEach((el, index) => {
            if (!el['value']) {
                address[index]['value'] = "off";
            }
        });

        this.setData({
            address
        })
    },

    onHide(){
        let { address } = this.data;
        let { activeIndex } = this.data;
        if (activeIndex || activeIndex == 0) {
            address[activeIndex].value = "off";
        }
        this.setData({
            address
        })
        app.globalData.address = address;
    },

    
    onUnload() {
       
        let {address} = this.data;
        let {activeIndex} = this.data;
        
        if(activeIndex || activeIndex == 0){
            address[activeIndex].value = "off";
        }
        app.globalData.address = address;
        app.setItemSync("address",address);
    },

    onReady(){

    },

    // 滑动的状态的改变触发
    swiperChange(e) {
        let {
            index
        } = e.currentTarget.dataset;
        let {
            address
        } = this.data;
        let {
            value
        } = e.detail;
        if (value == "on") {
            if (this.data.activeIndex || this.data.activeIndex == 0) {
                address[this.data.activeIndex]["value"] = 'off';
            }
            address[index]["value"] = "on";
            this.data.activeIndex = index;
        } else {
            address[index]["value"] = "off";
            this.data.activeIndex = null;
        }

        this.setData({
            address
        })
    },

    contentItemTap(e) {
        let {value,index} = e.currentTarget.dataset;
        if(value != "on"){
            app.showToast({ title: "点击事件" });
        }
     
        
      
    },

    doSomething(e) {
        // console.log(e);
        let {
            address
        } = this.data;

        let {
            index,
            type
        } = e.currentTarget.dataset;
        
        if (type =="delete"){
            this.data.activeIndex = null;
            address.splice(index, 1);
            this.setData({
                isDelete: true,
                address
            },()=>{
                this.setData({
                    isDelete: false
                })
            })
        }

        if(type == "set"){
            app.showToast({ title: "设置默认" });

            address[index].value = "off";
            
            address[0].isDefault = false;
            
            let setAddress = address.splice(index,1);

            setAddress[0].isDefault = true;

            setAddress[0].value = "off";

            

            address.unshift(setAddress[0]);

            this.setData({
                address
            })
        }

        if (type == "edit") {
            app.showToast({ title: "编辑" });
            wx.navigateTo({
                url: `../addAddress/addAddress?type=edit&index=${index}`,
            })

        }
    },

    addAddress(){
        wx.navigateTo({
            url: `../addAddress/addAddress?type=add`,
        })
    },
})