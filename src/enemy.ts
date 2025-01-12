import { Actor, CollisionGroupManager, Engine, Vector } from "excalibur";
import { getAngleTowards } from "./bullet";

export const EnemyCollisionGroup = CollisionGroupManager.create('enemy');

export abstract class Enemy extends Actor {
    public moveSpeed: number;
    public health: number;
    public target: Vector;
    public moving: boolean;

    public moveTowardsTarget(dt: number) {
        if (this.moving) {
            this.vel = Vector.fromAngle(getAngleTowards(this.pos, this.target))
                .scaleEqual(this.moveSpeed * dt);
        }
    }

    public testForDeath(engine: Engine) {
        if (this.health <= 0) {
            engine.currentScene.remove(this);
        }
    }
}