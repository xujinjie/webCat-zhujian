Component({
    properties: {
        options: {
            type: Array
        },
        key: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: "请选择"
        }
    },
    data: {
        selectOptions: [],
        current: 0,
        selectData: [],
        isComplete: false
    },
    ready() {
        this.$popup = this.selectComponent('.popup')
        this._init()
    },
    methods: {
        show() {
            this.$popup.showPopup()
        },
        hide() {
            this.$popup.hidePopup()
        },

        _init() {
            let {
                options,
                selectOptions,
                key
            } = this.data;
            // console.log(options)
            // if (key) {
            //     options.forEach((el, index) => {
            //         options[index]["label"] = options[index][key]
            //     })
            // }

            selectOptions.push(options);

            this.setData({
                selectOptions
            })
        },

        selectItemTap(e) {
            let {
                p,
                c
            } = e.currentTarget.dataset;
            let {
                selectOptions,
                current,
                selectData,
                options,
                isComplete
            } = this.data;

            
            if (selectOptions.length-1>current){
                // console.log("回溯")
                isComplete = false;
                selectOptions[p][selectData[current]["index"]]['isSelect'] = false;
                selectOptions.splice(current+1, selectOptions.length);
                selectData.splice(current,selectData.length);
            }

            let tempObj = {};

            for ( let key in selectOptions[current][c] ) {
                if (key != "list" && key != "isSelect") {
                    tempObj[key] = selectOptions[current][c][key]
                }
            }
            tempObj["index"] = c;

            if (selectOptions[current][c]["list"]) {
                // console.log(1)
                if (isComplete) {
                    // console.log(2)
                    isComplete = false
                    selectOptions[current][selectData[current]["index"]]["isSelect"] = false
                    selectOptions[current][c]["isSelect"] = true
                    selectOptions.push(selectOptions[current][c]["list"])
                    current += 1
                } else {
                    // console.log(3) 
                    isComplete = false
                    selectOptions[current][c]["isSelect"] = true
                    selectOptions.push(selectOptions[current][c]["list"])
                    current += 1
                    selectData.push(tempObj)
                }

            } else {

                if (!isComplete) {
                    //        console.log(5)
                    isComplete = true
                    selectOptions[current][c]["isSelect"] = true
                    selectData.push(tempObj)
                } else {
                    //        console.log(6)
                    selectOptions[current][selectData[current]["index"]]["isSelect"] = false
                    selectOptions[current][c]["isSelect"] = true
                    selectData[current] = tempObj
                }

                isComplete = true
            }

            this.setData({
                selectData,
                current,
                isComplete,
                selectOptions
            }, () => {
                // console.log(this.data.selectData)
                // console.log(this.data.selectOptions)
                // console.log(this.data.isComplete)
                // console.log(this.data.current)
                this.triggerEvent("change", { data: this.data.selectData, complete: this.data.isComplete})
                if (isComplete) {
                    this.triggerEvent("complete", { data: this.data.selectData, complete: this.data.isComplete })
                }
            })
        },

        tabsItemTap(e) {
            let {index} = e.currentTarget.dataset;
            this.setData({
                current: index
            })
        },

        cancel() {
            this.hide()
            this.triggerEvent("cancel", { data: this.data.selectData, complete: this.data.isComplete })
        },

        confirm() {
            if(this.data.isComplete){
                this.hide();
            }
            this.triggerEvent("confirm", { data: this.data.selectData, complete: this.data.isComplete })
        },
        // catchTouchMove(res) {
        //     return false
        // },

        swiperChange(e){
            this.setData({
                current: e.detail.current
            })
        }
    }
})