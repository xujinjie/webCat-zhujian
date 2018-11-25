// plugin/components/my-collapse/my-collapse.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  relations: {
    '../my-collapse-item/my-collapse-item': {
      type: 'child',
    }
  },
  properties: {
    accordion: {
      type: Boolean,
      value: true
    }
  },


  data: {
    childrens: []
  },

  methods: {
    _getAllLi: function () {
      // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
      return this.getRelationNodes('../my-collapse-item/my-collapse-item')
    }
  },

  ready: function () {
    this.data.childrens = this._getAllLi()
  }

})
