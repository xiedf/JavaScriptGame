/**
 * Created by Administrator on 2017/9/4 0004.
 */
var main = function () {
    var images = {
        ball: 'BlockGame/img/ball.png',
        brick: 'BlockGame/img/brick.png',
        rectangle: 'BlockGame/img/rectangle.png',
        succeed: 'BlockGame/img/succeed.png',
    }

    var game = Game(images, function (game) {
        var score = 0
        var enableDebugMode = function (enable) {
            if(!enable){
                return
            }
            window.addEventListener('keydown', function (event) {
                var k = event.key
                if(k == 'p'){
                    paused = !paused
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
        enableDebugMode(true)
        var paddle = Paddle(game)
        var ball = Ball(game)
        var succeed = Succeed(game)

        var loadLevel = function (n) {
            n -= 1
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

        var bricks = loadLevel(1)
        var paused = false

        game.registerAction('a', function () {
            paddle.moveLeft()
        })
        game.registerAction('d', function () {
            paddle.moveRight()
        })
        game.registerAction('f', function () {
            ball.fire()
        })



        game.update = function () {
            if (paused) {
                return
            }
            ball.move()
            //判断ball和rectangle相撞
            if (paddle.collide(ball)) {
                ball.rebound()
            }
            //判断ball和brick相撞
            for (var i = 0; i < bricks.length; i++){
                var brick = bricks[i]
                if (brick.collide(ball)){
                    ball.rebound()
                    brick.break()
                    //update score
                    score += 100
                }
            }

        }
        game.draw = function () {
            //draw
            for (var i = 0; i < bricks.length; i++){
                if (bricks[i].alive){
                    break;
                }
                if(i == bricks.length - 1){
                    game.drawImage(succeed)
                }
            }

            game.drawImage(paddle)
            game.drawImage(ball)

            for (var i = 0; i < bricks.length; i++){
                var brick = bricks[i]
                if(brick.alive){
                    game.drawImage(brick)
                }
            }
            //draw labels
            game.context.fillText('score:' + score, 10, 270)
        }
    })

}

main()