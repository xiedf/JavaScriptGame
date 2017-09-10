/**
 * Created by Administrator on 2017/9/7 0007.
 */
class GameLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
    }
    static new(game, text) {
        return new this(game, text)
    }
    draw() {
        // log('draw label', this.game, this.text)
        this.game.context.fillText(this.text, 100, 190)
    }
    update() {
        // log('update label', this.game, this.text)
    }
}

class SceneTitle extends GameScene{
    constructor(game){
        super(game)
        var label = GameLabel.new(game, 'hello')
        this.addElement(label)

        var ps = GameParticleSystem.new(game)
        log(ps)
        this.addElement(ps)

        game.registerAction('k', function () {
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }
    draw(){
        super.draw()
        //draw labels

    }
    update(){
        super.update()
    }
}