import { Application, Point } from "pixi.js";
import wester from "./wester.ts";
import { isKeyDown } from "./iskeydown.ts";

(async () => {
  // Create a new application
  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  wester.anchor.set(0.5);
  wester.position.set(app.screen.width / 2, app.screen.height / 2);
  wester.eventMode = 'static';
  wester.cursor = 'pointer';

  // Add the bunny to the stage
  app.stage.addChild(wester);

  app.ticker.add((time) => {
    const MOVEMENT_SPEED = 0;

    var moveVector: Point = new Point(
      (isKeyDown("a") ? -1 : 0) + (isKeyDown("d") ? 1 : 0),
      (isKeyDown("w") ? -1 : 0) + (isKeyDown("s") ? 1 : 0),
    )

    moveVector.normalize();
    //moveVector.multiply(new Point(MOVEMENT_SPEED * time.deltaTime));
    //wester.position.add(moveVector);

    console.log(wester.position);
  })

})();
