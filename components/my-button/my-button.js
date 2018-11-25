// plugin/components/my-button/my-button.js
Component({
  properties: {
    type: {
      type: String,
      value: "default"
    },
    padding: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: "确定"
    },
    size: {
      type: String,
      value: "large"
    },

    round: {
      type: Boolean,
      value: false,
    },

    disabled: {
      type: Boolean,
      value: false,
    },

    loading: {
      type: Boolean,
      value: false // 名称前是否带 loading 图标
    },
    plain: {
      type: Boolean,
      value: false // 按钮是否镂空，背景色透明
    },
    color: {
      type: String
    },
    border: {
      type: String
    }
  },


  data: {
  },
  methods: {
    onSubmit(e){
      let detail = event.detail
      let option = {}
      this.triggerEvent('submit', detail, option)
    },
    btnClick(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('click', detail, option);
    },
    getUserInfo(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('getuserinfo', detail, option);
    },
    onContact(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('contact', detail, option);
    },
    getPhoneNumber(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('getphonenumber', detail, option);
    },
    onError(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('errror', detail, option);
    }
  }
})
