/**
 * Created by Administrator on 2017/9/4 0004.
 */
var Brick = function (game, position, height) {
    //position = 砖块横向位置
    var image = game.imageByName('brick')
    var o = {
        x: position * 73,
        y: height * 27,
        alive: true,
        lives: 3,
    }
    o.image = image.image
    o.w = image.w
    o.h = image.h


    o.collide = function (ball) {
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }

    o.break = function () {
        o.lives--
        if(o.lives < 1){
            o.alive = false
        }
    }
    return o
}