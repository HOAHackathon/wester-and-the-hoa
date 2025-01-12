// main.ts
import { Color, DisplayMode, Engine } from 'excalibur';
import { Wester } from './wester';
import { Slime } from './slime';

const game = new Engine({
    backgroundColor: Color.fromHex("#54C0CA"),
    pixelArt: true,
    pixelRatio: 2,
    displayMode: DisplayMode.FitScreen
});

const wester = new Wester();

game.currentScene.add(wester);
game.currentScene.add(new Slime());

game.start();