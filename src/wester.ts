import { Assets, Sprite } from "pixi.js";

const texture = await Assets.load("/assets/bunny.png");
const wester = new Sprite(texture);

export default wester;