var that;
class Tab{
    constructor(id){
        that = this
        //1获取元素
        this.main = document.querySelector(id)
        //li的父元素
        this.ul = this.main.querySelector('.first_nav ul:first-child')
        this.lis = this.main.querySelectorAll('li')
        //获取section的父元素
        this.content = this.main.querySelector('.content')
        this.sections = this.main.querySelectorAll('section')
        this.add = this.main.querySelector('.addBtn')
        this.remove = this.main.querySelectorAll('.iconfont')
        this.init()
    }
    //  初始化绑定事件
    init(){
        //获取到更新的元素,遍历绑定事件
        this.update()
        this.add.onclick = this.addTab
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab
        }
    }
    //获取后来添加的元素
    update(){
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.iconfont')
        this.spans = this.main.querySelectorAll('.first_nav li span:first-child')
        this.input = this.main.querySelectorAll('.first_nav input')
    }
    //  切换
    toggleTab(){
        that.clearClass()
        this.className = 'active';
        that.sections[this.index].className = 'content_active';
    }
    clearClass(){
       for(let i=0;i<this.lis.length;i++){
        this.lis[i].className = '';
        that.sections[i].className = '';
       }
    }
    //  添加
    addTab(){
        that.clearClass()
        let random = Math.random()
        //创建新的 li 和 新的section
        let li = '<li class="active">测试'+ random +'<span class="iconfont icondashujukeshihuaico-"></span></li>';
        let section = '<section class="content_active">内容 '+random +'</section>';
        //添加到对应的父容器里面
        that.ul.insertAdjacentHTML('beforeEnd',li)
        that.content.insertAdjacentHTML('beforeEnd',section)
        //createElement 动态创建元素,当元素内容较多是,需要用innerHTML来赋值,最后添加到父容器当中
        //insertAdjacentHTML() 可以直接把字符串格式的元素直接添加到父容器当中
        that.init()
    }
    //删除
    removeTab(e){
        e.stopPropagation();
        let index = this.parentNode.index
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        //如果删除的不是选定状态的 li 原来的li保持不变
        if (document.querySelector('.active')) 
        //删除完元素 下标发生了变化
        index--;
        //判断前面是否有这个值,再执行点击事件
        that.lis[index] && that.lis[index].click()
    }
    //双击添加文字
    editTab(){
        let that = this
        let str = this.innerHTML;

        window.getSelection?window.getSelection().removeAllRanges:document.selection.empty();
        // this.innerHTML = '"'
        this.innerHTML = '<input type="text" />'

        let input = this.children[0] //获取span 的第一个子节点
        
        input.value = str
        //选中文本框中的文字
        input.select()

        input.onblur = function(){
            that.innerHTML = this.value
        }

        input.onkeyup = function(e){
            if(e.keyCode===13) {
                this.blur()
            }
        }


    }

}
new Tab('#tab')