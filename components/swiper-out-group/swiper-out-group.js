// components/swiper-out-group/swiper-out-group.js
Component({
        /**
         * 组件的属性列表
         */
        relations: {
                '../swiper-out/swiper-out': {
                        type: 'child',
                        linked(target) {
                               this.data.children = this. _getChildren()
                        },
                        unlinked(target) {
                                this.data.children = this._getChildren()
                                this.data.children.forEach((el,index)=>{
                                        el._init()
                                })
                        }
                },
             
        },
        properties: {
                accordion: {
                        type: Boolean,
                        value: true
                }
        },

        /**
         * 组件的初始数据
         */
        data: {

        },

        ready(){
               this.data.children = this._getChildren()
        },
        methods: {
                _getChildren() {
                        return this.getRelationNodes('../swiper-out/swiper-out')
                }
        }
})
