import { Actor, Engine, Timer } from "excalibur";

export abstract class LivingEntity extends Actor {
    public health: number;
    public maxHealth: number;
    public moveSpeed: number;
    public invincible: boolean = false;

    public INVINCIBILITY_TIME: number;

    public dealDamage(engine: Engine, amt: number) {
        if (!this.invincible) {
            this.health -= amt;

            if (this.INVINCIBILITY_TIME > 0) {
                this.invincible = true;

                const invincibilityTimer: Timer = new Timer({
                    fcn: () => this.invincible = false,
                    repeats: false,
                    interval: this.INVINCIBILITY_TIME,
                })

                engine.currentScene.add(invincibilityTimer);
                invincibilityTimer.start();
            }
        }
    }

    public heal(amt: number) {
        this.health = Math.min(this.health + amt, this.maxHealth);
    }
}