var Scene = function (game) {
    var s = {
        game: game,
    }
    //init
    var paddle = Paddle(game)
    var ball = Ball(game)
    var score = 0
    var bricks = loadLevel(game, 1)

    // var paused = false

    game.registerAction('a', function () {
        paddle.moveLeft()
    })
    game.registerAction('d', function () {
        paddle.moveRight()
    })
    game.registerAction('f', function () {
        ball.fire()
    })

    s.draw = function () {
        //draw 背景
        game.context.fillStyle = "white"
        game.context.fillRect(0, 0, 400, 300)
        //draw
        for (var i = 0; i < bricks.length; i++){
            if (bricks[i].alive){
                break;
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
    s.update = function () {
        if (window.paused) {
            return
        }
        ball.move()
        // 判断游戏失败
        if (ball.y > paddle.y) {
            var end = SceneEnd.new(game)
            game.replaceScene(end)
            return
        }
        //判断ball和rectangle相撞
        if (paddle.collide(ball)) {
            ball.rebound()
        }
        //判断ball和brick相撞
        for (var i = 0; i < bricks.length; i++) {
            var brick = bricks[i]
            if (brick.collide(ball)) {
                ball.rebound()
                brick.break()
                //update score
                score += 100
            }
        }
    }
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