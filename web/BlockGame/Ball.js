/**
 * Created by Administrator on 2017/9/4 0004.
 */
var Ball = function (game) {
    var o = game.imageByName('ball')
    o.x = 140
    o.y = 200
    o.speedX = 2
    o.speedY = 2
    o.fired = false
    o.crashed = false
    o.move = function () {
        if(o.fired){
            if(o.x < 0 || o.x > 400 - o.image.width){
                o.speedX *= -1
            }
            if(o.y < 0 || o.y > 300 - o.image.height){
                o.speedY *= -1
            }
            //move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.rebound = function () {
        o.speedY *= -1
    }
    o.fire = function () {
        o.fired = true
    }
    o.crash = function () {
        o.crashed = true
    }
    o.refresh = function () {
        o.crashed = false
    }
    return o
}