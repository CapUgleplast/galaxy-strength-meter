<script setup lang="ts">
import uiComponent from './components/indexUI.vue'
import mainPhaser from "@/mainPhaser";
import Phaser from "phaser";
import {onMounted, reactive, ref} from "vue";

const phaserVal = reactive({game: undefined as Phaser.Game | undefined})

const state = ref('default' as 'default' | 'playing' | 'pending' | 'loose' | 'win')

onMounted(() => {
  phaserVal.game = new Phaser.Game(mainPhaser)
  phaserVal.game.events.on('score', getScore)
})

const callPhaser = (name: string, val?: any, stateReturn?: 'default' | 'playing' | 'pending' | 'loose' | 'win') => {
  if(stateReturn) state.value = stateReturn

  phaserVal.game?.scene?.getScenes(true)[0].events.emit(name, val)
}

const getScore = (val: any) => {
  if(val) {
    state.value = 'win'
    return
  }
  state.value = 'loose'
}

</script>

<template>
  <div class="root">
    <uiComponent class="ui"
                 :style="`height: ${mainPhaser.height}px;`"
                 :game-state="state"
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
