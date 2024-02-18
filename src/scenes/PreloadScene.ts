import { Scene } from 'phaser';

import bg from '../assets/sprites/bg_top.png'
import button from '../assets/sprites/button.png'
import buttonActive from '../assets/sprites/button_active.png'
import hammer from '../assets/sprites/hammer.png'
import glow from '../assets/sprites/layer_glow.png'
import ruby from '../assets/sprites/ruby.png'
import prizeGlow from '../assets/sprites/prize_glow.png'
import robotIdle from '../assets/sprites/robot_1.png'
import robotActive from '../assets/sprites/robot_2.png'
import robotWin from '../assets/sprites/robot_3.png'
import scaleBackground from '../assets/sprites/scale.png'
import scaleSectors from '../assets/sprites/scale-1.png'
import measureMain from '../assets/sprites/measureMain.png'
import measure1 from '../assets/sprites/measure_1.png'
import measure2 from '../assets/sprites/measure_2.png'
import measure3 from '../assets/sprites/measure_3.png'
import measure4 from '../assets/sprites/measure_4.png'
import measure5 from '../assets/sprites/measure_5.png'
import measure6 from '../assets/sprites/measure_6.png'
import measure7 from '../assets/sprites/measure_7.png'
import measureFull from '../assets/sprites/measure_full.png'


const sprites = {
    background: bg,
    button,
    buttonActive,
    hammer,
    glow,
    ruby,
    prizeGlow,
    robotIdle,
    robotWin,
    robotActive,
    scaleBackground,
    scaleSectors,
    measureMain,
    measure1,
    measure2,
    measure3,
    measure4,
    measure5,
    measure6,
    measure7,
    measureFull,
}


export class preloadScene extends Scene {

    constructor() {
        super('PreloadScene');
    }

    preload(){
        Object.entries(sprites).forEach((val: any) => {
            this.load.image(val[0], val[1])
        })
    }

    create(){
        this.scene.start('MainScene')
    }
}