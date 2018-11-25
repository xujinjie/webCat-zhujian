// plugin/components/my-input/my-input.js
Component({
        /**
         * 组件的属性列表
         */
        properties: {
                title: {
                        type: [String, Number],
                        value: ''
                },
                src: {
                        type: String,
                        value: ''
                },
                icon: {
                        type: Object,
                        observer(newVal){
                                if (!newVal.size){
                                        newVal.size = 40
                                }
                                if(!newVal.color){
                                        newVal.color = "#333"
                                }
                        }
                },
                right: {
                        type: Boolean,
                        value: false // 输入框是否居右显示
                },
                value: {
                        type: [String, Number],
                        value: ''
                },
                focus: {
                        type: Boolean,
                        value: false
                },
                type: {
                        type: String,
                        value: 'text'
                },
                password: {
                        type: Boolean,
                        value: false
                },
                placeholder: {
                        type: String,
                        value: ''
                },
                placeholderStyle: {
                        type: String,
                        value: ''
                },
                disabled: {
                        type: Boolean,
                        value: false
                },
                maxlength: {
                        type: [Number, String],
                        value: 140
                },
                cursorSpacing: {
                        type: [Number, String],
                        value: 0
                },
                confirmType: {
                        type: String,
                        value: 'done'
                },
                confirmHold: {
                        type: Boolean,
                        value: false
                },
                cursor: {
                        type: [Number, String],
                        value: 0
                },
                selectionStart: {
                        type: [Number, String],
                        value: -1
                },
                selectionEnd: {
                        type: [Number, String],
                        value: -1
                },
                adjustPosition: {
                        type: Boolean,
                        value: true
                },
                mode: {
                        type: String,
                        value: 'wrapped' // 输入框的模式选择，可选值：wrapped，有边框包裹, normal，只有下边框，none，无边框
                },
                borderColor: {
                        type: String,
                        value: "#e5e5e5"
                },
                deleteIcon: {
                        type: Boolean,
                        value: true
                }
        },

        /**
         * 组件的初始数据
         */
        data: {
                isShowDelete: false,
                value: ""
        },
        attached() {
                this.checkValue()
        },
        /**
         * 组件的方法列表
         */
        methods: {
                onInput(event) {
                        let detail = event.detail
                        let len = detail.value.length

                        this.setData({
                                value: detail.value,
                        })
                        this.checkValue()

                        this.triggerEvent('input', detail)
                },

                onFocus(event) {
                        this.checkValue()
                        let detail = event.detail
                        this.triggerEvent('focus', detail)
                },

                onBlur(event) {
                        this.checkValue()
                        let detail = event.detail
                        this.triggerEvent('blur', detail)
                },
                onConfirm(event) {
                        let detail = event.detail
                        this.triggerEvent('confirm', detail)
                },


                clearInput() {
                        this.setData({
                                value: "",
                                isShowDelete: false
                        })
                        let detail = {
                                value: "",
                                cursor: 0
                        }
                        this.triggerEvent('input', detail)
                },

                checkValue() {
                        if (this.data.value) {
                                this.setData({
                                        isShowDelete: true
                                })
                        } else {
                                this.setData({
                                        isShowDelete: false
                                })
                        }
                }
        }
})