const config = {
    player_speed: 10,
    cloud_speed: 1,
    enemy_speed: 5,
    bullet_speed: 5,
    fire_cooldown: 5,
}
const randomBetween = function (start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}

class Bullet extends GameImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        this.speed = 2
    }
    update() {
        this.speed = config.bullet_speed
        this.y -= this.speed
    }
}
class Player extends GameImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.speed = 5
        this.cooldown = 0
    }
    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }
    moveLeft() {
        if(this.x >= 0) {
            this.x -= this.speed
        }
    }
    moveRight() {
        if(this.x <= 400 - this.w) {
            this.x += this.speed
        }
    }
    moveUp() {
        if(this.y >= 0) {
            this.y -= this.speed
        }

    }
    moveDown() {
        if(this.y <= 600 - this.h) {
            this.y += this.speed
        }
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.fire_cooldown
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }

    }
}
class Enemy extends GameImage {
    constructor(game) {
        var type = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.y += this.speed
        if (this.y >= 600) {
            this.setup()
        }
    }
    moveLeft() {
        if(this.x >= 0) {
            this.x -= this.speed
        }
    }
    moveRight() {
        if(this.x <= 400 - this.w) {
            this.x += this.speed
        }
    }
    moveUp() {
        if(this.y >= 0) {
            this.y -= this.speed
        }

    }

}
class Cloud extends GameImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()
    }
    setup() {
        this.speed = config.cloud_speed
        // this.x = randomBetween(0, 350)
        // this.y = -randomBetween(0, 200)
    }
    update() {
        this.y += this.speed
        if (this.y >= 600) {
            this.setup()
        }
    }
    moveLeft() {
        if(this.x >= 0) {
            this.x -= this.speed
        }
    }
    moveRight() {
        if(this.x <= 400 - this.w) {
            this.x += this.speed
        }
    }
    moveUp() {
        if(this.y >= 0) {
            this.y -= this.speed
        }

    }

}

class Scene extends GameScene{
    constructor(game){
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup(){
        var game = this.game
        this.numberOfEnemies = 10
        this.bg = GameImage.new(game, 'sky')
        this.cloud = Cloud.new(game, 'cloud')
        this.cloud.w = 400
        this.cloud.h = 600
        this.player = Player.new(game)
        this.player.x = 150
        this.player.y = 450
        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
        //
        this.addEnemies()
        // log(this.elements)
    }
    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es

    }
    setupInputs() {
        var s = this
        var g = s.game
        g.registerAction('a', function () {
            s.player.moveLeft()
        })
        g.registerAction('d', function () {
            s.player.moveRight()
        })
        g.registerAction('w', function () {
            s.player.moveUp()
        })
        g.registerAction('s', function () {
            s.player.moveDown()
        })
        g.registerAction('j', function () {
            s.player.fire()
        })
        // g.registerAction('f', function () {
        //     s.player.fire()
        // })
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
        this.cloud.y += 1
    }
}

// var Scene = function (game) {
//     var s = {
//         game: game,
//     }
//     //init
//     var paddle = Paddle(game)
//     var ball = Ball(game)
//     var score = 0
//     var bricks = loadLevel(game, 1)
//
//     // var paused = false
//
//     game.registerAction('a', function () {
//         paddle.moveLeft()
//     })
//     game.registerAction('d', function () {
//         paddle.moveRight()
//     })
//     game.registerAction('f', function () {
//         ball.fire()
//     })
//
//     s.draw = function () {
//         //draw 背景
//         game.context.fillStyle = "white"
//         game.context.fillRect(0, 0, 400, 300)
//         //draw
//         for (var i = 0; i < bricks.length; i++){
//             if (bricks[i].alive){
//                 break;
//             }
//         }
//
//         game.drawImage(paddle)
//         game.drawImage(ball)
//
//         for (var i = 0; i < bricks.length; i++){
//             var brick = bricks[i]
//             if(brick.alive){
//                 game.drawImage(brick)
//             }
//         }
//         //draw labels
//         game.context.fillText('score:' + score, 10, 270)
//     }
//     s.update = function () {
//         if (window.paused) {
//             return
//         }
//         ball.move()
//         // 判断游戏失败
//         if (ball.y > paddle.y) {
//             var end = SceneEnd.new(game)
//             game.replaceScene(end)
//             return
//         }
//         //判断ball和rectangle相撞
//         if (paddle.collide(ball)) {
//             ball.rebound()
//         }
//         //判断ball和brick相撞
//         for (var i = 0; i < bricks.length; i++) {
//             var brick = bricks[i]
//             if (brick.collide(ball)) {
//                 ball.rebound()
//                 brick.break()
//                 //update score
//                 score += 100
//             }
//         }
//     }
//     //mouse event
//     var enableDrag = false
//     game.canvas.addEventListener('mousedown', function (event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         //检查鼠标是否点中ball
//         if (ball.hasPoint(x, y)) {
//             //设置拖拽状态
//             enableDrag = true
//         }
//     })
//     game.canvas.addEventListener('mousemove', function (event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         if (enableDrag) {
//             log(x, y, 'drag')
//             ball.x = x
//             ball.y = y
//         }
//     })
//     game.canvas.addEventListener('mouseup', function (event) {
//         enableDrag = false
//     })
//
//     return s
// }