<script setup lang="ts">
import scaleBack from "@/assets/sprites/scale.png";
import scale from "@/assets/sprites/scale-1.png";
import {computed, ref, watch} from "vue";

const props = defineProps(['value'])

const body = ref(null as HTMLElement | null)

const fillerHeight = computed(()=>{
     return props.value * (body?.value?.clientHeight || 0)
})
</script>

<template>
  <div ref="body"
       class="scale"
       :style="`background-image: url(${scaleBack})`"
  >
    <div class="filler"
         :style="`height: ${fillerHeight}px`"
    >
      <div class="float"/>
    </div>
    <img class="metrics"
         :src="scale"/>
  </div>
</template>

<style scoped lang="scss">
.scale{
  display: flex;
  align-items: flex-end;
  background-size: cover;

  .background{
    position: absolute;
  }
  .metrics{
    position: relative;
    z-index: 1;
    width: inherit;
  }

  .filler{
    height: 0px;
    transition: height .5s linear;
    border-radius: 3px;
    position: absolute;
    margin-left: 6px;
    width: 38px;
    background: #00D355;

    .float{
      height: 3px;
      width: calc(100% + 8px);
      margin-left: -4px;
      background: white;
      border-radius: 2px;
    }
  }
}
</style>