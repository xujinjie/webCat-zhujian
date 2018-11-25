// plugin/components/my-counter/my-counter.js
Component({
        /**
         * 组件的属性列表
         */
        properties: {
                color: {
                        type: String,
                        value: '#ff5777'
                },
                number: {
                        type: [Number, String],
                        value: 0,
                        observer(newVal) {
                                this.setData({
                                        number: parseInt(newVal, 10)
                                });
                        }
                },
                max: {
                        type: [Number, String],
                        value: 99,
                        observer(newVal) {
                                this.setData({
                                        max: parseInt(newVal, 10)
                                });
                        }
                },
                min: {
                        type: [Number, String],
                        value: 0,
                        observer(newVal) {
                                this.setData({
                                        min: parseInt(newVal, 10)
                                });
                        }
                },
                disabled: {
                        type: Boolean,
                        value: false
                },
                step: {
                        type: [Number, String],
                        value: 1
                }
        },

        data: {

        },

        methods: {
                addHandler(e) {
                        let min = this.data.min
                        let max = this.data.max
                        let disabled = this.data.disabled
                        let step = parseInt(this.data.step)
                        if (max <= this.data.number || disabled) return
                        this.setData({
                                number: this.data.number + step
                        });
                        this.triggerEvent('change', {
                                e,
                                currentCount: this.data.number,
                                min,
                                max,
                                type: 'add'
                        })
                },
                minusHandler(e) {
                        let min = this.data.min
                        let max = this.data.max
                        let disabled = this.data.disabled
                        let step = parseInt(this.data.step)
                        if (min >= this.data.number || disabled) return
                        this.setData({
                                number: this.data.number - step
                        });
                        this.triggerEvent('change', {
                                e,
                                currentCount: this.data.number,
                                min,
                                max,
                                type: 'minus'
                        });
                }
        }
})