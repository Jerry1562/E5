/* 四个知识点 
map()方法
replace(RegExp,function(match,$1,...){return string}/string)
正则表达式
大小写转换(toLowerCase,toUpperCase)
*/
function removeRotten(bagOfFruits){
    if(bagOfFruits == null){
    return [];
    }
      return bagOfFruits.map(function(item,index,array){
      return item.replace(/rotten(\w)/g,function(match,first){
        return first.toLowerCase();         
      });
  });
}
//测试
var returnArray =  removeRotten(['rottenApple'])
console.log(returnArray);

