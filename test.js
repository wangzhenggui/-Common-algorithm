const Utils = require('./utils')
const Sort = require('./sort')
const randomArr = Utils.sortTestRandomArray(10,0,20) 
console.log(randomArr) // 随机数组
console.log(Sort.selectedSort(randomArr)) // 快速排序