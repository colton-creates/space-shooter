controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 9 9 9 9 . . . 
        . . . . . . 9 9 9 9 9 5 9 . . . 
        . 9 9 9 9 9 9 9 9 5 5 9 9 . . . 
        . . . . . . . 9 9 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 9 9 9 9 . . . 
        . . . . . . 9 9 9 9 9 5 9 . . . 
        . 9 9 9 9 9 9 9 9 5 5 9 9 . . . 
        . . . . . . . 9 9 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 9 9 9 9 . . . 
        . . . . . . 9 9 9 9 9 5 9 . . . 
        . 9 9 9 9 9 9 9 9 5 5 9 9 . . . 
        . . . . . . . 9 9 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
let bad_ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect(500)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 6 4 4 4 
    . . . . . . . . . . 6 6 6 6 6 . 
    . . . . . . . . 6 6 6 6 6 . . . 
    . . . . . . . 6 6 6 6 6 6 . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . 8 8 8 8 8 8 8 8 8 a . . . . 
    6 6 6 6 6 6 6 6 6 6 a a a . . . 
    . 6 6 6 6 6 6 6 6 6 a a a . . . 
    . . 8 8 8 8 8 8 8 8 8 a . . . . 
    . . . . . 6 6 6 6 6 6 6 6 6 . . 
    . . . . . . . . . . 6 6 6 6 6 . 
    . . . . . . . . . . . . . 4 4 4 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(200, function () {
    bad_ship = sprites.create(img`
        . . . . . . . . 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 2 2 2 . 
        8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . 8 8 8 8 8 2 2 2 . 
        . . . . 8 8 8 8 8 8 8 8 2 2 2 . 
        . . . . . 8 8 8 8 8 8 8 2 2 2 . 
        8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . 2 2 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bad_ship.x = scene.screenWidth()
    bad_ship.vx = -20
    bad_ship.y = randint(10, scene.screenHeight() - 10)
})
