/* 题目链接：https://www.jianshu.com/p/4f40599c7174 */
/* 第一题 */
function filterAdult(array){
    return array.filter(function(item,index,array){
        return (item.age >18); 
    });
};
var newone = filterAdult([
    {age: 19, name:'Jack'},
    {age: 5, name:'Apple'},
    {age: 12, name:'Lynn'},
    {age: 25, name:'David'}
]);
console.log(newone);

/* 第二题 */
/* 四个知识点
1、递归函数，怎么解耦函数名
2、使用in遍历对象的属性
3、switch语句的运用
4、typeof操作符的局限性，不能检测数组，与之对比的有instanceof,isArray */
var isAllNumPosive = (function f(array){
    return array.every(function(item,index,array){
       switch(typeof item){
           case 'string': return true;
           
           case 'number': 
           if(item>0)
            {
               return true;
            };
            return false;
            /* object常见的有对象与数组 */
            case 'object':
            if(Array.isArray(item)){
                return f(item); //递归
            }
            for(var key in item){
                if(typeof item[key] == 'number' && item[key]<0){
                    return false;
                }
                return true;
            };
            
            default:return true;
        };
    });
});
console.log(isAllNumPosive([1, 2, 3, 4, 'a', {a:3},[1,2]]));

/* 第三题 */
var arr = [1, 2, 3, 4];
putFirst(arr, 2);

function putFirst(array,index){
    var cut = array.splice(index,1);
    array.unshift(cut[0]);
};
console.log(arr);


/* 第四题
一个知识点
1、arguments对象的认知，区分它是对象还是数组 */
(function(){
    var arr = toArray(arguments);
    console.log(Array.isArray(arr)); // 输出 ture
})(1, 2);

function toArray(a){
    var Rarray = [];
    for(key in a){
        Rarray[Number(key)] = a[key]; 
    };
    return Rarray;
}