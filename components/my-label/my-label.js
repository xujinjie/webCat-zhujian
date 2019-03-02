// components/my-label/my-label.js
Component({

        properties: {
                value: {
                        type: String,
                },
                background: {
                        type: String,
                        value: "rgba(255, 127, 24, 1)"
                },
                color: {
                        type: String,
                        value: "#fff"
                },
                height: {
                        type: [String,Number],
                        value: 30
                },
                size: {
                        type: [String,Number],
                        value: 18
                }
        },
        data: {

        },
        ready(){
                this._init()
        },
        methods: {
                _init(){
                        let myStyle = ""
                        let { height, color, background,size} = this.data
                        if(!height){
                                height = 40
                        }
                        myStyle += `height: ${height}rpx;color: ${color};background: ${background};font-size: ${size}rpx;line-height: ${height}rpx;border-radius: ${height}rpx`
                        this.setData({
                                myStyle
                        })
                }
        }
})
