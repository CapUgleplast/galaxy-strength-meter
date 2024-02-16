<script setup lang="ts">
import robot1 from "@/assets/sprites/robot_1.png"
import robot2 from "@/assets/sprites/robot_2.png"
import robot3 from "@/assets/sprites/robot_3.png"

const props = defineProps({
  value: {
    type: Number,
    default: 0
  }
})

const emos = [robot1, robot2, robot3]
</script>

<template>
  <div class="robot">
    <img :src="emos[value]"/>
  </div>
</template>

<style scoped lang="scss">
  img{
    width: inherit;
    height: inherit;
  }
</style>