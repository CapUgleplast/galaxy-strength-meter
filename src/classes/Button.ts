import {GameObjects, Scene} from "phaser";

export class Button extends GameObjects.Container {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y);

        this.render()

        this.scene.add.existing(this)
    }

    private states = {
        idle: "button",
        active: "buttonActive"
    }

    private render(){
        this.scale = 0.5

        const button = this.scene.add.sprite(0, 0, this.states.idle)

        const hammer = this.scene.add.sprite(0, 0, 'hammer')
        hammer.setOrigin(0.5, 0.8)
        hammer.setPosition(180, 40)
        hammer.setAngle(-45)

        this.add([button, hammer])
    }

    reset(){
        const button = this.getAt(0) as GameObjects.Sprite
        const hammer = this.getAt(1)
        this.scene.tweens.add({
            targets: hammer,
            x: 180,
            y: 40,
            angle: -45,
            ease: 'Linear',
            duration: 200,
        })
        button.setTexture(this.states.idle)
    }

    hit(callback?: Function) {
        const button = this.getAt(0) as GameObjects.Sprite
        const hammer = this.getAt(1)
        this.scene.tweens.add({
            targets: hammer,
            x: '+=20',
            y: '-=150',
            angle: -120,
            ease: 'Linear',
            duration: 150,
            onComplete: () => {
                this.scene.tweens.add({
                    targets: hammer,
                    y: '-=160',
                    angle: -160,
                    ease: 'Linear',
                    duration: 300,
                    onComplete: () => {
                        this.scene.tweens.add({
                            targets: hammer,
                            x: '-=40',
                            y: '+=20',
                            angle: 0,
                            ease: 'Sine',
                            duration: 220,
                            onComplete: () => {
                                this.scene.tweens.add({
                                    targets: hammer,
                                    x: '-=20',
                                    y: '-=20',
                                    angle: 30,
                                    ease: 'Expo',
                                    duration: 600,
                                    onComplete: () => {
                                        this.scene.tweens.add({
                                            targets: hammer,
                                            x: '-=20',
                                            y: '+=180',
                                            angle: -90,
                                            ease: 'Linear',
                                            duration: 100,
                                            onComplete: () => {
                                                this.scene.tweens.add({
                                                    targets: hammer,
                                                    x: '-=0',
                                                    y: '+=20',
                                                    angle: -90,
                                                    ease: 'Bounce',
                                                    duration: 300,
                                                    onComplete: () => {
                                                        callback?.()
                                                    }
                                                })
                                                button.setTexture(this.states.active)

                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

}