import { CollisionType, Color, Engine, vec } from "excalibur";
import { Enemy, EnemyCollisionGroup } from "./enemy";

export class Slime extends Enemy {
    public health: number = 2;
    public maxHealth: number = 2;
    public moveSpeed: number = 15;

    public INVINCIBILITY_TIME: number = 0;
    public DAMAGE: number = 2;

    constructor() {
        super({
            pos: vec(200, 300),
            width: 16,
            height: 16,
            color: Color.Green,
            collisionType: CollisionType.Passive,
            collisionGroup: EnemyCollisionGroup
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

        this.moveTowardsTarget(dt);
        this.testForDeath(engine);
    }
}