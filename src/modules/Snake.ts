class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;//蛇的身体,包括身体.collection是一个集合,里面有很多htmlelement
    element: HTMLElement;
    constructor() {
        this.head = document.querySelector('#snake>div') as HTMLElement;//断言取到的是元素
        this.element = document.getElementById('snake')!;
        this.bodies = this.element.getElementsByTagName('div')
    }

    //获取蛇的坐标 蛇头

    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop;
    }
    //设置舌头的坐标
    set X(value) {
        if (this.X === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('游戏结束了');
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {//防止掉头
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value) {
        if (this.Y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('游戏结束了');
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {//防止掉头
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }
    //蛇增加身体的方法  
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }
    //蛇身体移动
    //将后面身体设置成前面身体的位置,从后往前动.  第三节去第二节的位置,第二节去第一节.......
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    //检查头和身体有没有相撞
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = (this.bodies[i]) as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了');
            }
        }
    }
}
export default Snake;