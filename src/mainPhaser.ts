import Phaser from "phaser";

import { preloadScene } from "@/scenes/PreloadScene";
import { mainScene } from "@/scenes/MainScene";
import gameConfig from '@/assets/config/gameConfig.js'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: gameConfig.width,
    height: gameConfig.height,
    parent: gameConfig.parent,
    backgroundColor: gameConfig.backgroundColor,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        preloadScene,
        mainScene,
    ],
};

export default config;