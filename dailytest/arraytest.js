/* 题目链接：https://www.jianshu.com/p/4f40599c7174 */
/* 第一题 */
function filterAdult(array){
    return array.filter(function(item,index,array){
        return (item.age >18); 
    });
};
/* var newone = filterAdult([
    {age: 19, name:'Jack'},
    {age: 5, name:'Apple'},
    {age: 12, name:'Lynn'},
    {age: 25, name:'David'}
]); */
//console.log(newone);

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
//console.log(isAllNumPosive([1, 2, 3, 4, 'a', {a:3},[1,2]]));

/* 第三题 */
/* var arr = [1, 2, 3, 4];
putFirst(arr, 2); */

function putFirst(array,index){
    var cut = array.splice(index,1);
    array.unshift(cut[0]);
    console.log(array);
};


/* 第四题
一个知识点
1、arguments对象的认知，区分它是对象还是数组 */
/* (function(){
    var arr = toArray(arguments);
    console.log(Array.isArray(arr)); // 输出 ture
})(1, 2);
 */
function toArray(a){
    var Rarray = [];
    for(key in a){
        Rarray[Number(key)] = a[key]; 
    };
    return Rarray;
}

/* 第五题 
利用外层函数包裹，保证了自调用的模块干净，console.log不会影响核心逻辑
*/
//sum([1, 2, 3, 4]);  // 输出 10 
//sum(['a', 1, 2, {a:3}, 3, 4, 1.2,[1,2,3]]);  // 输出 11.2

function sum(array){
function sums(array){
    array.unshift(0);   //人为插入第一项  
     return array.reduce(function(prev,cur,index,array){
        switch(typeof cur){
            case 'number': return prev+cur; 
            case 'string': return prev;
            case 'object':
            if(Array.isArray(cur)){
                return sums(cur)+prev;
            };
            for(key in cur){
                if(typeof cur[key] == 'number'){
                    return prev+cur[key];
                };
            };
            default : return prev;
        };
    });
}
console.log(sums(array));
}


/* 第六题 */
/* sortAge([
    {age: 19, name:'Jack'},
    {age: 5, name:'Apple'},
    {age: 12, name:'Lynn'},
    {age: 25, name:'David'}
]); */
/* // 输出
[
    {age: 5, name:'Apple'},
    {age: 12, name:'Lynn'},
    {age: 19, name:'Jack'},
    {age: 25, name:'David'}
] */
function sortAge(array){
    var resultArray = [];
    resultArray = array.sort(function(item1,item2){
    return item1.age-item2.age;
});
console.log(resultArray);
};


/* 第七题
考察了数组去重的方法
利用indexOf方法返回-1判断值是否存在
 */
//uniq([1,2,2,3,4,4,4,4]); // 输出 [1,2,3,4]
//uniq([1,2,'M','e','r', 'r', 'y']); // 输出 [1,2,'M','e','r','y']
function uniq(array){
    var resultArray = [];
    for(var i=0;i<array.length;i++){
        if(resultArray.indexOf(array[i]) == -1){
            resultArray.push(array[i]);
        };
    };
    console.log(resultArray);
}
/* 第八题 
考察的点有两个
1、产生范围内随机数的方法
2、切除方法splice
*/
//random([1,2,3,4]); // 输出的可能是 [1,2,3,4] 或 [1,3,4,2] 或 [3,4,1,2] 等等随机可能
function random(array){
    var resultArray = [];
    var numb = null;
    var takeitem = null;
    var length = array.length;
    for(var i=0;i<length;i++){
        numb = Math.floor(Math.random()*array.length+0);
        takeitem = array.splice(numb,1)[0];
        resultArray.push(takeitem);
    };
    console.log(resultArray);
}