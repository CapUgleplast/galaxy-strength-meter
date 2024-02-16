<script setup lang="ts">
  import Scale from "./ScaleComponent.vue";

  import type {PropType} from "vue";
  import {computed, onMounted, ref} from "vue";
  import RobotEmotions from "@/components/RobotEmotions.vue";
  import UserButtons from "@/components/UserButtons.vue";

  const emits = defineEmits(['phaserEvent'])

  const props = defineProps({
    gameState: {
      type: String as PropType<'default' | 'playing' | 'pending' | 'loose' | 'win'>,
      default: 'default'
    }
  })

  const userText = {
    default: 'Привет!\nпроверим твою силу!',
    prehit: 'Жми на кнопку\nв нужный момент!',
    fail: 'Неплохо!\nПопробуй ещё раз.',
    success: 'ВОТ ЭТО СИЛА!\nТы выбил главный приз!\n<span style="color: #FF4646; font-weight: 700;">Рубин</span>'
  } as any

  const scaleValue = ref(0)
  const loop = ref(undefined as number | undefined)


  const start = () => {
    loop.value = setInterval(() => {
      scaleValue.value = Math.random()
    }, 500)
  }

  const stop = () => {
    clearInterval(loop.value)
    loop.value = undefined
  }

  const reset = () => {
    stop()
    scaleValue.value = 0
  }

  const newGame = () => {
    if(scaleValue.value) reset()
    start()
    phaserEvent('new-game', undefined, 'playing')
  }

  const hit = () => {
    stop()
    phaserEvent('hit', scaleValue.value*100, 'pending')
  }

  const phaserEvent = (name: string, val?: any, stateReturn?: string) => {
    emits('phaserEvent', name, val, stateReturn)
  }

  const stateFormatter = computed(()=>{
    return [
        {
          type: 'default',
          emotion: 0,
          showButtons: true,
          text: 'default'
        },
        {
          type: 'playing',
          emotion: 0,
          showButtons: true,
          text: 'prehit'
        },
        {
          type: 'pending',
          emotion: 0,
          showButtons: false,
          text: 'default'
        },
        {
          type: 'loose',
          emotion: 1,
          showButtons: true,
          text: 'fail'
        },
        {
          type: 'win',
          emotion: 2,
          showButtons: true,
          text: 'success'
        },
    ].filter((val: any) => val.type == props.gameState)
  })

</script>

<template>
  <div class="wrapper">
    <Scale  class="scale"
            :value="scaleValue"
    />

    <user-buttons v-if="stateFormatter[0].showButtons"
                  class="user-buttons"
                  :new-game="newGame"
                  :hit="hit"
                  :text="userText[stateFormatter[0].text]"
                  :show-hit="loop"
    />

    <robot-emotions class="robot"
                    :value="stateFormatter[0].emotion"
    />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper{
    padding: 0 6px 27px 23px;
    justify-content: space-between;

    .robot{
      width: 84px;
      height: 86px;
    }

    .scale{
      width: 48px;
      margin-right: 23px;
    }

  }

</style>
