/**
 * Created by Administrator on 2017/9/4 0004.
 */
var Paddle = function () {
    var image = imageFromPath('BlockGame/img/rectangle.png')
    var o = {
        image: image,
        x: 40,
        y: 240,
        speed: 1,
    }
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
    o.collide = function (object) {
        if (object.y + object.image.height > o.y){
            if (object.x > o.x && object.x < o.image.width + o.x){
                return true
            }
        }
        return false
    }
    return o
}