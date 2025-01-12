import { Dict } from "pixi.js";

const keys: Dict<boolean> = {};

addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

export function isKeyDown(key: string) {
    return keys[key];
}