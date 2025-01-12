import { Actor, Color, Engine, Entity, Timer, vec, Vector } from "excalibur";

export class Bullet extends Actor {
    public BULLET_SPEED: number = 1000;
    public DAMAGE = 1;

    constructor(pos: Vector, rotation: number, collisionGroup) {
        super({
            width: 8,
            height: 8,
            color: Color.White,
            rotation: rotation,
            pos: pos,
            collisionGroup: collisionGroup
        })
    }

    override onInitialize(engine: Engine) {
        const bullet = this;

        // bullet despawn timer
        const timer = new Timer({
            fcn: () => {
                engine.currentScene.remove(this)
            },
            repeats: false,
            interval: 2000
        })

        engine.currentScene.add(timer);
        timer.start();

        // bullets damage entities that are not the creator
        this.on('collisionstart', (event) => {
            if ('health' in event.other.owner) {
                event.other.owner.health -= bullet.DAMAGE
                engine.currentScene.remove(this)
            }
        })
    }

    override onPostUpdate(engine: Engine, dt: number): void {
        this.vel = Vector.fromAngle(this.rotation).scaleEqual(this.BULLET_SPEED);
    }
}

export function getAngleTowards(from: Vector, to: Vector) {
    return Math.atan((to.y - from.y) / (to.x - from.x)) + (to.x > from.x ? 2 * Math.PI : Math.PI) || 0;
}