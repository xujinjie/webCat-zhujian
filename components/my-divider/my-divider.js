// components/my-divider/my-divider.js
Component({
        properties: {
                icon: {
                        type: String
                },
                title: {
                        type: String
                },
                textColor: {
                        type: String,
                        value: "#409EFF"
                },
                lineColor: {
                        type: String,
                        value: "red"
                },
                padding: {
                        type: Number,
                        value: 10
                },
                size: {
                        type: String,
                        value: 24
                }
        }
})