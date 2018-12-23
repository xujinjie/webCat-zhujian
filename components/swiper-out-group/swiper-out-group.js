// components/swiper-out-group/swiper-out-group.js
Component({
        /**
         * 组件的属性列表
         */
        relations: {
                '../swiper-out/swiper-out': {
                        type: 'child',
                        linked(target) {
                                
                        },
                        unlinked(target) {
                                this._getChildren().forEach((el)=>{
                                        console.log(el.data)
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
        data: {
                beforeActive: null
        },

        ready(){
               this.data.children = this._getChildren()
        },
        methods: {
                _getChildren() {
                        return this.getRelationNodes('../swiper-out/swiper-out')
                },

                childrenChange(index){
                       if(this.data.accordion){
                               let { beforeActive } = this.data
                               if (!index && index != 0) {
                                       beforeActive = null
                               }
                               else {
                                       this._getChildren()[index].setData({
                                               active: false,
                                               _translate: 0
                                       })
                                       beforeActive = index
                               }
                               this.setData({
                                       beforeActive
                               })
                       }
                }
        }
})
