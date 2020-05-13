// //队列的数组实现方式

class Queue{
    constructor(){
        this.item = []
    }

    //往队列最后面添加一个元素
    enqueue(element){
        this.item.push(element)
    }
    //在数组最开头处删除一个元素
    dequeue(){
        return this.item.shift()
    }
    front(){
        if(this.isEmpty()) return null;
        return this.item[0]
    }

    isEmpty(){
        return this.item.length === 0
    }

    size(){
        return this.item.length
    }

}


// const queue = new Queue()

// queue.enqueue('123')
// queue.enqueue('213')
// queue.enqueue('321')
// console.log(queue.item)
// queue.dequeue()
// console.log(queue.item)
// console.log(queue.isEmpty())
// console.log(queue.size())

// function passGame(nameList,num){
//     // 创建一个队列
//     const queue = new Queue()
//     // 将元素加入到队列中
//     for(let i=0;i<nameList.length;i++){
//         queue.enqueue(nameList[i])
//     }
//     while(queue.size() > 1){
//         for(let i=0;i<num-1;i++){
//             queue.enqueue(queue.dequeue())
//         }
//         queue.dequeue()
//         // console.log(queue.dequeue())
//     }

//     return queue.front()
// }

function passGame(nameList,num){
    const queue = new Queue()
    for(let i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i])
    }
    while(queue.size() > 1){
        for(let i=0;i<num-1;i++){
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    return queue.front()
}

console.log(passGame(['兵兵','乾坤','豆豆','五六七'],4))


//优先级队列

// class QueueElement{
//     constructor(element,proirity){
//         this.element = element
//         this.proirity = proirity
//     }
// }

// class PriorityQueue extends Queue{
//     enqueue(element,proirity){

//         // 1 创建优先级对象
//         const queueElement = new QueueElement(element,proirity);
        
//         if(this.isEmpty()){
//             this.item.push(queueElement)
//         }else{
//             //标记 没有加过的元素
//             let added = false
//             for(let i=0;i<this.item.length;i++){

//                 if(this.item[i].proirity > queueElement.proirity){
//                     this.item.splice(i,0,queueElement)
//                     //标记没有加过的元素
//                     added = true
//                     break;
//                 }

//             }
//             // 没加过的push到数组中
//             if(!added){
//                 this.item.push(queueElement)
//             }
//         }
//     }
// }

// const aqueue = new PriorityQueue()
// aqueue.enqueue('兵兵',40)
// aqueue.enqueue('点点',80)
// aqueue.enqueue('乾坤',20)
// aqueue.enqueue('靓仔',90)
// aqueue.enqueue('豆豆',30)

// aqueue.item.forEach(item=>{
//     console.log(item)
// })


// class Queue{
//     constructor(){
//         this.item = []
//     }
//     enqueue(element){
//         this.item.push(element)
//     }
//     dequeue(){
//         return this.item.pop()
//     }
//     //look first element
//     front(){
//         if(this.isEmpty()) return null
//         return this.item[0]
//     }
//     isEmpty(){
//         return this.item.length === 0
//     }
//     size(){
//         return this.item.length
//     }
// }

// const queue = new Queue()
// queue.enqueue('123')
// queue.enqueue('321')
// queue.enqueue('213')
// queue.dequeue()
// console.log(queue.front())
// console.log(queue.size())

class QueueElement{
    constructor(element,proirity){
        this.element = element
        this.proirity = proirity
    }
}

class PriorityQueue extends Queue{
    enqueue(element,proirity){
        //创建一个优先级对象
        const queueElement = new QueueElement(element,proirity);

        if(this.isEmpty()){
            this.item.push(queueElement)
        }else{
            let added = false
            for(let i=0;i<this.item.length;i++){
                if(this.item[i].proirity > queueElement.proirity){
                    this.item.splice(i,0,queueElement)
                    added = true
                    break;
                }
            }
            //标记过的直接push到数组中
            if(!added){
                this.item.push(queueElement)
            }
        }
    }
}

const proirity = new PriorityQueue()

proirity.enqueue('工作',30)
proirity.enqueue('吃饭',150)
proirity.enqueue('学习',10)

proirity.item.forEach(item=>{
    console.log(item)
})