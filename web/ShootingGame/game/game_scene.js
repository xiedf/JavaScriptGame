/**
 * Created by Administrator on 2017/9/7 0007.
 */
class GameScene {
    constructor(game){
        this.game = game
        this.elements = []
        this.debugModeEnabled = true
    }
    draw(){
    }
    static new(game){
        var instnace = new this(game)
        return instnace
    }
    addElement(gameImage){
        gameImage.scene = this
        this.elements.push(gameImage)
    }
    update(){
        if (this.debugModeEnabled) {
            for (var i = 0; i < this.elements.length; i++){
                var e = this.elements[i]
                e.update()
            }
        }

    }
}

