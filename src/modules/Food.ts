class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    changePlace() {
        //最小是0 最大时290 
        //蛇移动一格就是10 所以食物坐标要是10的整数
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
export default Food;