/**
 * 基础
 */
const base = {
    sysInfo() {
        let is_what = "";
        try {
            is_what = wx.getSystemInfoSync();
        } catch (e) {
            is_what = "";
        }
        return is_what;
    },
    /**
     *获取网络类型 
     */
    getNetType() {
        return new Promise((reslove, reject) => {
            wx.getNetworkType({
                success(res) {
                    reslove(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    },
    /**
     * 滚动
     * scrollTop    返回的位置 默认返回顶部，
     * duration     动画时间
     */
    scrollTop({
        scrollTop = 0,
        duration = 300
    } = {
        scrollTop: 0,
        duration: 300
    }) {
        return new Promise((reslove, reject) => {
            wx.pageScrollTo({
                scrollTop,
                duration,
                success(res) {
                    reslove(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    },

    setTitle(title = "首页") {
        wx.setNavigationBarTitle({
            title,
        })
    },
};

// 更新
const update = {
    update() {
        let that = this;
        let update = wx.getUpdateManager();
        update.onCheckForUpdate(function(res) {
            if (res.hasUpdate) {
                that.model({title: "检测到有新版本",content: "是否更新"})
                .then(res=>{
                    update.applyUpdate();
                }).catch(err=>{
                    that.showToast({title: "更新失败"})
                })
            }
        });
        update.onUpdateFailed(function(){
            console.log("err")
        });

        update.onUpdateReady(function(){
            console.log("success")
            wx.reLaunch({
                url: "/pages/index/index"
            }) 
        })
    }

};

// 交互
const model = {
    showToast({
        duration = 1500,
        title = "操作成功",
        icon = "none",
        image = '',
        mask = true
    } = {
        duration: 1500,
        title: "操作成功",
        icon: "none",
        image: '',
        mask: true
    }) {
        return new Promise((reslove, reject) => {
            wx.showToast({
                title,
                icon,
                image,
                duration,
                mask,
                success(res) {
                    reslove(res);
                },
                fail(err) {
                    reject(err)
                },
            })
        })
    },

    hideToast() {
        return new Promise((relove, reject) => {
            wx.hideToast({
                success(res) {
                    reslove(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    },

    showLoading({
        title = "加载中",
        mask = true
    } = {
        title: "加载中",
        mask: true
    }) {
        return new Promise((reslove, relect) => {
            wx.showLoading({
                title,
                mark,
                success() {
                    reslove()
                },
                fail() {
                    reject()
                }
            })
        })
    },


    hideLoading() {
        return new Promise((reslove, reject) => {
            wx.hideLoading({
                success(res) {
                    reslove(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    },

    model({
        title,
        content,
        showCancel = true,
        cancelText = "取消",
        cancelColor = "cancelColor",
        confirmText = "确定",
        confirmColor = "#576B95"
    } = {
            showCancel: true,
            cancelText: "取消",
            cancelColor: "#b2b2b2",
            confirmText: "确定",
            confirmColor: "#576B95"
        }) {
        return new Promise((reslove, reject) => {
            if (!title || !content){
                reject({msg: "参数错误"})
            }else{
                wx.showModal({
                    title,
                    content,
                    showCancel,
                    cancelText,
                    cancelColor,
                    confirmText,
                    confirmColor,
                    success(res){
                        if(res.confirm){
                            reslove()
                        }
                        else{
                            reject()
                        }
                    },
                    fail(err){
                        reject(err)
                    }
                })
            }
            
        })
    }
}

// 缓存
const storage = {

    /**
     *  getItemSync 获取缓存
     *  getItem     获取缓存
     *  setItemSync 设置缓存
     *  setItem     设置缓存
     */
    getItemSync(key) {
        let is_what = "";
        try {
            is_what = wx.getStorageSync(key);
        } catch (e) {
            is_what = false
        }

        return is_what;
    },

    getItem(key) {
        return new Promise((reslove, reject) => {
            wx.getStorage({
                success(res) {
                    reslove(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    },

    setItemSync(key, data) {
        wx.setStorageSync(key, data);
    },

    setItem(key, data) {
        return new Promise((reslove, reject) => {
            wx.setStorage({
                key: key,
                data: data,
                success(res) {
                    reslove(res);
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    },

    removeItem(key) {
        return new Promise((reslove, reject) => {
            wx.removeStorage({
                key,
                success(res) {
                    reslove(res);
                },
                fail(err) {
                    reject(err);
                }
            })
        })
    },

    removeItemSync(key) {
        let is_what = true;
        try {
            wx.removeStorageSync(key);
        } catch (e) {
            is_what = false;
        }
        return is_what;
    },

    clearItem() {
        return new Promise((reslove, reject) => {
            wx.clearStorage({
                success(res) {
                    reslove(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
    },

    clearItemSync() {
        let is_what = true;
        try {
            wx.clearStorageSync()
        } catch (e) {
            is_what = false;
        }
        return is_what;
    },
}

// 路由
const nav = {
    back(delta = 1) {
        return new Promise((reslove, reject) => {
            wx.navigateBack({
                delta,
                success(res) {
                    reslove(res)
                },
                fail(err) {
                    reject(err);
                }
            })
        })
    }
}
let sysApi = {};

sysApi = Object.assign({}, base, model, storage, nav, update);

export {
    sysApi
}