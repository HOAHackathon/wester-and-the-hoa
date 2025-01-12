// wester.ts

import { Actor, CollisionGroupManager, CollisionType, Color, Engine, Keys, vec, Vector } from "excalibur";
import { Bullet, getAngleTowards } from "./bullet";
import { EnemyCollisionGroup } from "./creature";

export const PlayerCollisionGroup = CollisionGroupManager.create('player');

export class Wester extends Actor {
    public moveSpeed: number = 30;
    public health: number = 10;
    public ammo: number = 6;
    public reloadTime: number = 0.5; // seconds

    constructor() {
        super({
            pos: vec(200, 300),
            width: 16,
            height: 16,
            color: Color.Yellow,
            collisionType: CollisionType.Passive,
            collisionGroup: PlayerCollisionGroup
        })
    }

    override onInitialize(engine: Engine) {
        const wester = this;
        wester.addTag("player");
        wester.addTag("living");

        engine.input.pointers.primary.on('down', function (evt) {
            const bullet = new Bullet(
                wester.pos,
                getAngleTowards(
                    wester.pos,
                    engine.input.pointers.primary.lastScreenPos
                ),
                PlayerCollisionGroup
            );

            engine.currentScene.add(bullet);
        });
    }

    override onPostUpdate(engine: Engine, dt: number): void {
        const moveVector: Vector = vec(
            (engine.input.keyboard.isHeld(Keys.A) ? -1 : 0) + (engine.input.keyboard.isHeld(Keys.D) ? 1 : 0),
            (engine.input.keyboard.isHeld(Keys.W) ? -1 : 0) + (engine.input.keyboard.isHeld(Keys.S) ? 1 : 0),
        ).normalize().scaleEqual(this.moveSpeed * dt);

        this.vel = moveVector;
    }
}