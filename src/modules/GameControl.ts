import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorepanel: ScorePanel;
    derection: string = 'ArrowRight';
    Live = true;//是否游戏结束
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new ScorePanel();
        this.init();
    }
    //初始化
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))//改this指向
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {//按键方法
        //检查按键是否合法
        this.derection = event.key;

    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.derection) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;

            case "ArrowDown":
            case "Down":
                Y += 10;
                break;

            case "ArrowLeft":
            case "Left":
                X -= 10
                break;

            case "ArrowRight":
            case "Right":
                X += 10;
                break;

        }

        if (this.checkEat(X, Y)) { //判断
            console.log('吃到食物了')
            this.food.changePlace();
            this.scorepanel.addScore();
            this.snake.addBody();
        };
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e + '!你的得分是' + this.scorepanel.score);
            this.Live = false;
        }
        this.Live && setTimeout(() => {
            this.run();
        }, 80 - (this.scorepanel.level - 1) * 8);
    }

    checkEat(X: number, Y: number) { //判断吃食
        return X === this.food.X && Y === this.food.Y
    }
}

export default GameControl;