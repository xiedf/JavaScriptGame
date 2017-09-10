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
        for (var i = 0; i < this.elements.length; i++){
            var e = this.elements[i]
            // this.game.drawImage(e)
            e.draw()
        }
    }
    static new(game){
        var instnace = new this(game)
        return instnace
    }
    addElement(image){
        image.scene = this
        this.elements.push(image)
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

