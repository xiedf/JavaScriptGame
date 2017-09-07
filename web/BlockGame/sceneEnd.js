/**
 * Created by Administrator on 2017/9/7 0007.
 */
var SceneEnd = function (game) {
    var s = {
        game: game,
    }

    s.draw = function () {
        //draw labels
        game.context.fillText('胜败乃兵家常事，大侠请重新来过', 100, 200)
    }
    s.update = function () {}
    //mouse event
    var enableDrag = false
    game.canvas.addEventListener('mousedown', function (event) {
        var x = event.offsetX
        var y = event.offsetY
        //检查鼠标是否点中ball
        if (ball.hasPoint(x, y)) {
            //设置拖拽状态
            enableDrag = true
        }
    })
    game.canvas.addEventListener('mousemove', function (event) {
        var x = event.offsetX
        var y = event.offsetY
        if (enableDrag) {
            log(x, y, 'drag')
            ball.x = x
            ball.y = y
        }
    })
    game.canvas.addEventListener('mouseup', function (event) {
        enableDrag = false
    })


    return s
}