import { Scene } from 'phaser';
import config from "../assets/config/gameConfig"
import {Measure} from "@/classes/Measure";
import {Button} from "@/classes/Button";
import {Scale} from "@/classes/Scale";



export class mainScene extends Scene {
    constructor() {
        super('MainScene');
    }

    events = new Phaser.Events.EventEmitter()

    private measure = undefined as Measure | undefined
    private btn = undefined as Button | undefined

    setHit(val: any){
        this.btn?.hit(()=> this.measure?.setPercentage(val, (prize: boolean)=>this.game.events.emit('score', prize)))
    }

    newGame(){
        this.btn?.reset()
        this.measure?.reset()
    }

    create(){
        const bg = this.add.sprite(0, 0, 'background')
        bg.setOrigin(0, 0)
        bg.setPosition(0, 84)
        bg.scale = 0.5

        this.measure = new Measure(this,config.width / 2, config.height / 2 - 52)

        this.btn = new Button(this,config.width / 2, config.height / 2 + 142)

        this.setEvents()
    }

    setEvents() {
        this.events.on('hit', this.setHit, this)
        this.events.on('new-game', this.newGame, this)
        // this.input.on('pointerdown', this.eventOn, this)
    }
}