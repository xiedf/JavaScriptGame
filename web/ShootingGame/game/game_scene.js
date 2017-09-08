/**
 * Created by Administrator on 2017/9/7 0007.
 */
class GameScene {
    constructor(game){
        this.game = game
        this.elements = []
    }
    draw(){

    }
    static new(game){
        var instnace = new this(game)
        return instnace
    }
    addElement(gameImage){
        this.elements.push(gameImage)
    }
    update(){

    }
}

