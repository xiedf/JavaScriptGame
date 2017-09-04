/**
 * Created by Administrator on 2017/9/4 0004.
 */
var Ball = function () {
    var image = imageFromPath('BlockGame/img/ball.png')
    var o = {
        image: image,
        x: 140,
        y: 200,
        speedX: 2,
        speedY: 2,
        fired: false,
        crashed: false,
    }
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