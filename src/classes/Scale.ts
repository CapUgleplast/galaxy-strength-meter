import {GameObjects, Scene} from "phaser";

export class Scale extends GameObjects.Container {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y);

        this.render()

        this.scene.add.existing(this)
    }


    private sprites = {
        background: "scaleBackground",
        metrics: "scaleSectors"
    }

    private render(){
        this.scale = 0.5

        const bg = this.scene.add.sprite(0, 0, this.sprites.background)
        const metrics = this.scene.add.sprite(0, 0, this.sprites.metrics)

        const filler = this.scene.add.graphics();
        filler.fillStyle(0x00D355, 1);
        filler.fillRoundedRect(-38, -147, metrics.width - 20, 4, 8);
        filler.setScale(1, -1)

        const float = this.scene.add.graphics();
        float.fillStyle(0xFFFFFF, 1);
        float.fillRoundedRect(-47, -147, metrics.width, 3, 1.5);
        float.setAngle(180)

        this.add([bg, filler, metrics, float])
        this.goRand()
    }

    goRand(){
        const filler = this.getAt(1) as Phaser.GameObjects.Graphics
        const float = this.getAt(3) as Phaser.GameObjects.Graphics
        const maxHeight = this.getAt(0).heigth
        const width = this.getAt(0).width

        /*let tween = this.scene.tweens.add({
            targets: filler, // объект, который анимируется
            scaleY: 500, // конечная высота прямоугольника
            duration: 500, // длительность анимации в миллисекундах
            ease: 'Linear', // тип анимации (легкая, в данном случае)
            yoyo: true,
            repeat: -1 // количество повторов анимации (-1 — бесконечно)
        });*/

        /*this.scene.time.addEvent({
            delay: 1000,
            callback: () => {
                // Генерируем случайное значение
                const value = Phaser.Math.RND.between(0, maxHeight);

                // Выводим значение в консоль
                console.log('Случайное значение:', value, filler, float);



                    float.fillRoundedRect(-47, maxHeight-147, width, 3, 1.5);
            },

            callbackScope: this,
            loop: true // Зацикливаем таймер, чтобы он вызывался бесконечно
        });*/

    }
}