import { Actor, CollisionGroupManager, Vector } from "excalibur";
import { getAngleTowards } from "./bullet";

export const EnemyCollisionGroup = CollisionGroupManager.create('enemy');

export abstract class Creature extends Actor {
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
}