let projectile: Sprite = null
game.onUpdateInterval(300, function () {
    projectile = sprites.createProjectileFromSide(simplified.chooseRandomImage(assets.image`Snowflake1`, assets.image`snowflake2`), randint(-125, 125), 0)
    projectile.y = randint(30, 80)
})
