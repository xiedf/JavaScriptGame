/**
 * Created by Administrator on 2017/9/7 0007.
 */
class GameScene {
    constructor(game){
        this.game = game
    }
    draw(){

    }
    static new(game){
        var instnace = new this(game)
        return instnace
    }

    update(){

    }
}

class SceneTitle extends GameScene{
    constructor(game){
        super(game)
        game.registerAction('k', function () {
            var s = Scene(game)
            game.replaceScene(s)
        })
    }
    draw(){
        //draw labels
        this.game.context.fillText('按k开始游戏', 100, 190)
    }
    update(){}
}