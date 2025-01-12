// wester.ts

import { Camera, CollisionGroupManager, CollisionType, Color, Engine, Keys, Timer, vec, Vector } from "excalibur";
import { Bullet, getAngleTowards } from "./bullet";
import { LivingEntity } from "./livingentity";

export const PlayerCollisionGroup = CollisionGroupManager.create('player');

export class Wester extends LivingEntity {
    public health: number = 10;
    public maxHealth: number = 10;
    public moveSpeed: number = 300;

    public ammo: number = 6;
    public maxAmmo: number = 6;
    public canShoot: boolean = true;

    public INVINCIBILITY_TIME = 1000;
    public GUN_COOLDOWN_TIME = 0.2 * 1000;

    constructor(engine: Engine) {
        super({
            pos: vec(engine.screen.width / 2, engine.screen.height / 2),
            width: 32,
            height: 32,
            color: Color.Yellow,
            collisionType: CollisionType.Passive,
            collisionGroup: PlayerCollisionGroup
        })
    }

    public shootGun(engine: Engine) {
        if (this.canShoot) {
            const gunTimer: Timer = new Timer({
                fcn: () => this.canShoot = true,
                repeats: false,
                interval: this.GUN_COOLDOWN_TIME,
            })

            const bullet = new Bullet(
                this.pos,
                getAngleTowards(
                    this.pos,
                    engine.input.pointers.primary.lastScreenPos
                ),
                PlayerCollisionGroup
            );

            engine.currentScene.add(bullet);
            engine.currentScene.add(gunTimer);

            this.canShoot = false;
            gunTimer.start();
        }
    }

    override onInitialize(engine: Engine) {
        const wester = this;
        wester.addTag("player");
        wester.addTag("living");

        engine.input.pointers.primary.on('down', function (evt) {
            wester.shootGun(engine);
        });

        this.on('collisionstart', (event) => {
            if ('DAMAGE' in event.other.owner) {
                wester.dealDamage(engine, event.other.owner.DAMAGE);
            }
        })
    }

    override onPostUpdate(engine: Engine, dt: number): void {
        const moveVector: Vector = vec(
            (engine.input.keyboard.isHeld(Keys.A) ? -1 : 0) + (engine.input.keyboard.isHeld(Keys.D) ? 1 : 0),
            (engine.input.keyboard.isHeld(Keys.W) ? -1 : 0) + (engine.input.keyboard.isHeld(Keys.S) ? 1 : 0),
        ).normalize().scaleEqual(this.moveSpeed);

        this.vel = moveVector;
    }
}