const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(arrayItems == null || arrayItems == undefined){
    return undefined
  }else if(rowsPerPage == null || rowsPerPage == undefined){
    return 1
  }else {return Math.ceil(arrayItems.length/rowsPerPage)}
}
module.exports = totalPages

console.log(totalPages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],10))
