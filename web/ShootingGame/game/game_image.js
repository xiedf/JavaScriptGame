/**
 * Created by Administrator on 2017/9/8 0008.
 */
class GameImage{
    constructor(game, name){
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
    }
    static new(game, name){
        var i = new this(game, name)
        return i
    }
    draw(){}
    update(){}
}
//逻辑上来说不应该继承gameImage,而是组合
// class Player extends GameImage{
//     constructor(game, name){
//         super(game, name)
//     }
// }