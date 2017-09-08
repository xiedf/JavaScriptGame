/**
 * Created by Administrator on 2017/9/4 0004.
 */
var enableDebugMode = function (game, enable) {
    if(!enable){
        return
    }
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if(k == 'p'){
            window.paused = !window.paused
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
        bullet: 'ShootingGame/img/bullet2.png',
        cloud: 'ShootingGame/img/cloud1.png',
        player: 'ShootingGame/img/player.png',
        sky: 'ShootingGame/img/sky.jpg',
    }
    var game = Game.instance(150, images, function (g) {
        var s = Scene.new(g)
        g.runWithScene(s)
        // log('main')
    })
    enableDebugMode(game, true)
}

main()