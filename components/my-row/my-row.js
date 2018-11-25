
Component({
  options: {
    multipleSlots: true 
  },
  relations: {
    '../my-col/my-col': {
      type: 'child' 
    }
  },
  properties: {
    gutter: {
      type: Number
    },
    bottom: {
      type: Number
    }
  },
  data: {
    
  }

})

