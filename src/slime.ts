import { CollisionType, Color, Engine, vec } from "excalibur";
import { Enemy } from "./enemy";

export class Slime extends Enemy {
    public health: number = 2;
    public maxHealth: number = 2;
    public moveSpeed: number = 150;

    public INVINCIBILITY_TIME: number = 0;
    public DAMAGE: number = 2;

    constructor(pos: Vector) {
        super({
            pos: pos,
            width: 32,
            height: 32,
            color: Color.Green,
            collisionType: CollisionType.Active,
        })
    }

    override onInitialize(engine: Engine) {
        this.addTag("enemy");
        this.addTag("living");
    }

    override onPostUpdate(engine: Engine, dt: number): void {
        const wester = engine.currentScene.world.queryTags(["player"]).entities[0];

        if (wester) {
            this.target = wester.pos;
            this.moving = true;
        } else {
            this.moving = false;
        }

        this.moveTowardsTarget();
        this.testForDeath(engine);
    }
}