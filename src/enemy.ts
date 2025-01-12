import { Engine, Vector } from "excalibur";
import { getAngleTowards } from "./bullet";
import { LivingEntity } from "./livingentity";

export abstract class Enemy extends LivingEntity {
    public target: Vector;
    public moving: boolean;
    public DAMAGE: number;

    public testForDeath(engine: Engine) {
        if (this.health <= 0) {
            engine.currentScene.remove(this);
        }
    }

    public moveTowardsTarget() {
        if (this.moving) {
            this.vel = Vector.fromAngle(getAngleTowards(this.pos, this.target))
                .scaleEqual(this.moveSpeed);
        }
    }
}