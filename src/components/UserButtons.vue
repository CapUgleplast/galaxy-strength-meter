<script setup lang="ts">

const props = defineProps(['newGame', 'hit', 'text', 'showHit'])


</script>

<template>
  <div class="body">
    <div class="text"
         v-html="text"
    />
    <div class="buttons">
      <button v-if="!showHit"
              class="new-game"
              v-text="'Новая игра'"
              @click="newGame"/>

      <button v-else
              class="hit"
              v-text="'Удар!'"
              @click="hit"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body{
  display: flex;
  flex-direction: column;
  align-items: center;

  .text{
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    color: white;
    white-space: pre-wrap;
    width: 100%;
    margin-bottom: 13px;
  }

  button{
    padding: 10px;
    border-radius: 4px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    width: 172px;

    &.new-game{
      background: #FF42E0;
      color: white;
      border: 1px solid white;
    }

    &.hit{
      background: #FFDF35;
      color: #BB20A2;
      border: 1px solid #BB20A2;
    }

  }
}
</style>