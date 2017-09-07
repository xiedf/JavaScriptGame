/**
 * Created by Administrator on 2017/9/4 0004.
 */
var Game = function (images, runCallback) {
    //images是一个对象，里面是所有图片的名字和路径
    //程序会在所有图片载入之后运行

    var g = {
        scene: null,
        actions: {},
        keydowns: {},
        images: {},
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
    //update
    g.update = function () {
        g.scene.update()
    }
    //draw
    g.draw = function () {
        g.scene.draw()
    }
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }
    //timer
    var runloop = function () {
        log(window.fps)
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
        setTimeout(function () {
            runloop()
        }, 1000/window.fps)
    }

    var loads = []
    //load all image
    var names = Object.keys(images)
    for(var i = 0; i < names.length; i++){
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function () {
            //存入g.images中
            g.images[name] = img
            //所有图片都载入成功之后,调用run
            loads.push(1)
            log('load images')
            if (loads.length == names.length){
                g.__start()
            }
        }
    }
    g.imageByName = function (name) {
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    g.runWithScene = function (scene) {
        g.scene = scene
        //开始运行
        setTimeout(function () {
            runloop()
        }, 1000/window.fps)
    }
    g.replaceScene = function (scene) {
        g.scene = scene
    }
    g.__start = function (scene) {
        runCallback(g)
    }

    return g
}