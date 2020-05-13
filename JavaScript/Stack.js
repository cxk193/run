/**
 * 数组实现 Stack 的封装
 */

    class Stack {
    constructor (){
        this.item = []
    }
    //push一个元素压入到栈顶
    push(element){
        this.item.push(element)
    }
    //移除栈顶元素
    pop(){
        return this.item.pop()
    }
    //返回栈顶元素
    peek(){
        return this.item[this.item.length - 1]
    }
    //判断栈元素是否为空 返回一个布尔值
    isEmpty(){
        return this.item.length === 0
    }
    //返回栈里元素的个数
    size(){
        return this.item.length
    }
}

// const stack = new Stack()

// stack.push('abc')
// stack.push('bac')
// stack.push('bca')
// stack.pop()
// console.log(stack.item)
// console.log(stack.size())
// console.log(stack.isEmpty())
// console.log(stack.peek())


// 十进制转二进制
/*
    100
    计算100/2 余数 0
    计算50/2  余数 0
    计算25/2  余数 1
    计算12/2  余数 0
    计算6/2   余数 0
    计算3/2   余数 1
    计算1/2   余数 1
    二进制 : 1100100 除以二 的余数从下往上
*/
    //十进制转二进制
    function decToBin(num){
        const stack = new Stack();

        while(num>0){
            let reminder = num%2;
            num = Math.floor(num/2);
            stack.push(reminder);
        }

        var binString = '';
        while(!stack.isEmpty()){
            binString += stack.pop()
        }
        console.log(binString)
        return binString
    }

    decToBin(10)
    decToBin(100)
    decToBin(1000)
    
    // console.log(decToBin(100))
    // console.log(decToBin(1000))
