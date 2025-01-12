import { Actor, Color, Engine, vec, Vector } from "excalibur";
import { getAngleTowards } from "./bullet";
import { Creature } from "./creature";
import { Wester } from "./wester";

export class Slime extends Creature {
    public moveSpeed: number = 12;
    public health: number = 2;
    public target: Vector;
    public moving: boolean;

    constructor() {
        super({
            pos: vec(200, 300),
            width: 16,
            height: 16,
            color: Color.Green
        })
    }
    
    override onInitialize(engine: Engine) {
        
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
    }
}