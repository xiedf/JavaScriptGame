/**
 * Created by Administrator on 2017/9/4 0004.
 */
var Game = function (fps) {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#id-canvas');
    var context = canvas.getContext('2d');
    g.canvas = canvas
    g.context = context
    //draw
    g.drawImage = function (gameImage) {
        g.context.drawImage(gameImage.image, gameImage.x, gameImage.y)
    }
    //events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })
    //
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }
    //timer
    setInterval(function () {
        //events
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++){
            var key = actions[i]
            if (g.keydowns[key]){
                g.actions[key]()
            }
        }
        //update
        g.update()
        //clear
        context.clearRect(0, 0, canvas.width, canvas.height)
        //draw
        g.draw()
    }, 1000/fps)

    return g
}