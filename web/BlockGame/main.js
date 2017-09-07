/**
 * Created by Administrator on 2017/9/4 0004.
 */
var loadLevel = function (game, n) {
    n = n - 1
    var level = levels[n]
    var bricks = []
    for (var i = 0; i < level.length; i++){
        var p = level[i]
        for (var j = 0; j < 3; j++) {
            var b = Brick(game, p, j)
            bricks.push(b)
        }

    }
    return bricks
}

var enableDebugMode = function (game, enable) {
    if(!enable){
        return
    }
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if(k == 'p'){
            window.paused = !window.paused
        } else if ('12345'.includes(k)){
            bricks = loadLevel(Number(k))
        }
    })
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        log(event, input.value)
        window.fps = Number(input.value)
    })
}

var main = function () {
    var images = {
        ball: 'BlockGame/img/ball.png',
        brick: 'BlockGame/img/brick.png',
        rectangle: 'BlockGame/img/rectangle.png',
        succeed: 'BlockGame/img/succeed.png',
    }
    var game = Game.instance(150, images, function (g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)
}

main()