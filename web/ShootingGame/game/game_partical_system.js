/**
 * Created by Administrator on 2017/9/10 0010.
 */
class GameParticle extends GameImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {

    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.vy += 2
    }
    update() {
        this.x += this.vx
        this.y += this.vy
    }
    draw() {
        this.game.texture.draw()
    }
}

class GameParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.x = 150
        this.y = 200
        this.numberOfParticles = 200
        this.particles = []
    }
    update() {
        // log('update partical', this.game)
        //添加小火花
        if (this.particles.length < this.numberOfParticles) {
            var p = GameParticle.new(this.game)
            //设施初始坐标
            var vx = randomBetween(-10, 10)
            var vy = randomBetween(-10, 10)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        //更新所有的小火花
        for (var p of this.particles) {
            p.update()
        }
    }
    draw() {
        // log('draw particle', this.game)
        for (var p of this.particles) {
            log('draw1', p)
            p.draw()
        }
    }

}