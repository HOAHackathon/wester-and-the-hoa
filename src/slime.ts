import { CollisionType, Color, Engine, Entity, vec } from "excalibur";
import { Enemy, EnemyCollisionGroup } from "./enemy";

export class Slime extends Enemy {
    public moveSpeed: number = 12;
    public health: number = 2;

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
        const wester: Entity = engine.currentScene.world.queryTags(["player"]).entities[0];

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