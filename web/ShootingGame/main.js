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
        enemy0: 'ShootingGame/img/npc0.png',
        enemy1: 'ShootingGame/img/npc1.png',
        enemy2: 'ShootingGame/img/npc2.png',
        enemy3: 'ShootingGame/img/npc3.png',
        enemy4: 'ShootingGame/img/npc4.png',

        sky: 'ShootingGame/img/sky.jpg',
    }
    var game = Game.instance(30, images, function (g) {
        var s = Scene.new(g)
        g.runWithScene(s)
        // log('main')
    })
    enableDebugMode(game, true)
}

main()