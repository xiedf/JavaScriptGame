/**
 * Created by Administrator on 2017/9/4 0004.
 */
var Brick = function (position, height) {
    //position = 砖块横向位置
    var image = imageFromPath('BlockGame/img/brick.png')
    var o = {
        image: image,
        x: position * 73,
        y: height * 27,
        width: 73,
        h: 27,
        alive: true,
        lives: 3,
    }

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