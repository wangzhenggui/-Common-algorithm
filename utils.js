module.exports = {
  /**
   * 随机生成一个数组
   * @param {*} 数组长度 
   * @param {*} 数组开始范围 
   * @param {*} 数组结束范围 
   */
  sortTestRandomArray: function(n, min, max) {
    let arr = [];
    for(let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return arr;
  }
}