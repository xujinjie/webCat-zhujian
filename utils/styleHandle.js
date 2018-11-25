
function styleHandle(selfFixed){
  if (selfFixed) {
    let str = ''
    if ((typeof selfFixed).toLocaleLowerCase() == "object") {
      let keysArr = Object.keys(selfFixed)
      keysArr.forEach((el) => {
        str += `${el}:${selfFixed[el]};`
      })
    }
    return str
  }
  else{
    return selfFixed
  }
}
module.exports = {
  styleHandle
}