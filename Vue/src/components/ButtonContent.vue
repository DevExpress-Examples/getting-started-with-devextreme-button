<script setup lang="ts">
import DxButton from 'devextreme-vue/button';
import type { DxButtonTypes } from 'devextreme-vue/button';
import notify from 'devextreme/ui/notify';

function showMessage(e: DxButtonTypes.ClickEvent): void {
  notify(`The button ${e.component.option('text')} was clicked`);
}
</script>

<template>
  <div id="container">
    <DxButton
      text="Click me!"
      @click="showMessage"
      styling-mode="outlined"
      type="success"
      icon="comment"
    />
  </div>
</template>

<style scoped>
#container {
  width: 400px;
}
</style>
