function deepCopy(source){
    //判断传入进来的对象的类型是不是 object
    if(!source || typeof source !== 'object'){
        throw new Error('error');
    }
    // 创建一个开关的变量
    var targetObj = source.constructor === Array ? [] : {};
    //便利对象当中的每一项属性值
    for(var keys in source){
        //判断这个对象是否有自己的属性值，会查找一个对象是否有自己的属性，不会到prototype上面去找
        if(source.hasOwnProperty(keys)){
            //判断为对象进行的一步操作
            if(source[keys] && typeof source[keys] === 'object'){
                targetObj[keys] = source[keys].constructor === Array ? [] : {};
                //将对象解开 进行递归
                targetObj[keys] = deepCopy(source[keys]);
            }else{
                //数组的话直接进行赋值
                targetObj[keys] = source[keys];
            }
        }
    }
    //返回一个 对象
    return targetObj;
}
let obj1 = {
    arr: [1, 2, 3],
    key: {
        id: 22
    },
    func: function() {
        console.log(123)
    }
}
let obj2 = deepCopy(obj1)
console.log(obj2)