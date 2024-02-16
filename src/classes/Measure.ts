import {GameObjects, Scene} from "phaser";

export class Measure extends GameObjects.Container {

    private measureGradesAnim = ["measure1", "measure2", "measure3", "measure4", "measure5", "measure6", "measure7", "measureFull"]
    private animSprite = undefined as GameObjects.Sprite | undefined

    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y);

        this.render()

        this.scene.add.existing(this)
    }

    private render(){
        const idle = this.scene.add.sprite(0, 0, 'measureMain')

        const glow = this.scene.add.sprite(0, 0, 'glow')
        glow.scale = 0.5
        glow.alpha = 0
        const ruby = this.scene.add.sprite(0, 0, 'ruby')
        const prizeCont = this.scene.add.container(0, -120, [glow, ruby])

        const animSprite = this.scene.add.sprite(0, -8, 'measure1')
        animSprite.alpha = 0

        this.add([idle, animSprite, prizeCont])
    }

    private setAnimation(sprite: GameObjects.Sprite, end?: number){
        sprite.anims.create({
            key: 'MeasureAnim',
            frames: this.measureGradesAnim.slice(0, end).map(function (image) {
                return { key: image };
            }),
            frameRate: 5,
            repeat: 0
        });
    }

    reset(){
        const animSprite = this.getAt(1) as GameObjects.Sprite
        animSprite.anims?.get('MeasureAnim')?.destroy()
        animSprite.alpha = 0
        const glow = this.getAt(2)?.getAt(0) as GameObjects.Sprite
        glow.alpha = 0
    }

    setPercentage(percent: number, callback?: Function){
        this.reset()

        const animSprite = this.getAt(1) as GameObjects.Sprite
        const score= Math.ceil(percent * this.measureGradesAnim.length / 100)

        if(score == 0){
            callback?.(false)
            return
        }

        this.setAnimation(animSprite, score)
        animSprite.alpha = 1
        animSprite.anims.play('MeasureAnim').on('animationcomplete', () => {
            if(score == this.measureGradesAnim.length){
                const glow = this.getAt(2)?.getAt(0) as GameObjects.Sprite
                this.scene.tweens.add({
                    targets: glow,
                    angle: -360,
                    ease: 'Linear',
                    duration: 10000,
                })
                glow.alpha = 1
                console.log(score)
                callback?.(true)
                return
            }
            console.log('falsss')
            callback?.(false)
        })

    }
}