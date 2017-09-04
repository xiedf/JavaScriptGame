/**
 * Created by Administrator on 2017/9/4 0004.
 */
var Brick = function () {
    var image = imageFromPath('BlockGame/img/brick.png')
    var o = {
        image: image,
        x: 0,
        y: 0,
        width: 73,
        h: 27,
        alive: true
    }

    o.collide = function (ball) {
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }

    o.break = function () {
        o.alive = false
    }
    return o
}