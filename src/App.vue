<script setup lang="ts">
import uiComponent from './components/TheWelcome.vue'
import mainPhaser from "@/mainPhaser";
import Phaser from "phaser";
import {onMounted, reactive} from "vue";

const phaserVal = reactive({game: undefined as Phaser.Game})

onMounted(() => {
  phaserVal.game = new Phaser.Game(mainPhaser)
})

const callPhaser = (val: string) => {
  phaserVal.game.scene.getScenes(true)[0].events.emit(val)
}


</script>

<template>
  <div class="wrapper">
    <uiComponent class="ui"
                 @phaserEvent="callPhaser" />
    <div id="game"/>
  </div>
</template>

<style lang="scss" scoped>
.ui{
  position: absolute;
  aspect-ratio: 360 / 640;
  height: 100%;
  display: flex;
  align-items: flex-end;
}
</style>
