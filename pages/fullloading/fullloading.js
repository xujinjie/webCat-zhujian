// pages/fullloading/fullloading.js
Page({
        data: {
                type: 1
        },
        changeType(){
                let type = this.data.type
                if(this.data.type<5){
                       
                        type += 1
                       
                }
                else{
                        type = 1 
                }
                this.setData({
                        type
                })
        }
})