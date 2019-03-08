module.exports = {
  /**
   * name：快速排序
   * describe：首先找到数组中第一个参数为基准，遍历后面的数组，
   * 如果找到比第一个参数小的数，将这个数的下标设置为基准，一次遍历
   * 之后，可以找到数组中最小的数值下标，然后和第一个数的位置进行交换
   */
  selectedSort: function(arr) {
    for(let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[minIndex]) 
          minIndex = j
      }
      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]] // ES6变量交换
    }
    return arr
  }
}