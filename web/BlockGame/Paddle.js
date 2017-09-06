/**
 * Created by Administrator on 2017/9/4 0004.
 */
var Paddle = function (game) {
    var o = game.imageByName('rectangle')
    o.x = 40
    o.y = 240
    o.speed = 1
    var paddle = o
    o.moveLeft = function () {
        if(paddle.x > 0){
            paddle.x -= paddle.speed
        }
    }
    o.moveRight = function () {
        if(paddle.x + o.image.width < 400){
            paddle.x += paddle.speed
        }
    }
    var aInb = function (x, x1, x2) {
        return x >= x1 && x <= x2
    }
    o.collide = function (object) {
        var a = o
        var b = object
        if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
    return o
}