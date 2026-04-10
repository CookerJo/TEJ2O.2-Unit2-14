/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah R
 * Created on: Apr 2026
 * This program will make a circle moveing to the right around on button pressed a, the opposite for button b  
*/

// variable
let sprite: game.LedSprite = null
let loopCounterX = 0
let loopCounterY
  // icon/clearScreen
  basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.clearScreen()

  //Button a
  input.onButtonPressed(Button.A, function () {
  //start
  basic.clearScreen()
  loopCounterX = 0
  sprite = game.createSprite(0, 0)
  //
  while (loopCounterX <= 5) {
    sprite.set(LedSpriteProperty.X, loopCounterX)
    sprite.set(LedSpriteProperty.Y, loopCounterX)
    loopCounterX = loopCounterX += 1
    basic.pause(500)
  }
  while (loopCounterX <= 4) {
    sprite.set(LedSpriteProperty.X, loopCounterX)
    sprite.set(LedSpriteProperty.Y, loopCounterX)
    loopCounterX = loopCounterX += 1
    basic.pause(500)
  }
  while (loopCounterX <= 3) {
    sprite.set(LedSpriteProperty.X, loopCounterX)
    sprite.set(LedSpriteProperty.Y, loopCounterX)
    loopCounterX = loopCounterX += 1
    basic.pause(500)
  }
  while (loopCounterX <= 2) {
    sprite.set(LedSpriteProperty.X, loopCounterX)
    sprite.set(LedSpriteProperty.Y, loopCounterX)
    loopCounterX = loopCounterX += 1
    basic.pause(500)
  }
  while (loopCounterX <= 1) {
    sprite.set(LedSpriteProperty.X, loopCounterX)
    sprite.set(LedSpriteProperty.Y, loopCounterX)
    loopCounterX = loopCounterX += 1
    basic.pause(500)
  }

  // end remove the dots and show a happy face
  sprite.delete()
    basic.showIcon(IconNames.Happy)
})
