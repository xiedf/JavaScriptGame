/**
 * Created by Administrator on 2017/9/4 0004.
 */
class Game{
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas');
        this.context = this.canvas.getContext('2d');
        //events
        var self = this
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = false
        })
        this.init()
    }
    static instance(...args){
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(gameImage){
        this.context.drawImage(gameImage.image, gameImage.x, gameImage.y)
    }
    update(){
        this.scene.update()
    }
    //draw
    draw(){
        this.scene.draw()
    }
    registerAction(key, callback){
        this.actions[key] = callback
    }
    runloop(){
        log(window.fps)
        //events
        var g = this
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
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        //draw
        g.draw()
        setTimeout(function () {
            g.runloop()
        }, 1000/window.fps)
    }
    imageByName(name){
    var g = this
    var img = g.images[name]
    var image = {
        w: img.width,
        h: img.height,
        image: img,
    }
    return image
}
    init(){
        var loads = []
        //load all image
        var g = this
        var names = Object.keys(g.images)
        for(var i = 0; i < names.length; i++){
            let name = names[i]
            var path = g.images[name]
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
    }
    runWithScene(scene){
        var g = this
        g.scene = scene
        //开始运行
        setTimeout(function () {
            g.runloop()
        }, 1000/window.fps)
    }
    replaceScene(scene){
        this.scene = scene
    }
    __start(scene){
        this.runCallback(this)
    }
}
