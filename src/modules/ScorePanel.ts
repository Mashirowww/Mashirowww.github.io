class ScorePanel {
    score = 0;
    level = 1;

    //分数和等级所在的元素, 在构造函数中进行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    upScore: number;
    constructor(maxLevel:number=10,upScore:number = 5) {//不传参就默认值
        this.scoreEle = document.getElementById('scoredetail')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;//控制最高等级
        this.upScore = upScore;//控制每X分升一级
    }

    //设置一个加分的方法
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        if(this.score%this.upScore==0){
            this.levelUp();
        }
    }
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }
    }
}
export default ScorePanel;