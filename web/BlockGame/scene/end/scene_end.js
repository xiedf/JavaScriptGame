/**
 * Created by Administrator on 2017/9/7 0007.
 */
class SceneEnd extends GameScene{
    constructor(game){
        super(game)
        game.registerAction('r', function () {
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }
    draw(){
        this.game.context.fillText('over，按r重玩', 100, 190)

    }

}