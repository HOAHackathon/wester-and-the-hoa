// main.ts
import { Color, DisplayMode, Engine, Resolution, vec, Vector } from 'excalibur';
import { Wester } from './wester';
import { Slime } from './slime';

const game = new Engine({
    backgroundColor: Color.fromHex("#cfc7a1"),
    pixelArt: true,
    snapToPixel: true,
    pixelRatio: 1,
    displayMode: DisplayMode.FitScreen,
    //maxFps: 10
});

const wester = new Wester(game);

game.currentScene.add(wester);

for (let i = 0; i < 20; i++) {
    
    game.currentScene.add(new Slime(
        Vector.fromAngle(Math.random()*Math.PI*2).scaleEqual(800+Math.random()*600).add(
            vec(game.screen.width/2, game.screen.height/2)
        )
    ));
} 

game.start();